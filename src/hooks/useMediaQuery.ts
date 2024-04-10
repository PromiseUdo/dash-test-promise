import { useState, useEffect } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches || media.matches);
    };
    media.addEventListener
      ? media.addEventListener("change", listener)
      : media.addListener(listener);
    return () =>
      media.removeEventListener
        ? media.removeEventListener("change", listener)
        : media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
