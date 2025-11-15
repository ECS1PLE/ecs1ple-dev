"use client";

import { useEffect, useState } from "react";

interface SpanProps {
  children: string;
  enabled?: boolean;
  fontSize?: number;
  speed?: number; // скорость печати
  pause?: number; // пауза после полного текста
  className?: string;
}

const Span: React.FC<SpanProps> = ({
  children,
  enabled = false,
  fontSize,
  speed = 80,
  pause = 1000,
  className = "",
}) => {
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!enabled || children.length <= 1) {
      setDisplay(children);
      return;
    }

    const timer = setTimeout(
      () => {
        setDisplay((prev) => {
          if (!isDeleting) {
            if (prev.length < children.length)
              return children.slice(0, prev.length + 1);
            else {
              // пауза перед стиранием
              setTimeout(() => setIsDeleting(true), pause);
              return prev;
            }
          } else {
            if (prev.length > 0) return children.slice(0, prev.length - 1);
            else {
              setIsDeleting(false);
              return "";
            }
          }
        });
      },
      isDeleting ? speed : speed
    );

    return () => clearTimeout(timer);
  }, [display, isDeleting, children, enabled, speed, pause]);

  return (
    <span
      className={`inline-flex items-center ${className} text-[#8783D1]`}
      style={{ fontSize }}
    >
      {display}
      {enabled && children.length > 1 && (
        <span className="ml-1 h-6 w-[2px] bg-current animate-pulse" />
      )}
    </span>
  );
};

export default Span;
