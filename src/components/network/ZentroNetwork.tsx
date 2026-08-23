import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Sparkles, 
  TrendingUp, 
  Film, 
  Server, 
  Layers,
  Cpu
} from 'lucide-react';
import { NETWORK_SERVICES, INTELLIGENT_PULSE_ROUTE } from './networkData';

interface ZentroNetworkProps {
  onSelectService?: (serviceName: string) => void;
  className?: string;
}

interface DragState {
  nodeId: string;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
}

interface SpringVector {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const ZentroNetwork: React.FC<ZentroNetworkProps> = ({
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 540, height: 540 });
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [pulseProgress, setPulseProgress] = useState(0); // 0..1 out, 1..2 dwell at node, 2..3 return
  const [routeIndex, setRouteIndex] = useState(0);
  const [wavePhase, setWavePhase] = useState(0);
  const [isInViewport, setIsInViewport] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Drag state
  const [dragState, setDragState] = useState<DragState | null>(null);
  const dragStateRef = useRef<DragState | null>(null);
  dragStateRef.current = dragState;

  // Physics offsets for nodes and center logo
  const [nodeOffsets, setNodeOffsets] = useState<Record<string, SpringVector>>({});
  const nodeOffsetsRef = useRef<Record<string, SpringVector>>({});

  const [centerOffset, setCenterOffset] = useState<SpringVector>({ x: 0, y: 0, vx: 0, vy: 0 });
  const centerOffsetRef = useRef<SpringVector>({ x: 0, y: 0, vx: 0, vy: 0 });

