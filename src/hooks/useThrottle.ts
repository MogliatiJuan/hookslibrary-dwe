import { type AnyFunction, throttle } from 'formslibdwe';
import * as React from 'react';

import { useEvent } from './useEvent';

export function useThrottle<T extends AnyFunction>(fn: T, delay: number): (...args: Parameters<T>) => void {
  const event = useEvent(fn);

  return React.useMemo(
    () => throttle(event, delay),
    // Stryker disable next-line ArrayDeclaration: The deps must be
    [event, delay]
  );
}
