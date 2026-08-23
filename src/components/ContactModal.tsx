import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Calendar,
  Building,
  Mail,
  User,
  Phone,
  MessageSquare
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialBudget?: string;
  initialTimeline?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialBudget = '',
  initialTimeline = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: initialService || 'Digital Solutions & Platforms',
    budget: initialBudget || '$25,000 - $50,000',
    timeline: initialTimeline || '4 - 8 Weeks',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialService) setFormData(prev => ({ ...prev, service: initialService }));
    if (initialBudget) setFormData(prev => ({ ...prev, budget: initialBudget }));
    if (initialTimeline) setFormData(prev => ({ ...prev, timeline: initialTimeline }));
  }, [initialService, initialBudget, initialTimeline]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.details.trim()) newErrors.details = 'Please provide a brief project description';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate server-side processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const servicesList = [
    'Digital Solutions & Platforms',
    'Branding & Design Systems',
    'Digital Marketing & Growth',
    'Video & 3D Motion Graphics',
    'IT Solutions & Cloud Architecture',
    'Strategic Communication & PR',
    'Full Agency Squad / Multi-Disciplinary'
  ];

  const budgetOptions = [
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A36]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0B2854] text-white rounded-3xl shadow-2xl border border-white/15 overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-6 bg-[#071A36] text-white border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0878FF] flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-500/30">
              Z
            </div>
            <div>
              <h3 className="text-base font-bold font-['Space_Grotesk'] leading-tight text-white">Start a Project with Zentro</h3>
              <p className="text-[11px] text-blue-200/80">Creativity Meets Technology</p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            aria-label="Close modal"
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                Inquiry Received Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-blue-100/80 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. A Principal Creative & Technical Director at Zentro Communications is reviewing your brief and will respond within 24 hours with custom architectural insights.
              </p>
              
              <div className="p-4 rounded-2xl bg-[#071A36] border border-white/10 max-w-md mx-auto text-left text-xs space-y-1.5 text-blue-200/80">
                <div className="flex justify-between">
                  <span className="text-blue-200/60">Target Service:</span>
                  <span className="font-semibold text-white">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200/60">Budget Range:</span>
                  <span className="font-semibold text-white">{formData.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200/60">Contact Email:</span>
                  <span className="font-semibold text-white">{formData.email}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-bold text-blue-100 block mb-1">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-blue-200/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-[#071A36] text-white placeholder:text-blue-200/40 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-400 bg-rose-950/20' : 'border-white/10 focus:border-[#00B8E6]'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="text-xs font-bold text-blue-100 block mb-1">
                    Work Email <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-blue-200/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-[#071A36] text-white placeholder:text-blue-200/40 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-950/20' : 'border-white/10 focus:border-[#00B8E6]'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label className="text-xs font-bold text-blue-100 block mb-1">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-blue-200/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Innovations"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-white/10 bg-[#071A36] text-xs sm:text-sm text-white placeholder:text-blue-200/40 focus:outline-none focus:border-[#00B8E6] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-xs font-bold text-blue-100 block mb-1">
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-blue-200/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-white/10 bg-[#071A36] text-xs sm:text-sm text-white placeholder:text-blue-200/40 focus:outline-none focus:border-[#00B8E6] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection Dropdown */}
              <div>
                <label className="text-xs font-bold text-blue-100 block mb-1">
                  Primary Capability Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#071A36] text-xs sm:text-sm text-white focus:outline-none focus:border-[#00B8E6] transition-colors"
                >
                  {servicesList.map((svc, idx) => (
                    <option key={idx} value={svc} className="bg-[#071A36] text-white">{svc}</option>
                  ))}
                </select>
              </div>

              {/* Budget Range Pills */}
              <div>
                <label className="text-xs font-bold text-blue-100 block mb-1.5 font-mono">
                  ANTICIPATED BUDGET RANGE (USD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                        formData.budget === b
                          ? 'bg-[#0878FF] border-[#00B8E6] text-white shadow-md shadow-blue-500/25'
                          : 'bg-[#071A36] border-white/10 text-blue-200/80 hover:bg-white/5'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Brief Details */}
              <div>
                <label className="text-xs font-bold text-blue-100 block mb-1">
                  Project Brief & Objectives <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about what you want to build, current challenges, and ideal timeline..."
                  className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm bg-[#071A36] text-white placeholder:text-blue-200/40 focus:outline-none transition-colors ${
                    errors.details ? 'border-rose-400 bg-rose-950/20' : 'border-white/10 focus:border-[#00B8E6]'
                  }`}
                />
                {errors.details && <p className="text-[11px] text-rose-400 mt-1">{errors.details}</p>}
              </div>

              {/* Submit & Guarantee */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-[11px] text-blue-200/70">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict confidentiality & Mutual NDA respected</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-3 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
