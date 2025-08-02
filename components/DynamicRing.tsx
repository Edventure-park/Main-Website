'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface CardData {
  id: number;
  title: string;
  logoPath: string;
}

const DynamicRing = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [activeCard, setActiveCard] = useState<CardData | null>(null);
  const [rotation, setRotation] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [autoRotateSpeed] = useState(0.05);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const ringRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingToCard = useRef(false);

  // Initialize cards data
  useEffect(() => {
    const companyLogos: CardData[] = [
      { id: 1, title: 'Active C', logoPath: '/assets/logos/activec.png' },
      { id: 2, title: 'Adorababy', logoPath: '/assets/logos/adorababy.png' },
      { id: 3, title: 'Adwised', logoPath: '/assets/logos/adwised.png' },
      { id: 4, title: 'AgriTech Consultancy', logoPath: '/assets/logos/agritechconsultancy.png' },
      { id: 5, title: 'A.I.E.L', logoPath: '/assets/logos/aiel.png' },
      { id: 6, title: 'Alpha Ed', logoPath: '/assets/logos/alphaed.png' },
      { id: 7, title: 'Alsi.me', logoPath: '/assets/logos/alsime.png' },
      { id: 8, title: 'AppaRent', logoPath: '/assets/logos/apparent.png' },
      { id: 9, title: 'App Insider', logoPath: '/assets/logos/appinsider.png' },
      { id: 10, title: 'Arde', logoPath: '/assets/logos/arde.png' },
      { id: 11, title: 'Auryn', logoPath: '/assets/logos/aurynin.png' },
      { id: 12, title: 'Back to Earth', logoPath: '/assets/logos/backtoearth.png' },
      { id: 13, title: 'Bare Elements', logoPath: '/assets/logos/bareelements.png' },
      { id: 14, title: 'Bike Becho', logoPath: '/assets/logos/bikebecho.png' },
      { id: 15, title: 'Biofy', logoPath: '/assets/logos/biofy.png' },
      { id: 16, title: 'BioReform', logoPath: '/assets/logos/bioreform.png' },
      { id: 17, title: 'BookMyLawyer', logoPath: '/assets/logos/bookmylawyer.png' },
      { id: 18, title: 'Bootcamps', logoPath: '/assets/logos/bootcamps.png' },
      { id: 19, title: 'BoxLab', logoPath: '/assets/logos/boxlab.png' },
      { id: 20, title: 'Builzy', logoPath: '/assets/logos/builzy.png' },
      { id: 21, title: 'Carde', logoPath: '/assets/logos/carde.png' },
      { id: 22, title: 'ChipIt', logoPath: '/assets/logos/chipit.png' },
      { id: 23, title: 'Cipher Bootcamp', logoPath: '/assets/logos/cipherbootcamp.png' },
      { id: 24, title: 'CleanX', logoPath: '/assets/logos/cleanx.png' },
      { id: 25, title: 'CMO.ae', logoPath: '/assets/logos/cmo.ae.png' },
      { id: 26, title: 'CMO Ltd', logoPath: '/assets/logos/cmoltd.png' },
      { id: 27, title: 'Craprofo', logoPath: '/assets/logos/craprofo.png' },
      { id: 28, title: 'Cupping', logoPath: '/assets/logos/cupping.png' },
      { id: 29, title: 'Curefy', logoPath: '/assets/logos/curefy.png' },
      { id: 30, title: 'D-Chat', logoPath: '/assets/logos/D-chat.png' },
      { id: 31, title: 'Dear Food', logoPath: '/assets/logos/dearfood.png' },
      { id: 32, title: 'Delizia', logoPath: '/assets/logos/delizia.png' },
      { id: 33, title: 'Delta Charge', logoPath: '/assets/logos/deltacharge.png' },
      { id: 34, title: 'Design Mafia', logoPath: '/assets/logos/Designmafia.png' },
      { id: 35, title: 'Diabeat', logoPath: '/assets/logos/diabeat.png' },
      { id: 36, title: 'Doctera', logoPath: '/assets/logos/doctera.png' },
      { id: 37, title: 'Dovely', logoPath: '/assets/logos/dovely.png' },
      { id: 38, title: 'Draft Room', logoPath: '/assets/logos/draftroom.png' },
      { id: 39, title: 'Eco Friendly Trash Bins', logoPath: '/assets/logos/ecofriendlytrashbins.png' },
      { id: 40, title: 'EduHub', logoPath: '/assets/logos/eduhub.png' },
      { id: 41, title: 'Edventia', logoPath: '/assets/logos/edventia.png' },
      { id: 42, title: 'Elaago', logoPath: '/assets/logos/elaago.png' },
      { id: 43, title: 'Elysian Life', logoPath: '/assets/logos/elysianlife.png' },
      { id: 44, title: 'Enwrite', logoPath: '/assets/logos/enwrite.png' },
      { id: 45, title: 'ERA', logoPath: '/assets/logos/era.png' },
      { id: 46, title: 'Exa Tech', logoPath: '/assets/logos/exatech.png' },
      { id: 47, title: 'Farm in the Box', logoPath: '/assets/logos/farminthebox.png' },
      { id: 48, title: 'FEVL', logoPath: '/assets/logos/fevl.png' },
      { id: 49, title: 'Fight to Last', logoPath: '/assets/logos/fighttolast.png' },
      { id: 50, title: 'Firabulous', logoPath: '/assets/logos/firabulous.png' },
      { id: 51, title: 'Flowerly', logoPath: '/assets/logos/flowerly.png' },
      { id: 52, title: 'Forever Cookie', logoPath: '/assets/logos/forevercookie.png' },
      { id: 53, title: 'Founders Friday', logoPath: '/assets/logos/foundersfriday.png' },
      { id: 54, title: 'Freedle', logoPath: '/assets/logos/freedle.png' },
      { id: 55, title: 'Fun Finance', logoPath: '/assets/logos/funfinance.png' },
      { id: 56, title: 'Fun Finder', logoPath: '/assets/logos/funfinder.png' },
      { id: 57, title: 'Good Job', logoPath: '/assets/logos/goodjob.png' },
      { id: 58, title: 'Good Mind', logoPath: '/assets/logos/goodmind.png' },
      { id: 59, title: 'Grassify', logoPath: '/assets/logos/grassify.png' },
      { id: 60, title: 'Green Build', logoPath: '/assets/logos/greenbuild.png' },
      { id: 61, title: 'Guardian Jacket', logoPath: '/assets/logos/guardianjacket.png' },
      { id: 62, title: 'Highlancer', logoPath: '/assets/logos/highlancer.png' },
      { id: 63, title: 'Housepital', logoPath: '/assets/logos/housepital.png' },
      { id: 64, title: 'Hunar Hunt', logoPath: '/assets/logos/hunarhunt.png' },
      { id: 65, title: 'IAQ', logoPath: '/assets/logos/iaq.png' },
      { id: 66, title: 'Idejavu', logoPath: '/assets/logos/idejavu.png' },
      { id: 67, title: 'Immersi', logoPath: '/assets/logos/immersi.png' },
      { id: 68, title: 'Indefinite', logoPath: '/assets/logos/indefinite.png' },
      { id: 69, title: 'Infinite Loop', logoPath: '/assets/logos/infiniteloop.png' },
      { id: 70, title: 'Insight Services', logoPath: '/assets/logos/insightservices.png' },
      { id: 71, title: 'iTuned', logoPath: '/assets/logos/ituned.png' },
      { id: 72, title: 'iWater', logoPath: '/assets/logos/iwater.png' },
      { id: 73, title: 'Jasmine', logoPath: '/assets/logos/jasmine.png' },
      { id: 74, title: 'Kagitam', logoPath: '/assets/logos/kagitam.png' },
      { id: 75, title: 'Kiddie Wink School', logoPath: '/assets/logos/kiddiewinkschool.png' },
      { id: 76, title: 'Magic Build', logoPath: '/assets/logos/magicbuild.png' },
      { id: 77, title: 'Magic Number', logoPath: '/assets/logos/Magiknumber.png' },
      { id: 78, title: 'Majdoor', logoPath: '/assets/logos/majdoor.png' },
      { id: 79, title: 'Mama Food', logoPath: '/assets/logos/mamafood.png' },
      { id: 80, title: 'Masira', logoPath: '/assets/logos/masira.png' },
      { id: 81, title: 'Meraki Snacks', logoPath: '/assets/logos/merakisnacks.png' },
      { id: 82, title: 'Metalingo', logoPath: '/assets/logos/metalingo.png' },
      { id: 83, title: 'Meta Man', logoPath: '/assets/logos/metaman.png' },
      { id: 84, title: 'Meta Volt', logoPath: '/assets/logos/metavolt.png' },
      { id: 85, title: 'Microbots', logoPath: '/assets/logos/microbots.png' },
      { id: 86, title: 'Microbots Co', logoPath: '/assets/logos/microbotsco.png' },
      { id: 87, title: 'MUA 101', logoPath: '/assets/logos/mua101.png' },
      { id: 88, title: 'My Lecture Pro', logoPath: '/assets/logos/mylecturepro.png' },
      { id: 89, title: 'My Mestri', logoPath: '/assets/logos/mymestri.png' },
      { id: 90, title: 'MyPing', logoPath: '/assets/logos/myping.png' },
      { id: 91, title: 'My Unicorn', logoPath: '/assets/logos/myunicorn.png' },
      { id: 92, title: 'My Wave Chat', logoPath: '/assets/logos/mywavechat.png' },
      { id: 93, title: 'Nannyma', logoPath: '/assets/logos/nannyma.png' },
      { id: 94, title: 'Neve', logoPath: '/assets/logos/neve.png' },
      { id: 95, title: 'Newtonize', logoPath: '/assets/logos/newtonize.png' },
      { id: 96, title: 'Nisa Wallet', logoPath: '/assets/logos/nisawallet.png' },
      { id: 97, title: 'Nurel Ice Cream', logoPath: '/assets/logos/nurelcecream.png' },
      { id: 98, title: 'Nutrish', logoPath: '/assets/logos/nutrish.png' },
      { id: 99, title: 'OFAS', logoPath: '/assets/logos/ofas.png' },
      { id: 100, title: 'Partzo', logoPath: '/assets/logos/partzo.png' },
      { id: 101, title: 'Pets Cart', logoPath: '/assets/logos/petscart.png' },
      { id: 102, title: 'Pets et Go', logoPath: '/assets/logos/petsetgo.png' },
      { id: 103, title: 'Pharmaverse', logoPath: '/assets/logos/pharmaverse.png' },
      { id: 104, title: 'PI Diamonds', logoPath: '/assets/logos/pidiamonds.png' },
      { id: 105, title: 'Pima Kallion', logoPath: '/assets/logos/pimakallion.png' },
      { id: 106, title: 'Plastocons', logoPath: '/assets/logos/plastocons.png' },
      { id: 107, title: 'Plus Love', logoPath: '/assets/logos/pluslove.png' },
      { id: 108, title: 'Pods Auto', logoPath: '/assets/logos/podsauto.png' },
      { id: 109, title: 'Polymath Academy', logoPath: '/assets/logos/polymathacademy.png' },
      { id: 110, title: 'PowerFi', logoPath: '/assets/logos/powerfi.png' },
      { id: 111, title: 'Precast Reusable Roads', logoPath: '/assets/logos/precastresusableroads.png' },
      { id: 112, title: 'Pro Sound', logoPath: '/assets/logos/prosound.png' },
      { id: 113, title: 'Pro Tech', logoPath: '/assets/logos/Protech.png' },
      { id: 114, title: 'Pureo', logoPath: '/assets/logos/pureo.png' },
      { id: 115, title: 'Quiz Excel', logoPath: '/assets/logos/quizexcel.png' },
      { id: 116, title: 'R3 Designs', logoPath: '/assets/logos/r3designs.png' },
      { id: 117, title: 'Rebate', logoPath: '/assets/logos/rebate.png' },
      { id: 118, title: 'Reward X', logoPath: '/assets/logos/rewardX.png' },
      { id: 119, title: 'Rolstoel', logoPath: '/assets/logos/rolstoel.png' },
      { id: 120, title: 'Scrap Man', logoPath: '/assets/logos/scrapman.png' },
      { id: 121, title: 'SF EdTech', logoPath: '/assets/logos/sfedtech.png' },
      { id: 122, title: 'Shop Kart', logoPath: '/assets/logos/shopkart.png' },
      { id: 123, title: 'Skillancer', logoPath: '/assets/logos/skillancer.png' },
      { id: 124, title: 'Skill Up', logoPath: '/assets/logos/skillup.png' },
      { id: 125, title: 'Smartia', logoPath: '/assets/logos/smartia.png' },
      { id: 126, title: 'Smart Shelf', logoPath: '/assets/logos/smartshelf.png' },
      { id: 127, title: 'Smart Shelf 1', logoPath: '/assets/logos/smartshelf1.png' },
      { id: 128, title: 'Spadit', logoPath: '/assets/logos/spadit.png' },
      { id: 129, title: 'Sportsta', logoPath: '/assets/logos/sportsta.png' },
      { id: 130, title: 'SpyQ', logoPath: '/assets/logos/spyq.png' },
      { id: 131, title: 'Super Maids', logoPath: '/assets/logos/supermaids.png' },
      { id: 132, title: 'The Good Pharmacy', logoPath: '/assets/logos/thegoodpharmacy.png' },
      { id: 133, title: 'The Real Bionics', logoPath: '/assets/logos/therealbionics.png' },
      { id: 134, title: 'Thrill Simulator', logoPath: '/assets/logos/Thrillsimulator.png' },
      { id: 135, title: 'Todly', logoPath: '/assets/logos/todly.png' },
      { id: 136, title: 'Torq Electric', logoPath: '/assets/logos/torqelectric.png' },
      { id: 137, title: 'Track It', logoPath: '/assets/logos/trackit.png' },
      { id: 138, title: 'Track My Bus', logoPath: '/assets/logos/trackmybus.png' },
      { id: 139, title: 'Trafflow', logoPath: '/assets/logos/trafflow.png' },
      { id: 140, title: 'Transformify', logoPath: '/assets/logos/transformify.png' },
      { id: 141, title: 'True Scrubs', logoPath: '/assets/logos/truescrubs.png' },
      { id: 142, title: 'T Trainer', logoPath: '/assets/logos/ttrainer.png' },
      { id: 143, title: 'Ubuntu', logoPath: '/assets/logos/ubuntu.png' },
      { id: 144, title: 'Vectofy', logoPath: '/assets/logos/vectofy.png' },
      { id: 145, title: 'Vivify', logoPath: '/assets/logos/vivify.png' },
      { id: 146, title: 'Zedle Play', logoPath: '/assets/logos/zedleplay.png' },
    ];

    setCards(companyLogos);
    setActiveCard(companyLogos[0]);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation logic - simplified and always active
  useEffect(() => {
    if (isUserInteracting || isAnimatingToCard.current) {
      return;
    }

    const animate = () => {
      setRotation(prev => prev + autoRotateSpeed);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoRotateSpeed, isUserInteracting]);

  // Update active card based on rotation
  useEffect(() => {
    if (cards.length === 0) return;

    const cardAngle = 360 / cards.length;
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedRotation / cardAngle) % cards.length;
    
    if (activeCard?.id !== cards[activeIndex]?.id) {
      setActiveCard(cards[activeIndex]);
    }
  }, [rotation, cards, activeCard]);

  // Handle user interaction
  const handleUserInteraction = useCallback(() => {
    setIsUserInteracting(true);
    
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  }, []);

  // Handle wheel events
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    handleUserInteraction();
    
    const delta = e.deltaY * 0.5;
    setRotation(prev => prev + delta);
  }, [handleUserInteraction]);

  // Calculate card position with improved dynamics
  const getCardStyle = useCallback((index: number) => {
    const totalCards = cards.length;
    if (totalCards === 0) return {};

    const angle = (360 / totalCards) * index + rotation;
    const radian = (angle * Math.PI) / 180;

    // Increased ring size for better spacing with larger center logo
    const baseSize = Math.min(windowSize.width, windowSize.height) * 0.45;
    const radiusX = baseSize * 1.6;
    const radiusY = baseSize * 0.6;

    const x = radiusX * Math.cos(radian);
    const y = radiusY * Math.sin(radian);

    // Front-facing cards with minimal rotation - all cards face forward
    const cardRotationY = 0; // Keep cards front-facing
    const cardRotationZ = 0; // No Z rotation for cleaner look
    const scale = 0.7 + Math.abs(Math.cos(radian)) * 0.4; // Slightly larger base scale
    const zIndex = Math.round(1000 + 500 * Math.sin(radian));

    // Dynamic effects without blur for better visibility
    const distanceFromFront = Math.abs(Math.sin(radian));
    const brightness = 0.9 + (1 - distanceFromFront) * 0.1; // Minimal brightness variation

    // Enhanced hover effects with smooth transitions
    const isHovered = hoveredCard === index;
    const hoverScale = isHovered ? 1.3 : 1;
    const hoverY = isHovered ? -15 : 0;
    const hoverRotation = 0; // Keep front-facing even on hover
    
    // Add glow effect on hover without blur
    const glowIntensity = isHovered ? 20 : 0;

    return {
      transform: `translate3d(${x}px, ${y + hoverY}px, 0px) rotateY(${cardRotationY}deg) rotateZ(${cardRotationZ + hoverRotation}deg) scale(${scale * hoverScale})`,
      zIndex: isHovered ? 2000 : zIndex,
      opacity: 1, // Full opacity for all cards
      filter: `brightness(${brightness}) drop-shadow(0 0 ${glowIntensity}px rgba(59, 130, 246, 0.6))`,
      transition: isHovered ? 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'all 0.3s ease-out',
    };
  }, [cards.length, rotation, windowSize, hoveredCard]);

  // Animate to specific card with enhanced easing
  const animateToCard = useCallback((targetCard: CardData) => {
    if (isAnimatingToCard.current) return;
    
    isAnimatingToCard.current = true;
    setIsUserInteracting(true);
    
    const targetIndex = cards.findIndex(c => c.id === targetCard.id);
    if (targetIndex === -1) {
      isAnimatingToCard.current = false;

      return;
    }

    const cardAngle = 360 / cards.length;
    const targetRotation = cardAngle * targetIndex;
    const currentRotation = rotation % 360;
    
    let rotationDiff = targetRotation - currentRotation;
    
    if (Math.abs(rotationDiff) > 180) {
      rotationDiff = rotationDiff > 0 ? rotationDiff - 360 : rotationDiff + 360;
    }

    const startRotation = rotation;
    const duration = 1200; // Slightly longer for smoother animation
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Enhanced easing with bounce effect
      const easeProgress = progress < 0.5 
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      setRotation(startRotation + rotationDiff * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        isAnimatingToCard.current = false;
        setTimeout(() => setIsUserInteracting(false), 500);
      }
    };
    
    requestAnimationFrame(animate);
  }, [cards, rotation]);

  return (
    <div 
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100"
      onWheel={handleWheel}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-1/4 size-32 animate-pulse rounded-full bg-blue-400/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 size-40 animate-pulse rounded-full bg-purple-400/20 blur-3xl delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 size-24 animate-pulse rounded-full bg-green-400/20 blur-3xl delay-500"></div>
      </div>
      {/* Center content with enhanced animations */}
      <div className="pointer-events-none absolute z-50 flex flex-col items-center justify-center">
        {/* Main logo with increased size */}
        <div className="relative mb-6 size-48 transition-all duration-700 ease-out lg:size-56">
          {activeCard && (
            <div className="relative size-full">
              <Image
                src={activeCard.logoPath}
                alt={activeCard.title}
                fill
                className="object-contain transition-all duration-500 hover:scale-105"
                priority
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl"></div>
            </div>
          )}
        </div>
        {/* Active card title with typing effect */}
        {activeCard && (
          <div className="text-center transition-all duration-500">
            <h2 className="animate-bounce bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-medium text-transparent lg:text-3xl">
              {activeCard.title}
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
        )}
      </div>
      {/* Ring of cards */}
      <div 
        ref={ringRef} 
        className="absolute inset-0"
        style={{ 
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute left-1/2 top-1/2 flex h-24 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer
                      flex-col items-center justify-center rounded-lg bg-white p-2 shadow-xl transition-all duration-300
                      hover:bg-gradient-to-br hover:from-white hover:to-blue-50 hover:shadow-2xl lg:h-28 lg:w-24
                      ${activeCard?.id === card.id ? 'shadow-blue-500/50 ring-2 ring-blue-500' : ''}
                      ${hoveredCard === index ? 'shadow-blue-400/50 ring-2 ring-blue-400' : ''}`}
            style={getCardStyle(index)}
            onClick={() => animateToCard(card)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative mb-2 size-10 lg:size-12">
              <Image
                src={card.logoPath}
                alt={card.title}
                fill
                className={`object-contain transition-all duration-300 ${
                  hoveredCard === index ? 'scale-125 brightness-110' : 'hover:scale-110'
                }`}
                sizes="(max-width: 1024px) 40px, 48px"
                priority={index < 8}
              />
              {/* Animated border on hover without blur */}
              {hoveredCard === index && (
                <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
              )}
            </div>
            <h3 className={`text-center text-[8px] font-medium transition-all duration-300 lg:text-[10px] ${
              hoveredCard === index 
                ? 'scale-110 font-semibold text-blue-600' 
                : 'text-gray-800'
            }`}>
              {card.title}
            </h3>
            {/* Hover tooltip - clear and crisp */}
            {hoveredCard === index && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-3 py-1 text-[10px] font-medium text-white shadow-lg">
                {card.title}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Enhanced instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <div className="text-xs text-gray-400">
          <p className="animate-pulse">Scroll to rotate • Click cards to select • <span className="font-medium text-blue-500">Hover for enhanced effects</span></p>
        </div>
      </div>
    </div>
  );
};

export default DynamicRing;