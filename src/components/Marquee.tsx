import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = 20,
  className = "",
}: MarqueeProps) {
  return (
    <div className="relative flex overflow-hidden" dir="ltr">
      <div
        className={`animate-marquee flex min-w-full shrink-0 items-center justify-around py-3 ${className}`}
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
      <div
        className={`animate-marquee flex min-w-full shrink-0 items-center justify-around py-3 ${className}`}
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
