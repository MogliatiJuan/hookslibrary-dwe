import { cleanup } from '@testing-library/react-hooks';
import { afterEach, beforeEach, vi } from 'vitest';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
