import React, { useState } from 'react';
import { 
  Laptop, 
  Smartphone, 
  Monitor, 
  Gauge, 
  Zap, 
  CheckCircle2, 
  Terminal, 
  Sparkles,
  Sliders,
  Play,
  RotateCcw,
  Palette,
  TrendingUp,
  Globe,
  Radio,
  Server,
  Share2,
  Newspaper,
  Layers,
  Copy,
  Check
} from 'lucide-react';

interface WidgetProps {
  serviceId: string;
}

export const CapabilityWidget: React.FC<WidgetProps> = ({ serviceId }) => {
  // 1. Digital Platforms & Web Apps State
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  // 2. Branding & Design Systems State
  const [activeTheme, setActiveTheme] = useState<'cyan' | 'sapphire' | 'violet' | 'emerald'>('cyan');
  const [copiedToken, setCopiedToken] = useState(false);

  // 3. Digital Marketing State
  const [adSpend, setAdSpend] = useState<number>(25000);

  // 4. 3D Motion & Video State
  const [renderMode, setRenderMode] = useState<'final' | 'wireframe' | 'clay'>('final');
  const [lightingPreset, setLightingPreset] = useState<'cyber' | 'studio' | 'moody'>('cyber');
  const [isRotating, setIsRotating] = useState(true);

  // 5. Cloud Infrastructure State
  const [selectedRegion, setSelectedRegion] = useState<'us-east' | 'eu-central' | 'ap-east'>('us-east');
  const [loadLevel, setLoadLevel] = useState<number>(45);

  // 6. Strategic PR State
  const [selectedOutlet, setSelectedOutlet] = useState<'techcrunch' | 'bloomberg' | 'forbes' | 'wired'>('techcrunch');

  const copyTokens = () => {
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  // -------------------------------------------------------------
  // WIDGET 1: Digital Platforms & Web Apps
  // -------------------------------------------------------------
  if (serviceId === 'digital-solutions') {
    return (
      <div className="rounded-2xl bg-[#071A36] border border-white/15 p-5 space-y-4 text-white shadow-xl">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              LIVE ARCHITECTURE SIMULATOR
            </span>
          </div>

          {/* Viewport Selector */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all ${
                deviceView === 'desktop' ? 'bg-[#0878FF] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="4K Desktop View"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px] font-mono">4K View</span>
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all ${
                deviceView === 'tablet' ? 'bg-[#0878FF] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet Pro View"
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px] font-mono">Tablet</span>
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all ${
                deviceView === 'mobile' ? 'bg-[#0878FF] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px] font-mono">Mobile</span>
            </button>
          </div>
        </div>

        {/* Live Interactive Preview Screen */}
        <div className="relative rounded-xl bg-[#0B2854] border border-white/15 p-4 sm:p-5 overflow-hidden min-h-[190px] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-blue-200/70 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-blue-200/60 ml-2">
                https://preview.zentrocomms.dev/app/
                {deviceView}
              </span>
            </div>
            <span className="text-emerald-400 font-bold hidden sm:inline">99/100 Lighthouse</span>
          </div>

          <div className="my-3 transition-all duration-300">
            {activeTab === 'preview' ? (
              <div className={`mx-auto transition-all duration-300 bg-[#071A36]/90 rounded-xl p-4 border border-white/15 shadow-lg ${
                deviceView === 'desktop' ? 'w-full' : deviceView === 'tablet' ? 'max-w-md' : 'max-w-xs'
              }`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#0878FF] flex items-center justify-center font-bold text-white text-[10px]">
                      Z
                    </div>
                    <div className="text-xs font-bold text-white">Enterprise Node v4</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                    Active • 12ms TTFB
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-blue-200/60">LCP</div>
                    <div className="text-white font-bold mt-0.5">0.45s</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-blue-200/60">FID</div>
                    <div className="text-white font-bold mt-0.5">2.1ms</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-blue-200/60">CLS</div>
                    <div className="text-white font-bold mt-0.5">0.00</div>
                  </div>
                </div>
              </div>
            ) : (
              <pre className="text-[11px] font-mono text-[#00B8E6] bg-[#051329] p-3 rounded-lg overflow-x-auto leading-relaxed border border-white/10">
{`// Zentro Edge Architecture Component
export async function generatePlatform() {
  return await edgeDeploy({
    framework: 'React 19 + SSR',
    cdn: 'Global Anycast 300+ PoPs',
    targetVitals: 'P99 < 50ms',
    security: 'WAF + Mutual TLS'
  });
}`}
              </pre>
            )}
          </div>

          {/* Bottom Switcher */}
          <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10 font-mono">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                  activeTab === 'preview' ? 'bg-[#0878FF] text-white' : 'text-blue-200/70 hover:text-white'
                }`}
              >
                Live Render
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-2.5 py-1 rounded-md text-[11px] transition-colors flex items-center gap-1 ${
                  activeTab === 'code' ? 'bg-[#0878FF] text-white' : 'text-blue-200/70 hover:text-white'
                }`}
              >
                <Terminal className="w-3 h-3" />
                <span>Code Specs</span>
              </button>
            </div>

            <div className="text-[11px] text-blue-200/70 flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#00B8E6]" />
              <span>Zero-Layout-Shift Optimized</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // WIDGET 2: Branding & Design Systems
  // -------------------------------------------------------------
  if (serviceId === 'creative-branding') {
    const themePalettes = {
      cyan: {
        primary: '#00B8E6',
        accent: '#0878FF',
        glow: 'rgba(0, 184, 230, 0.4)',
        name: 'Cyber Cyan'
      },
      sapphire: {
        primary: '#38BDF8',
        accent: '#0284C7',
        glow: 'rgba(56, 189, 248, 0.4)',
        name: 'Deep Sapphire'
      },
      violet: {
        primary: '#C084FC',
        accent: '#9333EA',
        glow: 'rgba(192, 132, 252, 0.4)',
        name: 'Electric Violet'
      },
      emerald: {
        primary: '#34D399',
        accent: '#059669',
        glow: 'rgba(52, 211, 153, 0.4)',
        name: 'Neon Emerald'
      }
    };

    const currentTheme = themePalettes[activeTheme];

    return (
      <div className="rounded-2xl bg-[#071A36] border border-white/15 p-5 space-y-4 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#00B8E6]" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              DYNAMIC DESIGN TOKEN ENGINE
            </span>
          </div>

          {/* Theme Palette Switcher */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            {(['cyan', 'sapphire', 'violet', 'emerald'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTheme(t)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono capitalize transition-all ${
                  activeTheme === t ? 'bg-[#0878FF] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Specimen Box */}
        <div className="p-5 rounded-xl bg-[#0B2854] border border-white/15 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-200/60 block">
                TYPOGRAPHIC SPECIMEN & TOKENS
              </span>
              <h4 
                className="text-xl sm:text-2xl font-black font-['Space_Grotesk'] tracking-tight transition-colors duration-300"
                style={{ color: currentTheme.primary }}
              >
                Zentro Identity System v3.2
              </h4>
            </div>

            <button
              onClick={copyTokens}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-mono flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              {copiedToken ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedToken ? 'Tokens Copied!' : 'Export JSON Tokens'}</span>
            </button>
          </div>

          {/* Dynamic Component Previews */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#071A36] border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-blue-200/60 block">PRIMARY BUTTON SPEC</span>
              <button 
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white shadow-lg transition-all duration-300"
                style={{ 
                  backgroundColor: currentTheme.accent,
                  boxShadow: `0 8px 20px -4px ${currentTheme.glow}`
                }}
              >
                Inspect Prototype Button
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-[#071A36] border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-blue-200/60 block">TOKEN VALUES</span>
              <div className="space-y-1 text-[11px] font-mono text-blue-100">
                <div className="flex justify-between">
                  <span className="text-blue-200/60">Primary Hex:</span>
                  <span className="font-bold" style={{ color: currentTheme.primary }}>{currentTheme.primary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200/60">Border Radius:</span>
                  <span>16px (Geometric Pill)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // WIDGET 3: Digital Marketing & Growth
  // -------------------------------------------------------------
  if (serviceId === 'digital-marketing') {
    const projectedImpressions = (adSpend * 42).toLocaleString();
    const projectedCPA = Math.round(180 - (adSpend / 1000) * 0.8);
    const projectedPipeline = (adSpend * 4.6).toLocaleString();

    return (
      <div className="rounded-2xl bg-[#071A36] border border-white/15 p-5 space-y-4 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#00B8E6]" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              FULL-FUNNEL ROAS & PIPELINE SIMULATOR
            </span>
          </div>
          <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            Target 4.6x Return Multiple
          </span>
        </div>

        {/* Spend Slider */}
        <div className="p-4 rounded-xl bg-[#0B2854] border border-white/15 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono text-blue-200/70 uppercase">Monthly Growth Budget:</span>
            <span className="text-base font-bold text-[#00B8E6] font-mono">
              ${adSpend.toLocaleString()} USD
            </span>
          </div>

          <input
            type="range"
            min={5000}
            max={100000}
            step={5000}
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full h-2 bg-[#071A36] rounded-lg appearance-none cursor-pointer accent-[#0878FF]"
          />

          <div className="flex justify-between text-[10px] font-mono text-blue-200/50">
            <span>$5,000 / mo</span>
            <span>$50,000 / mo</span>
            <span>$100,000 / mo</span>
          </div>
        </div>

        {/* Projected Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="p-3.5 rounded-xl bg-[#0B2854] border border-white/10 text-center">
            <div className="text-[10px] font-mono text-blue-200/60 uppercase">Target Impressions</div>
            <div className="text-lg font-bold text-white font-['Space_Grotesk'] mt-1">{projectedImpressions}+</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0B2854] border border-white/10 text-center">
            <div className="text-[10px] font-mono text-blue-200/60 uppercase">Blended CPA Target</div>
            <div className="text-lg font-bold text-emerald-400 font-['Space_Grotesk'] mt-1">${projectedCPA}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0B2854] border border-white/10 text-center">
            <div className="text-[10px] font-mono text-blue-200/60 uppercase">Projected Pipeline</div>
            <div className="text-lg font-bold text-[#00B8E6] font-['Space_Grotesk'] mt-1">${projectedPipeline}</div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // WIDGET 4: 3D Motion & Video Production
  // -------------------------------------------------------------
  if (serviceId === 'video-animation') {
    return (
      <div className="rounded-2xl bg-[#071A36] border border-white/15 p-5 space-y-4 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#00B8E6]" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              REAL-TIME 3D VIEWPORT & MOTION LAB
            </span>
          </div>

          {/* Render Mode Selectors */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setRenderMode('final')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                renderMode === 'final' ? 'bg-[#0878FF] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Raytraced Final
            </button>
            <button
              onClick={() => setRenderMode('wireframe')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                renderMode === 'wireframe' ? 'bg-[#0878FF] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Wireframe
            </button>
            <button
              onClick={() => setRenderMode('clay')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                renderMode === 'clay' ? 'bg-[#0878FF] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Studio Clay
            </button>
          </div>
        </div>

        {/* 3D Visualizer Canvas Sandbox */}
        <div className="relative rounded-xl bg-radial from-[#0B2854] to-[#051329] border border-white/15 p-6 h-48 flex items-center justify-center overflow-hidden">
          {/* Animated 3D Geometric Cube / Polyhedron Simulation */}
          <div className={`relative w-28 h-28 flex items-center justify-center transition-all duration-700 ${
            isRotating ? 'animate-spin' : ''
          }`} style={{ animationDuration: '14s' }}>
            <div className={`absolute inset-0 rounded-2xl border-2 transition-all ${
              renderMode === 'wireframe'
                ? 'border-dashed border-[#00B8E6] bg-transparent'
                : renderMode === 'clay'
                ? 'border-slate-300/40 bg-slate-300/10 backdrop-blur-sm'
                : 'border-[#0878FF] bg-gradient-to-br from-[#0878FF]/30 to-[#00B8E6]/10 backdrop-blur-md shadow-2xl shadow-blue-500/40'
            }`} />
            <div className={`w-16 h-16 rounded-xl border transition-all ${
              renderMode === 'wireframe'
                ? 'border-[#00B8E6] rotate-45 border-dashed'
                : 'border-white/40 bg-white/10 rotate-45'
            }`} />
          </div>

          {/* Overlay HUD Readouts */}
          <div className="absolute top-3 left-3 text-[10px] font-mono text-blue-200/60 space-y-0.5">
            <div>FPS: 120 (ProRes 4444)</div>
            <div>POLYS: 428,910 Tris</div>
          </div>

          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-mono text-white flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{isRotating ? 'Pause Orbit' : 'Resume Orbit'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // WIDGET 5: Cloud Infrastructure & DevOps
  // -------------------------------------------------------------
  if (serviceId === 'it-cloud-solutions') {
    const regionMetrics = {
      'us-east': { ping: '12ms', nodes: '48/48 Online', uptime: '99.999%' },
      'eu-central': { ping: '18ms', nodes: '32/32 Online', uptime: '100.0%' },
      'ap-east': { ping: '24ms', nodes: '40/40 Online', uptime: '99.998%' },
    };

    const currentRegion = regionMetrics[selectedRegion];

    return (
      <div className="rounded-2xl bg-[#071A36] border border-white/15 p-5 space-y-4 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-[#00B8E6]" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              DISTRIBUTED CLOUD CLUSTER MATRIX
            </span>
          </div>

          {/* Region Switcher */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            {(['us-east', 'eu-central', 'ap-east'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono uppercase transition-all ${
                  selectedRegion === r ? 'bg-[#0878FF] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Live Cluster Health Display */}
        <div className="p-4 rounded-xl bg-[#0B2854] border border-white/15 space-y-3">
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-[#071A36] border border-white/10">
              <span className="text-blue-200/60 text-[10px] block">GLOBAL LATENCY</span>
              <span className="text-emerald-400 font-bold text-sm">{currentRegion.ping}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#071A36] border border-white/10">
              <span className="text-blue-200/60 text-[10px] block">CONTAINER PODS</span>
              <span className="text-white font-bold text-sm">{currentRegion.nodes}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#071A36] border border-white/10">
              <span className="text-blue-200/60 text-[10px] block">SLA AVAILABILITY</span>
              <span className="text-[#00B8E6] font-bold text-sm">{currentRegion.uptime}</span>
            </div>
          </div>

          {/* Auto-scale Simulation Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-blue-200/70">Traffic Auto-scale Load:</span>
              <span className="text-white font-bold">{loadLevel}% Cluster Capacity</span>
            </div>
            <div className="w-full bg-[#071A36] h-2.5 rounded-full overflow-hidden p-0.5 border border-white/10">
              <div 
                className="bg-gradient-to-r from-[#00B8E6] to-[#0878FF] h-full rounded-full transition-all duration-300"
                style={{ width: `${loadLevel}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // WIDGET 6: Strategic Communications & PR
  // -------------------------------------------------------------
  if (serviceId === 'strategic-communication') {
    const outlets = {
      techcrunch: {
        name: 'TechCrunch',
        headline: '"How Next-Gen Enterprise Platforms Are Redefining Compute Efficiency"',
        reach: '16.4M Monthly Readers',
        category: 'Enterprise Tech'
      },
      bloomberg: {
        name: 'Bloomberg Tech',
        headline: '"Institutional Capital Pours Into Scalable High-Performance Infra"',
        reach: '28.1M Global Decision Makers',
        category: 'Global Markets'
      },
      forbes: {
        name: 'Forbes Executive',
        headline: '"The Strategic Blueprint for Brand Dominance in 2026"',
        reach: '22.8M CXOs',
        category: 'Leadership'
      },
      wired: {
        name: 'Wired Enterprise',
        headline: '"The Architects Engineering Tomorrow’s Digital Systems"',
        reach: '14.9M Technologists',
        category: 'Innovation'
      }
    };

    const currentOutlet = outlets[selectedOutlet];

    return (
      <div className="rounded-2xl bg-[#071A36] border border-white/15 p-5 space-y-4 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-[#00B8E6]" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              TIER-1 MEDIA RADAR & NARRATIVE TESTBED
            </span>
          </div>

          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            {(['techcrunch', 'bloomberg', 'forbes', 'wired'] as const).map((o) => (
              <button
                key={o}
                onClick={() => setSelectedOutlet(o)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono capitalize transition-all ${
                  selectedOutlet === o ? 'bg-[#0878FF] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>

        {/* Narrative Placement Preview */}
        <div className="p-5 rounded-xl bg-[#0B2854] border border-white/15 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#00B8E6] font-bold">{currentOutlet.name} • {currentOutlet.category}</span>
            <span className="text-emerald-400 font-bold">{currentOutlet.reach}</span>
          </div>

          <blockquote className="text-base sm:text-lg font-bold font-['Space_Grotesk'] text-white italic border-l-2 border-[#00B8E6] pl-3 py-1">
            {currentOutlet.headline}
          </blockquote>

          <p className="text-[11px] text-blue-200/70 font-mono">
            Structured narrative placements designed for enterprise investor relations & B2B authority.
          </p>
        </div>
      </div>
    );
  }

  return null;
};
