import * as React from 'react';

// Stryker disable next-line ConditionalExpression, EqualityOperator, StringLiteral: Cannot modify typeof window
export const canUseDOM = typeof window !== 'undefined';
export const useSafeLayoutEffect = canUseDOM ? React.useLayoutEffect : React.useEffect;
