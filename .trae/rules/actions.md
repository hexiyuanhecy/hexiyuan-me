---
description: API 路由和 Server Actions 安全规范
globs: ["src/app/api/**/*.ts", "src/server/**/*.ts"]
---

# 后端代码规则

## 安全
- 所有 API 路由必须验证认证状态
- 输入验证使用 Zod schema，拒绝任何未定义字段
- 敏感操作记录审计日志到 `audit_log` 表

## 数据库
- 所有查询使用 Prisma，禁止原始 SQL
- 事务使用 `$transaction`
- 连接查询使用 `include` 而非多次查询

## 错误处理
- 统一返回 `{ error: { code: string, message: string } }`
- HTTP 状态码: 200 成功, 400 验证错误, 401 未认证, 403 无权限, 404 不存在, 500 服务器错误
