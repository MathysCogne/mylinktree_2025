"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
  link?: {
    url: string;
    label: string;
  };
  formattedDescription?: React.ReactNode;
}

export const Timeline = ({ events }: { events: TimelineEvent[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    
    // Recalculer la hauteur après le rendu du contenu Markdown
    const timer = setTimeout(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [ref, events]);

  // Observer les changements de taille du conteneur
  useEffect(() => {
    if (!ref.current) return;
    
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    });
    
    resizeObserver.observe(ref.current);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {events.map((event, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            key={index}
            className="flex justify-start pt-16 md:pt-24 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-slate-800/80 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-blue-500/50 border border-blue-500/30" />
              </div>
              <div className="hidden md:block md:pl-20">
                <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-400">{event.date}</p>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4 text-left">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-400">{event.date}</p>
              </div>
              
              <div className="p-4 pt-3 bg-slate-800/50 rounded-xl border border-slate-800 hover:border-slate-700/50 transition-colors">
                {event.image && (
                  <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden mb-4">
                    <img
                      src={event.image}
                      alt={`Image for ${event.title} | Mathys Cogne-Foucault`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  </div>
                )}
                {event.formattedDescription || <p className="text-slate-300 mb-4">{event.description}</p>}
                
                {event.tags && event.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-blue-500/5 text-blue-400 rounded-full border border-blue-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {event.link && (
                  <div className="mt-4">
                    <a
                      href={event.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 transition-colors"
                    >
                      {event.link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-violet-500 to-transparent from-[0%] via-[50%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
