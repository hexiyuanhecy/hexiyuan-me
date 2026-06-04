import { PrismaClient } from '../src/generated/prisma';
const prisma = new PrismaClient();

async function main() {
  await prisma.entry.deleteMany({});
  await prisma.textContent.deleteMany({});
  await prisma.entryModule.deleteMany({});
  await prisma.workExperience.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.knowledgeLink.deleteMany({});
  await prisma.travel.deleteMany({});
  await prisma.lifestyle.deleteMany({});

  const workEntry1 = await prisma.entry.create({
    data: {
      type: 'work_experience',
      title: '高级前端工程师',
      slug: 'senior-frontend-engineer-2022',
      summary: '负责核心业务系统的前端架构设计与开发',
      occurredAt: new Date('2022-01-01'),
    },
  });

  await prisma.workExperience.create({
    data: {
      entryId: workEntry1.id,
      company: '某独角兽 SaaS 公司',
      role: '高级前端工程师',
      startDate: new Date('2022-01-01'),
      techStack: JSON.stringify(['React', 'Next.js', 'TypeScript', 'Tailwind CSS']),
    },
  });

  await prisma.entryModule.createMany({
    data: [
      { entryId: workEntry1.id, moduleName: 'resume' },
      { entryId: workEntry1.id, moduleName: 'timeline' },
    ],
  });

  const workEntry2 = await prisma.entry.create({
    data: {
      type: 'work_experience',
      title: '前端开发工程师',
      slug: 'frontend-engineer-2019',
      summary: '参与百万级用户电商平台的前端开发',
      occurredAt: new Date('2019-07-01'),
    },
  });

  await prisma.workExperience.create({
    data: {
      entryId: workEntry2.id,
      company: '某头部电商公司',
      role: '前端开发工程师',
      startDate: new Date('2019-07-01'),
      endDate: new Date('2021-12-31'),
      techStack: JSON.stringify(['React', 'Vue', 'Webpack', 'Node.js']),
    },
  });

  await prisma.entryModule.createMany({
    data: [
      { entryId: workEntry2.id, moduleName: 'resume' },
      { entryId: workEntry2.id, moduleName: 'timeline' },
    ],
  });

  const projectEntry1 = await prisma.entry.create({
    data: {
      type: 'project',
      title: '企业级低代码平台',
      slug: 'enterprise-lowcode-platform',
      summary: '从零构建的企业级低代码开发平台',
      occurredAt: new Date('2023-06-01'),
    },
  });

  await prisma.project.create({
    data: {
      entryId: projectEntry1.id,
      name: '企业级低代码平台',
      description: '支持可视化拖拽、自定义组件、流程编排的低代码平台',
      techStack: JSON.stringify(['React', 'Next.js', 'TypeScript', 'Redux', 'Ant Design']),
      highlights: JSON.stringify(['性能优化 50%', '组件库建设', '权限系统']),
    },
  });

  await prisma.entryModule.createMany({
    data: [
      { entryId: projectEntry1.id, moduleName: 'projects' },
      { entryId: projectEntry1.id, moduleName: 'timeline' },
    ],
  });

  const projectEntry2 = await prisma.entry.create({
    data: {
      type: 'project',
      title: '电商前端架构升级',
      slug: 'ecommerce-frontend-refactor',
      summary: '将单体应用重构为微前端架构',
      occurredAt: new Date('2020-03-01'),
    },
  });

  await prisma.project.create({
    data: {
      entryId: projectEntry2.id,
      name: '电商前端架构升级',
      description: '基于 Module Federation 的微前端改造',
      techStack: JSON.stringify(['React', 'Vue', 'Webpack 5', 'Module Federation']),
      highlights: JSON.stringify(['微前端架构', '代码复用率提升', '首屏加载优化']),
    },
  });

  await prisma.entryModule.createMany({
    data: [
      { entryId: projectEntry2.id, moduleName: 'projects' },
      { entryId: projectEntry2.id, moduleName: 'timeline' },
    ],
  });

  const knowledgeEntry1 = await prisma.entry.create({
    data: {
      type: 'knowledge_link',
      title: 'React Hooks 完全指南',
      slug: 'react-hooks-guide',
      summary: '深入理解 React Hooks 的原理与最佳实践',
    },
  });

  await prisma.knowledgeLink.create({
    data: {
      entryId: knowledgeEntry1.id,
      url: 'https://feishu.cn/docx/xxx',
      category: 'React',
      tags: JSON.stringify(['React', 'Hooks', '前端']),
      description: '从 useState 到自定义 Hook，全面覆盖 React Hooks',
    },
  });

  await prisma.entryModule.create({
    data: { entryId: knowledgeEntry1.id, moduleName: 'knowledge' },
  });

  const knowledgeEntry2 = await prisma.entry.create({
    data: {
      type: 'knowledge_link',
      title: 'Next.js 14 新特性详解',
      slug: 'nextjs-14-features',
      summary: 'App Router、Server Components 等核心特性解析',
    },
  });

  await prisma.knowledgeLink.create({
    data: {
      entryId: knowledgeEntry2.id,
      url: 'https://feishu.cn/docx/yyy',
      category: 'Next.js',
      tags: JSON.stringify(['Next.js', 'SSR', 'React']),
      description: '深入探讨 Next.js 14 的新功能和最佳实践',
    },
  });

  await prisma.entryModule.create({
    data: { entryId: knowledgeEntry2.id, moduleName: 'knowledge' },
  });

  const travelEntry = await prisma.entry.create({
    data: {
      type: 'travel',
      title: '云南大理之旅',
      slug: 'yunnan-dali-trip',
      summary: '感受风花雪月的浪漫',
      occurredAt: new Date('2024-04-01'),
    },
  });

  await prisma.travel.create({
    data: {
      entryId: travelEntry.id,
      destination: '云南大理',
      travelDate: new Date('2024-04-01'),
      tags: JSON.stringify(['旅行', '云南', '大理']),
    },
  });

  await prisma.textContent.create({
    data: {
      entryId: travelEntry.id,
      content: '## 大理之旅\n\n洱海的风，苍山的雪，古城的月。这是一次难忘的旅行...',
    },
  });

  await prisma.entryModule.createMany({
    data: [
      { entryId: travelEntry.id, moduleName: 'timeline' },
      { entryId: travelEntry.id, moduleName: 'travel' },
    ],
  });

  const foodEntry = await prisma.entry.create({
    data: {
      type: 'food',
      title: '杭州西湖醋鱼',
      slug: 'hangzhou-west-lake-fish',
      summary: '品尝正宗杭帮菜',
      occurredAt: new Date('2024-03-15'),
    },
  });

  await prisma.lifestyle.create({
    data: {
      entryId: foodEntry.id,
      subType: 'food',
      tags: JSON.stringify(['美食', '杭州', '杭帮菜']),
      date: new Date('2024-03-15'),
    },
  });

  await prisma.entryModule.create({
    data: { entryId: foodEntry.id, moduleName: 'timeline' },
  });

  const dailyEntry = await prisma.entry.create({
    data: {
      type: 'daily',
      title: '周末阅读时光',
      slug: 'weekend-reading',
      summary: '读《代码整洁之道》有感',
      occurredAt: new Date('2024-05-18'),
    },
  });

  await prisma.lifestyle.create({
    data: {
      entryId: dailyEntry.id,
      subType: 'daily',
      tags: JSON.stringify(['阅读', '技术', '成长']),
      date: new Date('2024-05-18'),
    },
  });

  await prisma.textContent.create({
    data: {
      entryId: dailyEntry.id,
      content: '## 阅读笔记\n\n今天读完了《代码整洁之道》，收获很多...',
    },
  });

  await prisma.entryModule.create({
    data: { entryId: dailyEntry.id, moduleName: 'timeline' },
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
