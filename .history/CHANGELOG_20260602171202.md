# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- ✅ **智能导入系统** (`/import`)
  - 输入内容自动分析分类
  - 支持工作经历、项目、知识分享、成就等类型识别
  - 自动同步到简历、项目、时间轴、知识库模块

- ✅ **API 后端** (`src/app/api/`)
  - `profile`: 个人信息 CRUD
  - `projects`: 项目数据管理
  - `timeline`: 时间轴数据管理
  - `knowledge`: 知识库文章管理
  - `import`: 智能导入分析

- ✅ **页面模块**
  - `/`: 首页 - 个人简介、精选项目、统计数据
  - `/resume`: 简历页 - 工作经历时间轴
  - `/projects`: 项目列表 - 卡片网格展示
  - `/timeline`: 成长时间轴 - 个人历程记录
  - `/knowledge`: 知识库 - 技术文章列表
  - `/avatar`: AI 分身 - 聊天机器人界面

- ✅ **UI 设计升级**
  - 深色主题配色（紫色主色调）
  - 玻璃拟态效果 (glass morphism)
  - 渐变文字与发光效果
  - 鼠标跟随光效
  - 流畅动画过渡效果

### Fixed

- ✅ 修复智能导入按钮链接问题
- ✅ 修复 hydration mismatch 时间格式问题
- ✅ 修复路由跳转问题

### Technical Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4 + shadcn/ui
- lucide-react 图标库
- 本地文件存储 (temp-data.json)

---

## [v1.0.1] - 2026-06-02

**Commit:** `f9b85f2`

### Documentation

- 添加 CHANGELOG.md 记录项目变更历史
- 绑定 commit ID 便于追溯

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
