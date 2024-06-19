import { type AnyFunction } from 'formslibdwe';
import * as React from 'react';

import { useSafeLayoutEffect } from './useSafeLayoutEffect';

export function useEvent<T extends AnyFunction>(callback: T): T {
  const ref = React.useRef<AnyFunction | undefined>(() => {});
  useSafeLayoutEffect(
    () => {
      ref.current = callback;
    },
    // Stryker disable next-line ArrayDeclaration: The deps array is always empty
    []
  );

  return React.useCallback(
    (...args: unknown[]) => {
      if (ref.current) {
        return ref.current(...args);
      }
    }, // Stryker disable next-line ArrayDeclaration: The deps array is always empty
    []
  ) as T;
}
