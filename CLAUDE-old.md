# Hexiyuan's Digital Garden - 项目核心指令 (CLAUDE.md)
## 一、角色与目标
你是西瓜（Hexiyuan）的高级全栈工程师助手，负责构建个人网站 **"Hexiyuan's Digital Garden"**。
- **核心目标**：
1. 展示技术能力与项目经历（求职导向）。
2. 分享个人兴趣与知识沉淀。
3. 提供 AI 驱动的交互体验（安全合规）。
- **当前阶段**：**MVP（最小可行性产品）开发**。
- **核心原则**：**"安全脱敏"优先**。所有生成内容必须严格遵循隐私保护规范。

## 二、技术栈规范（严格执行）
- **框架**：Next.js 14+（启用 App Router）。
- **语言**：TypeScript（严格模式）。
- **样式**：Tailwind CSS + Radix UI（优先使用 `shadcn/ui` 组件库）+ Framer Motion（动画）。
- **后端**：Next.js API Routes + Server Actions。
- **数据库**：本地开发使用 SQLite（`prisma/dev.db`）+ Prisma 7.8.0；生产环境使用 Turso（libSQL）或 Vercel Postgres。环境分离策略见第十三节。
- **AI 能力**：Vercel AI SDK + Agnes AI / DeepSeek API（可切换，用于对话兜底与内容分析）。
- **部署**：Vercel。
- **其他**：禁止引入未经指定的第三方库（如需要，需提前确认）。

## 三、数据安全与脱敏协议（最高优先级）
所有内容生成、数据模拟或文档编写必须遵守：
1. **🔴 绝对禁止**：
- 真实身份证号、电话、住址、银行卡号、家人信息、公司内部敏感数据。
2. **🟡 必须模糊处理**：
- **公司名**：使用"某头部电商公司""某独角兽 SaaS 企业"。
- **时间**：按年份范围（如"2019-2022"，不精确到月）。
- **地点**：仅保留城市（如"杭州"，不写具体区域或地址）。
- **数据**：使用相对值或量级（如"性能提升 30%""用户量级达百万"）。
3. **🟢 可公开内容**：
- 技术栈、开源项目链接、通用技术观点、书影音推荐、脱敏后的成长经历。

## 四、全局 AI 助手（右下角导游机器人）
### 4.1 形态与交互
- 全站右下角固定圆形悬浮按钮，点击展开聊天窗口（移动端展开为半屏，保留关闭按钮）。
- 聊天窗口支持最小化和关闭。
- 流式对话、打字机效果、消息列表自动滚动到底部。
- 首次打开时自动显示欢迎语（见下文）。

### 4.2 导游行为矩阵（基于 localStorage 访问计数）
| 访问次数 | 行为 |
| :--- | :--- |
| 首次（无记录） | 页面加载 0.5 秒后**自动展开**聊天窗，发送欢迎语 + 引导按钮 |
| 第 2-5 次 | 页面加载 30 秒后，右下角**弹出气泡**："好久不见，有什么想了解的？" 气泡展示 8 秒后自动消失，不展开窗口 |
| 第 6 次及以上 | 仅显示圆形按钮，无自动行为 |

- 使用 `localStorage` 键名 `visitCount` 记录访问次数。每次页面加载时递增，超过 5 不再增加。

### 4.3 首次欢迎语与引导按钮
AI 自动发送：
> "嗨，欢迎来到西瓜的个人网站！我可以带你快速了解他——你想先看看他的技术能力、项目经历，还是个人故事？"

附带三个快捷按钮（以气泡内联按钮形式呈现）：
- **💼 技术能力** → 触发前端跳转 `/resume`，AI 同时追加消息："他的技术栈主要是 React/Next.js/TypeScript，我带你去简历页看看。"
- **🛠️ 项目经历** → 跳转 `/projects`，AI 追加："这里是他做过的项目，每个都有技术亮点，点击卡片可以看详情。"
- **📖 个人故事** → 跳转 `/timeline`，AI 追加："时间轴上不仅有工作经历，还有他的旅行故事，想看哪个？"

点击按钮后，前端使用 `router.push()` 跳转。

### 4.4 页面上下文感知
当用户通过引导跳转到对应页面后，AI 窗口保持展开，并自动发送一条上下文相关消息：
- 当前路由 `/resume`："他的工作经历涵盖电商和 SaaS 领域，要我展开讲讲某个项目吗？"
- 当前路由 `/projects`："这里是他做过的项目，每个都有技术亮点，点击卡片可以看详情。"
- 当前路由 `/timeline`："时间轴上不仅有工作经历，还有他的旅行故事，想看哪个？"
- 当前路由 `/knowledge`："这里是他整理的前端知识库，想搜什么技术话题？"

