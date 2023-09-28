import { useState } from 'react';

export const useDisclose = (initial?: boolean) => {
  const [isOpen, setIsOpen] = useState(initial ?? false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const onToggle = () => setIsOpen(prev => !prev);

  return {
    isOpen,
    onClose,
    onOpen,
    onToggle,
  };
};
