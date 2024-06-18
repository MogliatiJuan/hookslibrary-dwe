import { type AnyFunction } from 'lvl-js-utils'; // replace for my own lib 'formslibdwe'
import * as React from 'react';

import { useSafeLayoutEffect } from './useSafeLayoutEffect';

export function useEvent<T extends AnyFunction>(callback: T): T {
  const ref = React.useRef<AnyFunction | undefined>(() => {});
  useSafeLayoutEffect(() => {
    ref.current = callback;
  }, []);

  return React.useCallback<AnyFunction>((...args: AnyFunction) => ref.current(...args), []);
}