  // Icon mapping
  const renderIcon = (iconName: string, classNameStr: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className={classNameStr} />;
      case 'Smartphone': return <Smartphone className={classNameStr} />;
      case 'Bot': return <Bot className={classNameStr} />;
      case 'Sparkles': return <Sparkles className={classNameStr} />;
      case 'TrendingUp': return <TrendingUp className={classNameStr} />;
      case 'Film': return <Film className={classNameStr} />;
      case 'Server': return <Server className={classNameStr} />;
      case 'Layers': return <Layers className={classNameStr} />;
      default: return <Cpu className={classNameStr} />;
    }
  };

  // Accessibility check
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Viewport observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ResizeObserver for responsive SVG & container sizing
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        // Keep responsive square size with safe margins
        const boundedSize = Math.max(300, Math.min(width, 560));
        setContainerSize({ width: boundedSize, height: boundedSize });
      }
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  // Geometry calculations
  const cx = containerSize.width / 2;
  const cy = containerSize.height / 2;
  const isMobile = containerSize.width < 440;
  const isSmallMobile = containerSize.width < 360;

  // Responsive radius to ensure all pills stay safely inside on any device
  const baseRadius = isSmallMobile
    ? containerSize.width * 0.33
    : isMobile
    ? containerSize.width * 0.35
    : containerSize.width * 0.37;

  // 8 distinct well-spaced services for balanced circular constellation
  const servicesList = useMemo(() => {
    const selectedIds = [
      'website',
      'mobile-app',
      'ai-products',
      'branding',
      'marketing',
      'video-motion',
      'cloud-it',
      'uiux-systems'
    ];
    return NETWORK_SERVICES.filter(s => selectedIds.includes(s.id));
  }, []);

  // Home coordinates for each service
  const nodesWithCoordinates = useMemo(() => {
    const total = servicesList.length;
    return servicesList.map((node, index) => {
      const angleDeg = (index / total) * 360 - 90;
      const rad = (angleDeg * Math.PI) / 180;
      const stagger = index % 2 === 0 ? 1.03 : 0.97;
      const r = baseRadius * stagger;

      const homeX = cx + Math.cos(rad) * r;
      const homeY = cy + Math.sin(rad) * r;

      return {
        ...node,
        angleDeg,
        homeX,
        homeY,
        index
      };
    });
  }, [servicesList, cx, cy, baseRadius]);

  // Current active target node
  const currentTargetId = INTELLIGENT_PULSE_ROUTE[routeIndex % INTELLIGENT_PULSE_ROUTE.length];
  const targetedNode = useMemo(() => {
    return nodesWithCoordinates.find(n => n.id === currentTargetId) || nodesWithCoordinates[0];
  }, [nodesWithCoordinates, currentTargetId]);

  // Pointer drag event handlers
  const handlePointerDown = (nodeId: string, e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
    setDragState({
      nodeId,
      startX: e.clientX,
      startY: e.clientY,
      currentX: e.clientX,
      currentY: e.clientY
    });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragState) return;
    setDragState(prev => prev ? {
      ...prev,
      currentX: e.clientX,
      currentY: e.clientY
    } : null);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!dragState) return;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
    setDragState(null);
  };

  // Ultra-Slow Motion Spring Physics Engine & Continuous Wave Loop
  useEffect(() => {
    if (!isInViewport) return;

    let animId: number;
    let lastTime = performance.now();
    let stage = 0; // 0: out, 1: focus node, 2: return

    // Ultra slow-motion spring constants (silky gentle zero-gravity drift)
    const nodeSpringStiffness = 0.012; // Very slow spring
    const nodeSpringDamping = 0.945;   // High damping for gentle return

    const centerSpringStiffness = 0.015;
    const centerSpringDamping = 0.93;

    const loop = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const currentOffsets = { ...nodeOffsetsRef.current };
      let currentCenter = { ...centerOffsetRef.current };
      const currentDrag = dragStateRef.current;

      // 1. Center Logo Elastic Pull toward fetched node
      if (currentDrag) {
        const dragDx = currentDrag.currentX - currentDrag.startX;
        const dragDy = currentDrag.currentY - currentDrag.startY;

        // Center moves ~22% in the direction of the pull
        const targetCenterX = dragDx * 0.22;
        const targetCenterY = dragDy * 0.22;

        const cfx = (targetCenterX - currentCenter.x) * 0.08;
        const cfy = (targetCenterY - currentCenter.y) * 0.08;
        currentCenter.vx = (currentCenter.vx + cfx) * 0.88;
        currentCenter.vy = (currentCenter.vy + cfy) * 0.88;
        currentCenter.x += currentCenter.vx;
        currentCenter.y += currentCenter.vy;
      } else {
        // Slow-motion return of center logo to (0,0)
        const cfx = -centerSpringStiffness * currentCenter.x;
        const cfy = -centerSpringStiffness * currentCenter.y;
        currentCenter.vx = (currentCenter.vx + cfx) * centerSpringDamping;
        currentCenter.vy = (currentCenter.vy + cfy) * centerSpringDamping;
        currentCenter.x += currentCenter.vx;
        currentCenter.y += currentCenter.vy;

        if (Math.abs(currentCenter.x) < 0.02 && Math.abs(currentCenter.vx) < 0.02) currentCenter.x = 0;
        if (Math.abs(currentCenter.y) < 0.02 && Math.abs(currentCenter.vy) < 0.02) currentCenter.y = 0;
      }

      centerOffsetRef.current = currentCenter;
      setCenterOffset(currentCenter);

      // 2. Node Spring Physics
      nodesWithCoordinates.forEach(node => {
        const offset = currentOffsets[node.id] || { x: 0, y: 0, vx: 0, vy: 0 };

        if (currentDrag && currentDrag.nodeId === node.id) {
          // Direct drag displacement
          const dx = currentDrag.currentX - currentDrag.startX;
          const dy = currentDrag.currentY - currentDrag.startY;
          offset.x = dx;
          offset.y = dy;
          offset.vx = 0;
          offset.vy = 0;
        } else if (currentDrag && currentDrag.nodeId !== node.id) {
          // Sibling nodes experience slight elastic web pull (~7%)
          const siblingDx = (currentDrag.currentX - currentDrag.startX) * 0.07;
          const siblingDy = (currentDrag.currentY - currentDrag.startY) * 0.07;
          
          const fx = (siblingDx - offset.x) * 0.04;
          const fy = (siblingDy - offset.y) * 0.04;
          offset.vx = (offset.vx + fx) * 0.90;
          offset.vy = (offset.vy + fy) * 0.90;
          offset.x += offset.vx;
          offset.y += offset.vy;
        } else {
          // Ultra slow-motion gentle return to home position (0,0)
          const fx = -nodeSpringStiffness * offset.x;
          const fy = -nodeSpringStiffness * offset.y;
          offset.vx = (offset.vx + fx) * nodeSpringDamping;
          offset.vy = (offset.vy + fy) * nodeSpringDamping;
          offset.x += offset.vx;
          offset.y += offset.vy;

          if (Math.abs(offset.x) < 0.02 && Math.abs(offset.vx) < 0.02) offset.x = 0;
          if (Math.abs(offset.y) < 0.02 && Math.abs(offset.vy) < 0.02) offset.y = 0;
        }
        currentOffsets[node.id] = offset;
      });

      nodeOffsetsRef.current = currentOffsets;
      setNodeOffsets(currentOffsets);

      // 3. Continuous Harmonic Wave Phase (Always waving!)
      setWavePhase(prev => (prev + delta * 1.35) % (Math.PI * 2));

      // 4. Slow-Motion Wave Light Propagation Sequence
      if (!prefersReducedMotion && !hoveredNodeId) {
        setPulseProgress(prev => {
          if (stage === 0) {
            const next = prev + delta * 0.32; // Slow travel out
            if (next >= 1) {
              stage = 1;
              setActiveNodeId(currentTargetId);
              return 1;
            }
            return next;
          } else if (stage === 1) {
            const next = prev + delta * 0.40; // Dwell glow at node
            if (next >= 2) {
              stage = 2;
              return 2;
            }
            return next;
          } else {
            const next = prev + delta * 0.35; // Slow return flow
            if (next >= 3) {
              stage = 0;
              setActiveNodeId(null);
              setRouteIndex(r => (r + 1) % INTELLIGENT_PULSE_ROUTE.length);
              return 0;
            }
            return next;
          }
        });
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isInViewport, prefersReducedMotion, hoveredNodeId, currentTargetId, nodesWithCoordinates]);

  // Dynamic Center Coordinates (Reacts to fetching/pulling)
  const centerPos = useMemo(() => {
    return {
      x: cx + centerOffset.x,
      y: cy + centerOffset.y
    };
  }, [cx, cy, centerOffset]);

  // Compute rendered nodes with continuous realistic wave rope paths
  const renderedNodes = useMemo(() => {
    return nodesWithCoordinates.map((node, index) => {
      const offset = nodeOffsets[node.id] || { x: 0, y: 0 };
      
      // Idle slow organic floating drift
      const idleFloatX = Math.cos(wavePhase + index * 0.9) * 2.8;
      const idleFloatY = Math.sin(wavePhase + index * 1.1) * 2.8;

      const posX = node.homeX + offset.x + idleFloatX;
      const posY = node.homeY + offset.y + idleFloatY;

      // Realistic Dynamic Wave Geometry between Center and Node
      const startX = centerPos.x;
      const startY = centerPos.y;
      const endX = posX;
      const endY = posY;

      const dx = endX - startX;
      const dy = endY - startY;
      const dist = Math.hypot(dx, dy) || 1;
      
      // Normal vector (perpendicular to the line)
      const nx = -dy / dist;
      const ny = dx / dist;

      // Continuous harmonic wave physics on the rope (waving constantly!)
      const waveFreq = wavePhase * 1.6 + index * 1.2;
      const dynamicSag = 12 + Math.sin(waveFreq) * 6;
      const harmonicOffset1 = Math.sin(waveFreq) * 10;
      const harmonicOffset2 = Math.cos(waveFreq + 0.8) * 8;

      // Cubic Bezier Control Points for genuine S-curve wave ropes
      const cp1X = startX + dx * 0.33 + nx * (dynamicSag + harmonicOffset1);
      const cp1Y = startY + dy * 0.33 + ny * (dynamicSag + harmonicOffset1);

      const cp2X = startX + dx * 0.66 + nx * (dynamicSag * 0.7 - harmonicOffset2);
      const cp2Y = startY + dy * 0.66 + ny * (dynamicSag * 0.7 - harmonicOffset2);

      // SVG Path Data (Cubic Bezier curve that undulates like a real fluid wave)
      const pathD = `M ${startX.toFixed(1)} ${startY.toFixed(1)} C ${cp1X.toFixed(1)} ${cp1Y.toFixed(1)}, ${cp2X.toFixed(1)} ${cp2Y.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(1)}`;

      const isHovered = hoveredNodeId === node.id;
      const isActive = activeNodeId === node.id;
      const isTargeted = targetedNode?.id === node.id;

      // Clear, crisp visibility for all nodes (0.90 to 1.0)
      const currentOpacity = (isHovered || isActive || (isTargeted && pulseProgress < 2)) ? 1 : 0.92;

      return {
        ...node,
        x: posX,
        y: posY,
        startX,
        startY,
        cp1X,
        cp1Y,
        cp2X,
        cp2Y,
        pathD,
        isHovered,
        isActive,
        currentOpacity
      };
    });
  }, [nodesWithCoordinates, nodeOffsets, wavePhase, centerPos, hoveredNodeId, activeNodeId, targetedNode, pulseProgress]);

  // Active target node
  const activeRenderedTarget = useMemo(() => {
    return renderedNodes.find(n => n.id === currentTargetId) || renderedNodes[0];
  }, [renderedNodes, currentTargetId]);

  // Wave Light Packet calculation on the dynamic cubic Bezier path
  const pulseCoordinates = useMemo(() => {
    if (!activeRenderedTarget) return { x: centerPos.x, y: centerPos.y, opacity: 0, waveX: centerPos.x, waveY: centerPos.y, tailPoints: [] };

    const p0 = { x: activeRenderedTarget.startX, y: activeRenderedTarget.startY };
    const p1 = { x: activeRenderedTarget.cp1X, y: activeRenderedTarget.cp1Y };
    const p2 = { x: activeRenderedTarget.cp2X, y: activeRenderedTarget.cp2Y };
    const p3 = { x: activeRenderedTarget.x, y: activeRenderedTarget.y };

    let t = 0;
    let opacity = 0;

    // Stage 0: Center -> Node (0 -> 1)
    if (pulseProgress <= 1) {
      t = Math.max(0, Math.min(1, pulseProgress));
      opacity = 1;
    } 
    // Stage 1: Active Dwell at Node (1 -> 2)
    else if (pulseProgress <= 2) {
      t = 1;
      opacity = 0;
    } 
    // Stage 2: Return Flow Node -> Center (2 -> 3)
    else {
      const returnT = Math.max(0, Math.min(1, pulseProgress - 2));
      t = 1 - returnT;
      opacity = 0.85 * (1 - returnT * 0.35);
    }

    // Cubic Bezier Evaluation: B(t) = (1-t)^3 P0 + 3(1-t)^2 t P1 + 3(1-t)t^2 P2 + t^3 P3
    const getCubicPoint = (timeVal: number) => {
      const ct = Math.max(0, Math.min(1, timeVal));
      const u = 1 - ct;
      const bx = Math.pow(u, 3) * p0.x + 3 * Math.pow(u, 2) * ct * p1.x + 3 * u * Math.pow(ct, 2) * p2.x + Math.pow(ct, 3) * p3.x;
      const by = Math.pow(u, 3) * p0.y + 3 * Math.pow(u, 2) * ct * p1.y + 3 * u * Math.pow(ct, 2) * p2.y + Math.pow(ct, 3) * p3.y;

      // Tangent derivative for normal wave ripple
      const tx = 3 * Math.pow(u, 2) * (p1.x - p0.x) + 6 * u * ct * (p2.x - p1.x) + 3 * Math.pow(ct, 2) * (p3.x - p2.x);
      const ty = 3 * Math.pow(u, 2) * (p1.y - p0.y) + 6 * u * ct * (p2.y - p1.y) + 3 * Math.pow(ct, 2) * (p3.y - p2.y);
      const len = Math.hypot(tx, ty) || 1;
      const nx = -ty / len;
      const ny = tx / len;

      const rippleAmp = Math.sin(ct * Math.PI) * 7.5;
      const rippleOffset = Math.sin(ct * Math.PI * 5 - wavePhase * 2) * rippleAmp;

      return {
        x: bx + nx * rippleOffset,
        y: by + ny * rippleOffset,
        baseX: bx,
        baseY: by
      };
    };

    const currentHead = getCubicPoint(t);

    // Multi-segment trailing stream particles for realistic fluid flow
    const tailPoints = [0.03, 0.06, 0.1, 0.15].map((lag, idx) => {
      const lagT = pulseProgress <= 1 ? Math.max(0, t - lag) : Math.min(1, t + lag);
      const pt = getCubicPoint(lagT);
      return {
        ...pt,
        opacity: (1 - (idx + 1) * 0.22) * opacity,
        radius: Math.max(1, 3.2 - idx * 0.6)
      };
    });

    return {
      x: currentHead.baseX,
      y: currentHead.baseY,
      waveX: currentHead.x,
      waveY: currentHead.y,
      opacity,
      tailPoints
    };
  }, [activeRenderedTarget, pulseProgress, centerPos, wavePhase]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full aspect-square max-w-[560px] mx-auto flex items-center justify-center select-none ${className}`}
      id="zentro-digital-network"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Background Soft Radial Bloom */}
      <div className="absolute inset-0 bg-radial-glow opacity-70 pointer-events-none" />
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#0878FF]/15 blur-3xl pointer-events-none" />

      {/* SVG Canvas for Wave Ropes & Fluid Light Pulse */}
      <svg 
        viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
        className="w-full h-full absolute inset-0 pointer-events-none z-10 overflow-visible"
      >
        <defs>
          {/* Energy Wave Particle Glow */}
          <radialGradient id="waveLightGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="30%" stopColor="#00B8E6" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#0878FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0878FF" stopOpacity="0" />
          </radialGradient>

          {/* Faded Rope Gradients for each node (Center solid, middle faded, node solid) */}
          {renderedNodes.map((node) => (
            <linearGradient 
              key={`grad-${node.id}`} 
              id={`ropeGrad-${node.id}`} 
              x1={centerPos.x} 
              y1={centerPos.y} 
              x2={node.x} 
              y2={node.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#00B8E6" stopOpacity="0.75" />
              <stop offset="35%" stopColor="#0878FF" stopOpacity="0.18" />
              <stop offset="65%" stopColor="#00B8E6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00B8E6" stopOpacity="0.88" />
            </linearGradient>
          ))}

          {/* Active Highlighted Rope Gradient */}
          <linearGradient id="activeRopeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B8E6" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00B8E6" stopOpacity="0.95" />
          </linearGradient>

          {/* Soft Glow Filter */}
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Subtle Orbit Ring */}
        <circle
          cx={centerPos.x}
          cy={centerPos.y}
          r={baseRadius * 0.98}
          fill="none"
          stroke="rgba(0, 184, 230, 0.12)"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="transition-all duration-300"
        />

        {/* 2. Constantly Animated Wave Ropes (S-curve harmonic physics) */}
        {renderedNodes.map((node) => {
          const isHighlighted = node.isHovered || node.isActive || (activeRenderedTarget?.id === node.id && pulseProgress < 2);

          return (
            <g key={`rope-${node.id}`} opacity={node.currentOpacity}>
              {/* Main Faded Wavy Rope */}
              <path
                d={node.pathD}
                fill="none"
                stroke={`url(#ropeGrad-${node.id})`}
                strokeWidth={isHighlighted ? "2.2" : "1.4"}
                strokeLinecap="round"
              />

              {/* Ambient Traveling Wave Shimmer */}
              <path
                d={node.pathD}
                fill="none"
                stroke="#00B8E6"
                strokeWidth="1"
                strokeDasharray="6 24"
                strokeDashoffset={-wavePhase * 18}
                opacity={isHighlighted ? 0.8 : 0.35}
              />

              {/* Energized Overlay Rope when Active / Hovered */}
              {isHighlighted && (
                <path
                  d={node.pathD}
                  fill="none"
                  stroke="url(#activeRopeGrad)"
                  strokeWidth="2.5"
                  filter="url(#softGlow)"
                />
              )}
            </g>
          );
        })}

        {/* 3. Real Slow-Motion Wave Light Flow with Trailing Stream Particles */}
        {!prefersReducedMotion && pulseCoordinates.opacity > 0 && (
          <g>
            {/* Trailing Filament Flow Stream */}
            {pulseCoordinates.tailPoints?.map((tPt, idx) => (
              <circle
                key={`tail-${idx}`}
                cx={tPt.x}
                cy={tPt.y}
                r={tPt.radius}
                fill="#00B8E6"
                opacity={tPt.opacity}
                filter="url(#softGlow)"
              />
            ))}

            {/* Glowing Photon Head */}
            <g transform={`translate(${pulseCoordinates.waveX}, ${pulseCoordinates.waveY})`}>
              {/* Outer Cyan Ripple Halo */}
              <circle
                r="13"
                fill="url(#waveLightGlow)"
                className="animate-pulse"
                style={{ animationDuration: '2.5s' }}
              />
              {/* Core Bright White Photon */}
              <circle
                r="3.6"
                fill="#FFFFFF"
                filter="url(#softGlow)"
              />
            </g>
          </g>
        )}

        {/* 4. Active Node Soft Harmonic Resonance Wave */}
        {activeNodeId && activeRenderedTarget && (
          <circle
            cx={activeRenderedTarget.x}
            cy={activeRenderedTarget.y}
            r="26"
            fill="none"
            stroke="#00B8E6"
            strokeWidth="1.5"
            className="animate-ping"
            style={{ animationDuration: '2.8s' }}
          />
        )}
      </svg>

      {/* 5. Center Element: Pure Zentro Logo Only (Elastic Reaction to Pulls) */}
      <div 
        className="absolute z-20 flex items-center justify-center pointer-events-none transition-transform duration-100 ease-out"
        style={{ 
          transform: 'translate(-50%, -50%)', 
          left: centerPos.x, 
          top: centerPos.y 
        }}
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#0B2854] via-[#071A36] to-[#0B2854] border border-[#0878FF]/60 shadow-2xl shadow-blue-500/25 flex items-center justify-center">
          {/* Center Core Glow */}
          <div className="absolute inset-0 rounded-full bg-[#00B8E6]/25 blur-md pointer-events-none" />
          
          {/* Pure Zentro Emblem */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative z-10 flex items-center justify-center">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <path d="M8 11H32L28 17H14L8 11Z" fill="#00B8E6" />
              <path d="M28 17L14 29H8L22 17H28Z" fill="#0878FF" />
              <path d="M14 29H32L26 35H8L14 29Z" fill="#FFFFFF" />
              <circle cx="31" cy="11" r="2.5" fill="#00B8E6" className="animate-ping" style={{ animationDuration: '3s' }} />
            </svg>
          </div>

          {/* Orbiting slow spark dot */}
          <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: '16s' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00B8E6] -top-0.5 left-1/2 -translate-x-1/2 shadow-xs shadow-cyan-400" />
          </div>
        </div>
      </div>

      {/* 6. Draggable Service Nodes (Logo + Name Only, Elastic Spring Return, Mobile Optimized) */}
      {renderedNodes.map((node) => {
        const isSelected = node.isHovered || node.isActive;
        const isBeingDragged = dragState?.nodeId === node.id;

        return (
          <div
            key={node.id}
            className="absolute z-30 select-none cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out"
            style={{
              transform: `translate(-50%, -50%) scale(${isBeingDragged ? 1.15 : isSelected ? 1.08 : 1})`,
              left: node.x,
              top: node.y,
              opacity: node.currentOpacity,
              touchAction: 'none'
            }}
            onPointerDown={(e) => handlePointerDown(node.id, e)}
            onMouseEnter={() => setHoveredNodeId(node.id)}
            onMouseLeave={() => setHoveredNodeId(null)}
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                isSelected 
                  ? 'bg-[#0B2854]/95 shadow-xl shadow-blue-500/35 ring-2 ring-[#00B8E6] backdrop-blur-md' 
                  : 'bg-[#071A36]/90 hover:bg-[#0B2854]/95 border border-white/20 backdrop-blur-xs shadow-lg shadow-black/20'
              }`}
            >
              {/* Node Icon Circle */}
              <div 
                className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  isSelected 
                    ? 'bg-gradient-to-tr from-[#0878FF] to-[#00B8E6] text-white shadow-md' 
                    : 'bg-white/10 text-slate-200 group-hover:text-white'
                }`}
              >
                {renderIcon(node.iconName, 'w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4')}
              </div>

              {/* Clean Topic Name Only */}
              <span 
                className={`text-[11px] sm:text-xs md:text-sm font-semibold tracking-tight whitespace-nowrap transition-colors ${
                  isSelected ? 'text-white font-bold' : 'text-slate-100'
                }`}
              >
                {node.shortName}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
