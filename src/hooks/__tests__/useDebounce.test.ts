import { act, renderHook } from '@testing-library/react-hooks';
import { describe, expect, it, vi } from 'vitest';

import { useDebounce } from '../useDebounce';

describe('useDebounce', () => {
  const fn = vi.fn();
  const delay = 1_000;
  it('should debounce the callback once when the delay is advanced', () => {
    const { result } = renderHook(() => useDebounce(fn, delay));
    act(() => {
      result.current();
      result.current();
      result.current();
    });
    vi.advanceTimersByTime(1_200);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should debounce twice if it is called and the delay is advanced', () => {
    const { result } = renderHook(() => useDebounce(fn, delay));
    act(() => {
      result.current();
      result.current();
    });
    vi.advanceTimersByTime(1_200);
    act(() => {
      result.current();
    });
    vi.advanceTimersByTime(1_200);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
