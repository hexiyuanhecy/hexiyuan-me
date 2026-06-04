import { prisma } from '../src/lib/prisma';

async function seed() {
  console.log('Starting seed...');

  const existingEntries = await prisma.entry.count();
  if (existingEntries > 0) {
    console.log('Database already has data, skipping seed');
    return;
  }

  const workExpEntry = await prisma.entry.create({
    data: {
      userId: 'user-1',
      type: 'work_experience',
      status: 'published',
      title: '高级前端工程师',
      slug: 'senior-frontend-engineer-' + Date.now().toString(36),
      summary: '在某头部电商公司担任高级前端工程师，负责核心业务系统的架构设计与开发',
      contentType: 'markdown',
      occurredAt: new Date('2022-01-01'),
      workExp: {
        create: {
          company: '某科技公司',
          role: '高级前端工程师',
          startDate: new Date('2022-01-01'),
          endDate: null,
          techStack: JSON.stringify(['React', 'Next.js', 'TypeScript', 'Tailwind CSS']),
        },
      },
      textContent: {
        create: {
          content: `## 高级前端工程师

**公司**：某科技公司

**时间**：2022年1月 - 至今

**技术栈**：React, Next.js, TypeScript, Tailwind CSS

**职责描述**：
- 负责核心业务系统的前端架构设计与开发
- 主导性能优化项目，将首屏加载时间优化至 1.5s
- 带领团队完成多个关键项目交付
- 推动代码规范和工程化实践`,
          excerpt: '在某头部电商公司担任高级前端工程师，负责核心业务系统的架构设计与开发',
        },
      },
      modules: {
        create: [
          { moduleName: 'resume' },
          { moduleName: 'timeline' },
        ],
      },
    },
  });

  console.log('Created work experience entry:', workExpEntry.id);

  const projectEntry = await prisma.entry.create({
    data: {
      userId: 'user-1',
      type: 'project',
      status: 'published',
      title: '电商平台前端重构',
      slug: 'ecommerce-platform-refactor-' + Date.now().toString(36),
      summary: '对现有电商平台进行前端架构升级，采用微前端方案实现模块解耦',
      contentType: 'markdown',
      occurredAt: new Date('2023-06-01'),
      project: {
        create: {
          name: '电商平台前端重构',
          description: '对现有电商平台进行前端架构升级，采用微前端方案实现模块解耦',
          techStack: JSON.stringify(['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Module Federation']),
          highlights: JSON.stringify(['性能提升 40%', '首屏加载时间优化至 1.5s', '代码复用率提升至 60%']),
          link: 'https://github.com/example/project',
        },
      },
      textContent: {
        create: {
          content: `## 电商平台前端重构

**技术栈**：React, Next.js, TypeScript, Tailwind CSS, Module Federation

**项目描述**：
对现有电商平台进行前端架构升级，采用微前端方案实现模块解耦。

**主要亮点**：
- 性能提升 40%
- 首屏加载时间优化至 1.5s
- 代码复用率提升至 60%
- 模块间解耦，独立部署`,
          excerpt: '对现有电商平台进行前端架构升级，采用微前端方案实现模块解耦',
        },
      },
      modules: {
        create: [
          { moduleName: 'projects' },
          { moduleName: 'timeline' },
        ],
      },
    },
  });

  console.log('Created project entry:', projectEntry.id);

  const knowledgeEntry = await prisma.entry.create({
    data: {
      userId: 'user-1',
      type: 'knowledge_link',
      status: 'published',
      title: 'React Hooks 最佳实践',
      slug: 'react-hooks-best-practices-' + Date.now().toString(36),
      summary: '总结 React Hooks 的使用技巧和最佳实践，包括性能优化和代码组织',
      contentType: 'markdown',
      knowledge: {
        create: {
          url: '#',
          category: '技术',
          tags: JSON.stringify(['React', 'Hooks', '前端']),
          description: '总结 React Hooks 的使用技巧和最佳实践',
        },
      },
      textContent: {
        create: {
          content: `## React Hooks 最佳实践

### 1. useState
- 避免在渲染函数中创建初始值
- 使用函数形式初始化复杂状态

### 2. useEffect
- 明确依赖数组
- 清理副作用

### 3. useMemo/useCallback
- 合理使用，避免过度优化
- 注意依赖数组的正确性

### 4. 自定义 Hooks
- 命名以 use 开头
- 逻辑复用，提高代码质量`,
          excerpt: '总结 React Hooks 的使用技巧和最佳实践',
        },
      },
      modules: {
        create: [
          { moduleName: 'knowledge' },
          { moduleName: 'timeline' },
        ],
      },
    },
  });

  console.log('Created knowledge entry:', knowledgeEntry.id);

  const travelEntry = await prisma.entry.create({
    data: {
      userId: 'user-1',
      type: 'travel',
      status: 'published',
      title: '日本东京旅行',
      slug: 'tokyo-travel-' + Date.now().toString(36),
      summary: '7天东京自由行，体验日式文化和美食',
      contentType: 'markdown',
      occurredAt: new Date('2024-04-01'),
      travel: {
        create: {
          destination: '日本东京',
          travelDate: new Date('2024-04-01'),
          tags: JSON.stringify(['浅草寺', '筑地市场', '富士山', '秋叶原']),
        },
      },
      textContent: {
        create: {
          content: `## 日本东京旅行

**旅行时间**：2024年4月1日 - 4月7日

**行程亮点**：
- 浅草寺祈福
- 筑地市场美食
- 富士山一日游
- 秋叶原动漫圣地巡礼

**美食体验**：
- 寿司
- 拉面
- 天妇罗
- 和果子`,
          excerpt: '7天东京自由行，体验日式文化和美食',
        },
      },
      modules: {
        create: [
          { moduleName: 'timeline' },
        ],
      },
    },
  });

  console.log('Created travel entry:', travelEntry.id);

  const dailyEntry = await prisma.entry.create({
    data: {
      userId: 'user-1',
      type: 'daily',
      status: 'published',
      title: '周末阅读笔记',
      slug: 'weekend-reading-notes-' + Date.now().toString(36),
      summary: '周末阅读《代码整洁之道》的读书笔记',
      contentType: 'markdown',
      occurredAt: new Date(),
      lifestyle: {
        create: {
          subType: 'daily',
          tags: JSON.stringify(['阅读', '技术书籍']),
          date: new Date(),
        },
      },
      textContent: {
        create: {
          content: `## 周末阅读笔记

**书籍**：《代码整洁之道》

**核心观点**：
1. 代码应该易于理解和维护
2. 函数应该短小精悍
3. 命名要清晰明了
4. 避免重复代码

**收获**：
- 学习了很多编写整洁代码的技巧
- 对代码质量有了新的认识
- 准备应用到日常开发中`,
          excerpt: '周末阅读《代码整洁之道》的读书笔记',
        },
      },
      modules: {
        create: [
          { moduleName: 'timeline' },
        ],
      },
    },
  });

  console.log('Created daily entry:', dailyEntry.id);

  console.log('Seed completed successfully!');
}

seed()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
