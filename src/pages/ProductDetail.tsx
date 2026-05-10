/*
DESIGN LOCK (科技流光·高端工业感)
- Focus reading mode + strong hierarchy
- Detail is data-driven from content.ts
*/

import SiteLayout from "@/components/SiteLayout";
import { PRODUCTS } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Layers, Shapes } from "lucide-react";

export default function ProductDetail({ id }: { id: string }) {
  const p = PRODUCTS.find((x) => x.id === id);

  if (!p) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-[1120px] px-4">
          <div className="glass rounded-2xl p-8">
            <div className="text-display text-[22px] font-semibold">未找到该产品</div>
            <div className="mt-2 text-muted-foreground text-[13px]">请返回产品大厅重新选择</div>
            <div className="mt-5">
              <Button asChild className="rounded-2xl">
                <Link href="/products">
                  <ArrowLeft className="size-4 mr-2" />
                  返回产品大厅
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const advLines = (p.advantages || "").split("\n").filter(Boolean);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1120px] px-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="secondary" className="rounded-2xl">
            <Link href="/products">
              <ArrowLeft className="size-4 mr-2" />
              返回产品大厅
            </Link>
          </Button>
          <Badge className="rounded-xl bg-primary/15 text-primary border border-primary/25">{p.category}</Badge>
          {p.form ? <Badge variant="secondary" className="rounded-xl">{p.form}</Badge> : null}
          {p.domain ? <Badge variant="secondary" className="rounded-xl">面向领域：{p.domain}</Badge> : null}
        </div>

        <div className="mt-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-4 items-start">
          <Card className="glass glow card-cut rounded-[26px] p-6 md:p-8 bracket">
            <div className="text-[12px] text-muted-foreground">三级页面 · 产品详情</div>
            <h1 className="mt-2 text-display text-[24px] md:text-[38px] font-semibold">{p.name}</h1>
            {p.subtitle ? (
              <p className="mt-2 text-[14px] text-foreground/80 leading-relaxed">{p.subtitle}</p>
            ) : null}

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <Layers className="size-4 text-primary" />
                <div className="text-display text-[18px] font-semibold">能力优势</div>
              </div>
              {advLines.length ? (
                <ul className="mt-3 space-y-2">
                  {advLines.map((line, idx) => (
                    <li key={idx} className="glass rounded-xl px-4 py-3 text-[13px] text-foreground/85">
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-3 glass rounded-xl px-4 py-4 text-[13px] text-muted-foreground">
                  该产品的详细优势文案待补充（可按后续素材完善）。
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild className="rounded-2xl bg-primary text-primary-foreground hover:brightness-110">
                <Link href="/contact">
                  申请试用 / 合作对接 <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="rounded-2xl">
                <Link href="/news">查看相关资讯</Link>
              </Button>
            </div>
          </Card>

          <div className="grid gap-3">
            <Card className="glass card-cut rounded-2xl p-6">
              <div className="flex items-center gap-2">
                <Shapes className="size-4 text-primary" />
                <div className="text-display text-[16px] font-semibold">交付形态</div>
              </div>
              <div className="mt-2 text-[13px] text-foreground/80 leading-relaxed">
                {p.form || "按需求提供 API / Web / 嵌入式 交付"}
              </div>
              <div className="mt-4 text-[12px] text-muted-foreground">
                可在“合作对接”页提交需求，团队将根据场景提供落地方案。
              </div>
            </Card>

            <Card className="glass glow rounded-2xl p-6">
              <div className="text-[12px] text-muted-foreground">关键词提取</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[p.category, p.form, p.domain].filter(Boolean).map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-xl">{t}</Badge>
                ))}
                <Badge variant="secondary" className="rounded-xl">可复制</Badge>
                <Badge variant="secondary" className="rounded-xl">可推广</Badge>
                <Badge variant="secondary" className="rounded-xl">示范样板</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
