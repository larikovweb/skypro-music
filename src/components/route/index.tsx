import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Rec } from '../../interfaces/interfaces';

export function useRequiredParam<T extends Rec<string, string | null>>(): Rec<keyof T, string> {
  const params = useParams();

  return params as Rec<keyof T, string>;
}

export function useClickLink(uri: string, fn?: () => void): (e: React.MouseEvent) => void {
  const nav = useNavigate();

  return useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      nav(uri);
      fn?.();
    },
    [uri],
  );
}
