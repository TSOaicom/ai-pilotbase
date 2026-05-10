/*
DESIGN LOCK (科技流光·高端工业感)
- Dark navy stage + electric cyan highlights
- Asymmetric layout + glass panels + luminous lines
*/

export type ProductCategory = "数据" | "平台" | "智能工具链" | "模型" | "应用";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  subtitle?: string;
  tags?: string[];
  domain?: string;
  form?: string;
  advantages?: string; // 支持富文本（用\n分行）
};

export const CONTACT_EMAIL = "gylszcx@xmschain.com";

export const NAV_ITEMS = [
  { id: "home", label: "首页", href: "/" },
  { id: "products", label: "产品大厅", href: "/products" },
  { id: "news", label: "最新资讯", href: "/news" },
  { id: "base", label: "基地介绍", href: "/base" },
  { id: "contact", label: "合作对接", href: "/contact" },
] as const;

export const HERO = {
  title: "国家人工智能应用中试基地首批建设成果发布",
  subtitle:
    "汇聚生态，智领未来。推动人工智能赋能国际物流供应链转型升级，打造可复制、可推广的示范样板。",
};

export const ABOUT = {
  title: "关于我们 / 基地介绍",
  body:
    "国家人工智能应用中试基地由厦门供应链数智创新有限公司建设运营，致力于提供领先的技术攻关能力、生态汇聚成效和行业引领作用，打造数智供应链的核心枢纽。",
};

export const SUPPORT_SERVICES = [
  {
    title: "咨询对接",
    desc: "专业团队对接，明确场景与落地路径。",
  },
  {
    title: "需求收集",
    desc: "快速梳理痛点，匹配产品能力与交付形态。",
  },
  {
    title: "产品试用",
    desc: "体验关键能力，评估效果与投入产出。",
  },
] as const;

export type NewsCategory = "新闻动态" | "客户案例" | "前沿技术" | "行业资讯";

export type NewsItem = {
  id: string;
  category: NewsCategory;
  title: string;
  date: string;
  summary: string;
  link?: string; // 需求：可跳公众号/官网文章；暂留占位
};

export const NEWS_CATEGORIES: NewsCategory[] = ["新闻动态", "客户案例", "前沿技术", "行业资讯"];

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    category: "新闻动态",
    title: "政府考察：中试基地建设进展与阶段性成果",
    date: "2026-05-01",
    summary: "聚焦算力、数据、平台、模型、应用能力的体系化落地。",
  },
  {
    id: "n2",
    category: "新闻动态",
    title: "仪式签约：生态伙伴协同共建供应链AI能力",
    date: "2026-04-18",
    summary: "围绕场景共建与能力复用，推动可复制、可推广示范样板。",
  },
  {
    id: "n3",
    category: "客户案例",
    title: "企业合作：大模型增强研报生成与决策支持",
    date: "2026-04-06",
    summary: "通过数据清洗、RAG与智能体编排，形成端到端闭环。",
  },
  {
    id: "n4",
    category: "行业资讯",
    title: "场景共建：多式联运风险预警与运输效率提升",
    date: "2026-03-21",
    summary: "以风险控制为牵引，联动数据治理与可视化监控。",
  },
];

