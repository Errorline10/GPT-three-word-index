import { useId, useRef, useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';

import { getDictionarySuggestions } from '../../lib/dictionary';
import type { DictionarySuggestion } from '../../lib/dictionary';
import styles from './AutocompleteInput.module.css';

export interface AutocompleteSelection {
  word: string;
  dictionaryIndex: number | null;
}

interface AutocompleteInputProps {
  id: string;
  label: string;
  selection: AutocompleteSelection;
  onChange: (selection: AutocompleteSelection) => void;
  placeholder?: string;
}

export function AutocompleteInput({
  id,
  label,
  selection,
  onChange,
  placeholder = 'Type at least two letters',
}: AutocompleteInputProps) {
  const generatedId = useId();
  const listboxId = `${id}-${generatedId}-suggestions`;
  const requestVersion = useRef(0);
  const [suggestions, setSuggestions] = useState<DictionarySuggestion[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);

  async function refreshSuggestions(nextValue: string) {
    const normalizedValue = nextValue.trimStart();
    const currentRequest = ++requestVersion.current;

    if (normalizedValue.length < 2) {
      setSuggestions([]);
      setHighlightedIndex(-1);
      setIsOpen(false);
      setIsLoading(false);
      setLoadError(false);
      return;
    }

    setIsLoading(true);
    setLoadError(false);

    try {
      const nextSuggestions = await getDictionarySuggestions(normalizedValue);

      if (requestVersion.current !== currentRequest) {
        return;
      }

      setSuggestions(nextSuggestions);
      setHighlightedIndex(nextSuggestions.length > 0 ? 0 : -1);
      setIsOpen(nextSuggestions.length > 0);
    } catch {
      if (requestVersion.current !== currentRequest) {
        return;
      }

      setSuggestions([]);
      setHighlightedIndex(-1);
      setIsOpen(false);
      setLoadError(true);
    } finally {
      if (requestVersion.current === currentRequest) {
        setIsLoading(false);
      }
    }
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const nextValue = event.target.value;

    onChange({ word: nextValue, dictionaryIndex: null });
    void refreshSuggestions(nextValue);
  }

  function selectSuggestion(suggestion: DictionarySuggestion) {
    requestVersion.current += 1;
    onChange({ word: suggestion.word, dictionaryIndex: suggestion.index });
    setSuggestions([]);
    setHighlightedIndex(-1);
    setIsOpen(false);
    setIsLoading(false);
    setLoadError(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
      return;
    }

    if (suggestions.length === 0) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      setHighlightedIndex((currentIndex) =>
        currentIndex < suggestions.length - 1 ? currentIndex + 1 : 0,
      );
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIsOpen(true);
      setHighlightedIndex((currentIndex) =>
        currentIndex > 0 ? currentIndex - 1 : suggestions.length - 1,
      );
      return;
    }

    if (event.key === 'Enter' && isOpen && highlightedIndex >= 0) {
      event.preventDefault();
      selectSuggestion(suggestions[highlightedIndex]);
    }
  }

  const matchedLength = selection.word.trimStart().length;
  const activeOptionId =
    isOpen && highlightedIndex >= 0
      ? `${listboxId}-option-${highlightedIndex}`
      : undefined;

  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        <span>{label}</span>
      </label>

      <div className={styles.control}>
        <input
          id={id}
          value={selection.word}
          onChange={handleInput}
          onFocus={() => void refreshSuggestions(selection.word)}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsOpen(false)}
          autoComplete="off"
          placeholder={placeholder}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={isOpen ? listboxId : undefined}
          aria-activedescendant={activeOptionId}
        />

        {isOpen && (
          <div id={listboxId} className={styles.suggestions} role="listbox">
            {suggestions.map((suggestion, index) => (
              <button
                id={`${listboxId}-option-${index}`}
                key={`${suggestion.index}-${suggestion.word}`}
                className={`${styles.option} ${
                  index === highlightedIndex ? styles.selected : ''
                }`}
                type="button"
                role="option"
                aria-selected={index === highlightedIndex}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => selectSuggestion(suggestion)}
              >
                <span className={styles.word}>
                  <strong>{suggestion.word.slice(0, matchedLength)}</strong>
                  {suggestion.word.slice(matchedLength)}
                </span>
                <span className={styles.position}>#{suggestion.index}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.meta} aria-live="polite">
        {isLoading && <span>Loading dictionary…</span>}
        {loadError && <span>Dictionary could not be loaded.</span>}
        {!isLoading && !loadError && selection.dictionaryIndex !== null && (
          <span>Dictionary position #{selection.dictionaryIndex}</span>
        )}
      </div>
    </div>
  );
}
