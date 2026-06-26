/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PillarsDetails from './components/PillarsDetails';
import ExplainerVideo from './components/ExplainerVideo';
import DashboardShowcase from './components/DashboardShowcase';
import AICampaignGenerator from './components/AICampaignGenerator';
import NetworkTopology from './components/NetworkTopology';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-brand-navy antialiased">
      {/* Fixed top navigation layout */}
      <Navigation />

      <main className="relative">
        {/* Hero Segment */}
        <Hero />

        {/* Suite Decoupled Architecture / Pillars Details */}
        <PillarsDetails />

        {/* Premium Animated Explainer Video Section */}
        <ExplainerVideo />

        {/* Complete Interactive Sandbox Dashboard Showcase */}
        <DashboardShowcase />

        {/* AI Campaign Generator Section */}
        <AICampaignGenerator />

        {/* Dynamic Topology Node Inspector Vector Field */}
        <NetworkTopology />

        {/* Audited Outcomes & Testimonial Sliders */}
        <Testimonials />

        {/* Price Package Grid & Forecast Slider Calculator */}
        <Pricing />

        {/* Conversational Board Pitch Final CTA Card */}
        <FinalCTA />
      </main>

      {/* Corporate Ledger Footer Details */}
      <Footer />
    </div>
  );
}
