export interface DictionarySuggestion {
  word: string;
  index: number;
}

interface DictionaryChunk {
  default: {
    data: string[];
  };
}

type DictionaryChunkKey =
  | '1'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';

interface DictionaryChunkDefinition {
  fileName: string;
}

const chunkModules = import.meta.glob<DictionaryChunk>(
  '../../lookup-tables/english-dictionary/*.js',
);

const dictionaryChunks: Record<DictionaryChunkKey, DictionaryChunkDefinition> = {
  '1': { fileName: '1.js' },
  a: { fileName: 'a.js' },
  b: { fileName: 'b.js' },
  c: { fileName: 'c.js' },
  d: { fileName: 'd.js' },
  e: { fileName: 'e.js' },
  f: { fileName: 'f.js' },
  g: { fileName: 'g.js' },
  h: { fileName: 'h.js' },
  i: { fileName: 'i.js' },
  j: { fileName: 'j.js' },
  k: { fileName: 'k.js' },
  l: { fileName: 'l.js' },
  m: { fileName: 'm.js' },
  n: { fileName: 'n.js' },
  o: { fileName: 'o.js' },
  p: { fileName: 'p.js' },
  q: { fileName: 'q.js' },
  r: { fileName: 'r.js' },
  s: { fileName: 's.js' },
  t: { fileName: 't.js' },
  u: { fileName: 'u.js' },
  v: { fileName: 'v.js' },
  w: { fileName: 'w.js' },
  x: { fileName: 'x.js' },
  y: { fileName: 'y.js' },
  z: { fileName: 'z.js' },
};

const chunkCache = new Map<DictionaryChunkKey, Promise<string[]>>();

function getDictionaryChunkKey(query: string): DictionaryChunkKey {
  const firstCharacter = query[0]?.toLowerCase();

  if (firstCharacter && /^[a-z]$/.test(firstCharacter)) {
    return firstCharacter as DictionaryChunkKey;
  }

  return '1';
}

async function loadDictionaryChunk(chunkKey: DictionaryChunkKey): Promise<string[]> {
  const cachedChunk = chunkCache.get(chunkKey);

  if (cachedChunk) {
    return cachedChunk;
  }

  const chunkPath = `../../lookup-tables/english-dictionary/${dictionaryChunks[chunkKey].fileName}`;
  const loadChunk = chunkModules[chunkPath];

  if (!loadChunk) {
    throw new Error(`Dictionary chunk "${chunkKey}" is not available.`);
  }

  const chunkPromise = loadChunk().then((chunk) => chunk.default.data);
  chunkCache.set(chunkKey, chunkPromise);

  return chunkPromise;
}

export async function getDictionarySuggestions(
  query: string,
  limit = 12,
): Promise<DictionarySuggestion[]> {
  const normalizedQuery = query.trimStart().toLowerCase();

  if (normalizedQuery.length < 2) {
    return [];
  }

  const chunkKey = getDictionaryChunkKey(normalizedQuery);
  const words = await loadDictionaryChunk(chunkKey);
  const suggestions: DictionarySuggestion[] = [];

  for (const [chunkIndex, word] of words.entries()) {
    const normalizedWord = word.toLowerCase();

    if (normalizedWord.startsWith(normalizedQuery)) {
      suggestions.push({ word, index: chunkIndex });

      if (suggestions.length >= limit) {
        break;
      }
    }
  }

  return suggestions;
}
