import { useState, useEffect } from "react";

export function usePosition() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const offsetY = window.pageYOffset;
      setPosition(offsetY);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return position;
}
