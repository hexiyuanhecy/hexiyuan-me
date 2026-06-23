-- PRD v3.0 数据模型迁移脚本
-- 将旧的 Entry 多态模型迁移到新的独立模型

-- ============================================
-- 第一步：创建新表（基于新的 PRD 模型）
-- ============================================

-- 创建 Tag 表
CREATE TABLE IF NOT EXISTS "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE,
    "category" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- 创建 Experience 表
CREATE TABLE IF NOT EXISTS "Experience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL UNIQUE,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "summary" TEXT,
    "content" TEXT,
    "status" TEXT NOT NULL DEFAULT 'published',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- 创建 ExperienceTag 关联表
CREATE TABLE IF NOT EXISTS "ExperienceTag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "experienceId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE CASCADE,
    FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE,
    UNIQUE("experienceId", "tagId")
);

-- 创建 Project 表（新）
CREATE TABLE IF NOT EXISTS "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL UNIQUE,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT,
    "repoUrl" TEXT,
    "demoUrl" TEXT,
    "coverImage" TEXT,
    "highlights" TEXT,
    "techStack" TEXT,
    "status" TEXT NOT NULL DEFAULT 'published',
    "occurredAt" DATETIME,
    "experienceId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE SET NULL
);

-- 创建 ProjectTag 关联表
CREATE TABLE IF NOT EXISTS "ProjectTag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE,
    FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE,
    UNIQUE("projectId", "tagId")
);

-- 创建 ProjectModule 关联表
CREATE TABLE IF NOT EXISTS "ProjectModule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE,
    UNIQUE("projectId", "module")
);

-- 创建 Travel 表（新）
CREATE TABLE IF NOT EXISTS "Travel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL UNIQUE,
    "title" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "coverImage" TEXT,
    "summary" TEXT,
    "content" TEXT,
    "status" TEXT NOT NULL DEFAULT 'published',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- 创建 TravelTag 关联表
CREATE TABLE IF NOT EXISTS "TravelTag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "travelId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE CASCADE,
    FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE,
    UNIQUE("travelId", "tagId")
);

-- 创建 TravelModule 关联表
CREATE TABLE IF NOT EXISTS "TravelModule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "travelId" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE CASCADE,
    UNIQUE("travelId", "module")
);

-- 创建 DayPlan 表
CREATE TABLE IF NOT EXISTS "DayPlan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "location" TEXT,
    "content" TEXT,
    "images" TEXT,
    "transportation" TEXT,
    "accommodation" TEXT,
    "travelId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE CASCADE
);

-- 创建 LifeEvent 表
CREATE TABLE IF NOT EXISTS "LifeEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL UNIQUE,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "category" TEXT,
    "content" TEXT,
    "images" TEXT,
    "status" TEXT NOT NULL DEFAULT 'published',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- 创建 LifeEventTag 关联表
CREATE TABLE IF NOT EXISTS "LifeEventTag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lifeEventId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    FOREIGN KEY ("lifeEventId") REFERENCES "LifeEvent"("id") ON DELETE CASCADE,
    FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE,
    UNIQUE("lifeEventId", "tagId")
);

-- 创建 LifeEventModule 关联表
CREATE TABLE IF NOT EXISTS "LifeEventModule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lifeEventId" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    FOREIGN KEY ("lifeEventId") REFERENCES "LifeEvent"("id") ON DELETE CASCADE,
    UNIQUE("lifeEventId", "module")
);

-- 创建 Knowledge 表
CREATE TABLE IF NOT EXISTS "Knowledge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL UNIQUE,
    "title" TEXT NOT NULL,
    "url" TEXT,
    "category" TEXT,
    "description" TEXT,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'published',
    "occurredAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- 创建 KnowledgeTag 关联表
CREATE TABLE IF NOT EXISTS "KnowledgeTag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "knowledgeId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    FOREIGN KEY ("knowledgeId") REFERENCES "Knowledge"("id") ON DELETE CASCADE,
    FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE,
    UNIQUE("knowledgeId", "tagId")
);

-- 创建 KnowledgeModule 关联表
CREATE TABLE IF NOT EXISTS "KnowledgeModule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "knowledgeId" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    FOREIGN KEY ("knowledgeId") REFERENCES "Knowledge"("id") ON DELETE CASCADE,
    UNIQUE("knowledgeId", "module")
);

-- ============================================
-- 第二步：从旧模型迁移数据到新模型
-- 注意：此迁移假设旧 Entry 表中有数据
-- ============================================

-- 迁移 WorkExperience 到 Experience
-- 由于新旧模型字段差异较大，这里提供迁移逻辑模板
-- INSERT INTO "Experience" ("id", "slug", "company", "position", "startDate", "endDate", "summary", "content", "status", "createdAt", "updatedAt")
-- SELECT 
--     e."id",
--     e."slug",
--     w."company",
--     w."role",
--     w."startDate",
--     w."endDate",
--     e."summary",
--     t."content",
--     e."status",
--     e."createdAt",
--     e."updatedAt"
-- FROM "Entry" e
-- JOIN "WorkExperience" w ON e."id" = w."entryId"
-- LEFT JOIN "TextContent" t ON e."id" = t."entryId"
-- WHERE e."type" = 'work_experience';

