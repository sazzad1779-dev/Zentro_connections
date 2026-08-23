/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyZentro } from './components/WhyZentro';
import { ProcessSection } from './components/ProcessSection';
import { TeamSection } from './components/TeamSection';
import { MissionVision } from './components/MissionVision';
import { TargetClients } from './components/TargetClients';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ScrollExperience } from './components/ScrollExperience';
import { ServiceItem, ProjectItem } from './types';
import { SERVICES_DATA } from './data/siteData';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { isDay } = useTheme();

  // Modal states
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactServicePrefill, setContactServicePrefill] = useState('');
  const [contactBudgetPrefill, setContactBudgetPrefill] = useState('');
  const [contactTimelinePrefill, setContactTimelinePrefill] = useState('');

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenContact = (prefilledService?: string) => {
    setContactServicePrefill(prefilledService || '');
    setContactBudgetPrefill('');
    setContactTimelinePrefill('');
    setContactModalOpen(true);
  };

  const handleSelectServiceByName = (serviceName: string) => {
    const cleanQuery = serviceName.toLowerCase();
    const matched = SERVICES_DATA.find(s => 
      s.title.toLowerCase().includes(cleanQuery) || 
      cleanQuery.includes(s.category.toLowerCase()) ||
      cleanQuery.includes(s.title.toLowerCase())
    ) || SERVICES_DATA[0];
    
    setSelectedService(matched);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDay ? 'bg-[#F8FAFC] text-slate-900' : 'bg-[#071A36] text-white'} selection:bg-[#0878FF] selection:text-white flex flex-col transition-colors duration-300`}>
      {/* Sticky Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onSelectService={(svc) => setSelectedService(svc)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenContact={(svcName) => handleOpenContact(svcName)}
          onExploreWork={handleExploreWork}
          onSelectService={handleSelectServiceByName}
        />

        {/* 2. Trust & Social Proof Bar */}
        <SocialProof />

        {/* 3. Editorial About Section */}
        <AboutSection
          onOpenContact={() => handleOpenContact('General Agency Inquiry')}
        />

        {/* 4. Services Section (Capabilities) */}
        <ServicesSection
          onOpenContact={(svcName) => handleOpenContact(svcName)}
          onSelectService={(svc) => setSelectedService(svc)}
        />

        {/* 5. Portfolio / Selected Work */}
        <PortfolioSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenContact={() => handleOpenContact('Portfolio Case Study Inquiry')}
        />

        {/* 6. Why Zentro (Core Principles & Comparison) */}
        <WhyZentro
          onOpenContact={() => handleOpenContact('Partnership Inquiry')}
        />

        {/* 7. Mission & Vision (Guiding Principles & Global Vision) */}
        <MissionVision />

        {/* 8. Team Section (The People Behind Zentro) */}
        <TeamSection
          onOpenContact={() => handleOpenContact('Squad Collaboration')}
        />

        {/* 9. Process Section (How We Work) */}
        <ProcessSection
          onOpenContact={() => handleOpenContact('Process & Sprint Kickoff')}
        />

        {/* 10. Target Clients (Built for Ambitious Businesses) */}
        <TargetClients
          onOpenContact={(sector) => handleOpenContact(sector)}
        />

        {/* 11. Client Testimonials (Trusted by Leaders Who Value Craft) */}
        <TestimonialsSection />

        {/* 12. FAQ Accordion */}
        <FaqSection
          onOpenContact={() => handleOpenContact('General Inquiry / Question')}
        />

        {/* 13. Final High-Impact CTA Section */}
        <CtaSection
          onOpenContact={() => handleOpenContact('Start a Conversation')}
        />
      </main>

      {/* 14. Comprehensive Footer */}
      <Footer
        onOpenContact={(topic) => handleOpenContact(topic)}
        onSelectService={(svc) => setSelectedService(svc)}
      />

      {/* Modals & Drawers */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={contactServicePrefill}
        initialBudget={contactBudgetPrefill}
        initialTimeline={contactTimelinePrefill}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={(svcName) => handleOpenContact(svcName)}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={(projTitle) => handleOpenContact(projTitle)}
      />

      {/* Cyber Scroll Progress & Interactive HUD */}
      <ScrollExperience />
    </div>
  );
}
