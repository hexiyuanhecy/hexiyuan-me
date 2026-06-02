# Changelog

All notable changes to this project will be documented in this file.

## [v1.3.0] - 2026-06-02

**Commit:** `TBD`

### Added

- ✅ **主题切换功能**
  - 亮色/暗色模式切换
  - 支持系统主题自动检测
  - localStorage 持久化

- ✅ **AI 数字分身**（右下角悬浮机器人）
  - 全站固定悬浮按钮
  - 聊天窗口支持常见问题问答
  - 打字机效果模拟

- ✅ **权限控制**
  - 密码验证页面 `/auth`
  - JWT 短期会话
  - 中间件保护 `/import` 和 `/admin`

- ✅ **管理后台** `/admin`
  - 条目列表展示
  - 编辑和删除功能
  - 搜索和筛选

- ✅ **智能导入更新**
  - 迁移至数据库存储
  - 自动分类工作经历、项目、知识库、成就
  - 模块自动分发到简历、时间轴、项目等

### Fixed

- 修复主题切换不生效问题

---

## [v1.2.0] - 2026-06-02

**Commit:** `08ddd20`

### Added

- ✅ **数据库架构** (基于 `database.md` 设计)
  - 内容主表 `Entry` - 支持多种内容类型
  - 类型子表: `WorkExperience`, `Project`, `Knowledge`, `Travel`, `Food`, `Daily`
  - 模块分发表 `EntryModule` - 实现"一次录入，多处展示"
  - 分类表 `Category` - 支持无限层级树状结构
  - 标签系统 `Tag` + `EntryTag`
  - 文本内容表 `TextContent` - 分离大字段优化性能
  - AI 原生预留字段: `aiAnalysis`, `aiVector`

- ✅ **Prisma ORM 集成**
  - Prisma 7.8.0 + SQLite
  - 完整的 schema 定义
  - 自动生成 Prisma Client

- ✅ **配置文件**
  - `.env` 环境变量配置
  - `prisma.config.ts` 数据库配置

### Technical Stack

- **数据库**: SQLite (开发环境)
- **ORM**: Prisma 7.8.0
- **框架**: Next.js 16 + TypeScript

---

## [v1.1.0] - 2026-06-02

**Commit:** `c51b46f`

### Added

- ✅ **项目详情页** (`/projects/:slug`)
  - 项目详细信息展示
  - 技术栈标签
  - 项目亮点列表
  - Markdown 内容支持

- ✅ **文章详情页** (`/knowledge/:slug`)
  - Markdown 解析渲染
  - 自动生成目录（TOC）
  - 平滑滚动导航
  - 标签展示

- ✅ **主题切换**
  - 亮色/暗色模式切换
  - 系统主题自动检测
  - localStorage 持久化

- ✅ **Markdown 支持**
  - 集成 marked 库
  - 支持文章内容渲染

### Fixed

- 修复智能导入按钮链接问题

---

## [v1.0.0] - 2026-06-02

**Commit:** `d781b08`

### Initial Release

- 全栈个人网站开发完成
- 智能导入系统上线
- 6个页面模块完整实现
- 深色主题 UI 设计

---

**Note:** This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format.
