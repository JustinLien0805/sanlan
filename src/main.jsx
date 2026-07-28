import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  DraftingCompass,
  Facebook,
  Hammer,
  Home,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquareText,
  Palette,
  Phone,
  Ruler,
  Sparkles,
} from "lucide-react";
import titleImage from "./img/brand/title.png";
import "./styles.css";

const projectImageModules = import.meta.glob(
  "./img/projects/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

const slideImageModules = import.meta.glob(
  "./img/slide/*.{jpg,JPG,jpeg,JPEG,png,PNG}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

function getProjectImages(folder, altPrefix) {
  return Object.entries(projectImageModules)
    .filter(([path]) => path.includes(`/projects/${folder}/`))
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([path, src], index) => ({
      path,
      src,
      alt: `${altPrefix}案例照片 ${index + 1}`,
    }));
}

const slideImages = Object.entries(slideImageModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src], index) => ({
    path,
    src,
    alt: `山嵐室內設計首頁作品輪播 ${index + 1}`,
    label: `slide-${index + 1}`,
  }));

const zhengZiqiangImages = getProjectImages(
  "residential/zheng-ziqiang",
  "鄭宅/自強案 住家",
);

const luXiangyangImages = getProjectImages(
  "residential/lu-xiangyang-258",
  "陸宅/向陽258 住家",
);
const luXiangyangCover =
  luXiangyangImages.find((image) =>
    image.path.includes("8F04E481-A7D9-4AE1-941F-C4A31EA0E03F"),
  )?.src ?? luXiangyangImages[0]?.src;

const zhouImages = getProjectImages("residential/zhou", "周宅 住家");

const linYanjiImages = getProjectImages("residential/lin", "林宅/延吉街 住家");

const huangXiangxieImages = getProjectImages(
  "residential/huang",
  "黃宅/香榭13 住家",
);

const duQingtianImages = getProjectImages(
  "residential/du",
  "杜宅/晴天森林 住家",
);

const liuTaoyuanImages = getProjectImages(
  "residential/liu-taoyuan",
  "劉宅/桃園 住家",
);

const tsengFushunImages = getProjectImages(
  "residential/tseng",
  "曾宅/撫順街 住家",
);

const zhengYanjiuyuanImages = getProjectImages(
  "residential/chung",
  "鄭宅/研究院 住家",
);

const suZiliImages = getProjectImages("residential/su", "蘇宅/自立路 住家");

const hongXinjuImages = getProjectImages("residential/hong", "洪宅/心居 住家");

const zhaoJingmaoImages = getProjectImages(
  "residential/zhao-jingmao-2nd",
  "趙宅/經貿二路 住家",
);

const yangLinkouImages = getProjectImages(
  "residential/yang-linkou",
  "楊宅/林口 住家",
);

const linSongheImages = getProjectImages(
  "residential/lin-songhe",
  "林宅/松河街 住家",
);

const linJinxiImages = getProjectImages(
  "residential/lin-jinxi",
  "林宅/錦西街 住家",
);

const qiuXindianImages = getProjectImages(
  "residential/qiu-xindian",
  "邱宅/新店 住家",
);

const chenZhongheImages = getProjectImages(
  "residential/chen-zhonghe",
  "陳宅/中和 住家",
);

const chenChongyang136Images = getProjectImages(
  "residential/chen-chongyang",
  "陳宅/重陽136 住家",
);

const techCompanyOfficeImages = getProjectImages(
  "office/a",
  "科技公司 辦公室",
);

const travelCompanyOfficeImages = getProjectImages(
  "office/b",
  "旅遊公司 辦公室",
);

const agencyCompanyOfficeImages = getProjectImages(
  "office/c",
  "仲介公司 辦公室",
);

const storageCompanyOfficeImages = getProjectImages(
  "office/d",
  "迷你倉儲 辦公室",
);

const wangYanjiuyuanCabinetImages = getProjectImages(
  "cabinet/wang",
  "王宅/研究院 系統櫃",
);

const closetCabinetImages = getProjectImages("cabinet/closet", "更衣室 系統櫃");

const chenChongyangImages = getProjectImages(
  "render/chen-chongyang-57",
  "陳宅/重陽57 空間設計模擬",
);

const liuGuomeiImages = getProjectImages(
  "render/liu-guomei",
  "劉宅/國美案 空間設計模擬",
);

const liangFuyuImages = getProjectImages(
  "render/liang-fuyu",
  "梁宅/富宇案 空間設計模擬",
);

const leeRishengImages = getProjectImages(
  "render/lee3",
  "李宅/日升月恆 空間設計模擬",
);

