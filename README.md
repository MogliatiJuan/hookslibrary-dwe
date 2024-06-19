## HOOKS LIBRARY DEVELOPMENT

### Topic: Hooks library related to utils

We know that each developer sometimes needs a couple of utility hooks to help keep their code clean and scalable. This library provides you with some hooks that you can use in the future.

## Initial configurations

- Vite [x]
- Eslint .eslintrc [x]
- Prettier .prettierrc [x]
- Tests [x]
- Mutation testing (with Stryker) stryker.config

## Features

> TypeScript support

> Easy to use, extend, test and maintain

> Easy to use with other libraries

> High level in coverage

## Getting Started

This library provides a set of utility hooks to help keep your code clean and scalable. The hooks are implemented using TypeScript and React.

## Table of Contents

- [Event](#event)
  - [useEvent](#useEvent)
- [Debounce](#debounce)
  - [useDebounce](#useDebounce)
- [Throttle](#throttle)
  - [useThrottle](#useThrottle)
- [Safe Layout Effect](#safe-layout-effect)
  - [useSafeLayoutEffect](#useSafeLayoutEffect)

### Event

This section provides a utility hook to handle event callbacks.

- **useEvent**

  ```typescript
  import { type AnyFunction } from 'formslibdwe';
  import * as React from 'react';

  import { useSafeLayoutEffect } from './useSafeLayoutEffect';

  export function useEvent<T extends AnyFunction>(callback: T): T {
    const ref = React.useRef<AnyFunction | undefined>(() => {});
    useSafeLayoutEffect(() => {
      ref.current = callback;
    }, []);

    return React.useCallback((...args: unknown[]) => {
      if (ref.current) {
        return ref.current(...args);
      }
    }, []) as T;
  }
  ```

### Debounce

This section provides a hook to debounce a function, delaying its execution.

- **useDebounce**

  ```typescript
  import { type AnyFunction, debounce } from 'formslibdwe';
  import * as React from 'react';
  import { useEvent } from './useEvent';

  export function useDebounce<T extends AnyFunction>(fn: T, delay: number): (...args: Parameters<T>) => void {
    const event = useEvent(fn);

    return React.useMemo(() => debounce(event, delay), [event, delay]);
  }
  ```

### Throttle

This section provides a hook to throttle a function, ensuring it is called at most once within a specified delay.

- **useThrottle**

  ```typescript
  import { type AnyFunction, throttle } from 'formslibdwe';
  import * as React from 'react';

  import { useEvent } from './useEvent';

  export function useThrottle<T extends AnyFunction>(fn: T, delay: number): (...args: Parameters<T>) => void {
    const event = useEvent(fn);

    return React.useMemo(() => throttle(event, delay), [event, delay]);
  }
  ```

### Safe Layout Effect

This section provides a hook to use the appropriate layout effect based on the environment.

- **useSafeLayoutEffect**

  ```typescript
  import * as React from 'react';

  export const canUseDOM = typeof window !== 'undefined';
  export const useSafeLayoutEffect = canUseDOM ? React.useLayoutEffect : React.useEffect;
  ```