通过 `usePathname()` 监听路由变化，当检测到跳转后，触发对应的预设消息发送。

### 4.5 对话中智能推荐
- 当用户询问具体项目或经历，AI 回答后自动附加相关链接推荐。
- 推荐格式："对了，这个项目他在知识库里写了一篇复盘文章，要看看吗？ [📖 查看文章](/knowledge/xxx)"
- 对于本地 Q&A 匹配到的回答，可在预设答案中硬编码推荐链接。

### 4.6 问答实现策略（混合方案，成本极低）
#### 第一层：本地 Q&A 匹配（免费，优先执行）
- 在项目根目录维护文件 `data/faq.json`，结构为数组，每项包含 `keywords`（字符串数组）和 `answer`（字符串）。
- 示例结构：
```json
[
  {
    "keywords": ["技术栈", "会什么", "技术", "前端", "React"],
    "answer": "我主要用 React、Next.js、TypeScript、Tailwind CSS，也玩过 Vue 和 Node.js。"
  },
  {
    "keywords": ["工作", "经历", "在哪", "公司"],
    "answer": "毕业后在某头部电商干了 3 年，后来去了一家独角兽 SaaS 公司，主要做飞书生态的前端开发。"
  }
]
```
- 前端匹配逻辑（在聊天组件内实现）：
1. 用户输入文本，转为小写，提取关键词。
2. 遍历 `faq.json`，计算每条 `keywords` 与用户输入的匹配度（包含判断）。
3. 若最高匹配度超过阈值（如匹配到 1 个及以上关键词），则直接使用该条 `answer` 作为 AI 消息返回，**不调用任何 API**。
4. 若未匹配到任何关键词，且该问题看起来与个人经历无关，直接使用统一兜底回复："这个问题我不太了解，要不我带你看看他的项目？ [🛠️ 去项目页](/projects)" （可带跳转按钮）。
5. 仅当问题既未匹配到本地 Q&A，又明显与个人经历相关时，才调用 DeepSeek API 兜底。

#### 第二层：大模型 API 兜底（极少调用）
- 仅在本地 Q&A 未命中且问题明显与个人相关时，才调用 `/api/chat`（DeepSeek）。
- 系统提示词见 4.7。
- 成本控制：每日调用上限由环境变量 `DAILY_CHAT_LIMIT` 控制（默认 20 次/天）。

### 4.7 AI 服务商配置（支持 Agnes AI / DeepSeek 切换）
- **默认服务商**：Agnes AI（api.agnes.chat）
- **备选服务商**：DeepSeek（api.deepseek.com）
- **切换方式**：通过环境变量配置 `AGNES_API_KEY` 和 `DEEPSEEK_API_KEY`，智能导入页面提供切换按钮。

### 4.8 Agnes AI 系统提示词（硬编码在 `/api/chat`）
```
你是西瓜的AI助手，一个专业的前端工程师助手。你的任务是回答关于西瓜个人网站的问题。

网站包含以下内容：
1. 简历页面 (/resume) - 工作经历、技能、教育背景
2. 项目页面 (/projects) - 个人项目作品集
3. 知识库页面 (/knowledge) - 技术文章和笔记
4. 时间轴页面 (/timeline) - 成长历程和生活记录

回答规则：
1. 如果问题涉及西瓜的个人信息、工作经历、项目等，直接回答并提供相关页面链接
2. 如果问题涉及技术问题，可以提供技术解答
3. 回答要友好、专业，使用markdown格式
4. 链接使用格式：[页面名称](/路径)
5. 保持回答简洁，不要太冗长

## 边界与限制
- 你只了解西瓜的经历、技术能力、项目、知识库内容。
- 如果被问到与西瓜无关的问题（如天气、股票、写代码、政治等），用幽默的方式拒绝：
  示例：
  - "哎呀，这个问题超出我的认知范围了，我只知道西瓜的事～"
  - "你问的这个西瓜没教过我，要不聊聊他的项目？"
  - "我只是西瓜的助手，不是通用 AI，换个关于他的问题试试？"
- 不要承认自己是 AI 或大模型，始终以"西瓜的分身"身份说话。
- 绝不透露真实姓名、具体公司名、薪资、身份证号等隐私。
```

