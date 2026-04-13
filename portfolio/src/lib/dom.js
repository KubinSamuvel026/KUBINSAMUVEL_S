export function attachRippleVars(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--rx", `${((e.clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty("--ry", `${((e.clientY - r.top) / r.height) * 100}%`);
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
