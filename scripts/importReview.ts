import { PrismaClient } from '../src/generated/prisma';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

async function main() {
  const workExperiences = [
    {
      type: 'work_experience' as const,
      title: '自由前端开发者',
      summary: '承接前端外包项目，参与AI视频合成工具前端开发，负责视频上传、素材处理、AI合成、结果渲染全流程功能实现',
      occurredAt: new Date('2025-05-01'),
      workExp: {
        company: '自由职业',
        role: '前端开发工程师',
        startDate: new Date('2025-05-01'),
        techStack: 'React, TypeScript, AI视频合成',
      },
      modules: ['resume', 'timeline'],
      aiAnalysis: '独立完成AI视频合成工具前端核心流程开发，保持技术手感，无技术断层',
    },
    {
      type: 'work_experience' as const,
      title: '字节跳动-飞书 前端开发工程师',
      summary: '负责飞书汇报、假勤两大核心业务线前端开发、架构迭代、多端适配与专项技术治理，服务千万级用户',
      occurredAt: new Date('2022-04-01'),
      workExp: {
        company: '字节跳动-飞书',
        role: '前端开发工程师',
        startDate: new Date('2022-04-01'),
        endDate: new Date('2025-05-01'),
        techStack: 'React, TypeScript, Taro, UD Design, Node.js',
      },
      modules: ['resume', 'timeline'],
      aiAnalysis: '主导飞书汇报2.0重构、假勤双系统融合、控件组多端迁移，担任NPS治理、JSError治理专项Owner，实现系统满意度从87%提升至93%，JS错误量下降80%',
    },
    {
      type: 'work_experience' as const,
      title: '滴滴出行-橙心优选 前端开发工程师',
      summary: '担任订单领域前端Owner，负责C端商城小程序、A端橙掌柜、PC采购商城多端开发与重构优化',
      occurredAt: new Date('2021-04-01'),
      workExp: {
        company: '滴滴出行-橙心优选',
        role: '前端开发工程师',
        startDate: new Date('2021-04-01'),
        endDate: new Date('2022-04-01'),
        techStack: 'React, Taro, Redux, Node.js',
      },
      modules: ['resume', 'timeline'],
      aiAnalysis: '完成订单模块BFF楼层化重构，核心页面TTI从1909ms降至855ms，分包体积缩减50%，团队研发人效提升50%',
    },
    {
      type: 'work_experience' as const,
      title: '叙简科技 前端开发工程师',
      summary: '担任应急指挥系统前端负责人，承接6+应急类子项目定制化开发，主导自研GIS核心模块重构优化',
      occurredAt: new Date('2019-07-01'),
      workExp: {
        company: '叙简科技',
        role: '前端开发工程师',
        startDate: new Date('2019-07-01'),
        endDate: new Date('2021-04-01'),
        techStack: 'React, PostMessage, Webpack, GIS',
      },
      modules: ['resume', 'timeline'],
      aiAnalysis: '基于React+PostMessage重构GIS核心模块，落地静态数据可配置方案，项目打包体积优化50%，助力团队斩获公司最佳团队奖项',
    },
  ];

  const projects = [
    {
      type: 'project' as const,
      title: '飞书汇报2.0重构',
      summary: '参与飞书汇报2.0版本重构迭代，完成小程序转Web端升级改造',
      occurredAt: new Date('2022-04-01'),
      project: {
        name: '飞书汇报2.0重构',
        description: '完成小程序到Web端的全量迁移，实现富文本能力拓展、双端UI升级、运营平台搭建',
        techStack: 'React, TypeScript, UD Design',
        highlights: 'IOS端核心页面TTI提升43%，包体积缩减1.1MB，小程序主包从6.5MB优化至4.4MB',
      },
      modules: ['projects'],
      aiAnalysis: '主导富文本能力拓展，实现工具栏自定义、划词评论、OKR插入等Web端专属能力；接入Feelgood问卷体系，解决双端兼容问题；完成性能专项优化，实现秒开体验',
    },
    {
      type: 'project' as const,
      title: '假勤双系统融合与控件组重构',
      summary: '完成飞书假勤标准版与企业版系统融合，休假、加班控件组多端迁移重构',
      occurredAt: new Date('2023-01-01'),
      project: {
        name: '假勤双系统融合',
        description: '实现标准版与企业版系统统一，完成休假、加班控件组从原生小程序到Web、H5全量迁移',
        techStack: 'React, TypeScript, Taro, ProTable',
        highlights: '抽象15+多端通用校验逻辑，页面初始化渲染性能提升70%，休假页面2秒开率从3%提升至43.1%',
      },
      modules: ['projects'],
      aiAnalysis: '完成控件组多端迁移，搭建通用打印工程模板，后续业务接入人力成本减少80%；使用ProTable重构大数据量列表，实现懒加载渲染',
    },
    {
      type: 'project' as const,
      title: 'NPS用户体验治理专项',
      summary: '跨团队联动产品、设计、后端、QA，全权负责假勤用户满意度治理',
      occurredAt: new Date('2023-06-01'),
      project: {
        name: 'NPS用户体验治理',
        description: '搭建三级问题打标体系，建立周度反馈巡检机制，识别并落地5项重点优化方案',
        techStack: '数据看板, 用户调研, 流程优化',
        highlights: '系统整体满意度从87%提升至93%，治理流程成为团队标准化流程',
      },
      modules: ['projects', 'knowledge'],
      aiAnalysis: '搭建用户反馈闭环体系，识别10大核心痛点，落地休假自建应用大盘，将操作流程从3-5步缩减至1-2步，考勤配置转化率达60%',
    },
    {
      type: 'project' as const,
      title: 'JSError线上稳定性治理',
      summary: '牵头假勤全链路JS错误治理，搭建完整稳定性闭环体系',
      occurredAt: new Date('2023-03-01'),
      project: {
        name: 'JSError治理专项',
        description: '制定巡检规范、搭建监控看板、建立报警机制，完成全量错误治理',
        techStack: 'Slardar, 监控告警, 错误分析',
        highlights: '整体JS错误量下降80%，打卡模块错误基本清零，方案被兄弟团队复用',
      },
      modules: ['projects', 'knowledge'],
      aiAnalysis: '建立周巡检、月度复盘制度，每周收敛Top错误，分类整改沉淀通用解决方案；参与Argus风险专项，修复XSS域名攻击等安全问题',
    },
    {
      type: 'project' as const,
      title: '橙心优选订单领域全链路重构',
      summary: '负责橙心优选订单领域全链路开发与重构，针对性能问题完成专项优化',
      occurredAt: new Date('2021-04-01'),
      project: {
        name: '橙心优选订单重构',
        description: '重构C端商城小程序订单模块，主导BFF楼层化架构升级',
        techStack: 'React, Taro, Node.js, BFF',
        highlights: '核心页面TTI从1909ms降至855ms，CPU启动消耗下降13.7%，分包体积从1680kb缩减至860kb',
      },
      modules: ['projects'],
      aiAnalysis: '落地接口合并、渲染优化、组件精简等方案，实现前后端解耦，团队订单领域研发人效提升50%以上',
    },
    {
      type: 'project' as const,
      title: '应急指挥系统GIS模块重构',
      summary: '基于React、PostMessage重构自研GIS核心模块，解决历史技术痛点',
      occurredAt: new Date('2019-10-01'),
      project: {
        name: 'GIS模块重构',
        description: '重构自研GIS地图模块，解决原生JS开发二次开发效率低、兼容性差的问题',
        techStack: 'React, PostMessage, Webpack, GIS',
        highlights: '覆盖6+应急项目，人效提升50%以上，项目打包体积优化50%',
      },
      modules: ['projects'],
      aiAnalysis: '落地事件上报、多角色审批全流程应急闭环能力，静态数据可配置方案减少前端发版频率，助力项目顺利验收',
    },
  ];

  for (const exp of workExperiences) {
    const slug = `${exp.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}-${Date.now()}`;
    
    await prisma.entry.create({
      data: {
        type: exp.type,
        title: exp.title,
        summary: exp.summary,
        slug: slug,
        occurredAt: exp.occurredAt,
        aiAnalysis: exp.aiAnalysis,
        workExp: {
          create: exp.workExp,
        },
        modules: {
          create: exp.modules.map(moduleName => ({
            moduleName: moduleName as any,
          })),
        },
        textContent: {
          create: {
            content: `# ${exp.title}\n\n${exp.summary}\n\n## 技术栈\n${exp.workExp.techStack}\n\n## 核心职责\n${exp.aiAnalysis}`,
          },
        },
      },
    });
    console.log(`Created work experience: ${exp.title}`);
  }

  for (const proj of projects) {
    const slug = `${proj.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}-${Date.now()}`;
    
    await prisma.entry.create({
      data: {
        type: proj.type,
        title: proj.title,
        summary: proj.summary,
        slug: slug,
        occurredAt: proj.occurredAt,
        aiAnalysis: proj.aiAnalysis,
        project: {
          create: proj.project,
        },
        modules: {
          create: proj.modules.map(moduleName => ({
            moduleName: moduleName as any,
          })),
        },
        textContent: {
          create: {
            content: `# ${proj.project.name}\n\n${proj.project.description}\n\n## 技术栈\n${proj.project.techStack}\n\n## 核心亮点\n${proj.project.highlights}\n\n## 详细说明\n${proj.aiAnalysis}`,
          },
        },
      },
    });
    console.log(`Created project: ${proj.title}`);
  }

  console.log('Import completed successfully!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });