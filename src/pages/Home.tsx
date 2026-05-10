/*
DESIGN LOCK (科技流光·高端工业感)
- Big hero, asymmetric composition, cinematic reveal
- Sections: 重点资讯轮播、产品体系入口、基地介绍、支持与服务
*/

import { motion } from "framer-motion";
import SiteLayout from "@/components/SiteLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ABOUT, HERO, NEWS, NAV_ITEMS, PRODUCTS } from "@/lib/content";
import { ArrowRight, Boxes, Info, Newspaper, Sparkles } from "lucide-react";

interface HomeProps {
  targetSection?: string;
}

const sectionReveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function StatPill({ k, v }: { k: string; v: string }) {
  return (
    <div className="glass card-cut px-4 py-3 rounded-2xl">
      <div className="text-[12px] text-muted-foreground">{k}</div>
      <div className="text-display text-[18px] font-semibold">{v}</div>
    </div>
  );
}

export default function Home({ targetSection }: HomeProps) {
  // 兼容模板的 anchor scroll
  // (页面为路由型，不依赖 targetSection)
  void targetSection;

  const productCount = PRODUCTS.length;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mx-auto max-w-[1120px] px-4">
        <div className="relative overflow-hidden rounded-[28px] glass glow card-cut bracket px-5 md:px-10 py-10 md:py-14">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 size-[420px] rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-28 -left-28 size-[520px] rounded-full bg-white/6 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(520px_260px_at_30%_30%,black_65%,transparent_100%)] bg-[linear-gradient(90deg,oklch(0.74_0.18_200/0.35)_1px,transparent_1px),linear-gradient(180deg,oklch(0.74_0.18_200/0.22)_1px,transparent_1px)] bg-[size:28px_28px]" />
          </div>

          <div className="relative grid md:grid-cols-[1.25fr_0.75fr] gap-8 items-end">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-primary text-primary-foreground rounded-xl">科技流光</Badge>
                <Badge variant="secondary" className="rounded-xl">关键词提取 · 版面整洁</Badge>
              </div>

              <h1 className="mt-4 text-display text-[30px] md:text-[44px] leading-[1.08] font-semibold">
                {HERO.title}
              </h1>
              <p className="mt-4 text-[14px] md:text-[16px] text-foreground/80 leading-relaxed max-w-[56ch]">
                {HERO.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl bg-primary text-primary-foreground hover:brightness-110">
                  <Link href="/products">
                    进入产品大厅 <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" className="rounded-2xl">
                  <Link href="/news">
                    浏览最新资讯 <Newspaper className="size-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid gap-3"
            >
              <StatPill k="核心分类" v="5 大" />
              <StatPill k="产品能力" v={`${productCount} 项`} />
              <StatPill k="服务入口" v="咨询 / 试用" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 重点资讯 */}
      <section className="mx-auto max-w-[1120px] px-4 mt-10" id="focus">
        <motion.div variants={sectionReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                <h2 className="text-display text-[20px] md:text-[26px] font-semibold">焦点追踪 / 最新动态</h2>
              </div>
              <p className="mt-2 text-[13px] text-muted-foreground">卡片自动轮播，点击进入最新资讯页</p>
            </div>
            <Button asChild variant="secondary" className="rounded-2xl">
              <Link href="/news">查看全部</Link>
            </Button>
          </div>

          <div className="mt-4">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {NEWS.map((n) => (
                  <CarouselItem key={n.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="glass card-cut rounded-2xl p-5 h-full">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="rounded-xl">{n.category}</Badge>
                        <div className="text-[12px] text-muted-foreground ml-auto">{n.date}</div>
                      </div>
                      <div className="mt-3 text-[15px] font-semibold leading-snug">{n.title}</div>
                      <div className="mt-2 text-[13px] text-foreground/75 leading-relaxed">{n.summary}</div>
                      <div className="mt-4">
                        <Button asChild size="sm" className="rounded-xl bg-primary text-primary-foreground hover:brightness-110">
                          <Link href="/news">了解详情</Link>
                        </Button>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-background/60 border-border/60" />
              <CarouselNext className="bg-background/60 border-border/60" />
            </Carousel>
          </div>
        </motion.div>
      </section>

      {/* 产品体系入口 */}
      <section className="mx-auto max-w-[1120px] px-4 mt-10" id="system">
        <motion.div variants={sectionReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <div className="flex items-center gap-2">
            <Boxes className="size-4 text-primary" />
            <h2 className="text-display text-[20px] md:text-[26px] font-semibold">核心产品体系（分级导航）</h2>
          </div>
          <p className="mt-2 text-[13px] text-muted-foreground">
            采用“关键词提取”排版，5大分类入口，点击进入相应分类列表
          </p>

          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { title: "数据", desc: "行业数据资产与接口能力" },
              { title: "平台", desc: "推训一体与协作平台" },
              { title: "智能工具链", desc: "低代码/监控/算力感知" },
              { title: "模型", desc: "领域模型与底座能力" },
              { title: "应用", desc: "智能体与行业应用产品" },
            ].map((c) => (
              <Link key={c.title} href={`/products?cat=${encodeURIComponent(c.title)}`} className="block">
                <div className="glass glow card-cut rounded-2xl p-5 h-full tilt-card transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-display text-[18px] font-semibold">{c.title}</div>
                  <div className="mt-2 text-[12px] text-foreground/70 leading-relaxed">{c.desc}</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-[12px] text-primary">
                    进入分类 <ArrowRight className="size-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 基地介绍 */}
      <section className="mx-auto max-w-[1120px] px-4 mt-10" id="about">
        <motion.div variants={sectionReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-5 items-stretch">
            <div className="glass card-cut rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2">
                <Info className="size-4 text-primary" />
                <h2 className="text-display text-[20px] md:text-[26px] font-semibold">{ABOUT.title}</h2>
              </div>
              <p className="mt-3 text-[14px] text-foreground/80 leading-relaxed">{ABOUT.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {NAV_ITEMS.filter((x) => x.id !== "home").map((x) => (
                  <Button key={x.id} asChild variant="secondary" size="sm" className="rounded-xl">
                    <Link href={x.href}>{x.label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <div className="glass glow card-cut rounded-2xl p-6 md:p-8 bracket">
              <div className="text-[12px] text-muted-foreground">关键词提取</div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  "技术攻关能力",
                  "生态汇聚成效",
                  "行业引领作用",
                  "可复制示范",
                  "可推广样板",
                  "国际物流供应链",
                ].map((k) => (
                  <div key={k} className="glass rounded-xl px-3 py-3">
                    <div className="text-[13px] font-medium">{k}</div>
                    <div className="mt-1 text-[12px] text-foreground/65">聚焦落地与可验证的价值输出</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 支持与服务 */}
      <section className="mx-auto max-w-[1120px] px-4 mt-10" id="services">
        <motion.div variants={sectionReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-display text-[20px] md:text-[26px] font-semibold">支持与服务</h2>
              <p className="mt-2 text-[13px] text-muted-foreground">
                立即体验行业领先的AI大模型能力，专业团队为您提供定制化落地支持
              </p>
            </div>
            <Button asChild className="rounded-2xl bg-primary text-primary-foreground hover:brightness-110">
              <Link href="/contact">点击跳转合作对接</Link>
            </Button>
          </div>

          <div className="mt-5 grid md:grid-cols-3 gap-3">
            {[
              { title: "咨询对接", desc: "快速建立沟通通道，匹配场景与方案。" },
              { title: "需求收集", desc: "梳理业务痛点与指标，形成可执行计划。" },
              { title: "产品试用", desc: "提供试用申请入口，验证关键能力与效果。" },
            ].map((s) => (
              <div key={s.title} className="glass glow card-cut rounded-2xl p-6">
                <div className="text-display text-[18px] font-semibold">{s.title}</div>
                <div className="mt-2 text-[13px] text-foreground/75 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