### 4.8 其他约束
- 前端限流：同一浏览器 1 分钟内最多发送 100 条消息（Agnes AI 免费，已放开限制）。
- 管理后台可设置"隐身模式"开关，关闭后右下角悬浮按钮消失，API 直接返回维护提示。
- 系统提示词总长度控制在 200 token 内。

## 五、功能模块与路由全景
### 前台页面
```
/
├── /                    # 首页（简介 + 板块入口卡片 + 技能标签云）
├── /resume              # 简历时间轴（按年份筛选，仅工作/项目）
├── /projects            # 项目卡片网格
│   └── /[slug]          # 项目详情（Markdown 渲染）
├── /experience/[slug]   # 经历聚合页（一段工作经历及其关联项目）
├── /travel/[slug]       # 旅行聚合页（V2，一次旅行及关联游记）
├── /knowledge           # 知识库外部链接列表（搜索 + 分类筛选）
├── /timeline            # 成长时间轴（朋友圈式混合流，可筛选类型）
│
├── /about               # （V2）关于我
├── /blog                # （V2）博客
├── /travel              # （V2）旅行攻略
├── /lifestyle           # （V2）吃喝玩乐
└── /games               # （V2）游戏博物馆
```
### 后台页面（受密码保护）
```
/import                  # 智能导入（批量 + 模板）
/admin                   # 管理后台（CRUD + 批量删除 + 导出）
```
### API 路由
```
/api/chat                # AI 对话（流式，大模型兜底）
/api/import              # 批量导入分析（拆分文本 + 字段提取 + 建议模块）
/api/import/confirm      # 确认批量入库（事务写入 Entry + 子表 + EntryModule）
/api/verify              # 密码验证，返回 JWT（24h 有效期）
```

## 六、数据库设计（多表关联 + Prisma）
数据库架构完全遵循项目根目录下的 `DATABASE.md`，采用 **核心主表 + 类型子表 + 模块分发表** 方案。
### 6.1 技术环境
- 本地开发：**SQLite**（文件 `prisma/dev.db`），零配置。
- ORM：**Prisma 7.8.0**。
- 生产环境：必须使用云数据库（Turso 或 Vercel Postgres），详见第十三节部署指南。
### 6.2 核心表结构
- **Entry**：内容主表，存储标题、slug、类型 (`EntryType`)、状态 (`draft/published/archived`)、摘要、事件时间 `occurred_at`、AI 分析结果 `ai_analysis`、**parent_id**（父子关系）等。
- **TextContent**：长文本分离存储，关联 Entry。
- **EntryModule**：模块分发关联表，一条内容可对应多个 `ModuleName`。
- **WorkExperience / Project / KnowledgeLink / Travel / Lifestyle**：各类型子表，存储专属字段。
- **Category**：树状分类（可空，MVP 可暂不用）。
- **Tag / EntryTag**：标签多对多（MVP 可在子表中用 JSON 数组代替）。

### 6.2.1 Entry 父子关系设计
- **parent_id**：Entry 表新增字段，指向父 Entry 的 ID
- **支持的层级关系**：
  - 工作经历 → 项目（一个工作经历包含多个项目）
  - 旅行 → 地点/游记（一次旅行包含多个地点攻略）
- **查询模式**：获取父条目时，同时查询其子条目并关联展示
### 6.3 枚举定义（与 `DATABASE.md` 完全一致）
- `EntryType`: `work_experience`, `project`, `knowledge_link`, `travel`, `food`, `daily`, `other`
- `EntryStatus`: `draft`, `published`, `archived`
- `ModuleName`: `resume`, `timeline`, `projects`, `knowledge`, `blog`, `travel`, `lifestyle`, `games`
### 6.4 开发要求
- 所有数据操作必须基于 Prisma Client。
- 时间轴查询统一按 `COALESCE(occurred_at, created_at)` 降序排列。
- 导入功能需使用 Prisma 事务同步写入 Entry + 子表 + EntryModule。
- `DATABASE.md` 为权威参考，若本文件与它冲突，以 `DATABASE.md` 为准。

## 七、智能导入功能详细设计

### 7.1 设计目标
智能导入是网站的核心内容入口，需同时满足：
- 单条快速录入（快速模式）
- 大批量内容自动清洗与拆分（深度整理模式）
- 适用于所有内容类型（工作、项目、旅行、生活、知识库外链等）
- 支持图文音视频等多媒体内容
- 完整 Markdown 长文存入 `TextContent` 供详情页展示和 AI 问答引用
- 提炼字段存入 `Entry` 及子表供列表页和卡片展示

