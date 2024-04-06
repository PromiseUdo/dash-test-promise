import { MutableRefObject, useEffect, useRef, useState } from "react";

const useGetCssValue = (
  propertyName: string,
  initialValue?: string,
  deps?: any
): [MutableRefObject<any>, string] => {
  const ref = useRef(null);
  const [propertyValue, setPropertyValue] = useState<string>(
    initialValue || ""
  );
  useEffect(() => {
    if (!ref.current) return;
    setPropertyValue(
      window.getComputedStyle(ref.current).getPropertyValue(propertyName)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyName, initialValue, ref.current, deps]);

  return [ref, propertyValue];
};

export default useGetCssValue;
