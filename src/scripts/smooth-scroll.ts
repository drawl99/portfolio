import Lenis from "lenis";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function anchorOffset(): number {
  const styles = getComputedStyle(document.documentElement);
  const bar = parseFloat(styles.getPropertyValue("--bar-h")) || 0;
  const rem = parseFloat(styles.fontSize) || 16;
  return -bar * rem;
}

if (!reduceMotion.matches) {
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => 1 - Math.pow(1 - t, 4),
    smoothWheel: true,
  });

  (window as unknown as { lenis: Lenis }).lenis = lenis;

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  document.addEventListener("click", (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector<HTMLElement>(id);
    if (!target) return;
    event.preventDefault();
    lenis.scrollTo(target, { offset: anchorOffset() });
    history.replaceState(null, "", id);
    target.focus({ preventScroll: true });
  });
}

/* Mark the nav item of the chapter currently in view. */
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")];
const chapters = navLinks
  .map((link) => document.querySelector<HTMLElement>(link.getAttribute("href") ?? ""))
  .filter((el): el is HTMLElement => el !== null);

if (chapters.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = `#${entry.target.id}`;
        for (const link of navLinks) {
          if (link.getAttribute("href") === id) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        }
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  chapters.forEach((chapter) => observer.observe(chapter));
}
