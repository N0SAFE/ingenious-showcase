import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ClientOnly } from "@tanstack/react-router";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  as?: keyof React.JSX.IntrinsicElements;
}

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  return (
    <ClientOnly
      fallback={
        // Ce que le serveur rend (visible immédiatement, pas d'animation)
        <Tag className={className} style={{ transitionDelay: `${delay}ms` }}>
          {children}
        </Tag>
      }
    >
      <RevealInner className={className} delay={delay} as={Tag}>
        {children}
      </RevealInner>
    </ClientOnly>
  );
}

/**
 * Scroll-triggered reveal — invisible until it enters the viewport, then
 * fades + slides up. Respects prefers-reduced-motion via CSS.
 */
export function RevealInner({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  console.log("[Reveal] render", { shown, delay });

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      console.warn("[Reveal] no ref element, showing immediately");
      setShown(true);
      return;
    }

    // Synchronous check — is the element already in the viewport?
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const alreadyVisible = rect.top - 60 < vh && rect.bottom > 0;
    console.log("[Reveal] mount check", {
      el: el.tagName,
      top: rect.top,
      bottom: rect.bottom,
      vh,
      alreadyVisible,
    });

    if (alreadyVisible) {
      console.log("[Reveal] already visible, revealing immediately");
      setShown(true);
      return;
    }

    // Fallback safety net
    const fallback = window.setTimeout(() => {
      console.log("[Reveal] fallback timeout fired");
      setShown(true);
    }, 800);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          console.log("[Reveal] observer entry", {
            isIntersecting: e.isIntersecting,
            ratio: e.intersectionRatio,
            bounding: e.boundingClientRect,
          });
          if (e.isIntersecting) {
            setShown(true);
            window.clearTimeout(fallback);
            io.disconnect();
          }
        }
      },
      { threshold: [0, 0.05, 0.12], rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn(shown ? "in-view-visible" : "in-view-hidden", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
