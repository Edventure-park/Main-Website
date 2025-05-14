'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CardData {
  id: number;
  title: string;
  logoPath: string;
  count?: number;
}

const DynamicRing = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [activeCard, setActiveCard] = useState<CardData | null>(null);
  const [rotation, setRotation] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0.2); // degrees per frame
  const [userInteracting, setUserInteracting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ringRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const lastWheelEvent = useRef<number>(Date.now());
  const interactionTimeout = useRef<NodeJS.Timeout | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isAnimating = useRef(false);
  const autoRotateTimeoutRef = useRef<number | null>(null);
  const lastFrameTime = useRef<number>(Date.now());

  // Update window size on resize and track mouse position
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate normalized position relative to center (-1 to 1)
        const normalizedX = (e.clientX - centerX) / (rect.width / 2);
        const normalizedY = (e.clientY - centerY) / (rect.height / 2);
        
        setMousePosition({ x: normalizedX, y: normalizedY });
      }
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate cards data from available logos
  useEffect(() => {
    const categories: CardData[] = [
      { id: 1, title: 'Progressive Thinkers', logoPath: '/assets/logos/1.png', count: 25 },
      { id: 2, title: 'Category Creators', logoPath: '/assets/logos/11.png', count: 11 },
      { id: 3, title: 'Risk Takers', logoPath: '/assets/logos/21.png', count: 21 },
      { id: 4, title: 'Change Makers', logoPath: '/assets/logos/86.png', count: 86 },
      { id: 5, title: 'Innovation Leaders', logoPath: '/assets/logos/17.png', count: 17 },
      { id: 6, title: 'Tech Pioneers', logoPath: '/assets/logos/32.png', count: 32 },
      { id: 7, title: 'Design Experts', logoPath: '/assets/logos/42.png', count: 42 },
      { id: 8, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 9, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 10, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 11, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 12, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 13, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 14, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 15, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 16, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 17, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 18, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 19, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 20, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 21, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 22, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 23, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 25, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 26, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 27, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 28, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 29, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 30, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 31, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 32, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 33, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 34, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 35, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 36, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 37, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 38, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 39, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 40, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 41, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 42, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 43, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 44, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 45, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 46, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 47, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 48, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 49, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 50, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 51, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 52, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 53, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 54, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 55, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 56, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 57, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 58, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 59, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 60, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 61, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 62, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 63, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 64, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 65, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 66, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      // { id: 67, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 68, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 69, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 70, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 71, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 72, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 73, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 74, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 75, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 76, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 77, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 },
      { id: 24, title: 'Market Disruptors', logoPath: '/assets/logos/53.png', count: 53 }
    ];
    
    setCards(categories);
    setActiveCard(categories[0]);
    cardRefs.current = categories.map(() => null);
  }, []);

  // Auto-rotation effect with smooth animation frame timing
  useEffect(() => {
    if (!ringRef.current) return;
    
    const handleAutoRotate = (_timestamp: number) => {
      if (!ringRef.current) return;
      
      const currentTime = Date.now();
      const deltaTime = currentTime - lastFrameTime.current;
      lastFrameTime.current = currentTime;
      
      // Calculate rotation speed based on user interaction
      // When user is interacting, rotation slows down but doesn't stop completely
      const speedMultiplier = userInteracting ? 0.1 : 1; // Reduce speed more during interaction
      
      // Use a consistent time step for smoother animation
      // This helps prevent jerky movements when the frame rate fluctuates
      const targetFps = 60;
      const normalizedDeltaTime = Math.min(deltaTime, 100); // Cap delta time to prevent jumps after pauses
      const rotationAmount = (autoRotateSpeed * normalizedDeltaTime / (1000 / targetFps)) * speedMultiplier;
      
      // Update rotation state with smoother increments
      setRotation(prevRotation => prevRotation + rotationAmount);
      if (!userInteracting) {
        const cardAngle = 360 / cards.length;
        const normalizedRotation = ((rotation % 360) + 360) % 360;
        const activeIndex = Math.round(normalizedRotation / cardAngle) % cards.length;
        
        if (activeCard?.id !== cards[activeIndex]?.id) {
          setActiveCard(cards[activeIndex]);
        }
      }
      
      // Continue the animation loop
      autoRotateTimeoutRef.current = window.requestAnimationFrame(handleAutoRotate);
    };
    
    // Start the animation loop
    lastFrameTime.current = Date.now();
    autoRotateTimeoutRef.current = window.requestAnimationFrame(handleAutoRotate);
    
    // Track user interaction to adjust rotation speed, but never fully stop
    const handleUserInteraction = () => {
      setUserInteracting(true);
      
      // Reset interaction timeout
      if (interactionTimeout.current) {
        clearTimeout(interactionTimeout.current);
      }
      
      // After a period of inactivity, return to normal rotation speed
      interactionTimeout.current = setTimeout(() => {
        setUserInteracting(false);
      }, 3000); // Return to normal speed after 3 seconds of inactivity
    };
    
    // Add event listeners for user interaction
    window.addEventListener('wheel', handleUserInteraction);
    window.addEventListener('mousemove', handleUserInteraction);
    window.addEventListener('touchmove', handleUserInteraction);
    window.addEventListener('click', handleUserInteraction);
    
    return () => {
      if (autoRotateTimeoutRef.current !== null) {
        window.cancelAnimationFrame(autoRotateTimeoutRef.current);
      }
      if (interactionTimeout.current) {
        clearTimeout(interactionTimeout.current);
      }
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('mousemove', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };
  }, [autoRotateSpeed, cards, rotation, activeCard, userInteracting]);

  // Handle scroll to rotate the ring with proper direction mapping
  useEffect(() => {
    const handleScroll = () => {
      if (!ringRef.current || isAnimating.current) return;
      
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY.current;
      
      // Map scroll direction to rotation direction
      // Scrolling down (positive scrollDiff) should rotate clockwise (positive rotation)
      // Scrolling up (negative scrollDiff) should rotate counter-clockwise (negative rotation)
      // Adjust the divisor to control rotation speed
      const newRotation = rotation + (scrollDiff / 15);
      
      setRotation(newRotation);
      lastScrollY.current = currentScrollY;
      
      // Clear existing timeout
      if (interactionTimeout.current) {
        clearTimeout(interactionTimeout.current);
      }
      
      // Set a timeout to check which card is at the top after scrolling stops
      interactionTimeout.current = setTimeout(() => {
        updateActiveCardFromPosition();
      }, 150);
    };

    // Find which card is at the top position and set it as active
    const updateActiveCardFromPosition = () => {
      if (!ringRef.current || cards.length === 0) return;
      
      // Calculate which card should be active based on current rotation
      const cardAngle = 360 / cards.length;
      const normalizedRotation = ((rotation % 360) + 360) % 360;
      const activeIndex = Math.round(normalizedRotation / cardAngle) % cards.length;
      
      setActiveCard(cards[activeIndex]);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (interactionTimeout.current) {
        clearTimeout(interactionTimeout.current);
      }
    };
  }, [rotation, cards]);

  // Handle manual rotation with mouse wheel - now just adds user input to the continuous rotation
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    // Throttle wheel events to prevent too rapid rotation
    const now = Date.now();
    if (now - lastWheelEvent.current < 20) return; // Limit to 50fps
    lastWheelEvent.current = now;
    
    // Map scroll direction to rotation direction
    // Scrolling down (positive deltaY) should rotate clockwise (positive rotation)
    // Scrolling up (negative deltaY) should rotate counter-clockwise (negative rotation)
    const delta = e.deltaY;
    const rotationDelta = delta / 10; // Adjust sensitivity
    
    // Add user input to the rotation but don't stop auto-rotation
    setRotation(prev => prev + rotationDelta);
    
    // Update active card based on current rotation
    const cardAngle = 360 / cards.length;
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedRotation / cardAngle) % cards.length;
    setActiveCard(cards[activeIndex]);
  };

  // Calculate position for each card in the ring - completely refactored to match the second image exactly
  const getCardStyle = (index: number) => {
    const totalCards = cards.length;
    if (totalCards === 0) return {};
    
    // Calculate angle and radian for positioning
    const angle = (360 / totalCards) * index + rotation;
    const radian = (angle * Math.PI) / 180;
    
    // Create a perfect oval shape with a wider horizontal span
    const baseRadiusX = Math.min(windowSize.width, windowSize.height) * 0.65;
    const baseRadiusY = Math.min(windowSize.width, windowSize.height) * 0.2;
    const mobileAdjustment = windowSize.width < 640 ? 0.7 : 1;
    
    const radiusX = baseRadiusX * mobileAdjustment;
    const radiusY = baseRadiusY * mobileAdjustment;
    
    // Calculate position on the ellipse
    const x = radiusX * Math.cos(radian);
    const y = radiusY * Math.sin(radian);
    
    // Calculate z-index based on position
    const zIndex = Math.round(1000 + 500 * Math.sin(radian));
    
    // Calculate rotation angles to create the fan effect as in the second image
    // The key is to have cards rotate around their vertical axis based on position
    const cardRotationY = 85 * Math.cos(radian); // Rotation around Y axis (vertical)
    
    // Position affects card appearance - no need to track sides explicitly
    
    // Apply slight X rotation based on position
    const cardRotationX = 0; // No X rotation needed for this effect
    
    // Z rotation keeps cards vertical and aligned with the ellipse
    const cardRotationZ = angle + 90;
    
    // Adjust scale based on position - cards at the sides appear slightly larger
    const scale = 0.85;
    
    // Full opacity for all cards
    const opacity = 1;
    
    // Calculate the Z position to create depth
    // Cards at the sides should come forward
    const z = 0; // No Z translation needed for this effect
    
    // Apply a slight offset to prevent cards from perfectly overlapping
    const offsetX = 0;
    const offsetY = 0;
    
    return {
      transform: `translate3d(${x + offsetX}px, ${y + offsetY}px, ${z}px) rotateX(${cardRotationX}deg) rotateY(${cardRotationY}deg) rotateZ(${cardRotationZ}deg) scale(${scale})`,
      zIndex,
      opacity
    };
  };

  // Handle card hover
  const handleCardHover = (card: CardData) => {
    setActiveCard(card);
  };

  // Animate to a specific card - now works with continuous rotation
  const animateToCard = (card: CardData) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    
    const targetIndex = cards.findIndex(c => c.id === card.id);
    if (targetIndex === -1) {
      isAnimating.current = false;

      return;
    }
    
    const cardAngle = 360 / cards.length;
    const targetRotation = cardAngle * targetIndex;
    const currentRotation = rotation % 360;
    
    // Calculate the shortest path to the target rotation
    let rotationDiff = targetRotation - currentRotation;
    
    // Ensure we take the shortest path around the circle
    if (Math.abs(rotationDiff) > 180) {
      rotationDiff = rotationDiff > 0 ? rotationDiff - 360 : rotationDiff + 360;
    }
    
    // Animate rotation
    let startTime: number | null = null;
    const duration = 500; // ms
    const startRotation = rotation; // Capture the starting rotation including all previous rotations
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);
      
      // Apply the rotation difference to the starting rotation
      setRotation(startRotation + rotationDiff * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setActiveCard(card);
        isAnimating.current = false;
      }
    };
    
    requestAnimationFrame(animate);
  };

  // Get main logo image based on active card
  const getMainLogoPath = () => {
    if (!activeCard) return '/assets/logos/1.png';

    return activeCard.logoPath;
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden pt-0" 
      onWheel={handleWheel}
    >
      {/* Center content */}
      <div className="pointer-events-none absolute top-[5%] z-50 flex flex-col items-center justify-center sm:top-[10%] md:top-[15%] lg:static">
        {/* Main logo */}
        <div className="relative mb-2 size-24 transition-all duration-500 ease-in-out sm:mb-3 sm:size-28 md:mb-4 md:size-32 lg:size-40">
          {activeCard && (
            <Image
              src={getMainLogoPath()}
              alt={activeCard.title || 'Logo'}
              fill
              className="object-contain transition-opacity duration-300"
              priority
            />
          )}
        </div>
        {/* Active card title */}
        {activeCard && (
          <div className="text-center transition-all duration-300">
            <h2 className="text-base font-medium sm:text-lg md:text-xl lg:text-2xl">{activeCard.title}</h2>
            {activeCard.count !== undefined && (
              <span className="ml-1 inline-block text-xs text-gray-400 sm:text-sm md:text-base">({activeCard.count})</span>
            )}
          </div>
        )}
      </div>
      {/* Ring of cards */}
      <div 
        ref={ringRef} 
        className="absolute left-0 top-0 size-full"
        style={{ 
          perspective: '1500px',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`,
          transition: 'transform 1s ease-out'
        }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el: HTMLDivElement | null) => { cardRefs.current[index] = el }}
            className={`absolute left-1/2 top-1/2 flex h-14 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer
                      flex-col items-center justify-center bg-white p-0.5 shadow transition-all duration-500
                      sm:h-16 sm:w-12 md:h-20 md:w-14 lg:h-24 lg:w-16
                      ${activeCard?.id === card.id ? 'shadow-md' : ''}`}
            style={getCardStyle(index)}
            onMouseEnter={() => handleCardHover(card)}
            onClick={() => animateToCard(card)}
          >
            <div className="relative mb-0.5 size-5 sm:mb-0.5 sm:size-6 md:mb-1 md:size-8 lg:size-10">
              <Image
                src={card.logoPath}
                alt={card.title}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 20px, (max-width: 768px) 24px, (max-width: 1024px) 32px, 40px"
                priority={index < 10}
              />
            </div>
            <h3 className="text-center text-[5px] font-medium text-gray-800 sm:text-[6px] md:text-[7px] lg:text-[8px]">{card.title}</h3>
            {card.count !== undefined && (
              <span className="text-[4px] text-gray-500 sm:text-[5px] md:text-[6px] lg:text-[7px]">({card.count})</span>
            )}
          </div>
        ))}
      </div>
      {/* Instructions */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-[10px] text-gray-400 sm:bottom-3 sm:text-xs md:bottom-4 md:text-sm">
        <p className="hidden sm:block">Scroll to rotate the ring • Hover over cards to view details • Click to select</p>
        <p className="block sm:hidden">Swipe to rotate • Tap to select</p>
        <div className="mt-1 flex items-center justify-center space-x-2 sm:mt-2 sm:space-x-4">
          <div className="pointer-events-auto flex items-center space-x-1 sm:space-x-2">
            <button 
              onClick={() => setAutoRotateSpeed(Math.max(0.05, autoRotateSpeed - 0.05))} 
              className="flex size-5 items-center justify-center rounded bg-white/10 transition-colors hover:bg-white/20 sm:size-6"
            >
              -
            </button>
            <span className="text-[10px] sm:text-xs">Speed</span>
            <button 
              onClick={() => setAutoRotateSpeed(Math.min(0.5, autoRotateSpeed + 0.05))} 
              className="flex size-5 items-center justify-center rounded bg-white/10 transition-colors hover:bg-white/20 sm:size-6"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicRing;
