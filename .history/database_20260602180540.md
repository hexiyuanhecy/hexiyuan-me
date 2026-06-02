这份 DATABASE.md 我已经完全按照你的要求整理好了。它融合了我们之前讨论的所有核心要素：既保留了支持时间轴、地图和 AI 语义搜索的前瞻性架构，又补全了 MVP 阶段必需的模块分发、类型子表和标签体系。

你可以直接将以下内容保存为 DATABASE.md 文件，放入你的项目根目录，与 PRD.md 和 CLAUDE.md 配合使用。

📄 最终版数据库设计文档

数据库设计文档 —— Hexiyuan's Digital Garden

版本：v2.0（融合版）
最后更新：2026-06-02
说明：本文档为个人数字花园的完整数据库蓝图，融合了通用 CMS 架构的前瞻性与项目专属的模块分发机制，支持从 MVP 到长期演进的平滑扩展。

一、设计目标与理念

1.1 核心目标
支撑 MVP 五大板块：简历/项目、知识库、AI 分身、智能导入、管理后台。
为 V2 多媒体、语义搜索、智能推荐 预留扩展接口。
确保 时间轴统一查询：所有带时间属性的内容均可按 occurred_at 排序，缺省使用创建时间。

1.2 设计原则
内容与元数据分离：正文大字段独立存储，优化列表查询性能。
多态关联：通过主表 + 类型子表实现不同内容的专属字段约束。
模块分发机制：一条内容可同时展示在多个前台模块（如简历页 + 时间轴）。
动态分类体系：支持无限层级分类，便于知识库和博客组织。
AI 原生预留：存储 AI 分析结果和向量，为语义搜索和智能推荐铺路。
时空属性：记录事件发生时间和地理位置，天然支持时间轴和地图可视化。

二、环境与工具
项目   选型   说明
数据库   PostgreSQL（开发期可用 SQLite 模拟）   生产环境推荐 Postgres，支持 JSONB、地理空间、pgvector

ORM   Prisma   TypeScript 原生支持，迁移工具成熟

向量扩展   pgvector（后期引入）   语义搜索，MVP 阶段可暂不启用

文件存储   本地 / Vercel Blob / Cloudflare R2   MVP 用本地，后期上 CDN

三、核心表结构

3.1 用户表 User（预留，当前单用户）
字段   类型   说明
id   UUID (PK)   主键

name   VARCHAR(100)   脱敏姓名

bio   TEXT   个人简介

avatar   VARCHAR(500)   头像 URL

skills   JSONB   技能数组

created_at   TIMESTAMP   创建时间

updated_at   TIMESTAMP   更新时间

3.2 内容主表 Entry
字段   类型   说明
id   UUID (PK)   主键

user_id   UUID (FK → User)   所属用户

type   ENUM   内容类型（见下方枚举）

status   ENUM   状态：draft / published / archived

title   VARCHAR(300)   标题

slug   VARCHAR(300) UNIQUE   URL 友好标识

summary   TEXT   摘要（列表展示用）

content_type   ENUM   内容形态：markdown / image / video 等

text_content_id   UUID (FK → TextContent)   关联文本内容（可空）

occurred_at   TIMESTAMP   事件发生时间，为空时默认 created_at

location   GEOGRAPHY(POINT) / JSONB   地理位置（PostGIS 点或简单 JSON）

ai_analysis   JSONB   AI 分析结果（分类置信度、提取字段、摘要等）

ai_vector   VECTOR(1536)   文本向量（后期引入 pgvector）

created_at   TIMESTAMP   创建时间

updated_at   TIMESTAMP   更新时间

Entry.type 枚举：

work_experience, project, knowledge, blog, travel, food, daily, other

Entry.status 枚举：

draft, published, archived

Entry.content_type 枚举：

markdown, rich_text, image, video, audio, file

设计意图：text_content_id 将长篇 Markdown 分离到 TextContent 表，列表查询时无需加载正文，提升性能。ai_analysis 存储导入时的 AI 分类结果和提取字段，方便追溯和后续优化。

3.3 文本内容表 TextContent
字段   类型   说明
id   UUID (PK)   主键

entry_id   UUID (FK → Entry)   所属条目

content   TEXT   Markdown 或富文本原文

excerpt   TEXT   自动摘录（可 AI 生成）

3.4 模块分发关联表 EntryModule
字段   类型   说明
id   UUID (PK)   主键

entry_id   UUID (FK → Entry)   关联条目

module_name   ENUM   目标模块标识

module_name 枚举：

resume, timeline, projects, knowledge, blog, travel, lifestyle, games

查询示例：获取时间轴所需条目 → SELECT entry_id FROM EntryModule WHERE module_name = 'timeline'

3.5 类型子表（各类型专属字段）

WorkExperience（工作经历）
字段   类型   说明
entry_id   UUID (PK, FK → Entry)   一对一关联

company   VARCHAR(200)   脱敏公司名

role   VARCHAR(100)   职位

start_date   DATE   开始日期

end_date   DATE   结束日期（可空）

tech_stack   JSONB   技术栈数组

Project（项目经历）
字段   类型   说明
entry_id   UUID (PK, FK → Entry)   一对一关联

name   VARCHAR(200)   项目名称

description   TEXT   简要描述

tech_stack   JSONB   技术栈

link   VARCHAR(500)   项目链接

highlights   JSONB   亮点数组

Knowledge（知识库）
字段   类型   说明
entry_id   UUID (PK, FK → Entry)   一对一关联

category_id   UUID (FK → Category)   所属分类（可空）

tags   JSONB   标签数组（快速读取，也可走多对多）

Travel（旅行）
字段   类型   说明
entry_id   UUID (PK, FK → Entry)   一对一关联

