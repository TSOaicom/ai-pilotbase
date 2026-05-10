/*
DESIGN LOCK (科技流光·高端工业感)
- Base intro page: strong typographic hierarchy + keyword blocks
*/

import SiteLayout from "@/components/SiteLayout";
import { ABOUT } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Target, Network } from "lucide-react";

export default function BaseIntro() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1120px] px-4">
        <Card className="glass glow card-cut rounded-[26px] p-6 md:p-10 bracket">
          <div className="flex items-center gap-2">
            <Building2 className="size-4 text-primary" />
            <div className="text-[12px] text-muted-foreground">二级页面 · 基地介绍</div>
          </div>
          <h1 className="mt-2 text-display text-[24px] md:text-[38px] font-semibold">{ABOUT.title}</h1>
          <p className="mt-3 text-[14px] md:text-[16px] text-foreground/80 leading-relaxed max-w-[70ch]">
            {ABOUT.body}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["技术攻关", "生态汇聚", "行业引领", "可复制", "可推广"].map((t) => (
              <Badge key={t} variant="secondary" className="rounded-xl">
                {t}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-[1120px] px-4 mt-6">
        <div className="grid md:grid-cols-3 gap-3">
          <Card className="glass card-cut rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <Target className="size-4 text-primary" />
              <div className="text-display text-[18px] font-semibold">定位与使命</div>
            </div>
            <p className="mt-2 text-[13px] text-foreground/75 leading-relaxed">
              面向国际物流供应链的AI中试验证与能力孵化，形成可复用的标准化交付体系。
            </p>
          </Card>
          <Card className="glass glow rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <Network className="size-4 text-primary" />
              <div className="text-display text-[18px] font-semibold">能力体系</div>
            </div>
            <p className="mt-2 text-[13px] text-foreground/75 leading-relaxed">
              以“数据-平台-工具链-模型-应用”五层结构组织能力，降低信息超载，提升定位效率。
            </p>
          </Card>
          <Card className="glass card-cut rounded-2xl p-6">
            <div className="text-display text-[18px] font-semibold">交付方式</div>
            <p className="mt-2 text-[13px] text-foreground/75 leading-relaxed">
              支持 API / Web / 嵌入式 / 智能体定制等多种形态，按场景提供试用与合作对接。
            </p>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