const leeZhongshanImages = getProjectImages(
  "render/lee2",
  "李宅/中山北 空間設計模擬",
);

const leeJiaziyuanImages = getProjectImages(
  "render/lee-jiaziyuan",
  "李宅/甲子園 空間設計模擬",
);

const zhengYanjiRenderImages = getProjectImages(
  "render/chung",
  "鄭宅/延吉街 空間設計模擬",
);

const zhengXiangduoImages = getProjectImages(
  "render/chung2",
  "鄭宅/香朵 空間設計模擬",
);

const jiangZhongheImages = getProjectImages(
  "render/jiang",
  "蔣宅/中和 空間設計模擬",
);

const linGardenVillaImages = getProjectImages(
  "render/lin",
  "林宅/花園別墅 空間設計模擬",
);

const yangSanchongImages = getProjectImages(
  "render/yang",
  "楊宅/三重 空間設計模擬",
);

const navItems = [
  ["作品", "/works"],
  ["服務", "/#服務"],
  ["收費", "/#收費"],
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
  facebook: "facebook.com/sanlan888",
  facebookHref: "https://www.facebook.com/sanlan888/",
  line: "@sanlan.design",
  lineHref: "https://line.me/R/ti/p/@sanlan.design",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8C%97%E5%B8%82%E5%8D%97%E6%B8%AF%E5%8D%80%E9%87%8D%E9%99%BD%E8%B7%AF45%E8%99%9F1%E6%A8%93",
};

const serviceAreas = ["南港", "台北", "松山", "內湖"];

