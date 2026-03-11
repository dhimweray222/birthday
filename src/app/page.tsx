import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import ThingsILove from '@/components/ThingsILove';
import Letter from '@/components/Letter';
import SurpriseModal from '@/components/SurpriseModal';
import Closing from '@/components/Closing';

export default function Home() {
  return (
    <main className="w-full relative bg-gradient-to-br from-primary via-secondary to-accent bg-fixed min-h-screen">
      <Hero />
      <Journey />
      <ThingsILove />
      <Letter />
      <SurpriseModal />
      <Closing />
    </main>
  );
}
