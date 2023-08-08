import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// usage

// useIsomorphicLayoutEffect(() => {
//   console.log(
//     "In the browser, I'm an `useLayoutEffect`, but in SSR, I'm an `useEffect`.",
//   )
// }, [])
