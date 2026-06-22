export function initFitTextClass({ selector = '.fit-text', defaultMin = 12, defaultMax = 220 } = {}) {
  const ro = new ResizeObserver(entries => {
    for (const entry of entries) {
      const el = entry.target.__fitTextEl;
      if (el) applyFit(el);
    }
  });

  const applyFit = (el) => {
    const container = el.closest('.fit-text-container') || el.parentElement;
    if (!container) return;
    const padding = parseFloat(el.dataset.padding || 0);
    const min = parseFloat(el.dataset.minFont || defaultMin);
    const max = parseFloat(el.dataset.maxFont || defaultMax);
    const multiline = el.dataset.multiline !== 'false';
    const originalWhiteSpace = el.style.whiteSpace;
    el.style.whiteSpace = multiline ? 'normal' : 'nowrap';
    el.style.lineHeight = el.style.lineHeight || '1';
    const availableWidth = Math.max(0, container.clientWidth - padding * 2);
    const availableHeight = Math.max(0, container.clientHeight - padding * 2);
    if (!availableWidth || !availableHeight) return;

    let lo = min;
    let hi = max;
    let best = min;
    for (let i = 0; i < 12; i++) {
      const mid = (lo + hi) / 2;
      el.style.fontSize = mid + 'px';
      const over = el.scrollWidth > availableWidth + 0.5 || el.scrollHeight > availableHeight + 0.5;
      if (over) hi = mid - 0.5;
      else { best = mid; lo = mid + 0.5; }
    }
    el.style.fontSize = best + 'px';
    if (originalWhiteSpace === '') el.style.whiteSpace = multiline ? '' : 'nowrap';
  };

  const attach = () => {
    const nodes = Array.from(document.querySelectorAll(selector));
    nodes.forEach((el) => {
      applyFit(el);
      const container = el.closest('.fit-text-container') || el.parentElement;
      if (container && !container.__fitTextEl) {
        container.__fitTextEl = el;
        ro.observe(container);
      }
    });
  };

  const handleResize = () => {
    window.requestAnimationFrame(() => {
      const nodes = document.querySelectorAll(selector);
      nodes.forEach((el) => applyFit(el));
    });
  };

  attach();
  window.addEventListener('resize', handleResize);

  return () => {
    ro.disconnect();
    window.removeEventListener('resize', handleResize);
    const nodes = document.querySelectorAll(selector);
    nodes.forEach((el) => {
      const container = el.closest('.fit-text-container') || el.parentElement;
      if (container && container.__fitTextEl) delete container.__fitTextEl;
    });
  };
}
