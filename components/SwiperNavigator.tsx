"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const routes = ["/", "/about", "/projects", "/contact"]; // your route order

export default function SwipeNavigator({
  children,
}: {
  children: React.ReactNode;
}) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const minSwipeDistance = 50;
  const currentIndex = routes.indexOf(pathname);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null);
    setTouchStartX(e?.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance && currentIndex < routes.length - 1) {
      // Swipe left , go forward
      router.push(routes[currentIndex + 1]);
    }

    if (distance < -minSwipeDistance && currentIndex > 0) {
      // Swipe right , go back
      router.push(routes[currentIndex - 1]);
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </div>
  );
}
