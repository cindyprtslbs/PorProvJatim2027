'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

type CarouselProps<T> = {
  items: T[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  className?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
  getItemKey?: (item: T, index: number) => string | number;
};

export default function Carousel<T>({
  items,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  className = '',
  renderItem,
  getItemKey,
}: CarouselProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const dragStartX = useRef<number | null>(null);

  const moveTo = useCallback(
    (step: number) => {
      if (!items.length) return;

      setActiveIndex((current) => {
        if (loop) {
          return (current + step + items.length) % items.length;
        }

        const next = current + step;
        return Math.min(Math.max(next, 0), items.length - 1);
      });
    },
    [items.length, loop],
  );

  useEffect(() => {
    if (!autoplay || !items.length) return;
    if (pauseOnHover && isHovered) return;

    const timer = window.setInterval(() => {
      moveTo(1);
    }, autoplayDelay);

    return () => window.clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, items.length, moveTo, pauseOnHover]);

  const handlePointerDown = (clientX: number) => {
    dragStartX.current = clientX;
  };

  const handlePointerMove = (clientX: number) => {
    if (dragStartX.current === null) return;
    setDragOffset(clientX - dragStartX.current);
  };

  const handlePointerEnd = () => {
    if (dragStartX.current === null) return;

    if (dragOffset <= -70) {
      moveTo(1);
    } else if (dragOffset >= 70) {
      moveTo(-1);
    }

    dragStartX.current = null;
    setDragOffset(0);
  };

  const trackStyle: React.CSSProperties = {
    width: `${items.length * baseWidth}px`,
    transform: `translateX(${-(activeIndex * baseWidth) + dragOffset * 0.55}px)`,
    transition: dragStartX.current === null ? 'transform 0.35s ease' : 'none',
  };

  const itemStyle: React.CSSProperties = {
    width: `${baseWidth}px`,
    minWidth: `${baseWidth}px`,
  };

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${round ? 'rounded-[30px]' : 'rounded-none'} ${className}`}
      onPointerDown={(event) => handlePointerDown(event.clientX)}
      onPointerMove={(event) => handlePointerMove(event.clientX)}
      onPointerUp={handlePointerEnd}
      onPointerLeave={handlePointerEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-full items-center justify-center overflow-hidden">
        <div className="flex" style={trackStyle}>
          {items.map((item, index) => (
            <div
              key={getItemKey ? getItemKey(item, index) : index}
              className="flex h-full items-center justify-center"
              style={itemStyle}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
