/*
DESIGN LOCK (科技流光·高端工业感)
- Sticky nav that turns from transparent to glass
- Floating action button: contact + try + top
*/

import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

export default function TopNav() {
  const y = useScrollY();
  const [location] = useLocation();

  const isSolid = y > 18;

  const activeId = useMemo(() => {
    const clean = location.replace(/^\/#/, "");
    if (clean.startsWith("/products")) return "products";
    if (clean.startsWith("/news")) return "news";
    if (clean.startsWith("/base")) return "base";
    if (clean.startsWith("/contact")) return "contact";
    return "home";
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        isSolid ? "py-2" : "py-3"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1120px] px-4",
          isSolid ? "glass glow rounded-2xl" : "bg-transparent"
        )}
      >
        <div className={cn("flex items-center justify-between", isSolid ? "h-12" : "h-14")}>
          <Link href="/" className="flex items-center gap-2 select-none">
            <div className="size-9 rounded-xl glass card-cut flex items-center justify-center">
              <Sparkles className="size-5 text-primary" />
            </div>
            <div className="leading-tight">
              <div className="text-display text-[15px] font-semibold tracking-wide">
                中试基地 · 首批成果
              </div>
              <div className="text-[12px] text-muted-foreground">AI Pilotbase Showcase</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((it) => {
              const active = it.id === activeId;
              return (
                <Link
                  key={it.id}
                  href={it.href}
                  className={cn(
                    "px-3 py-2 rounded-xl text-[13px] transition",
                    active
                      ? "bg-primary text-primary-foreground shadow-[0_0_0_1px_oklch(0.74_0.18_200/0.30)_inset]"
                      : "text-foreground/85 hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  {it.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button
                asChild
                size="sm"
                className="rounded-xl bg-primary text-primary-foreground hover:brightness-110"
              >
                <Link href="/contact">合作对接</Link>
              </Button>
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-xl">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background/95 backdrop-blur-xl">
                  <SheetHeader>
                    <SheetTitle className="text-display">目录</SheetTitle>
                  </SheetHeader>
                  <div className="mt-4 grid gap-2">
                    {NAV_ITEMS.map((it) => (
                      <Button
                        key={it.id}
                        asChild
                        variant={it.id === activeId ? "default" : "secondary"}
                        className="justify-start rounded-xl"
                      >
                        <Link href={it.href}>{it.label}</Link>
                      </Button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
