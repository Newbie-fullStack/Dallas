import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Hook: run a GSAP timeline scoped to a ref's element.
 * Automatically cleans up on unmount.
 *
 * @param {(self: gsap.core.Timeline, refs: { container: React.RefObject }) => void} setup
 * @param {React.RefObject} container
 * @param {Array} deps
 */
export function useGsapTimeline(setup, container, deps = []) {
  useGSAP(() => setup(gsap, container), { scope: container, dependencies: deps });
}

/**
 * Hook: split-text style character reveal on a ref.
 */
export function useTextReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const text = el.textContent;
    el.textContent = '';
    const chars = text.split('').map((ch) => {
      const span = document.createElement('span');
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      span.style.display = 'inline-block';
      span.style.willChange = 'transform, opacity';
      el.appendChild(span);
      return span;
    });
    const tl = gsap.fromTo(
      chars,
      { y: 40, opacity: 0, rotateX: -45 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.03,
        delay: options.delay || 0,
        scrollTrigger: options.scrollTrigger
          ? { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' }
          : undefined,
      }
    );
    return () => { tl.kill(); };
  }, [ref, options.delay, options.scrollTrigger]);
}

/**
 * Hook: parallax on scroll for an element.
 */
export function useParallaxGsap(ref, strength = 80) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const tween = gsap.to(el, {
      y: () => -strength * (window.innerHeight / 100),
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
    return () => { tween.kill(); };
  }, [ref, strength]);
}

/**
 * Hook: stagger-reveal children when scrolled into view.
 */
export function useStaggerReveal(ref, selector = ':scope > *', options = {}) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const targets = el.querySelectorAll(selector);
    const anim = gsap.fromTo(
      targets,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: options.stagger ?? 0.12,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
      }
    );
    return () => { anim.kill(); };
  }, [ref, selector, options.stagger]);
}

export { gsap, ScrollTrigger };
