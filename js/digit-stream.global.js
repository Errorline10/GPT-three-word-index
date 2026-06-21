(function attachDigitStream(root) {
  'use strict';

  const DEFAULT_CHUNK_SIZE = 1024;
  const DEFAULT_GUARD_DIGITS = 24;
  const DEFAULT_INTERVAL_MS = 16;

  function normalizeSeed(seed) {
    const normalizedSeed = String(seed ?? '').trim();

    if (!/^\d+$/.test(normalizedSeed)) {
      throw new TypeError('DigitStream seed must be a non-negative integer string.');
    }

    return normalizedSeed.replace(/^0+(?=\d)/, '');
  }

  function normalizePositiveInteger(value, fallback, name) {
    const normalizedValue = Number(value ?? fallback);

    if (!Number.isInteger(normalizedValue) || normalizedValue <= 0) {
      throw new TypeError(`DigitStream ${name} must be a positive integer.`);
    }

    return normalizedValue;
  }

  function integerSqrt(value) {
    if (value < 0n) {
      throw new RangeError('Cannot calculate the square root of a negative BigInt.');
    }

    if (value < 2n) {
      return value;
    }

    let smallCandidate = integerSqrt(value >> 2n) << 1n;
    let largeCandidate = smallCandidate + 1n;

    if (largeCandidate * largeCandidate > value) {
      return smallCandidate;
    }

    return largeCandidate;
  }

  function repeatZeroes(count) {
    return '0'.repeat(Math.max(0, count));
  }

  function createSqrtTwoDigitSource(seed, guardDigits) {
    const normalizedSeed = normalizeSeed(seed);
    const seedValue = BigInt(normalizedSeed);
    const safeGuardDigits = normalizePositiveInteger(
      guardDigits,
      DEFAULT_GUARD_DIGITS,
      'guardDigits',
    );

    function readDigits(length) {
      const requestedLength = normalizePositiveInteger(length, 1, 'length');
      const scaleDigits = requestedLength + safeGuardDigits;
      const scale = 10n ** BigInt(scaleDigits);
      const sqrtTwoScaled = integerSqrt(2n * scale * scale);
      const scaledValue = (seedValue * sqrtTwoScaled) / 2n / (10n ** BigInt(safeGuardDigits));
      const digitText = scaledValue.toString();

      if (digitText.length >= requestedLength) {
        return digitText.slice(-requestedLength);
      }

      return repeatZeroes(requestedLength - digitText.length) + digitText;
    }

    return {
      readDigits,
      seed: normalizedSeed,
    };
  }

  function createDigitStream(options) {
    const settings = options || {};
    const chunkSize = normalizePositiveInteger(
      settings.chunkSize,
      DEFAULT_CHUNK_SIZE,
      'chunkSize',
    );
    const intervalMs = normalizePositiveInteger(
      settings.intervalMs,
      DEFAULT_INTERVAL_MS,
      'intervalMs',
    );
    const source = createSqrtTwoDigitSource(settings.seed, settings.guardDigits);
    let buffer = '';
    let timerId = null;

    function ensureLength(length) {
      const requestedLength = normalizePositiveInteger(length, 1, 'length');

      if (buffer.length < requestedLength) {
        buffer = source.readDigits(requestedLength);
      }

      return buffer;
    }

    function generate(count) {
      const requestedCount = normalizePositiveInteger(count, chunkSize, 'count');
      ensureLength(buffer.length + requestedCount);

      return buffer.length;
    }

    function read(start, count) {
      const startIndex = Math.max(0, Number(start ?? 0));
      const requestedCount = normalizePositiveInteger(count, chunkSize, 'count');
      const endIndex = startIndex + requestedCount;

      ensureLength(endIndex);

      return buffer.slice(startIndex, endIndex);
    }

    function readEvery(spacing, count, offset) {
      const requestedSpacing = normalizePositiveInteger(spacing, 1, 'spacing');
      const requestedCount = normalizePositiveInteger(count, chunkSize, 'count');
      const startOffset = Math.max(0, Number(offset ?? requestedSpacing - 1));
      const lastIndex = startOffset + requestedSpacing * (requestedCount - 1);

      ensureLength(lastIndex + 1);

      let key = '';
      for (let index = 0; index < requestedCount; index += 1) {
        key += buffer[startOffset + requestedSpacing * index];
      }

      return key;
    }

    function start() {
      if (timerId !== null) {
        return;
      }

      timerId = root.setInterval(() => {
        generate(chunkSize);
      }, intervalMs);
    }

    function stop() {
      if (timerId === null) {
        return;
      }

      root.clearInterval(timerId);
      timerId = null;
    }

    function reset() {
      buffer = '';
    }

    function length() {
      return buffer.length;
    }

    function getSeed() {
      return source.seed;
    }

    return {
      generate,
      getSeed,
      length,
      read,
      readEvery,
      reset,
      start,
      stop,
    };
  }

  function xorDigitKey(text, digitKey) {
    const sourceText = String(text ?? '');
    const keyText = String(digitKey ?? '');

    if (keyText.length === 0) {
      throw new TypeError('DigitStream XOR key must not be empty.');
    }

    let output = '';
    for (let index = 0; index < sourceText.length; index += 1) {
      const keyCode = keyText.charCodeAt(index % keyText.length);
      output += String.fromCharCode(sourceText.charCodeAt(index) ^ keyCode);
    }

    return output;
  }

  root.DigitStream = {
    createDigitStream,
    createSqrtTwoDigitSource,
    integerSqrt,
    xorDigitKey,
  };
})(globalThis);