const localSeoKeywords = [
  "南港室內設計",
  "台北室內設計",
  "松山室內設計",
  "內湖室內設計",
  "台北住家設計",
  "南港系統櫃",
];

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
    image: zhengZiqiangImages[0]?.src ?? luXiangyangCover,
    cases: [
      {
        id: "zheng-residence",
        title: "鄭宅/自強案",
        meta: "新北中和區 / 住家",
        tags: ["住家", "中和區", "完工案例"],
        summary:
          "以實際生活需求整理動線、收納與材質細節，呈現清楚耐看的居家尺度。",
        images: zhengZiqiangImages,
        cover: zhengZiqiangImages[0]?.src,
        href: "/works/zheng-residence",
      },
      {
        id: "lu-residence",
        title: "陸宅/向陽258",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "以簡潔配置與實用收納回應日常生活，讓空間維持清楚、舒適的使用節奏。",
        images: luXiangyangImages,
        cover: luXiangyangCover,
        href: "/works/lu-residence",
      },
      {
        id: "zhou-residence",
        title: "周宅/森活莊園",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary: "以清楚動線與舒適材質整理居家尺度，讓日常使用更自然順手。",
        images: zhouImages,
        cover: zhouImages[0]?.src,
        href: "/works/zhou-residence",
      },
      {
        id: "lin-yanji",
        title: "林宅/延吉街",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary: "以柔和材質與清楚收納安排日常場景，維持舒適、耐看的居家表情。",
        images: linYanjiImages,
        cover: linYanjiImages[0]?.src,
        href: "/works/lin-yanji",
      },
      {
        id: "huang-xiangxie-13",
        title: "黃宅/香榭13",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary: "以清爽格局與細緻收納整理居家動線，讓生活場景更俐落舒適。",
        images: huangXiangxieImages,
        cover: huangXiangxieImages[0]?.src,
        href: "/works/huang-xiangxie-13",
      },
      {
        id: "du-qingtian-forest",
        title: "杜宅/晴天森林",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "以清楚收納、柔和材質與生活動線整理居家場景，讓日常使用更舒適順手。",
        images: duQingtianImages,
        cover: duQingtianImages[0]?.src,
        href: "/works/du-qingtian-forest",
      },
      {
        id: "liu-taoyuan",
        title: "劉宅/桃園",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "依照一家人的生活節奏安排格局、收納與材質細節，呈現耐看的居家尺度。",
        images: liuTaoyuanImages,
        cover: liuTaoyuanImages[0]?.src,
        href: "/works/liu-taoyuan",
      },
      {
        id: "tseng-fushun",
        title: "曾宅/撫順街",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "以清楚動線、收納配置與材質細節整理生活場景，讓居家使用更自然耐看。",
        images: tsengFushunImages,
        cover: tsengFushunImages[0]?.src,
        href: "/works/tseng-fushun",
      },
      {
        id: "zheng-yanjiuyuan",
        title: "鄭宅/研究院",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "以清楚格局、收納配置與材質細節整理日常尺度，讓居家空間更舒適耐看。",
        images: zhengYanjiuyuanImages,
        cover: zhengYanjiuyuanImages[0]?.src,
        href: "/works/zheng-yanjiuyuan",
      },
      {
        id: "su-zili",
        title: "蘇宅/自立路",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "以生活動線、收納安排與材質細節整合居家需求，讓日常空間更清楚舒適。",
        images: suZiliImages,
        cover: suZiliImages[0]?.src,
        href: "/works/su-zili",
      },
      {
        id: "hong-xinju",
        title: "洪宅/心居",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "以清楚動線、收納安排與柔和材質整理居家場景，讓日常尺度更舒適耐看。",
        images: hongXinjuImages,
        cover: hongXinjuImages[0]?.src,
        href: "/works/hong-xinju",
      },
      {
        id: "zhao-jingmao-2nd",
        title: "趙宅/經貿二路",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "以生活動線、收納配置與材質細節整理居家尺度，讓空間更清楚舒適。",
        images: zhaoJingmaoImages,
        cover: zhaoJingmaoImages[0]?.src,
        href: "/works/zhao-jingmao-2nd",
      },
      {
        id: "yang-linkou",
        title: "楊宅/林口",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "依照日常節奏安排格局、收納與材質搭配，呈現舒適耐看的居家表情。",
        images: yangLinkouImages,
        cover: yangLinkouImages[0]?.src,
        href: "/works/yang-linkou",
      },
      {
        id: "lin-songhe",
        title: "林宅/松河街",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary: "以清楚格局與實用收納整理生活場景，讓居家使用更自然順手。",
        images: linSongheImages,
        cover: linSongheImages[0]?.src,
        href: "/works/lin-songhe",
      },
      {
        id: "lin-jinxi",
        title: "林宅/錦西街",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "整合收納、材質與光線細節，讓日常空間維持清爽且耐看的使用狀態。",
        images: linJinxiImages,
        cover: linJinxiImages[0]?.src,
        href: "/works/lin-jinxi",
      },
      {
        id: "qiu-xindian",
        title: "邱宅/新店",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "以居住需求為基礎整理格局、收納與材質方向，打造清楚舒適的生活空間。",
        images: qiuXindianImages,
        cover: qiuXindianImages[0]?.src,
        href: "/works/qiu-xindian",
      },
      {
        id: "chen-zhonghe",
        title: "陳宅/中和",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary: "以生活動線與材質細節整理空間表情，讓居家尺度更安定耐看。",
        images: chenZhongheImages,
        cover: chenZhongheImages[0]?.src,
        href: "/works/chen-zhonghe",
      },
      {
        id: "chen-chongyang-136",
        title: "陳宅/重陽136",
        meta: "住家",
        tags: ["住家", "完工案例"],
        summary:
          "以生活動線、收納配置與材質細節整理日常尺度，讓居家空間更清楚舒適。",
        images: chenChongyang136Images,
        cover: chenChongyang136Images[0]?.src,
        href: "/works/chen-chongyang-136",
      },
    ],
  },
  {
    id: "office",
    title: "辦公室",
    type: "辦公空間設計",
    style: "接待區、會議室、工作區與品牌形象空間配置。",
    image: techCompanyOfficeImages[0]?.src,
    cases: [
      {
        id: "tech-company-office",
        title: "科技公司",
        meta: "辦公室",
        tags: ["辦公室", "接待區", "工作區"],
        summary:
          "以清楚動線、材質配置與工作機能整理辦公場景，建立俐落專業的企業形象。",
        images: techCompanyOfficeImages,
        cover: techCompanyOfficeImages[0]?.src,
        href: "/works/tech-company-office",
      },
      {
        id: "travel-company-office",
        title: "旅遊公司",
        meta: "辦公室",
        tags: ["辦公室", "接待區", "會議空間"],
        summary:
          "以開放、明亮的辦公配置整理接待與工作需求，讓品牌形象與日常使用自然銜接。",
        images: travelCompanyOfficeImages,
        cover: travelCompanyOfficeImages[0]?.src,
        href: "/works/travel-company-office",
      },
      {
        id: "agency-company-office",
        title: "仲介公司",
        meta: "辦公室",
        tags: ["辦公室", "洽談區", "品牌形象"],
        summary:
          "整合洽談、接待與辦公機能，讓客戶接觸與團隊工作都維持清楚順手的節奏。",
        images: agencyCompanyOfficeImages,
        cover: agencyCompanyOfficeImages[0]?.src,
        href: "/works/agency-company-office",
      },
      {
        id: "storage-company-office",
        title: "迷你倉儲",
        meta: "辦公室",
        tags: ["辦公室", "接待區", "商業空間"],
        summary:
          "以服務流程與空間辨識度為核心，整理接待、展示與日常管理需要的辦公配置。",
        images: storageCompanyOfficeImages,
        cover: storageCompanyOfficeImages[0]?.src,
        href: "/works/storage-company-office",
      },
    ],
  },
  {
    id: "cabinet",
    title: "系統櫃",
    type: "系統櫃設計",
    style: "玄關、廚房、臥室、書房與展示收納的客製規劃。",
    image: wangYanjiuyuanCabinetImages[0]?.src,
    cases: [
      {
        id: "wang-yanjiuyuan-cabinet",
        title: "王宅/研究院",
        meta: "系統櫃 / 住家",
        tags: ["系統櫃", "收納規劃", "住宅機能"],
        summary:
          "依照生活動線與收納需求配置櫃體尺度，讓日常物件有清楚、順手的位置。",
        images: wangYanjiuyuanCabinetImages,
        cover: wangYanjiuyuanCabinetImages[0]?.src,
        href: "/works/wang-yanjiuyuan-cabinet",
      },
      {
        id: "closet-cabinet",
        title: "更衣室",
        meta: "系統櫃 / 更衣室",
        tags: ["系統櫃", "更衣室", "收納規劃"],
        summary:
          "依照衣物、配件與日常拿取習慣配置櫃體，讓更衣空間維持清楚、俐落的收納節奏。",
        images: closetCabinetImages,
        cover: closetCabinetImages[0]?.src,
        href: "/works/closet-cabinet",
      },
    ],
  },
  {
    id: "render",
    title: "空間設計模擬",
    type: "3D 設計渲染",
    style:
      "以擬真的空間畫面呈現格局、材質、光線與收納配置，協助設計討論更清楚。",
    image: chenChongyangImages[0]?.src,
    cases: [
      {
        id: "3d-rendering",
        title: "陳宅/重陽57",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary:
          "透過 3D 畫面整理空間比例、材質搭配與光線氛圍，讓提案與溝通更直覺。",
        images: chenChongyangImages,
        cover: chenChongyangImages[0]?.src,
        href: "/works/3d-rendering",
      },
      {
        id: "liu-guomei",
        title: "劉宅/國美案",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary:
          "以空間模擬呈現整體比例、材質方向與光線氛圍，讓設計討論更清楚。",
        images: liuGuomeiImages,
        cover: liuGuomeiImages[0]?.src,
        href: "/works/liu-guomei",
      },
      {
        id: "liang-residence",
        title: "梁宅/富宇18",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary:
          "以 3D 模擬整理空間比例、材質搭配與生活情境，協助確認設計方向。",
        images: liangFuyuImages,
        cover: liangFuyuImages[0]?.src,
        href: "/works/liang-residence",
      },
      {
        id: "lee-risheng-yueheng",
        title: "李宅/日升月恆",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary:
          "以空間模擬確認格局比例、材質方向與光線層次，讓提案討論更具體。",
        images: leeRishengImages,
        cover: leeRishengImages[0]?.src,
        href: "/works/lee-risheng-yueheng",
      },
      {
        id: "lee-zhongshan-north",
        title: "李宅/中山北",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary:
          "以空間模擬呈現格局安排、材質搭配與光線層次，讓設計方向更容易討論與確認。",
        images: leeZhongshanImages,
        cover: leeZhongshanImages[0]?.src,
        href: "/works/lee-zhongshan-north",
      },
      {
        id: "lee-jiaziyuan",
        title: "李宅/甲子園",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary:
          "以空間模擬整理格局比例、材質搭配與光線層次，讓提案方向更容易確認。",
        images: leeJiaziyuanImages,
        cover: leeJiaziyuanImages[0]?.src,
        href: "/works/lee-jiaziyuan",
      },
      {
        id: "zheng-yanji-render",
        title: "鄭宅/延吉街",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary:
          "以空間模擬整理格局比例、材質搭配與光線氛圍，協助確認設計方向。",
        images: zhengYanjiRenderImages,
        cover: zhengYanjiRenderImages[0]?.src,
        href: "/works/zheng-yanji-render",
      },
      {
        id: "zheng-xiangduo",
        title: "鄭宅/香朵",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary:
          "以空間模擬整理格局配置、材質語感與光線層次，協助確認整體設計方向。",
        images: zhengXiangduoImages,
        cover: zhengXiangduoImages[0]?.src,
        href: "/works/zheng-xiangduo",
      },
      {
        id: "jiang-zhonghe",
        title: "蔣宅/中和",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary: "以空間模擬整理格局、材質與光線配置，讓設計方向更容易確認。",
        images: jiangZhongheImages,
        cover: jiangZhongheImages[0]?.src,
        href: "/works/jiang-zhonghe",
      },
      {
        id: "lin-garden-villa",
        title: "林宅/花園別墅",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary:
          "以空間模擬呈現格局比例、材質搭配與光線氛圍，協助確認整體設計方向。",
        images: linGardenVillaImages,
        cover: linGardenVillaImages[0]?.src,
        href: "/works/lin-garden-villa",
      },
      {
        id: "yang-sanchong",
        title: "楊宅/三重",
        meta: "空間渲染 / 設計提案",
        tags: ["3D 渲染", "設計提案", "材質模擬"],
        summary:
          "以空間模擬整理格局比例、材質搭配與光線氛圍，讓設計方向更容易確認。",
        images: yangSanchongImages,
        cover: yangSanchongImages[0]?.src,
        href: "/works/yang-sanchong",
      },
    ],
  },
];

