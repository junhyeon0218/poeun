import { useEffect } from 'react';

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isLocked) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.body.classList.remove('modal-open');
      }
    };
  }, [isLocked]);
}
