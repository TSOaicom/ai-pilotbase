/*
DESIGN LOCK (科技流光·高端工业感)
- Cards + tabs filter + search
- Each card -> product detail page
*/

import { useMemo, useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import { PRODUCTS, type ProductCategory, type Product } from "@/lib/content";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { Search, ArrowRight } from "lucide-react";

const CATS: ProductCategory[] = ["数据", "平台", "智能工具链", "模型", "应用"];

function getQueryCat(location: string): ProductCategory | "全部" {
  const raw = location.split("?")[1] || "";
  const params = new URLSearchParams(raw);
  const cat = params.get("cat");
  if (!cat) return "全部";
  const decoded = decodeURIComponent(cat);
  if (CATS.includes(decoded as ProductCategory)) return decoded as ProductCategory;
  return "全部";
}

function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.id}`} className="block">
      <Card className="glass glow card-cut rounded-2xl p-5 h-full transition-transform duration-300 hover:-translate-y-1">
        <div className="flex items-start gap-2">
          <div className="min-w-0">
            <div className="text-[15px] font-semibold leading-snug break-words">{p.name}</div>
            {p.subtitle ? (
              <div className="mt-1 text-[12px] text-muted-foreground leading-relaxed">{p.subtitle}</div>
            ) : null}
          </div>
          <Badge className="ml-auto rounded-xl bg-primary/15 text-primary border border-primary/25">
            {p.category}
          </Badge>
        </div>

        <div className="mt-3 text-[12px] text-foreground/70 leading-relaxed line-clamp-3">
          {p.advantages || "点击查看产品介绍与交付形态"}
        </div>

        <div className="mt-4 flex items-center gap-2">
          {p.form ? (
            <Badge variant="secondary" className="rounded-xl">{p.form}</Badge>
          ) : null}
          <span className="ml-auto inline-flex items-center gap-2 text-[12px] text-primary">
            查看详情 <ArrowRight className="size-3" />
          </span>
        </div>
      </Card>
    </Link>
  );
}

export default function Products() {
  const [location] = useLocation();
  const presetCat = getQueryCat(location);
  const [q, setQ] = useState("");

  const groups = useMemo(() => {
    const normalized = q.trim().toLowerCase();
    const list = PRODUCTS.filter((p) => {
      if (!normalized) return true;
      const hay = `${p.name} ${p.subtitle || ""} ${p.advantages || ""}`.toLowerCase();
      return hay.includes(normalized);
    });

    const byCat: Record<string, Product[]> = { 全部: list };
    for (const c of CATS) byCat[c] = list.filter((p) => p.category === c);
    return byCat as Record<"全部" | ProductCategory, Product[]>;
  }, [q]);

  const defaultTab = presetCat;

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1120px] px-4">
        <div className="glass glow card-cut rounded-[26px] p-6 md:p-8 bracket">
          <div className="text-[12px] text-muted-foreground">二级页面 · 产品卡片</div>
          <h1 className="mt-2 text-display text-[24px] md:text-[34px] font-semibold">产品大厅</h1>
          <p className="mt-2 text-[13px] text-muted-foreground">
            {PRODUCTS.length} 项产品能力统一卡片化展示，点击进入三级页面查看详情
          </p>

          <div className="mt-5 flex flex-col md:flex-row gap-3 md:items-center">
            <div className="relative md:w-[420px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="搜索产品关键词（名称/优势/描述）"
                className="pl-9 rounded-2xl bg-background/20 border-border/60"
              />
            </div>
            <div className="md:ml-auto flex gap-2">
              <Button asChild variant="secondary" className="rounded-2xl">
                <Link href="/contact">产品试用申请</Link>
              </Button>
              <Button asChild className="rounded-2xl bg-primary text-primary-foreground hover:brightness-110">
                <Link href="/news">查看最新资讯</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-4 mt-6">
        <Tabs defaultValue={defaultTab} className="w-full">
          <div className="glass rounded-2xl p-2 overflow-x-auto">
            <TabsList className="bg-transparent w-max">
              <TabsTrigger value="全部" className="rounded-xl">全部</TabsTrigger>
              {CATS.map((c) => (
                <TabsTrigger key={c} value={c} className="rounded-xl">{c}</TabsTrigger>
              ))}
            </TabsList>
          </div>

          {(["全部", ...CATS] as const).map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {groups[tab].map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
              {groups[tab].length === 0 ? (
                <div className="mt-8 glass rounded-2xl p-8 text-center text-muted-foreground">
                  未找到匹配内容，请尝试更换关键词
                </div>
              ) : null}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </SiteLayout>
  );
}