const services = [
  ["住宅設計", "從格局、收納到材質細節，規劃貼近日常節奏的家。"],
  ["辦公室設計", "把品牌氣質轉化為接待、會議與日常工作體驗。"],
  ["老屋翻新", "整合基礎工程、機能更新與風格再塑。"],
  ["軟裝配置", "以家具、燈飾、窗簾與飾品完成空間表情。"],
];

const pricingPlans = [
  {
    title: "初步諮詢",
    price: "免費",
    note: "適合第一次了解服務內容與合作方式。",
    items: ["需求初步討論", "流程與收費說明", "預算方向建議"],
  },
  {
    title: "全屋裝修設計",
    price: "依坪數與需求報價",
    note: "適合住家、辦公室或完整空間規劃。",
    items: ["平面配置與動線規劃", "風格與材質提案", "施工圖與工程預算整合"],
  },
  {
    title: "系統櫃設計",
    price: "依尺寸與材質報價",
    note: "適合玄關、廚房、臥室、書房等局部收納。",
    items: ["現場丈量", "櫃體配置設計", "板材、五金與施工估價"],
  },
];

const fullHouseProcess = [
  {
    title: "業務洽談",
    icon: MessageCircle,
    points: [
      "了解業主之各項需求。",
      "住宅類：家庭人口、起居習慣、特殊偏好、工程預算、設備及傢俱使用狀況、進度安排等。",
      "辦公室：公司成員、組織概況、企業形象、部門流程、事務機器使用狀況、未來 3 至 5 年成長幅度預估、工程預算、進度安排等。",
    ],
  },
  {
    title: "現場勘量",
    icon: Ruler,
    points: [
      "對工地現場之周圍環境進行瞭解及做詳細之勘量，並拍照存檔作為設計之參考。",
    ],
  },
  {
    title: "平面草圖定案",
    icon: DraftingCompass,
    points: ["對初步之規劃、動線等，先取得必要之認同，並確認設計輪廓。"],
  },
  {
    title: "草案簡報",
    icon: Palette,
    points: ["依初步規劃與動線提出草案簡報，先取得必要之認同。"],
  },
  {
    title: "簽訂設計合約",
    icon: MessageSquareText,
    points: [
      "如業主對前項提供之草案尚感滿意，並認為有進一步磋商研討之必要，則雙方簽訂設計合約。",
      "簽約後提供更詳盡的服務，並針對個案進行必要之修正及各種細部設計。",
    ],
  },
  {
    title: "設計定案",
    icon: DraftingCompass,
    points: ["根據設計草案，做必要之修正。"],
  },
  {
    title: "細部設計",
    icon: Palette,
    points: [
      "根據定案之設計，完成各項必要之施工詳圖及說明。",
      "編列工程估價及進度表。",
    ],
  },
  {
    title: "簽訂工程合約",
    icon: Calculator,
    points: [
      "工程延攬之說明：以合理價格取得工程承攬之權利，便於掌握工程品質，並對設計理念做較細節的詮釋。",
    ],
  },
  {
    title: "進行施工、完工驗收及交屋結案",
    icon: Hammer,
    points: ["進行施工", "完工驗收及交屋", "結案"],
  },
];

