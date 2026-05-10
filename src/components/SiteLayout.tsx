/*
DESIGN LOCK (科技流光·高端工业感)
- Sharp, card-cut panels; strong hierarchy
- Use bracket motif + glow accents
*/

import type { ReactNode } from "react";
import TopNav from "@/components/TopNav";
import FloatingFAB from "@/components/FloatingFAB";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-tech grid-scan scanline text-foreground">
      <TopNav />
      <main className="pt-20 pb-16">{children}</main>
      <FloatingFAB />
      <footer className="mx-auto max-w-[1120px] px-4 pb-10">
        <div className="glass rounded-2xl px-5 py-4 text-[12px] text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>厦门供应链数智创新有限公司</div>
            <div className="text-foreground/70">国家人工智能应用中试基地 · 首批建设成果线上发布</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