-- 迁移 ProjectOld 到 Project（新表）
-- INSERT INTO "Project" ("id", "slug", "title", "description", "techStack", "repoUrl", "demoUrl", "highlights", "status", "occurredAt", "createdAt", "updatedAt")
-- SELECT 
--     e."id",
--     e."slug",
--     p."name",
--     p."description",
--     p."techStack",
--     p."link",
--     NULL,
--     p."highlights",
--     e."status",
--     e."occurredAt",
--     e."createdAt",
--     e."updatedAt"
-- FROM "Entry" e
-- JOIN "ProjectOld" p ON e."id" = p."entryId"
-- WHERE e."type" = 'project';

-- 迁移 KnowledgeLink 到 Knowledge
-- INSERT INTO "Knowledge" ("id", "slug", "title", "url", "category", "description", "notes", "status", "occurredAt", "createdAt", "updatedAt")
-- SELECT 
--     e."id",
--     e."slug",
--     e."title",
--     k."url",
--     k."category",
--     k."description",
--     t."content",
--     e."status",
--     e."occurredAt",
--     e."createdAt",
--     e."updatedAt"
-- FROM "Entry" e
-- JOIN "KnowledgeLink" k ON e."id" = k."entryId"
-- LEFT JOIN "TextContent" t ON e."id" = t."entryId"
-- WHERE e."type" = 'knowledge_link';

-- 迁移 TravelOld 到 Travel（新表）
-- INSERT INTO "Travel" ("id", "slug", "title", "destination", "startDate", "endDate", "summary", "content", "status", "createdAt", "updatedAt")
-- SELECT 
--     e."id",
--     e."slug",
--     e."title",
--     t."destination",
--     t."travelDate",
--     NULL,
--     e."summary",
--     tc."content",
--     e."status",
--     e."createdAt",
--     e."updatedAt"
-- FROM "Entry" e
-- JOIN "TravelOld" t ON e."id" = t."entryId"
-- LEFT JOIN "TextContent" tc ON e."id" = tc."entryId"
-- WHERE e."type" = 'travel';

-- 迁移 LifestyleOld 到 LifeEvent
-- INSERT INTO "LifeEvent" ("id", "slug", "title", "date", "category", "content", "status", "createdAt", "updatedAt")
-- SELECT 
--     e."id",
--     e."slug",
--     e."title",
--     l."date",
--     l."subType",
--     tc."content",
--     e."status",
--     e."createdAt",
--     e."updatedAt"
-- FROM "Entry" e
-- JOIN "LifestyleOld" l ON e."id" = l."entryId"
-- LEFT JOIN "TextContent" tc ON e."id" = tc."entryId"
-- WHERE e."type" = 'daily' OR e."type" = 'food' OR e."type" = 'other';

-- ============================================
-- 第三步：创建索引优化查询性能
-- ============================================

CREATE INDEX IF NOT EXISTS "Experience_slug_idx" ON "Experience"("slug");
CREATE INDEX IF NOT EXISTS "Experience_status_idx" ON "Experience"("status");
CREATE INDEX IF NOT EXISTS "Experience_startDate_idx" ON "Experience"("startDate");

CREATE INDEX IF NOT EXISTS "Project_slug_idx" ON "Project"("slug");
CREATE INDEX IF NOT EXISTS "Project_status_idx" ON "Project"("status");
CREATE INDEX IF NOT EXISTS "Project_experienceId_idx" ON "Project"("experienceId");
CREATE INDEX IF NOT EXISTS "Project_occurredAt_idx" ON "Project"("occurredAt");

CREATE INDEX IF NOT EXISTS "Travel_slug_idx" ON "Travel"("slug");
CREATE INDEX IF NOT EXISTS "Travel_status_idx" ON "Travel"("status");

CREATE INDEX IF NOT EXISTS "DayPlan_date_idx" ON "DayPlan"("date");
CREATE INDEX IF NOT EXISTS "DayPlan_travelId_idx" ON "DayPlan"("travelId");

CREATE INDEX IF NOT EXISTS "LifeEvent_slug_idx" ON "LifeEvent"("slug");
CREATE INDEX IF NOT EXISTS "LifeEvent_status_idx" ON "LifeEvent"("status");
CREATE INDEX IF NOT EXISTS "LifeEvent_date_idx" ON "LifeEvent"("date");

CREATE INDEX IF NOT EXISTS "Knowledge_slug_idx" ON "Knowledge"("slug");
CREATE INDEX IF NOT EXISTS "Knowledge_status_idx" ON "Knowledge"("status");
CREATE INDEX IF NOT EXISTS "Knowledge_category_idx" ON "Knowledge"("category");

CREATE INDEX IF NOT EXISTS "Tag_name_idx" ON "Tag"("name");
CREATE INDEX IF NOT EXISTS "Tag_slug_idx" ON "Tag"("slug");
CREATE INDEX IF NOT EXISTS "Tag_category_idx" ON "Tag"("category");
