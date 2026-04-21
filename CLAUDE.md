# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 提供该仓库的操作指引。

## 项目简介

CS2 同人地图展示页 —— 一个 React 落地页，以交互式轮播图展示 CS2 七张现役地图，包含中文描述和游戏内截图。非商业项目，与 Valve 无关。

## 常用命令

```bash
npm run dev      # 启动开发服务器（端口 5173，自动打开浏览器）
npm run build    # 生产构建 → /dist
npm run preview  # 本地预览生产构建
```

未配置测试或 lint 命令。

## 架构说明

**技术栈**：React 18 + Vite + Tailwind CSS + Swiper（轮播）+ Lucide React（图标）

**组件流**：`App` → `Hero` → `MapsGallery` → `Footer`

- `src/data/maps.js` — 所有地图元数据的唯一数据源（名称、类型、标语、描述、图片 URL）
- `src/components/MapsGallery.jsx` — Swiper 轮播，淡入淡出效果，6 秒自动切换，支持键盘/触摸导航
- `src/components/Hero.jsx` — 全屏首屏，含滚动至地图区域的 CTA 按钮
- 地图图片通过 wsrv.nl 代理转换为 WebP，来源为 GitHub 上的 MurkyYT/cs2-map-icons，备用图片使用 placehold.co

**样式**：`tailwind.config.js` 中自定义主题 —— 深色背景 `#0b0e13`，橙色强调色 `#f5a623`，自定义 `glow` 和 `bounceDown` 动画。Swiper 样式在 `src/index.css` 中覆盖。
