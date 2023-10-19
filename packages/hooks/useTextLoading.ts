import { useEffect, useState } from 'react';

export const useTextLoading = (text?: string, timeout?: number) => {
  const [txt, setTxt] = useState(text || 'Loading');

  useEffect(() => {
    const timer = setInterval(() => {
      setTxt(t => {
        if (t.endsWith('...')) {
          return 'Loading';
        }
        return t + '.';
      });
    }, timeout ?? 700);

    return () => {
      clearInterval(timer);
    };
  }, [timeout]);

  return txt;
};
