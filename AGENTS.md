# AGENTS.md - Next.js 全栈项目通用规则

## 项目概览
- Next.js 15 (App Router) + TypeScript 严格模式
- 数据库: PostgreSQL + Prisma ORM
- 认证: NextAuth.js v5
- 样式: Tailwind CSS v4 + shadcn/ui
- 测试: Vitest + Playwright
- 包管理器: pnpm

## 技术栈约束
- React Server Components 优先，只在需要交互时用 "use client"
- 所有 API 返回统一格式: `{ data?: T, error?: { code, message } }`
- 使用 Zod 验证所有外部输入
- 数据库查询必须通过 `src/lib/db/queries.ts` 中的函数
- 禁止使用 `any` 类型，必须有明确类型定义

## 目录结构
- `src/app/` — 路由页面（按功能模块组织）
- `src/components/` — 共享 UI 组件
- `src/lib/` — 工具函数、数据库查询、API 客户端
- `src/server/` — Server Actions、业务逻辑
- `src/types/` — 全局类型定义
- `prisma/` — 数据库 schema 和迁移

## 命名规范
- 文件: kebab-case (例: `user-profile.tsx`)
- 组件: PascalCase (例: `UserProfile`)
- 函数: camelCase
- 常量: UPPER_SNAKE_CASE
- 数据库表: 单数小写 (例: `user`, 不是 `users`)

## 禁止事项
- 禁止在组件中直接写 SQL
- 禁止在 Server Components 中使用浏览器 API
- 禁止提交 `.env` 文件
- 禁止修改 `prisma/migrations/` 目录下的已有迁移文件
- 禁止在 API 路由中返回原始错误堆栈（必须包装为通用错误）

## 开发命令
- `pnpm dev` — 开发服务器 (http://localhost:3000)
- `pnpm build` — 生产构建
- `pnpm test` — 运行单元测试
- `pnpm test:e2e` — 运行 E2E 测试
- `pnpm db:migrate` — 数据库迁移
- `pnpm db:studio` — Prisma Studio
- `pnpm lint` — ESLint 检查
