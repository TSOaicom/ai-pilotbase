/*
DESIGN LOCK (科技流光·高端工业感)
- News list with category tabs; waterfall-like cards
- Each item can link out to official article (placeholder now)
*/

import SiteLayout from "@/components/SiteLayout";
import { NEWS, NEWS_CATEGORIES, type NewsCategory } from "@/lib/content";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ExternalLink, Newspaper } from "lucide-react";

function NewsCard({
  title,
  date,
  summary,
  category,
  link,
}: {
  title: string;
  date: string;
  summary: string;
  category: NewsCategory;
  link?: string;
}) {
  return (
    <Card className="glass glow card-cut rounded-2xl p-5">
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="rounded-xl">
          {category}
        </Badge>
        <div className="ml-auto text-[12px] text-muted-foreground">{date}</div>
      </div>
      <div className="mt-3 text-[15px] font-semibold leading-snug">{title}</div>
      <div className="mt-2 text-[13px] text-foreground/75 leading-relaxed">{summary}</div>
      <div className="mt-4">
        {link ? (
          <Button asChild size="sm" className="rounded-xl bg-primary text-primary-foreground hover:brightness-110">
            <a href={link} target="_blank" rel="noreferrer">
              外跳阅读 <ExternalLink className="size-4 ml-2" />
            </a>
          </Button>
        ) : (
          <Button
            size="sm"
            variant="secondary"
            className="rounded-xl"
            onClick={() => toast("此条资讯链接待补充", { description: "可从公众号/官网文章补齐外链" })}
          >
            外跳阅读 <ExternalLink className="size-4 ml-2" />
          </Button>
        )}
      </div>
    </Card>
  );
}

export default function News() {
  const byCat = (cat: NewsCategory) => NEWS.filter((n) => n.category === cat);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1120px] px-4">
        <div className="glass glow card-cut rounded-[26px] p-6 md:p-8 bracket">
          <div className="flex items-center gap-2">
            <Newspaper className="size-4 text-primary" />
            <div className="text-[12px] text-muted-foreground">二级页面 · 最新资讯列表</div>
          </div>
          <h1 className="mt-2 text-display text-[24px] md:text-[34px] font-semibold">最新资讯</h1>
          <p className="mt-2 text-[13px] text-muted-foreground">
            展现专业高度，将产品能力转化为实时洞察力。支持外跳公众号/官网文章（链接可后续补齐）。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-4 mt-6">
        <Tabs defaultValue={NEWS_CATEGORIES[0]} className="w-full">
          <div className="glass rounded-2xl p-2 overflow-x-auto">
            <TabsList className="bg-transparent w-max">
              {NEWS_CATEGORIES.map((c) => (
                <TabsTrigger key={c} value={c} className="rounded-xl">
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {NEWS_CATEGORIES.map((c) => (
            <TabsContent key={c} value={c} className="mt-4">
              <div className="columns-1 md:columns-2 gap-3 [column-fill:_balance]">
                {byCat(c).map((n) => (
                  <div key={n.id} className="mb-3 break-inside-avoid">
                    <NewsCard {...n} />
                  </div>
                ))}
              </div>
              {byCat(c).length === 0 ? (
                <div className="mt-8 glass rounded-2xl p-8 text-center text-muted-foreground">
                  暂无该分类资讯
                </div>
              ) : null}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </SiteLayout>
  );
}
