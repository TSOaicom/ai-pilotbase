/*
DESIGN LOCK (科技流光·高端工业感)
- Floating FAB: always bottom-right
- Click => panel actions: 合作对接邮箱/试用申请/返回顶部
*/

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { ArrowUp, Mail, Rocket, Headset } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/content";
import { Link } from "wouter";

export default function FloatingFAB() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop((window.scrollY || 0) > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toast.success("邮箱已复制", { description: CONTACT_EMAIL });
    } catch {
      toast(CONTACT_EMAIL);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="rounded-2xl h-12 px-4 bg-primary text-primary-foreground shadow-[0_16px_60px_oklch(0.02_0.02_260/0.60)] hover:brightness-110"
          >
            <Headset className="size-4 mr-2" />
            支持与服务
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[280px] glass glow rounded-2xl border-border/60"
        >
          <div className="text-[12px] text-muted-foreground">咨询对接｜需求收集｜产品试用</div>
          <div className="mt-3 grid gap-2">
            <Button
              onClick={copyEmail}
              variant="secondary"
              className="justify-start rounded-xl"
            >
              <Mail className="size-4 mr-2" />
              合作对接邮箱
              <span className="ml-auto text-[12px] text-muted-foreground">复制</span>
            </Button>

            <Button asChild variant="secondary" className="justify-start rounded-xl">
              <Link href="/contact">
                <Rocket className="size-4 mr-2" />
                产品试用申请
              </Link>
            </Button>

            <Button
              disabled={!showTop}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              variant="secondary"
              className="justify-start rounded-xl"
            >
              <ArrowUp className="size-4 mr-2" />
              返回顶部
              <span className="ml-auto text-[12px] text-muted-foreground">
                {showTop ? "可用" : "滚动后可用"}
              </span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