const cabinetProcess = [
  {
    title: "丈量",
    icon: Ruler,
    points: ["現場尺寸丈量", "確認空間條件與使用需求"],
  },
  {
    title: "估價",
    icon: Calculator,
    points: ["依尺寸、材質與五金配置估價", "確認預算與施作範圍"],
  },
  {
    title: "設計",
    icon: DraftingCompass,
    points: ["系統櫃配置設計", "材質、色系與細節確認"],
  },
  {
    title: "施工",
    icon: Hammer,
    points: ["排定施工時間", "現場安裝、清潔與驗收"],
  },
];

const heroImages =
  slideImages.length > 0
    ? slideImages
    : [
        {
          src: zhengZiqiangImages[0]?.src ?? projects[0].image,
          alt: "山嵐室內設計住家作品",
          label: "住家",
        },
        {
          src: wangYanjiuyuanCabinetImages[0]?.src ?? projects[2].image,
          alt: "山嵐室內設計系統櫃作品",
          label: "系統櫃",
        },
        {
          src: chenChongyangImages[0]?.src ?? projects[3].image,
          alt: "山嵐室內設計空間設計模擬作品",
          label: "空間設計模擬",
        },
      ];

const criticalImageSources = [
  ...heroImages.slice(0, 3).map((image) => image.src),
  ...projects.map((project) => project.image).filter(Boolean),
];

