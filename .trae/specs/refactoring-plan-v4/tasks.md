# 重构任务清单

## Phase 0: 数据模型重构

- [ ] Task 0.1: 分析当前 Prisma Schema 与 PRD 模型差异
- [ ] Task 0.2: 设计新的 Prisma Schema（Experience, Project, Travel, DayPlan, LifeEvent, Knowledge, Tag）
- [ ] Task 0.3: 编写数据迁移脚本（将 Entry 数据迁移到新模型）
- [ ] Task 0.4: 执行迁移并验证数据完整性
- [ ] Task 0.5: 更新 src/generated/prisma/ 并测试数据库连接

## Phase 1: 目录结构重构

- [ ] Task 1.1: 创建 `src/app/(public)/` 路由组目录
- [ ] Task 1.2: 创建 `src/app/(admin)/` 路由组目录
- [ ] Task 1.3: 创建 `src/components/features/` 目录结构
- [ ] Task 1.4: 创建 `src/hooks/` 目录
- [ ] Task 1.5: 创建 `src/stores/` 目录（Zustand store 模板）
- [ ] Task 1.6: 移动现有页面到新的路由组结构
- [ ] Task 1.7: 删除不再使用的旧目录

## Phase 2: 页面与路由重构

### 2.1 新增缺失页面
- [ ] Task 2.1.1: 创建 `/travel` 旅行页（包含全国地图占位、旅行列表）
- [ ] Task 2.1.2: 创建 `/travel/[slug]` 旅行详情页
- [ ] Task 2.1.3: 创建 `/daily` 生活日常聚合页
- [ ] Task 2.1.4: 创建 `/daily/[slug]` 生活日常详情页

### 2.2 路由修正
- [ ] Task 2.2.1: 创建 `/projects/[slug]` 路由（PRD 要求）
- [ ] Task 2.2.2: 迁移 `/experience/[id]` 数据到新路由
- [ ] Task 2.2.3: 更新项目列表页的跳转链接
- [ ] Task 2.2.4: 删除旧的 `/experience/` 路由

### 2.3 首页增强
- [ ] Task 2.3.1: 添加"最新动态"板块
- [ ] Task 2.3.2: 技能标签云改为动态数据

### 2.4 项目详情增强
- [ ] Task 2.4.1: 项目亮点加粗高亮显示
- [ ] Task 2.4.2: Markdown 渲染增强

## Phase 3: AI 助手重构

- [ ] Task 3.1: 创建 `src/data/faq.json` 配置文件
- [ ] Task 3.2: 修改 FloatingChat 使用外部配置
- [ ] Task 3.3: 修改 chat API 使用外部配置
- [ ] Task 3.4: 管理后台添加 AI 聊天开关
- [ ] Task 3.5: 实现隐身模式功能

## Phase 4: 智能导入增强

- [ ] Task 4.1: 实现 localStorage 暂存分析结果
- [ ] Task 4.2: 添加恢复确认对话框
- [ ] Task 4.3: 添加"清除暂存"功能
- [ ] Task 4.4: 旅行和生活类型识别增强
- [ ] Task 4.5: DayPlan 关联创建

## Phase 5: 管理后台增强

- [ ] Task 5.1: 批量导出 JSON 功能
- [ ] Task 5.2: 编辑表单增强
- [ ] Task 5.3: 账号密码配置文件支持
- [ ] Task 5.4: 批量删除确认对话框完善

## Phase 6: 技术栈升级（可选）

- [ ] Task 6.1: Next.js 升级到 15.x
- [ ] Task 6.2: React 升级到 19
- [ ] Task 6.3: 引入 TanStack Query
- [ ] Task 6.4: 引入 Zustand
- [ ] Task 6.5: AI 服务商切换方案评估

## 代码质量与验证

- [ ] Task QA.1: TypeScript 类型检查
- [ ] Task QA.2: ESLint 检查
- [ ] Task QA.3: 运行现有测试
- [ ] Task QA.4: 手动验证核心功能流程

---

# 任务依赖关系图

```
Phase 0 (Task 0.1 - 0.5) ─────┐
                               │
Phase 1 (Task 1.1 - 1.7) ─────┼──→ Phase 2 (Task 2.x)
                               │
Phase 1 (Task 1.3 - 1.5) ─────┤
                               │
Phase 3 (Task 3.1 - 3.5) ─────┼──→ 可独立执行
Phase 4 (Task 4.1 - 4.5) ─────┤
Phase 5 (Task 5.1 - 5.4) ─────┘
```

---

# 快速检查清单

每个任务完成后必须：
1. [ ] 运行 `pnpm lint` 检查
2. [ ] 运行 `pnpm build` 验证构建
3. [ ] 测试相关功能页面
4. [ ] 提交代码并推送
