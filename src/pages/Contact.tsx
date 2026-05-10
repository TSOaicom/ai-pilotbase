/*
DESIGN LOCK (科技流光·高端工业感)
- Immersive form: multi-select + text inputs
- Submission is front-end only (toast) since no backend
*/

import SiteLayout from "@/components/SiteLayout";
import { CONTACT_EMAIL } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Send, Handshake } from "lucide-react";
import { useMemo, useState } from "react";

const CATS = ["平台", "智能体", "模型", "算力", "数据"] as const;

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [cat, setCat] = useState<(typeof CATS)[number] | "">("");
  const [desc, setDesc] = useState("");

  const canSubmit = useMemo(() => {
    return name.trim() && phone.trim() && org.trim() && cat;
  }, [name, phone, org, cat]);

  const onSubmit = async () => {
    if (!canSubmit) {
      toast.error("请完善必填信息", { description: "姓名 / 电话 / 企业机构 / 意向分类" });
      return;
    }

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      org: org.trim(),
      cat,
      desc: desc.trim(),
    };

    // 前端演示：复制邮件内容，引导用户发送
    const mailBody = `产品试用申请 / 需求收集\n\n姓名：${payload.name}\n联系电话：${payload.phone}\n所属企业/机构：${payload.org}\n意向产品分类：${payload.cat}\n需求描述：${payload.desc || "（未填写）"}\n`;

    try {
      await navigator.clipboard.writeText(mailBody);
      toast.success("已生成申请内容并复制", {
        description: `请发送至：${CONTACT_EMAIL}`,
      });
    } catch {
      toast("请将信息发送至邮箱", { description: CONTACT_EMAIL });
    }
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1120px] px-4">
        <Card className="glass glow card-cut rounded-[26px] p-6 md:p-10 bracket">
          <div className="flex items-center gap-2">
            <Handshake className="size-4 text-primary" />
            <div className="text-[12px] text-muted-foreground">二级页面 · 合作对接</div>
          </div>
          <h1 className="mt-2 text-display text-[24px] md:text-[38px] font-semibold">合作对接 / 产品试用申请</h1>
          <p className="mt-3 text-[13px] text-muted-foreground">
            提交信息后将生成邮件内容（自动复制），请发送至合作对接邮箱完成申请。
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Button
              variant="secondary"
              className="rounded-2xl"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(CONTACT_EMAIL);
                  toast.success("邮箱已复制", { description: CONTACT_EMAIL });
                } catch {
                  toast(CONTACT_EMAIL);
                }
              }}
            >
              <Mail className="size-4 mr-2" />
              {CONTACT_EMAIL}
            </Button>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-[1120px] px-4 mt-6">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-4">
          <Card className="glass card-cut rounded-2xl p-6 md:p-8">
            <div className="text-display text-[18px] font-semibold">意向/产品试用表单</div>
            <div className="mt-1 text-[12px] text-muted-foreground">沉浸式表单：多选项结合文本框输入</div>

            <div className="mt-5 grid gap-3">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <div className="text-[12px] text-muted-foreground">姓名（必填）</div>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 rounded-2xl bg-background/20 border-border/60"
                  />
                </div>
                <div>
                  <div className="text-[12px] text-muted-foreground">联系电话（必填）</div>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 rounded-2xl bg-background/20 border-border/60"
                    inputMode="tel"
                  />
                </div>
              </div>

              <div>
                <div className="text-[12px] text-muted-foreground">所属企业/机构名称（必填）</div>
                <Input
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className="mt-2 rounded-2xl bg-background/20 border-border/60"
                />
              </div>

              <div>
                <div className="text-[12px] text-muted-foreground">意向产品分类（必填）</div>
                <Select value={cat} onValueChange={(v) => setCat(v as any)}>
                  <SelectTrigger className="mt-2 rounded-2xl bg-background/20 border-border/60">
                    <SelectValue placeholder="请选择（平台/智能体/模型/算力/数据）" />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-xl">
                    {CATS.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="text-[12px] text-muted-foreground">具体业务需求/痛点描述</div>
                <Textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="mt-2 rounded-2xl bg-background/20 border-border/60 min-h-[120px]"
                  placeholder="例如：希望在X场景中实现Y指标，当前痛点为Z..."
                />
              </div>

              <div className="pt-1">
                <Button
                  onClick={onSubmit}
                  className="rounded-2xl bg-primary text-primary-foreground hover:brightness-110"
                >
                  <Send className="size-4 mr-2" />
                  提交
                </Button>
              </div>
            </div>
          </Card>

          <Card className="glass glow rounded-2xl p-6 md:p-8">
            <div className="text-display text-[18px] font-semibold">合作生态 / 赋能伙伴</div>
            <p className="mt-2 text-[13px] text-foreground/75 leading-relaxed">
              这里支持展示科研机构、行业领军企业、供应链上下游合作伙伴 Logo（可后续补齐素材）。
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="glass rounded-xl aspect-[3/2] flex items-center justify-center text-[12px] text-muted-foreground"
                >
                  Logo
                </div>
              ))}
            </div>

            <div className="mt-5 text-[12px] text-muted-foreground">
              备注：如需“Logo墙轮播”，可在你提供 Logo 文件后升级为自动滚动展示。
            </div>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
