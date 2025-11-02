'use client';

import { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Only show cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const updateCursorPosition = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateTrailPosition = () => {
      setTrailPosition((prev) => {
        const diffX = mousePosRef.current.x - prev.x;
        const diffY = mousePosRef.current.y - prev.y;
        return {
          x: prev.x + diffX * 0.15,
          y: prev.y + diffY * 0.15,
        };
      });
      animationFrameRef.current = requestAnimationFrame(updateTrailPosition);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const addEventListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      return interactiveElements;
    };

    let interactiveElements = addEventListeners();

    window.addEventListener('mousemove', updateCursorPosition);
    animationFrameRef.current = requestAnimationFrame(updateTrailPosition);

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      interactiveElements = addEventListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    // Check if mouse is over avatar area
    const checkAvatarArea = () => {
      const avatarContainer = document.querySelector('[data-avatar-container]');
      if (avatarContainer) {
        const rect = avatarContainer.getBoundingClientRect();
        const isOverAvatar = 
          mousePosition.x >= rect.left &&
          mousePosition.x <= rect.right &&
          mousePosition.y >= rect.top &&
          mousePosition.y <= rect.bottom;
        setShouldHide(isOverAvatar);
      }
    };

    if (isVisible) {
      checkAvatarArea();
      const interval = setInterval(checkAvatarArea, 50);
      return () => clearInterval(interval);
    }
  }, [mousePosition, isVisible]);

  if (!isVisible || shouldHide) return null;

  return (
    <>
      <div
        className={`cursor-dot ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      <div
        className={`cursor-trail ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      />
    </>
  );
}

