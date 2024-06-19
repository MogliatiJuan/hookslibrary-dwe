import { type AnyFunction, debounce } from 'formslibdwe';
import * as React from 'react';

import { useEvent } from './useEvent';

export function useDebounce<T extends AnyFunction>(fn: T, delay: number): (...args: Parameters<T>) => void {
  const event = useEvent(fn);

  return React.useMemo(
    () => debounce(event, delay),
    // Stryker disable next-line ArrayDeclaration: The deps must be
    [event, delay]
  );
}
