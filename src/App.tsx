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
import { ProjectEstimator } from './components/ProjectEstimator';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceItem, ProjectItem } from './types';

export default function App() {
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

  const handleEstimatorInquiry = (details: {
    projectType: string;
    timeline: string;
    estimatedBudget: string;
  }) => {
    setContactServicePrefill(details.projectType);
    setContactBudgetPrefill(details.estimatedBudget);
    setContactTimelinePrefill(details.timeline);
    setContactModalOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#071A36] text-white selection:bg-[#0878FF] selection:text-white flex flex-col">
      {/* Sticky Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onSelectService={(svc) => setSelectedService(svc)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenContact={() => handleOpenContact()}
          onExploreWork={handleExploreWork}
        />

        {/* 2. Trust & Social Proof Bar */}
        <SocialProof />

        {/* 3. Editorial About Section */}
        <AboutSection
          onOpenContact={() => handleOpenContact('General Agency Inquiry')}
        />

        {/* 4. Services Section (What We Do) */}
        <ServicesSection
          onOpenContact={(svcName) => handleOpenContact(svcName)}
          onSelectService={(svc) => setSelectedService(svc)}
        />

        {/* 5. Portfolio / Selected Work */}
        <PortfolioSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenContact={() => handleOpenContact('Portfolio Case Study Inquiry')}
        />

        {/* 6. Why Zentro (5 Core Principles & Comparison) */}
        <WhyZentro
          onOpenContact={() => handleOpenContact('Partnership Inquiry')}
        />

        {/* 7. Process Section (How We Work) */}
        <ProcessSection
          onOpenContact={() => handleOpenContact('Process & Sprint Kickoff')}
        />

        {/* 8. Team Section (The People Behind Zentro) */}
        <TeamSection
          onOpenContact={() => handleOpenContact('Squad Collaboration')}
        />

        {/* 9. Mission & Vision */}
        <MissionVision />

        {/* 10. Target Clients (Built for Ambitious Businesses) */}
        <TargetClients
          onOpenContact={(sector) => handleOpenContact(sector)}
        />

        {/* 11. Client Testimonials */}
        <TestimonialsSection />

        {/* 12. Interactive Project Scope & Cost Estimator */}
        <ProjectEstimator
          onStartInquiry={handleEstimatorInquiry}
        />

        {/* 13. FAQ Accordion */}
        <FaqSection
          onOpenContact={() => handleOpenContact('General Inquiry / Question')}
        />

        {/* 14. Final High-Impact CTA Section */}
        <CtaSection
          onOpenContact={() => handleOpenContact('Start a Conversation')}
        />
      </main>

      {/* 15. Comprehensive Footer */}
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
    </div>
  );
}
