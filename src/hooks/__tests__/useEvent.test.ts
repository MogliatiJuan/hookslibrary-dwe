import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useEvent } from '../useEvent';

describe('useEvent', () => {
  it('should execute the callback', () => {
    const fn = vi.fn();
    const { result } = renderHook(() => useEvent(fn));

    act(() => {
      result.current();
    });

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should memoize the handler', () => {
    const fn = vi.fn();
    const { result, rerender } = renderHook(() => useEvent(fn));

    const eventTriggered1 = result.current;
    rerender();
    const eventTriggered2 = result.current;
    expect(eventTriggered1).toBe(eventTriggered2);
  });
});
