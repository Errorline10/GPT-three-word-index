export interface DictionarySuggestion {
  word: string;
  index: number;
}

interface LoadedDictionary {
  words: string[];
  positionsByFirstCharacter: Map<string, number[]>;
}

let dictionaryPromise: Promise<LoadedDictionary> | null = null;

async function loadDictionary(): Promise<LoadedDictionary> {
  if (!dictionaryPromise) {
    dictionaryPromise = import('../../lookup-tables/english-dictionary.txt?raw').then(
      ({ default: dictionaryText }) => {
        const words = dictionaryText
          .split(/\r?\n/)
          .map((word) => word.trim())
          .filter(Boolean);
        const positionsByFirstCharacter = new Map<string, number[]>();

        words.forEach((word, index) => {
          const firstCharacter = word[0]?.toLowerCase();

          if (!firstCharacter) {
            return;
          }

          const positions = positionsByFirstCharacter.get(firstCharacter) ?? [];
          positions.push(index);
          positionsByFirstCharacter.set(firstCharacter, positions);
        });

        return { words, positionsByFirstCharacter };
      },
    );
  }

  return dictionaryPromise;
}

export async function getDictionarySuggestions(
  query: string,
  limit = 12,
): Promise<DictionarySuggestion[]> {
  const normalizedQuery = query.trimStart().toLowerCase();

  if (normalizedQuery.length < 2) {
    return [];
  }

  const dictionary = await loadDictionary();
  const candidatePositions =
    dictionary.positionsByFirstCharacter.get(normalizedQuery[0]) ?? [];
  const suggestions: DictionarySuggestion[] = [];

  for (const index of candidatePositions) {
    const word = dictionary.words[index];

    if (word.toLowerCase().startsWith(normalizedQuery)) {
      suggestions.push({ word, index });

      if (suggestions.length >= limit) {
        break;
      }
    }
  }

  return suggestions;
}
