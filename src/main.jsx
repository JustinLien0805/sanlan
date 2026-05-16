import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "motion/react";
import {
  ArrowRight,
  Facebook,
  Home,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const navItems = [
  ["作品", "/works"],
  ["服務", "/#服務"],
  ["流程", "/#流程"],
  ["聯絡", "#聯絡"],
];

const businessInfo = {
  name: "山嵐室內設計",
  englishName: "Sanlan Interior Design",
  address: "台北市南港區重陽路45號1樓",
  phone: "02-2651-6998",
  phoneHref: "tel:0226516998",
  email: "sanlan88@gmail.com",
  facebook: "facebook.com/sanlan.design",
  facebookHref: "https://facebook.com/sanlan.design",
  line: "@sanlan.design",
  lineHref: "https://line.me/R/ti/p/@sanlan.design",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E9%87%8D%E9%99%BD%E8%B7%AF45%E8%99%9F1%E6%A8%93",
};

const contactActions = [
  {
    label: "Facebook",
    value: businessInfo.facebook,
    href: businessInfo.facebookHref,
    icon: Facebook,
    external: true,
  },
  {
    label: "LINE",
    value: businessInfo.line,
    href: businessInfo.lineHref,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "電話",
    value: businessInfo.phone,
    href: businessInfo.phoneHref,
    icon: Phone,
  },
  {
    label: "地址",
    value: businessInfo.address,
    href: businessInfo.mapHref,
    icon: MapPin,
    external: true,
  },
  {
    label: "Email",
    value: businessInfo.email,
    href: `mailto:${businessInfo.email}`,
    icon: Mail,
  },
];

const heroContactActions = contactActions.filter(
  ({ label }) => label !== "Email",
);

const projects = [
  {
    id: "home",
    title: "住家",
    type: "住宅空間設計",
    style: "格局調整、收納規劃、材質搭配與生活動線整合。",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    cases: [
      {
        title: "南港日常宅",
        meta: "台北南港 / 28 坪 / 新成屋",
        tags: ["木質調", "開放客餐廳", "收納"],
        summary: "以清爽動線和溫潤材質，整理一家人的日常節奏。",
      },
      {
        title: "城市小宅",
        meta: "台北市 / 18 坪 / 小坪數",
        tags: ["小宅", "多功能房", "隱藏收納"],
        summary: "把有限坪數留給真正會被使用的生活場景。",
      },
      {
        title: "老屋留白",
        meta: "新北市 / 34 坪 / 老屋翻新",
        tags: ["老屋", "採光", "基礎工程"],
        summary: "更新管線與格局，保留安靜耐看的居住表情。",
      },
    ],
  },
  {
    id: "office",
    title: "辦公區域",
    type: "辦公空間設計",
    style: "接待區、會議室、工作區與品牌形象空間配置。",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    cases: [
      {
        title: "品牌接待辦公室",
        meta: "台北內湖 / 56 坪 / 辦公室",
        tags: ["接待區", "會議室", "品牌牆"],
        summary: "以簡潔材質建立第一印象，讓訪客與團隊都能自然使用。",
      },
      {
        title: "彈性工作區",
        meta: "台北南港 / 42 坪 / 辦公區域",
        tags: ["開放工位", "收納牆", "彈性配置"],
        summary: "整合固定座位、討論區與文件收納，讓工作節奏更清楚。",
      },
      {
        title: "小型工作室",
        meta: "台北松山 / 22 坪 / 工作室",
        tags: ["展示", "辦公", "會客"],
        summary: "在小尺度裡安排展示、討論與日常辦公的轉換。",
      },
    ],
  },
  {
    id: "cabinet",
    title: "系統櫃",
    type: "系統櫃設計",
    style: "玄關、廚房、臥室、書房與展示收納的客製規劃。",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    cases: [
      {
        title: "玄關收納牆",
        meta: "住家 / 玄關 / 系統櫃",
        tags: ["鞋櫃", "穿鞋椅", "展示層板"],
        summary: "把出門與回家的物件收好，維持入口清爽。",
      },
      {
        title: "臥室衣物系統",
        meta: "住家 / 臥室 / 衣櫃",
        tags: ["衣櫃", "抽屜", "吊掛"],
        summary: "依衣物比例安排吊掛、摺放與抽屜分類。",
      },
      {
        title: "書房展示櫃",
        meta: "住家 / 書房 / 展示收納",
        tags: ["書櫃", "展示", "工作桌"],
        summary: "讓閱讀、工作與收藏展示共存在同一面牆。",
      },
    ],
  },
];

const services = [
  ["住宅設計", "從格局、收納到材質細節，規劃貼近日常節奏的家。"],
  ["商業空間", "把品牌氣質轉化為動線、燈光與顧客體驗。"],
  ["老屋翻新", "整合基礎工程、機能更新與風格再塑。"],
  ["軟裝配置", "以家具、燈飾、窗簾與飾品完成空間表情。"],
];

const process = [
  "初步諮詢",
  "需求訪談",
  "平面配置",
  "風格提案",
  "預算報價",
  "施工交付",
];

const heroImages = [
  {
    src: projects[0].image,
    alt: "山嵐室內設計住家空間",
    label: "住家",
    className: "mt-10 aspect-[3/4]",
  },
  {
    src: projects[1].image,
    alt: "山嵐室內設計辦公區域",
    label: "辦公區域",
    className: "aspect-[3/5]",
  },
  {
    src: projects[2].image,
    alt: "山嵐室內設計系統櫃",
    label: "系統櫃",
    className: "aspect-[4/3]",
  },
];

function App() {
  const path = window.location.pathname === "/works" ? "/works" : "/";

  return (
    <main className="min-h-screen bg-rice pb-28 text-ink md:pb-0">
      <Header />
      {path === "/works" ? <WorksPage /> : <HomePage />}
      <ContactSection />
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/95 px-4 py-3 shadow-[0_-18px_45px_rgba(36,33,29,0.18)] backdrop-blur md:hidden">
        <QuickContactBar actions={heroContactActions} compact />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-rice/92 text-ink backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="/" className="text-lg font-semibold tracking-wide">
          {businessInfo.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="opacity-85 transition hover:opacity-100"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {heroContactActions.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noreferrer" : undefined}
                aria-label={`立即使用${action.label}聯絡${businessInfo.name}`}
                className="grid size-10 place-items-center rounded-full border border-ink/10 bg-white text-ink transition hover:bg-cedar hover:text-white"
              >
                <Icon size={18} />
              </a>
            );
          })}
          <a
            href="#聯絡"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-cedar"
          >
            預約諮詢
            <ArrowRight size={16} />
          </a>
        </div>
        <button
          className="grid size-10 place-items-center rounded-full border border-ink/15 md:hidden"
          aria-label="開啟選單"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

function HeroImage({ image }) {
  return (
    <motion.a
      href={`/works#case-${image.label === "住家" ? "home" : image.label === "辦公區域" ? "office" : "cabinet"}`}
      className={`group relative overflow-hidden rounded-lg bg-white shadow-soft ${image.className}`}
      variants={{
        hidden: { opacity: 0, y: 22, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
    </motion.a>
  );
}

function HomePage() {
  return (
    <>
      <section className="px-5 pt-32 md:px-8">
        <div className="mx-auto grid min-h-[72vh] max-w-7xl gap-12 border-b border-ink/10 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-sm font-semibold tracking-[0.28em] text-clay">
              SANLAN INTERIOR DESIGN
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-ink md:text-7xl">
              山嵐室內設計
            </h1>
            <p className="mt-4 text-lg font-medium text-cedar">
              {businessInfo.englishName}
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-stonework md:text-xl">
              位於台北南港，Sanlan
              以安靜、清楚、耐看的設計語彙，整理住家、辦公區域與系統櫃的日常尺度。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#聯絡"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-cedar"
              >
                立即預約諮詢
                <ArrowRight size={18} />
              </a>
              <a
                href="/works"
                className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 font-medium text-ink transition hover:bg-white"
              >
                查看作品
              </a>
            </div>
          </motion.div>
          <motion.div
            className="grid min-h-[400px] grid-cols-2 gap-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.18,
                },
              },
            }}
          >
            <div className="grid gap-4">
              {heroImages.slice(0, 2).map((image) => (
                <HeroImage key={image.label} image={image} />
              ))}
            </div>
            <div className="grid gap-4">
              {heroImages.slice(0, 2).map((image) => (
                <HeroImage key={image.label} image={image} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="作品" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">精選空間作品</h2>
          </div>
          <p className="max-w-xl leading-7 text-stonework">
            作品依住家、辦公區域與系統櫃三大類呈現，後續可替換為實際完工照、坪數、地點與設計說明。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-lg bg-white shadow-soft"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={`山嵐室內設計 ${project.title} 作品分類`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-clay">{project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-stonework">{project.style}</p>
                <a
                  href={`/works#case-${project.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cedar"
                >
                  查看 {project.cases.length} 個案例
                  <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="服務" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-label">Services</p>
            <h2 className="section-title">從設計到落地的完整服務</h2>
            <p className="mt-6 leading-8 text-stonework">
              山嵐室內設計重視空間的長期使用感，從需求盤點、風格方向、預算控制到施工細節，協助台北、南港與周邊地區客戶把想像轉成可生活的場景。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map(([title, text], index) => (
              <div key={title} className="rounded-lg border border-ink/10 p-6">
                <div className="mb-5 grid size-11 place-items-center rounded-full bg-mist text-cedar">
                  {index % 2 === 0 ? <Home size={21} /> : <Ruler size={21} />}
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-stonework">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="流程" className="bg-cedar px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="section-label text-mist">Process</p>
          <h2 className="section-title text-white">清楚透明的設計流程</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {process.map((item, index) => (
              <div key={item} className="rounded-lg border border-white/18 p-5">
                <div className="text-sm text-white/55">0{index + 1}</div>
                <h3 className="mt-8 text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function WorksPage() {
  return (
    <>
      <section className="px-5 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl border-b border-ink/10 pb-14">
          <p className="section-label">Portfolio</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            作品案例
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stonework">
            依住家、辦公區域與系統櫃分頁整理。每個分類底下保留多個案例，方便後續擴充實際照片、坪數與設計說明。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`#case-${project.id}`}
                className="rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-mist"
              >
                {project.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="space-y-20">
          {projects.map((project) => (
            <section
              key={project.id}
              id={`case-${project.id}`}
              className="scroll-mt-24"
            >
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                <div>
                  <div className="overflow-hidden rounded-lg bg-white shadow-soft">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`山嵐室內設計 ${project.title} 作品分類`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-clay">{project.type}</p>
                      <h2 className="mt-2 text-3xl font-semibold">
                        {project.title}
                      </h2>
                      <p className="mt-3 leading-7 text-stonework">
                        {project.style}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.cases.map((work) => (
                    <article
                      key={work.title}
                      className="rounded-lg border border-ink/10 bg-white p-5"
                    >
                      <p className="text-sm text-stonework">{work.meta}</p>
                      <h3 className="mt-3 text-xl font-semibold">
                        {work.title}
                      </h3>
                      <p className="mt-3 leading-7 text-stonework">
                        {work.summary}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-cedar"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactSection() {
  return (
    <section id="聯絡" className="bg-ink px-5 py-20 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="section-label text-mist">Contact</p>
          <h2 className="section-title text-white">一起規劃你的理想空間</h2>
          <p className="mt-6 max-w-2xl leading-8 text-white/70">
            歡迎來到台北市南港區重陽路45號1樓，或直接透過 Facebook、LINE、電話與
            Email 聯繫山嵐室內設計。
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 text-ink shadow-soft">
          <div className="grid gap-3">
            {contactActions.map((action) => (
              <ContactLink key={action.label} action={action} />
            ))}
          </div>
          <a
            href={`mailto:${businessInfo.email}`}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cedar px-5 py-3 font-medium text-white transition hover:bg-ink"
          >
            <Sparkles size={18} />
            送出諮詢需求
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-5 pb-8 text-sm text-white/45 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/12 pt-8 md:flex-row md:items-center md:justify-between">
        <span>
          © 2026 {businessInfo.name} {businessInfo.englishName}
        </span>
        <span>
          {businessInfo.address} / {businessInfo.phone}
        </span>
      </div>
    </footer>
  );
}

function QuickContactBar({ actions, compact = false, className = "" }) {
  const columnClass = actions.length >= 4 ? "grid-cols-4" : "grid-cols-3";

  return (
    <div className={`grid ${columnClass} gap-2 ${className}`}>
      {actions.map((action) => (
        <QuickContactButton
          key={action.label}
          action={action}
          compact={compact}
        />
      ))}
    </div>
  );
}

function QuickContactButton({ action, compact }) {
  const Icon = action.icon;
  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      className={`group flex items-center justify-center gap-2 rounded-full font-semibold transition ${
        compact
          ? "flex-col gap-1 bg-ink px-2 py-2.5 text-xs text-white active:scale-[0.98]"
          : "flex-col gap-1 border border-white/25 bg-white/14 px-2 py-3 text-sm text-white backdrop-blur hover:bg-white hover:text-ink sm:flex-row sm:gap-2 sm:px-4 sm:text-base"
      }`}
      aria-label={`立即使用${action.label}聯絡${businessInfo.name}`}
    >
      <Icon size={compact ? 18 : 19} />
      <span>{action.label}</span>
    </a>
  );
}

function ContactLink({ action }) {
  const Icon = action.icon;
  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      className="flex items-center gap-4 rounded-lg bg-rice p-4 transition hover:bg-mist/80"
    >
      <span className="grid size-10 place-items-center rounded-full bg-mist text-cedar">
        <Icon size={19} />
      </span>
      <div className="min-w-0">
        <div className="text-sm text-stonework">{action.label}</div>
        <div className="truncate font-semibold">{action.value}</div>
      </div>
    </a>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default App;
