---
description: Next.js App Router 约定和最佳实践
globs: ["src/app/**/*.tsx", "src/app/**/*.ts"]
alwaysApply: true
---

# Next.js App Router 规则

## 路由约定
- 使用 `page.tsx` 定义页面，`layout.tsx` 定义布局
- 动态路由使用 `[param]` 单段，`[...slug]` 多段
- 拦截路由使用 `(.)` 前缀

## 数据获取
- Server Components 中直接使用 `await` 获取数据
- 使用 `fetch` 时添加 `{ next: { revalidate: 3600 } }` 或 `{ cache: 'no-store' }`
- Client Components 数据获取使用 SWR 或 React Query

## 性能
- 图片必须使用 `&lt;Image&gt;` 组件，配置正确的 `width` 和 `height`
- 第三方脚本使用 `&lt;Script&gt;` 组件的 `strategy` 属性
- 大组件使用 `dynamic(() =&gt; import('./Component'), { ssr: false })` 懒加载