### 7.2 用户流程
1. 访问 `/import`（密码保护，JWT 验证）。
2. 选择导入模式：
   - **快速模式**：粘贴单段文本，AI 直接提取字段（适合单条工作/项目经历）。
   - **深度整理模式**：粘贴大段长文，AI 先进行内容清洗、去重、逻辑排序、拆分，再同时生成完整 Markdown 和提炼字段。
3. 提供“模板填写”选项卡（工作经历、项目经历、旅行攻略格式提示），模板兼容两种模式。
4. 提交后，AI 分析并返回结构化结果：
   - 快速模式返回单条 JSON。
   - 深度整理模式返回 `items` 数组，每项含 `detailed_markdown`（完整长文）和提炼字段。
5. 前端展示分条目卡片列表，每条可：
   - 切换查看“完整 Markdown”和“提炼字段”（标题、摘要、技术栈、亮点、日期）。
   - 手动编辑任意字段（包括完整 Markdown 正文）。
   - 勾选导入模块（工作经历类强制勾选 `resume`）。
   - 上传图片/视频/音频（自动插入 Markdown 语法到正文）。
   - 删除、手动拆分/合并条目。
   - 设置状态为“已发布”或“草稿”。
6. 确认后调用 `/api/import/confirm`，后端事务写入：
   - `Entry` 主表：标题、类型、状态、摘要、事件日期、`ai_analysis`。
   - 对应类型子表：专属字段。
   - `EntryModule`：模块分发记录。
   - `TextContent`：完整 Markdown 长文。
7. 完成后显示导入结果汇总，提供跳转链接。

### 7.3 AI 分析提示词设计

系统提示词根据模式动态调整。

**深度整理模式提示词核心**：
你是一个专业的技术文档整理助手。请对用户提供的文本执行以下操作：

  1.去重：删除明显重复的段落，合并描述同一事件的多段文字。

  2.逻辑排序：按时间线或主题重新组织内容，使其条理清晰。

  3.统一排版：生成结构化的 Markdown 长文，保留所有真实细节（日期、数据、技术细节、过程描述）。

  4.智能拆分：如果文本包含多个独立项目/经历，请拆分为数组，每项包含：

      type：内容类型（work_experience/project/knowledge_link/travel等）

      title：条目标题

      summary：一句话摘要（用于列表展示）

      tech_stack：技术栈数组

      highlights：亮点列表（每条一个 bullet point）

      date：相关日期

      detailed_markdown：该条目的完整 Markdown 内容

  5. 脱敏：禁止提取真实姓名、具体薪资、身份证号等隐私。

    输出 JSON 格式：
    ```
    {
    "items": [
      {
      "id": '764356438936574743',
      "type": "project",
      "title": "NPS 满意度治理专项",
      "summary": "作为 Owner 将假勤满意度从 87% 提升至 93%",
      "tech_stack": ["FeelGood", "数据分析"],
      "highlights": ["建立三级打标体系", "触达转化率 60%"],
      "date": "2023-06",
      "detailed_markdown": "## 背景\n...\n## 我的角色\n...\n## 具体行动\n..."
      }
    ]
    }
    ```

**快速模式提示词**：保持原有设计（单条提取，不要求详细 Markdown）。
6.多媒体：若文本中包含图片/视频链接，在 detailed_markdown 中使用标准 Markdown 语法保留。
  输出 JSON 格式：
  ```
  {
  "items": [
  {
  "type": "project",
  "title": "...",
  "summary": "...",
  "tech_stack": ["React", "TypeScript"],
  "highlights": ["亮点1", "亮点2"],
  "date": "2023-06",
  "suggested_modules": ["projects", "timeline"],
  "detailed_markdown": "## 背景\n...\n## 具体行动\n..."
  }
  ]
  }
  ```

**快速模式提示词**：保持原有设计（单条提取，不要求 `detailed_markdown`，但需提取所有字段）。

### 7.4 入库逻辑
- 使用 Prisma 事务确保原子性。
- `Entry` 主表：`title`、`type`、`status`（默认 `published`）、`summary`、`occurred_at`（若为空则取当前时间）、`ai_analysis`（存储原始分析结果）。
- 子表：根据 `type` 写入对应类型子表。
- `EntryModule`：批量写入用户勾选的模块。
- `TextContent`：`content` 字段存储完整 Markdown 长文（深度整理模式）或原始文本（快速模式）。
- `excerpt` 字段（TextContent 表）：自动取 `summary`。

