/**
 * Shared section backdrop: soft top glow + fine grid (same language as “What we deliver”).
 */
export default function SectionAtmosphere() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(255,255,255,0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-[length:56px_56px] opacity-[0.08]" />
    </>
  );
}
