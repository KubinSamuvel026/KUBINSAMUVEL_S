export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function attachRippleVars(e) {
  const el = e.currentTarget;
  if (!el) return;
  const r = el.getBoundingClientRect();
  const x = ((e.clientX - r.left) / Math.max(1, r.width)) * 100;
  const y = ((e.clientY - r.top) / Math.max(1, r.height)) * 100;
  el.style.setProperty("--rx", `${x}%`);
  el.style.setProperty("--ry", `${y}%`);
}

