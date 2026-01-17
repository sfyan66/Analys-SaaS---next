import HeroSection from './sections/herosection';
import Features from './sections/features';
import ChartsSection from './sections/chartssection';
import ReportsSection from './sections/reports';
import EmailForm from './sections/emailform';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ChartsSection />
      <ReportsSection />
      <EmailForm />
    </>
  );
}