function getProjectImageAlt(project) {
  return `${businessInfo.name} ${project.title}作品分類，${project.type}，服務${serviceAreas.join("、")}室內設計與裝修規劃`;
}

function getWorkImageAlt(work, label) {
  return `${businessInfo.name} ${work.title} ${work.projectTitle ?? ""}${label}，${work.projectType ?? work.meta}，台北南港室內設計案例參考`;
}

function getProjectSeoIntro(project) {
  const introByProject = {
    home:
      "整理住家室內設計案例，包含格局調整、收納配置、材質搭配與生活動線規劃，提供南港、台北、松山、內湖屋主作為裝修前的參考。",
    office:
      "辦公室空間規劃重視接待動線、會議機能、工作區配置與品牌形象，協助台北與南港周邊企業整理清楚耐看的工作場景。",
    cabinet:
      "系統櫃設計涵蓋玄關、臥室、書房、更衣室與展示收納，依照台北住家日常使用習慣安排櫃體尺度與收納細節。",
    render:
      "空間設計模擬以 3D 渲染呈現格局、材質、光線與收納配置，協助南港、松山、內湖與台北屋主在施工前確認設計方向。",
  };

  return introByProject[project.id] ?? project.style;
}

function getCaseSeoText(work) {
  return `本頁整理${businessInfo.name} ${work.title} ${work.projectTitle}案例，包含${work.projectType}、${work.meta}與設計重點。適合正在尋找南港、台北、松山、內湖室內設計、住家設計或系統櫃規劃的屋主參考。`;
}

function getPageSeo(path, selectedWork) {
  if (selectedWork) {
    return {
      title: `${selectedWork.title}｜${selectedWork.projectTitle}案例｜${businessInfo.name}`,
      description: `${businessInfo.name} ${selectedWork.title} ${selectedWork.projectTitle}案例，整理${selectedWork.projectType}、${selectedWork.meta}與空間照片，提供南港、台北、松山、內湖室內設計與裝修規劃參考。`,
    };
  }

  if (path === "/works") {
    return {
      title: `作品案例｜南港室內設計、台北住家設計｜${businessInfo.name}`,
      description:
        "山嵐室內設計作品案例，包含住家室內設計、系統櫃、空間設計模擬與辦公室規劃，服務南港、台北、松山、內湖與周邊地區。",
    };
  }

  return {
    title: "山嵐室內設計｜南港室內設計、台北住家設計、系統櫃規劃",
    description:
      "山嵐室內設計位於台北南港，經營二十餘年，提供南港、松山、內湖與台北地區住家室內設計、系統櫃規劃、空間設計模擬與裝修工程服務。",
  };
}

function setMetaContent(selector, content) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", content);
}

function useSeoMeta(path, selectedWork) {
  React.useEffect(() => {
    const seo = getPageSeo(path, selectedWork);
    const canonicalPath = path === "/" ? "/" : path;
    const canonicalUrl = `https://sanlan.vercel.app${canonicalPath}`;
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    document.title = seo.title;
    canonical.href = canonicalUrl;
    setMetaContent('meta[name="description"]', seo.description);
    setMetaContent('meta[property="og:title"]', seo.title);
    setMetaContent('meta[property="og:description"]', seo.description);
    setMetaContent('meta[name="twitter:title"]', seo.title);
    setMetaContent('meta[name="twitter:description"]', seo.description);
  }, [path, selectedWork]);
}

const portfolioCases = projects.flatMap((project) =>
  project.cases.map((work) => ({
    ...work,
    projectId: project.id,
    projectTitle: project.title,
    projectType: project.type,
  })),
);