### 7.5 AI 问答集成
- AI 助手在回答问题时：
  - 若用户问题命中本地 Q&A 或大模型判断与某条目相关，从 `TextContent.content` 中检索完整内容作为上下文。
  - 回答时优先引用真实细节（数据、过程、技术决策），而非仅给出简短概括。
  - 必要时附带页面跳转链接（如“详见项目详情页”）。


## 八、权限控制（轻量方案）

### 8.1 保护范围
- 页面：`/import`、`/admin`。
- API：`/api/import`、`/api/import/confirm`、`/api/admin/*`。

### 8.2 方案一：密码弹窗（默认）
- 环境变量 `IMPORT_PASSWORD` 存储明文密码。
- 访问受保护页时，前端检查 `localStorage` 中是否有有效 JWT。
- 无有效 JWT → 弹出密码输入框 → `POST /api/verify` 校验 → 返回 JWT（24h 有效）→ 存入 `localStorage`。
- 后续请求在 `Authorization: Bearer <token>` 头部携带 JWT。
- `/api/verify` 实现：接收 `{ password }`，对比 `process.env.IMPORT_PASSWORD`，匹配则用 `jsonwebtoken` 签发 token，密钥来自 `process.env.JWT_SECRET`。

### 8.3 方案二：URL 令牌直通（可选）
- 环境变量 `ADMIN_TOKEN` 存储随机长字符串。
- 访问 `你的域名.com/admin?token=xxxx` 时，后端中间件检测 URL 参数。
- 参数与 `ADMIN_TOKEN` 匹配 → 自动签发 JWT → 重定向到 `/admin`（去掉 token 参数）。
- 此方案方便管理员在移动端或不同设备上快速登录。

### 8.4 管理员路由可见性
- 导航栏组件检测 JWT 是否存在：
  - 已认证 → 显示所有导航项（包括“导入”和“管理”入口）。
  - 未认证 → 仅显示前台页面导航。
- 普通访客看不到管理入口，即使手动输入 URL 也会被密码墙拦截。

### 8.5 JWT 验证中间件
- 在 `/api/import`、`/api/import/confirm` 等受保护 API 中，读取 `Authorization` 头部。
- 使用 `jsonwebtoken` 的 `verify()` 校验，密钥来自 `process.env.JWT_SECRET`。
- 校验失败返回 401，前端收到后弹出密码框重新验证。

## 九、设计与交互规范
- **视觉**：现代、干净、呼吸感，支持暗色/亮色模式切换。
- **移动端优先**：所有页面适配手机。
- **组件样式**：
- 卡片：`rounded-2xl shadow-sm hover:shadow-md transition-shadow`。
- 交互必须有 `hover/focus/active` 反馈。
- **项目列表布局**：`/projects` 页面默认采用瀑布流布局（Masonry），使用 CSS `columns` 或 `masonry` 布局实现，卡片高度自适应，避免传统网格的高度不一致导致的空白。桌面端 3 列，平板 2 列，移动端单列。
- **排版**：使用 Tailwind 内置颜色系统（slate/gray/zinc），禁止自定义色值。
- **禁止廉价 AI 风**：避免浮夸渐变、生硬阴影，追求留白与层级。
- **可访问性**：满足 WCAG AA，对比度足够，键盘可导航。

## 十、管理后台 `/admin`
- 列表页展示所有 Entry，支持按类型、状态筛选，支持搜索。
- 每条右侧有编辑、删除按钮。
- **批量操作**：勾选多条，可批量删除（需确认框）。
- 删除操作级联删除关联的 TextContent、EntryModule、子表记录（利用 Prisma `onDelete: Cascade`）。
- 编辑表单与导入预览一致，可修改所有字段。
- 支持修改条目状态（draft/published）。
- **数据导出**：一键导出全站 Entry（含关联子表数据）为 JSON 文件。
### 批量删除实现
- 列表每行左侧有复选框，表头有全选/取消全选复选框。
- 勾选任意条后，页面顶部浮现操作栏，显示“已选 N 条”及“批量删除”按钮。
- 点击批量删除 → 弹出确认框 → 确认后调用 Server Action。
- Server Action 使用 Prisma 事务，逐条删除：
  1. 根据 `entry_id` 删除关联的 `TextContent`
  2. 删除关联的 `EntryModule` 记录
  3. 删除对应类型子表记录（`WorkExperience` / `Project` 等）
  4. 删除 `Entry` 主记录
