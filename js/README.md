# Digit Stream

Standalone browser JavaScript for generating deterministic digit buffers from a seed.

The core implementation uses the revealing module pattern and attaches `DigitStream` to `globalThis`, so it can run from a plain script tag without a compile step. The module wrapper lets React, Vite, or other ES module consumers import the same implementation.

## Plain script usage

```html
<script src="./digit-stream.global.js"></script>
<script>
  const stream = DigitStream.createDigitStream({
    seed: '123456789123456789',
    chunkSize: 1024,
  });

  stream.start();
  stream.generate(5000);

  const firstDigits = stream.read(0, 100);
  const key = stream.readEvery(20, 128);
</script>
```

## ES module usage

```js
import { createDigitStream } from './digit-stream.module.js';

const stream = createDigitStream({
  seed: '123456789123456789',
  chunkSize: 1024,
});

stream.generate(5000);
const key = stream.readEvery(100, 256);
```

## API

- `createDigitStream(options)` creates a stream for a non-negative integer seed.
- `stream.generate(count)` extends the internal buffer by at least `count` digits.
- `stream.read(start, count)` returns a contiguous digit slice.
- `stream.readEvery(spacing, count, offset)` returns spaced digits from the buffer.
- `stream.start()` begins background generation on an interval.
- `stream.stop()` stops background generation.
- `stream.reset()` clears the generated buffer.
- `stream.length()` returns the current buffer length.

The default digit source is based on `seed / sqrt(2)`, calculated with integer-only `BigInt` fixed-point math. This is deterministic, but it is not a cryptographic random number generator.