function App() {
  const path = window.location.pathname;
  const selectedWork = portfolioCases.find((work) => work.href === path);
  useSeoMeta(path, selectedWork);

  return (
    <main className="min-h-screen bg-rice pb-28 text-ink md:pb-0">
      <ImagePreloads sources={criticalImageSources} />
      <Header />
      {selectedWork ? (
        <CaseGalleryPage work={selectedWork} />
      ) : path === "/works" ? (
        <WorksPage />
      ) : (
        <HomePage />
      )}
      <ContactSection />
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/95 px-4 py-3 shadow-[0_-18px_45px_rgba(36,33,29,0.18)] backdrop-blur md:hidden">
        <QuickContactBar actions={heroContactActions} compact />
      </div>
    </main>
  );
}

function ImagePreloads({ sources }) {
  React.useEffect(() => {
    const preloadLinks = [...new Set(sources)]
      .filter(Boolean)
      .map((source) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = source;
        document.head.appendChild(link);
        return link;
      });

    return () => {
      preloadLinks.forEach((link) => link.remove());
    };
  }, [sources]);

  return null;
}

function ProgressiveImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  loading,
  fetchPriority,
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <span
      className={`progressive-image ${isLoaded ? "is-loaded" : ""} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchpriority={fetchPriority}
        onLoad={() => setIsLoaded(true)}
        className={`progressive-image__img ${imageClassName}`}
      />
    </span>
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

function HeroSlideshow() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const totalSlides = heroImages.length;

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % totalSlides);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [totalSlides]);

  function shouldRenderSlide(index) {
    if (totalSlides <= 4) return true;

    return [
      activeSlide,
      (activeSlide + 1) % totalSlides,
      (activeSlide + 2) % totalSlides,
      (activeSlide - 1 + totalSlides) % totalSlides,
    ].includes(index);
  }

  return (
    <motion.a
      href="/works"
      className="group relative block min-h-[400px] overflow-hidden rounded-lg bg-white shadow-soft md:min-h-[520px]"
      variants={{
        hidden: { opacity: 0, y: 22, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {heroImages.map((image, index) => {
        if (!shouldRenderSlide(index)) return null;

        return (
          <ProgressiveImage
            key={image.label}
            src={image.src}
            alt={image.alt}
            loading={index > 2 ? "lazy" : "eager"}
            fetchPriority={index === 0 ? "high" : undefined}
            className={`hero-slide h-full w-full transition-opacity duration-700 ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
            imageClassName="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        );
      })}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent p-6 text-white">
        <p className="text-sm font-semibold tracking-[0.18em]">SANLAN WORKS</p>
        <p className="mt-2 text-2xl font-semibold">作品精選</p>
      </div>
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
            <h1 className="max-w-4xl">
              <img
                src={titleImage}
                alt="山嵐室內設計"
                loading="eager"
                fetchpriority="high"
                className="h-auto w-full max-w-[720px]"
              />
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-stonework md:text-xl">
              在南港落地生根二十餘年的山嵐，以專業務實、誠信的經營理念，為客戶創造嶄新舒適且富有品味的生活空間。
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
            className="min-h-[400px]"
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
            <HeroSlideshow />
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
            作品依住家、辦公室、系統櫃與空間設計模擬分類呈現，整理實際案例照片、空間類型與設計說明，提供南港、台北、松山與內湖室內設計參考。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-lg bg-white shadow-soft"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <ProgressiveImage
                  src={project.image}
                  alt={getProjectImageAlt(project)}
                  loading="eager"
                  fetchPriority="high"
                  className="h-full w-full"
                  imageClassName="h-full w-full object-cover transition duration-700 group-hover:scale-105"
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

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-label">Service Area</p>
            <h2 className="section-title">南港出發，服務台北生活圈</h2>
          </div>
          <div>
            <p className="max-w-3xl leading-8 text-stonework">
              山嵐室內設計位於台北市南港區，長期服務南港、松山、內湖與台北周邊地區，提供住家室內設計、系統櫃設計、空間設計模擬、老屋翻新與裝修工程整合。從需求盤點、現場丈量、格局與收納規劃，到材質確認與施工落地，協助屋主把日常生活整理成清楚、舒適、耐看的空間。
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {localSeoKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-mist px-4 py-2 text-sm font-semibold text-cedar"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
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
          <div className="mt-12">
            <div className="mb-8 max-w-3xl">
              <h3 className="text-3xl font-semibold">全屋裝修</h3>
              <p className="mt-3 leading-7 text-white/65">
                從業務洽談、現場勘量、設計定案到施工交屋，完整掌握設計與工程執行。
              </p>
            </div>
            <div className="grid gap-x-14 gap-y-0 lg:grid-cols-2">
              {fullHouseProcess.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-5 border-t border-white/15 py-8 sm:grid-cols-[auto_1fr]"
                >
                  <span className="grid size-16 shrink-0 place-items-center rounded-full border border-white/20 text-3xl font-semibold text-white/60">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-2xl font-semibold">{item.title}</h4>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mist" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-white/15 pt-12">
              <div className="mb-8 max-w-3xl">
                <h3 className="text-3xl font-semibold">系統櫃</h3>
                <p className="mt-3 leading-7 text-white/65">
                  針對單區或局部收納需求，以更精簡的流程完成丈量、估價、設計與施工。
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {cabinetProcess.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-lg border border-white/15 p-5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="grid size-11 place-items-center rounded-full bg-white/12 text-mist">
                          <Icon size={20} />
                        </span>
                        <span className="text-sm font-semibold text-white/45">
                          0{index + 1}
                        </span>
                      </div>
                      <h4 className="mt-6 text-2xl font-semibold">
                        {item.title}
                      </h4>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mist" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="收費" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-label">Pricing</p>
            <h2 className="section-title">收費標準</h2>
          </div>
          <p className="max-w-xl leading-7 text-stonework">
            實際費用會依坪數、屋況、施工範圍、材質與五金選配調整，正式報價以前會先確認需求與預算方向。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.title}
              className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft"
            >
              <p className="text-sm font-semibold text-clay">{plan.title}</p>
              <h3 className="mt-4 text-2xl font-semibold text-ink">
                {plan.price}
              </h3>
              <p className="mt-3 leading-7 text-stonework">{plan.note}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-stonework">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cedar" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
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
            山嵐室內設計作品案例依住家、辦公室、系統櫃與空間設計模擬分類整理，提供南港、台北、松山、內湖室內設計與裝修規劃參考。
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
              <div>
                <div className="mb-8 max-w-3xl">
                  <p className="text-sm text-clay">{project.type}</p>
                  <h2 className="mt-2 text-4xl font-semibold leading-tight">
                    {project.title}
                  </h2>
                  <p className="mt-3 leading-7 text-stonework">
                    {getProjectSeoIntro(project)}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {project.cases.map((work) => (
                    <article
                      key={work.title}
                      className="overflow-hidden rounded-lg border border-ink/10 bg-white"
                    >
                      {work.cover && (
                        <a
                          href={work.href}
                          className="block aspect-[4/3] overflow-hidden bg-mist"
                        >
                          <ProgressiveImage
                            src={work.cover}
                            alt={getWorkImageAlt(
                              {
                                ...work,
                                projectTitle: project.title,
                                projectType: project.type,
                              },
                              "案例封面",
                            )}
                            loading="lazy"
                            className="h-full w-full"
                            imageClassName="h-full w-full object-cover transition duration-700 hover:scale-105"
                          />
                        </a>
                      )}
                      <div className="p-5">
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
                        {work.href && (
                          <a
                            href={work.href}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cedar"
                          >
                            查看相簿
                            <ArrowRight size={15} />
                          </a>
                        )}
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

function CaseGalleryPage({ work }) {
  const galleryImages = work.images ?? [];

  return (
    <>
      <section className="px-5 pt-32 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-ink/10 pb-14 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
          <div>
            <a
              href="/works#case-home"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cedar"
            >
              <ArrowLeft size={15} />
              返回作品案例
            </a>
            <p className="section-label">{work.projectTitle}</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              {work.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-stonework">{work.meta}</p>
            <p className="mt-5 max-w-2xl leading-8 text-stonework">
              {work.summary}
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-stonework">
              {getCaseSeoText(work)}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-cedar"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {work.cover && (
            <div className="overflow-hidden rounded-lg bg-white shadow-soft">
              <ProgressiveImage
                src={work.cover}
                alt={getWorkImageAlt(work, "案例首圖")}
                loading="eager"
                fetchPriority="high"
                className="max-h-[560px] w-full"
                imageClassName="h-full max-h-[560px] w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-label">Gallery</p>
            <h2 className="section-title">空間照片</h2>
          </div>
          <p className="text-sm leading-6 text-stonework">
            共 {galleryImages.length} 張照片
          </p>
        </div>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <a
              key={image.src}
              href={image.src}
              target="_blank"
              rel="noreferrer"
              className="mb-5 block break-inside-avoid overflow-hidden rounded-lg bg-white shadow-soft"
            >
              <ProgressiveImage
                src={image.src}
                alt={`${image.alt}，${businessInfo.name} ${work.projectTitle}作品照片，南港台北室內設計參考`}
                loading={index > 2 ? "lazy" : "eager"}
                fetchPriority={index === 0 ? "high" : undefined}
                className="w-full"
                imageClassName="h-auto w-full transition duration-700 hover:scale-[1.025]"
              />
            </a>
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
