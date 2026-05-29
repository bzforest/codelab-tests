const DEFAULT_OFFSET = 80;
const DEFAULT_DURATION_MS = 800;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

let activeFrame = 0;

export function scrollToElementId(
  id: string,
  options?: { offset?: number; duration?: number }
): boolean {
  const target = document.getElementById(id);
  if (!target) return false;

  const offset = options?.offset ?? DEFAULT_OFFSET;
  const duration = options?.duration ?? DEFAULT_DURATION_MS;
  const targetY =
    target.getBoundingClientRect().top + window.scrollY - offset;

  if (activeFrame) cancelAnimationFrame(activeFrame);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    window.scrollTo(0, targetY);
    return true;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      activeFrame = requestAnimationFrame(step);
    } else {
      activeFrame = 0;
    }
  };

  activeFrame = requestAnimationFrame(step);
  return true;
}
