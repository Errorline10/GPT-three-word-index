import { useState } from 'react';
import type { FormEvent } from 'react';

import {
  AutocompleteInput,
  type AutocompleteSelection,
} from './components/AutocompleteInput/AutocompleteInput';
import styles from './App.module.css';

const initialWords: AutocompleteSelection[] = ['human', 'first', 'space'].map((word) => ({
  word,
  dictionaryIndex: null,
}));

function buildAddress(words: AutocompleteSelection[]): string | null {
  const cleanWords = words.map(({ word }) => word.trim());

  if (cleanWords.some((word) => word.length === 0)) {
    return null;
  }

  return `/${cleanWords.map(encodeURIComponent).join('/')}/`;
}

export default function App() {
  const [words, setWords] = useState(initialWords);
  const [address, setAddress] = useState(buildAddress(initialWords));
  const [message, setMessage] = useState('Prototype address preview');

  function updateWord(index: number, selection: AutocompleteSelection) {
    setWords((currentWords) =>
      currentWords.map((word, wordIndex) => (wordIndex === index ? selection : word)),
    );
  }

  function previewAddress(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextAddress = buildAddress(words);

    if (!nextAddress) {
      setAddress(null);
      setMessage('Enter all three words to preview an address.');
      return;
    }

    setAddress(nextAddress);
    setMessage('Prototype address preview');
  }

  return (
    <div className={styles.pageShell}>
      <header className={styles.siteHeader}>
        <a className={styles.brand} href="#top" aria-label="Three Word Index home">
          <span className={styles.brandMark} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Three Word Index</span>
        </a>

        <span className={styles.status}>React + TypeScript foundation</span>
      </header>

      <main id="top" className={styles.main}>
        <section className={styles.hero} aria-labelledby="page-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Human-oriented public publishing</p>
            <h1 id="page-title">A page begins with three words.</h1>
            <p className={styles.lede}>
              This clean application shell is the starting point for Three Word Index routing,
              manifests, content blocks, and browser-side sequence experiments.
            </p>
          </div>

          <form className={styles.addressBuilder} onSubmit={previewAddress}>
            <fieldset>
              <legend>Preview a three-word address</legend>
              <div className={styles.wordFields}>
                {words.map((selection, index) => (
                  <AutocompleteInput
                    id={`word-${index + 1}`}
                    key={index}
                    label={`Word ${index + 1}`}
                    selection={selection}
                    onChange={(nextSelection) => updateWord(index, nextSelection)}
                  />
                ))}
              </div>
            </fieldset>

            <button className={styles.submitButton} type="submit">
              Build preview
            </button>

            <div className={styles.addressOutput} aria-live="polite">
              <span>{message}</span>
              <strong>{address ?? 'Address incomplete'}</strong>
            </div>
          </form>
        </section>

        <section className={styles.foundation} aria-labelledby="foundation-title">
          <div>
            <p className={styles.eyebrow}>Repository foundation</p>
            <h2 id="foundation-title">Clean boundaries before features.</h2>
          </div>

          <div className={styles.cardGrid}>
            <article>
              <h3>React application</h3>
              <p>
                Browser-first TypeScript code lives under <code>src/</code> and builds with Vite.
              </p>
            </article>
            <article>
              <h3>Lookup tables</h3>
              <p>
                One canonical dictionary asset is isolated under <code>lookup-tables/</code>.
              </p>
            </article>
            <article>
              <h3>Migration sandbox</h3>
              <p>
                The legacy large-number arithmetic remains available without entering production
                code.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.nextStep} aria-labelledby="next-step-title">
          <p className={styles.eyebrow}>Next measurable prototype</p>
          <h2 id="next-step-title">Define one directory manifest and one content block.</h2>
          <p>
            The autocomplete now exercises the canonical dictionary in the browser. Production
            normalization, chunking, sequence generation, and route semantics remain explicit
            design decisions.
          </p>
        </section>
      </main>
    </div>
  );
}
