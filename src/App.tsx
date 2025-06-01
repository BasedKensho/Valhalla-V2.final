import { DemoHeroGeometric } from '@/components/Hero';
import { TimelineDemo } from '@/components/TimelineDemo';
import { BorderBeamDemo } from '@/components/ui/border-beam-demo';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { BackToTop } from '@/components/BackToTop';
import { Footerdemo } from '@/components/ui/footer-section';

function App() {
  return (
    <div className="w-full h-full">
      <div id="top">
        <DemoHeroGeometric />
      </div>
      <div id="video">
        <BorderBeamDemo />
      </div>
      <div id="services">
        <TimelineDemo />
      </div>
      <div id="book">
        <BackgroundPaths />
      </div>
      <BackToTop />
      <Footerdemo />
    </div>
  );
}

export default App;