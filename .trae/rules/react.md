---
description: React 组件编写规范
globs: ["src/components/**/*.tsx", "src/**/*.tsx"]
---

# React 组件规则

## 组件结构
- 优先使用函数组件 + Hooks
- Props 使用 interface 定义，命名以组件名+Props 结尾
- 事件处理函数以 `handle` 前缀命名

## 样式
- 使用 Tailwind CSS 工具类，不使用 CSS Modules 或 Styled Components
- 响应式前缀顺序: `sm: md: lg: xl:`
- 颜色使用 Tailwind 语义值 (如 `text-primary`)，不写死 hex

## 状态管理
- 本地状态用 `useState`，复杂状态用 `useReducer`
- 全局状态只在必要时使用 Zustand
- 表单状态使用 React Hook Form + Zod resolver
