"use client";
import { useEffect, useState } from "react";

interface ResultInterface {
  count: number | string;
  title: React.ReactNode | string;
  duration?: number;
}

const Result: React.FC<ResultInterface> = ({
  count,
  title,
  duration = 1000,
}) => {
  const [displayCount, setDisplayCount] = useState(0);

  const target =
    typeof count === "string" ? parseInt(count.replace(/,/g, "")) : count;

  useEffect(() => {
    if (!target || target === 0) {
      setDisplayCount(0);
      return;
    }

    let start = 0;
    const steps = target > 1000 ? 30 : 25;
    const increment = target / steps;
    const intervalTime = Math.max(Math.floor(duration / steps), 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setDisplayCount(target);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="flex gap-3">
      <h2 className="text-4xl xl:text-6xl font-extrabold">
        {displayCount.toLocaleString()}
      </h2>
      <p className="max-w-[100px] leading-snug text-white/80 my-auto">
        {title}
      </p>
    </div>
  );
};

export default Result;
