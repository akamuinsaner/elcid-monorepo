import { createWrapperAndAppendToBody } from '@elcid-monorepo/utils';
import { useEffect, useState } from 'react';

const useWrapper = ({
  wrapperId = 'wrapper-id',
  open,
  close,
}: {
  wrapperId: string;
  open: boolean;
  close: () => void;
}) => {
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      const wrapper = createWrapperAndAppendToBody(wrapperId);
      setWrapper(wrapper);
    } else {
      close();
    }
  }, [open]);

  return { wrapper, setWrapper };
};

export default useWrapper;
