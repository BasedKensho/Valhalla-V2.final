import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Ads",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Use our 10%+ ad CTR strategy to make your ads cheaper and more profitable. With increased CTR all ad costs decrease which makes sure you get more bang for your buck.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
              alt="Professional video editing timeline interface"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.3)]"
            />
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80"
              alt="Professional film production setup with cameras and lighting"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.3)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Software",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Introducing Oracle. Our all-in-one internal business management system. Handling customer support, background information management, tasklists and newsletters. Boosting your overall productivity to 200%.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
              alt="Advanced technology dashboard interface"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.3)]"
            />
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Futuristic digital technology visualization"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,_0,_0,_0.3)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Promises",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            How we'll impact your bottom line
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              📊 Increased Productivity. No more missed leads, unfinished tasks and missing information. Increased productivity, increases client happiness, and that helps your bottom line.
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              📈 High-performing ads. Every ad you make will bring you 20x ROAS, more than paying for itself and helping your bottom line.
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              🧩 Seamless Integration. Oracle's all-in-one functionality ensures you don't need external apps and seamlessly integrates into your existing ecosystem. Less setup, more results.
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ⏳ No Changes Needed. You don't need to change your media buying strategy. You only need better creatives. Less time needed to think of new strategies, more times handling fullfilment.
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
}