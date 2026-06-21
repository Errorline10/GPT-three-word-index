import './digit-stream.global.js';

const DigitStream = globalThis.DigitStream;

export const createDigitStream = DigitStream.createDigitStream;
export const createSqrtTwoDigitSource = DigitStream.createSqrtTwoDigitSource;
export const integerSqrt = DigitStream.integerSqrt;
export const xorDigitKey = DigitStream.xorDigitKey;

export default DigitStream;
