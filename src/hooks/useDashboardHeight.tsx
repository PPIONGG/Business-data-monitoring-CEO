import { useEffect, useState } from "react";

interface Props {
  topHeight: number;
  extraSpacing: number;
}
export function useDashboardHeight({ topHeight = 0, extraSpacing = 0 }: Props) {
  const [contentHeight, setContentHeight] = useState(500);

  const calculateHeight = () => {
    const windowHeight = window.innerHeight;
    const availableHeight = windowHeight - topHeight - extraSpacing;
    setContentHeight(availableHeight);
  };

  useEffect(() => {
    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return contentHeight;
}
