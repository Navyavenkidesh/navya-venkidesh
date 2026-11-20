import { expect, test } from 'bun:test';
import { INTRO_VISIBLE_MS, INTRO_EXIT_MS } from './intro-timing';

test('opening intro lasts five seconds including its exit', () => {
  expect(INTRO_VISIBLE_MS + INTRO_EXIT_MS).toBe(5000);
});