- 完成后返回删除数量，前端刷新列表并显示提示。

## 十一、输出要求与开发流程
### 11.1 生成流程
1. **第一步**：仅输出完整文件树结构、路由表、Prisma Schema 及 seed 脚本示例，等待确认。
2. **第二步**：确认后，严格按下述顺序逐个模块实现：
- 数据库初始化（Prisma Schema + seed）
- API 路由（verify → import → import/confirm → chat）
- 导入模块（/import 页面）
- 简历/项目模块（/resume, /projects, /projects/[slug]）
- 知识库模块（/knowledge）
- 成长时间轴（/timeline）
- 全局 AI 悬浮组件（含导游逻辑、本地 Q&A）
- 管理后台（/admin）
- 首页（/）
3. 每个模块生成前，先列出该模块所需全部文件列表，再逐个输出文件代码。

### 11.2 代码要求
- 所有组件包含完整 TypeScript 类型定义。
- 样式仅使用 Tailwind 类名和 `shadcn/ui` 组件，禁止手写 CSS 文件。
- 每个页面含基本单元测试（`*.test.tsx`），至少验证渲染。
- 所有数据从数据库动态获取，**不使用静态 JSON**（除 `faq.json` 外）。

### 11.3 交互约束
- 每次输出仅限一个路由的完整代码（含组件、类型、测试）。
- 禁止一次性输出大量代码，严格遵循“设计 → 确认 → 分模块实现”流程。
- 若需引入新库，必须先说明必要性并获批准。

## 十二、执行纪律
1. 严禁一次性生成全部代码，必须分模块逐步确认。
2. 如需额外依赖，必须提前说明并获批准。
3. 所有 AI 相关代码必须包含完整的系统提示词注入和成本控制逻辑。
4. `/import` 和 `/admin` 必须实现密码保护与 JWT 校验。
5. 所有生成内容必须遵循脱敏协议。
6. 本地 Q&A 文件 `data/faq.json` 必须在项目初始化时生成示例文件。

## 十三、部署与环境配置

### 13.1 环境分离原则
- **本地开发**：使用 SQLite 文件数据库，无需网络，即时启动。
- **生产环境**：Vercel 是无服务器平台，无持久文件存储，必须使用云数据库。


### 13.2 生产数据库选择（二选一）
#### 方案 A：Turso（推荐，与 SQLite 语法兼容）
- 免费额度：9GB 存储，个人项目足够。
- 优势：与本地 SQLite 体验一致，Prisma 有官方适配器。
- 切换步骤：
  1. 在 turso.tech 创建数据库，获取 LIBSQL_URL 和 TURSO_AUTH_TOKEN。
  2. 安装依赖：`npm install @libsql/client @prisma/adapter-libsql`
  3. 修改 prisma/schema.prisma：
  4. 在 Vercel 环境变量中设置：
     - DATABASE_URL = libsql://[your-db].turso.io
     - TURSO_AUTH_TOKEN = [your-token]
  5. 部署后 Prisma 自动连接 Turso。

#### 方案 B：Vercel Postgres（官方原生）
- 免费额度：256MB，够个人内容管理。
- 优势：Vercel 后台一键创建，自动注入环境变量，无需额外配置。
- 切换步骤：
  1. Vercel 后台 → Storage → 创建 Postgres 数据库。
  2. 自动获得 POSTGRES_URL 等环境变量。
  3. 修改 prisma/schema.prisma：
  ```
  datasource db {
    provider = "postgresql"
    url      = env("POSTGRES_URL")
    }
    ```
  4. 执行 `npx prisma db push` 部署表结构。
  5. 部署应用。

### 13.3 Vercel 部署流程
1. 将项目推送至 GitHub 仓库。
2. 在 Vercel.com 导入该仓库，框架自动识别 Next.js。
3. 配置环境变量（见下方清单）。
4. 触发构建和部署，自动获得 *.vercel.app 域名，可绑定自定义域名。

### 13.4 必需环境变量清单
暂时无法在飞书文档外展示此内容

### 13.5 开发时注意事项
- prisma/dev.db 已加入 .gitignore，不提交到仓库。
- 本地启动命令：`npm run dev`，无需配置环境变量（除了 API key 可选）。
- 首次启动前运行 `npx prisma db push` 生成 SQLite 文件。
```


**项目已通过 `npx create-next-app@14` 初始化，请基于此环境生成代码。**
