import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const isClient = typeof window === "object";
  const [windowWidth, setWindowWidth] = useState(
    isClient ? window.innerWidth : 0
  );

  useEffect(() => {
    // SSR일 경우 리턴
    if (!isClient) return;

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // isClient의 변경에 따라 훅을 실행합니다.
  }, [isClient]);

  return windowWidth;
}
