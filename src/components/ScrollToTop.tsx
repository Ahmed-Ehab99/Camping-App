"use client";

import { MoveUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 75) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      className="hidden lg:block fixed bottom-4 right-4 bg-green-500 p-4 rounded-full animate-bounce z-50"
    >
      <MoveUp color="#fff" />
    </button>
  );
};

export default ScrollToTop;