destination   VARCHAR(200)   目的地

travel_date   DATE   旅行日期

tags   JSONB   标签

Food & Daily（吃喝玩乐 / 日常）

结构类似，各含 tags JSON 和 category_id，按需扩展。

3.6 标签表 Tag 与关联表 EntryTag（可选，MVP 可先用 JSON 数组）
字段   类型   说明
id   UUID (PK)   标签 ID

name   VARCHAR(50) UNIQUE   标签名

slug   VARCHAR(50) UNIQUE   URL 标识

EntryTag 关联表：
字段   类型   说明
entry_id   UUID (FK)   条目 ID

tag_id   UUID (FK)   标签 ID

MVP 策略：初期可直接在子表中用 tags JSONB 存储，减少联表。后期内容量大时迁移至多对多。

3.7 分类表 Category（树状结构）
字段   类型   说明
id   UUID (PK)   分类 ID

name   VARCHAR(100)   分类名

slug   VARCHAR(100)   URL 标识

parent_id   UUID (FK → Category)   父级分类（可空）

sort_order   INT   排序权重

通过 parent_id 实现无限层级，如：技术 → 前端 → React。

四、实体关系图（Mermaid）

mermaid
erDiagram
    User ||--o{ Entry : owns

    Entry ||--o| TextContent : has
    Entry ||--o{ EntryModule : distributed_to
    Entry ||--o| WorkExperience : extends
    Entry ||--o| Project : extends
    Entry ||--o| Knowledge : extends
    Entry ||--o| Travel : extends
    Entry ||--o| Food : extends
    Entry ||--o| Daily : extends

    Entry }o--o{ Tag : tagged_with
    Knowledge }o--o{ Category : categorized_under
    Travel }o--o{ Category : categorized_under

五、核心查询示例

5.1 全局时间轴（所有标记为 timeline 的已发布条目）
sql
SELECT e.id, e.title, e.type, e.occurred_at, e.summary
FROM Entry e
JOIN EntryModule em ON e.id = em.entry_id
WHERE em.module_name = 'timeline' AND e.status = 'published'
ORDER BY COALESCE(e.occurred_at, e.created_at) DESC;

5.2 简历页工作经历（指定模块 + 类型过滤）
sql
SELECT e.id, e.title, w.company, w.role, w.start_date, w.end_date
FROM Entry e
JOIN EntryModule em ON e.id = em.entry_id
JOIN WorkExperience w ON e.id = w.entry_id
WHERE em.module_name = 'resume' AND e.type = 'work_experience' AND e.status = 'published'
ORDER BY COALESCE(w.start_date, e.occurred_at, e.created_at) DESC;

5.3 知识库按分类筛选
sql
SELECT e.id, e.title, e.summary, k.tags
FROM Entry e
JOIN EntryModule em ON e.id = em.entry_id
JOIN Knowledge k ON e.id = k.entry_id
WHERE em.module_name = 'knowledge' AND k.category_id = 'xxx' AND e.status = 'published'
ORDER BY e.created_at DESC;

六、智能导入时的数据处理流程

接收文本 → /api/import 调用 DeepSeek 分析。
AI 返回：type、提取的字段、建议 modules。
前端预览：用户确认类型、勾选目标模块、编辑字段。
确认入库：
   在 Entry 表创建记录，status = 'published'，occurred_at 若未指定则取当前时间。
   根据 type 在对应子表（如 WorkExperience）插入专属字段。
   在 EntryModule 批量插入用户勾选的模块记录。
   在 TextContent 存储原始 Markdown。
   将 AI 分析原始结果存入 ai_analysis（JSONB）。
后续可编辑：管理后台 /admin 可修改所有字段，包括模块分配。

七、MVP 阶段简化建议

为快速启动，MVP 可暂时：
不启用 pgvector 和 ai_vector 字段。
分类体系用固定枚举代替动态树，后续升级。
标签用 tags JSONB 代替多对多表。
多媒体字段预留，但先只实现 Markdown 文本。
地理位置用简单 JSON（{ lat, lng }）而非 PostGIS。

八、演进路线图
阶段   新增内容
MVP（当前）   核心表 + 类型子表 + 模块分发，Markdown 纯文本，简单分类

V2.0   Category 动态树、Tag 多对多、多媒体支持、EntryStatus 工作流

V3.0   pgvector 语义搜索、AI 自动标签/摘要、旅行地图可视化、智能推荐

本文档与 CLAUDE.md 配套使用，后者定义技术栈、路由和开发纪律。开发时请确保所有数据操作遵循本设计。

💡 为什么这份设计适合你？

解决了“分类混乱”的问题：
    你之前担心“吃喝玩乐”以后不好拆分。现在通过 Entry.type（大类）和 Category 表（树状子类），你可以轻松管理“生活 > 吃喝玩乐 > 美食”这种层级。

实现了“一次录入，多处展示”：
    通过 EntryModule 表，你的一条“工作经历”可以同时出现在“简历页”和“时间轴”上，不需要复制数据。

兼顾了“性能”与“扩展”：
    把大文本（Markdown）单独存到 TextContent 表，当你查询“时间轴列表”时，数据库不需要搬运巨大的文本字段，速度飞快。
    预留了 ai_vector 和 location，等你以后想搞“AI 语义搜索”或“桂林旅行地图”时，直接用就行，不用改表结构。

保留了 AI 能力：
    ai_analysis 字段专门用来存 AI 分析的结果（比如 AI 认为你这篇文章属于“TypeScript”标签），方便你以后做智能推荐。

这份文档已经非常完善，可以直接交给 Claude Code 进行开发了。祝你在桂林的开发工作顺利！