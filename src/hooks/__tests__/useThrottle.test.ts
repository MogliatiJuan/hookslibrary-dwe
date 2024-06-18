import { act, renderHook } from '@testing-library/react-hooks';
import { describe, expect, it, vi } from 'vitest';

import { useThrottle } from '../useThrottle';

describe('useThrottle', () => {
  const fn = vi.fn();
  const delay = 1_000;
  it('should throttle a callback by a specific delay', () => {
    const { result } = renderHook(() => useThrottle(fn, delay));
    act(() => {
      result.current();
      result.current();
      result.current();
    });

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should throttle two times if delay is advanced', () => {
    const { result } = renderHook(() => useThrottle(fn, delay));
    act(() => {
      result.current();
      result.current();
    });
    vi.advanceTimersByTime(1_200);
    act(() => {
      result.current();
      expect(fn).toHaveBeenCalledTimes(2);
    });
  });
});
