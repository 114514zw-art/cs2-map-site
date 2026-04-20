export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-cs-bg py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-white/60">
          Fan-made · Not affiliated with Valve
        </p>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} — Counter-Strike 2 是 Valve Corporation 的商标。
          本页为非商业粉丝项目,图片与名称版权归原始所有者。
        </p>
      </div>
    </footer>
  );
}
