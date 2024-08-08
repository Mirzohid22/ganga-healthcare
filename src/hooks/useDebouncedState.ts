import { useState, useEffect } from 'react';

function useDebouncedState<T>(initialValue: T, delay: number): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialValue);
  const [debouncedState, setDebouncedState] = useState<T>(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [state, delay]);

  return [debouncedState, setState];
}

export default useDebouncedState;
