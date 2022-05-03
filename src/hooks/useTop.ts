import { useState, useEffect } from "react";

export function useTop() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setTop(Boolean(!position));
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return top;
}