// 需求文档：产品体系按“22项产品能力”口径组织（可按后续素材扩展）。
export const PRODUCTS: Product[] = [
  // 数据
  {
    id: "data-quality",
    name: "行业高质量数据集",
    category: "数据",
    form: "API接口",
    advantages: "全景行业覆盖｜极致质效保障｜极简开箱即用。",
  },
  {
    id: "data-weather",
    name: "全球气象预测数据",
    category: "数据",
    form: "API接口",
    advantages: "行业顶尖精度｜多智能体交互｜深度业务融合｜权威商用资源。",
  },

  // 平台
  {
    id: "platform-train",
    name: "大模型推训一体平台服务",
    category: "平台",
    domain: "通用",
    form: "多租户账号订阅，Web界面",
    advantages: "海量算力调度｜全链路打通｜一站式降本增效。",
  },
  {
    id: "platform-agent-dev",
    name: "智能体开发平台",
    category: "平台",
    domain: "通用",
    form: "多租户账号订阅，Web界面",
    advantages: "依托低代码搭建、多模型兼容与全链路运维能力，无需专业编程能力即可快速构建智能体。",
  },
  {
    id: "platform-knowledge",
    name: "知识生产平台",
    category: "平台",
    form: "多租户账号订阅，Web界面",
    advantages: "多租户协同管控｜全模态兼容｜精细标注｜内置自研智能算子实现AI辅助标注。",
  },

  // 智能工具链
  {
    id: "tool-lowcode",
    name: "低代码应用开发工具",
    category: "智能工具链",
    form: "Web",
    advantages:
      "智能极速微调引擎｜全模态数据质检流水线｜自然语言驱动极速开发｜支持私有化部署确保核心资产不出域。",
  },
  {
    id: "tool-viz-monitor",
    name: "数据可视化与监控工具",
    category: "智能工具链",
    form: "Web",
    advantages:
      "拖拽驱动极速搭建（≥20图表组件/≥5行业模板/支持3D）\n多源整合实时感知（延迟≤3秒）\n灵活发布，安全可控。",
  },
  {
    id: "tool-compute-sense",
    name: "算力感知工具",
    category: "智能工具链",
    form: "API + Web",
    advantages:
      "事前感知，主动预警：将算力评估前置至任务执行前，避免过载导致性能故障。\n三维一体分析：需求预估、能耗测算、安全预警统一集成。\n轻量集成：标准API + Web形态，可无缝嵌入既有平台。",
  },

  // 应用
  {
    id: "app-report-bulk",
    name: "大宗商品供应链智能研报",
    category: "应用",
    form: "多租户账号订阅，Web界面",
    advantages:
      "内置强大数据清洗与整合机制\nPC/移动端可视化，多模态输入\n大模型增强创作：结合RAG与MCP技术自动生成图表及深度解读报告。",
  },
  {
    id: "app-agent-price",
    name: "农产品价格预测智能体",
    category: "应用",
    form: "智能体、Web嵌入",
    advantages: "混合深度学习架构；融合舆情量化修正与白盒化因子解析，清晰呈现驱动权重与影响路径。",
  },
  {
    id: "app-agent-yield",
    name: "农产品产量预测智能体",
    category: "应用",
    form: "智能体、Web嵌入",
    advantages: "多尺度前置预测；国家级精度保证，总产量预测平均准确率>94%。",
  },
  {
    id: "app-agent-shipping",
    name: "多式联运海运段干散货智能体",
    category: "应用",
    form: "智能体、Web嵌入",
    advantages:
      "透明归因：SHAP + 注意力可视化，实现预测/事后/仿真全链路解析。\n智能交互：上下文感知问答 + 多终端适配，非专业用户也能快速获取关键信息。",
  },
  {
    id: "app-agent-road",
    name: "多式联运公路段货找车、车找货智能体",
    category: "应用",
    form: "智能体（定制化）",
    advantages:
      "货找车（货速配）：实时测算运输成本，提供运力适配最优方案。\n车找货（车必盈）：路线车况动态建模，优先推荐高价值订单，优化空驶路线。",
  },
  {
    id: "app-agent-weather-decision",
    name: "气象预报决策分析智能体",
    category: "应用",
    form: "智能体",
    advantages: "深耕细分场景；极致合规可靠；即查即用体验。",
  },
  {
    id: "app-agent-risk",
    name: "物流风险预警智能体",
    category: "应用",
    form: "智能体、Web嵌入",
    advantages: "滞期风险提前7天预判；未来20天航行ETA误差48小时以内（准确率>70%），异常自动告警防损。",
  },
  {
    id: "app-weather-viz",
    name: "全球气象可视化平台",
    category: "应用",
    form: "多租户账号订阅，Web界面",
    advantages: "风乌大模型底座高精度动态预测；极端天气AI精准预警；多智能体一体化，实现“一问即得”。",
  },
  {
    id: "app-opinion",
    name: "全球舆情洞察平台",
    category: "应用",
    form: "Web界面",
    advantages: "行业专属微调底座，消除通用模型“行业幻觉”；全球多源全景监测；端到端30分钟极速预警闭环。",
  },

  // 模型（文档未给完整细节，先保留条目）
  { id: "model-inventory", name: "智能巡库模型", category: "模型" },
  { id: "model-zl", name: "智链大模型", category: "模型" },
  { id: "model-energy-weather", name: "能源气象模型", category: "模型" },

  // 算力（需求表单中包含“算力”意向分类，因此保留资源能力入口）
  { id: "compute-general", name: "通算资源", category: "平台", subtitle: "弹性算力资源池", form: "资源服务" },
  { id: "compute-ai", name: "智算资源", category: "平台", subtitle: "面向大模型训练/推理", form: "资源服务" },
];
