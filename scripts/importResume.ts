import { PrismaClient } from '/Users/xigua/projects/hexiyuan-me/src/generated/prisma';

const prisma = new PrismaClient();

const resumeContent = `
## 基本信息
姓名：何茜媛
岗位：前端开发工程师
联系方式：18177310581｜hexiyuan123@foxmail.com
求职方向：B端前端开发、前端工程化、性能优化、线上稳定性治理
工作年限：6年（2019.07-2025.05）

## 工作经历

### 2025.05 - 至今｜自由前端开发者
承接前端外包项目，参与AI视频合成工具前端开发，负责视频上传、素材处理、AI合成、结果渲染全流程功能实现，持续跟进前端技术迭代，保持技术手感，无技术断层。

### 2022.04 - 2025.05｜字节跳动-飞书 前端开发工程师（3年）
负责飞书汇报、假勤两大核心业务线前端开发、架构迭代、多端适配与专项技术治理，服务千万级用户与企业租户。先后对接汇报业务、假勤休假/加班/统计/打卡等子模块，覆盖小程序、Web、H5、管理端多端开发；同时承担团队工程化建设、线上稳定性治理、用户体验优化专项负责人工作，保障业务平稳迭代与线上稳定。

### 2021.04 - 2022.04｜滴滴出行-橙心优选 前端开发工程师（1年）
担任订单领域前端Owner，负责橙心优选C端商城小程序、A端橙掌柜小程序、PC采购商城多端开发与重构优化，聚焦电商交易链路稳定性、性能优化与研发效率提升，适配大厂高压迭代节奏，保障核心交易链路稳定交付。

### 2019.07 - 2021.04｜叙简科技 前端开发工程师（1.5年）
担任应急指挥系统前端负责人，承接6+应急类子项目定制化开发，主导自研GIS核心模块重构优化，落地业务闭环能力与配置化方案，负责项目全流程交付、客户对接，助力项目顺利验收。

## 核心项目与专项

### 汇报业务线工作
参与飞书汇报2.0版本重构迭代，完成小程序转Web端升级改造。核心落地：
- 搭建汇报运营平台，实现公共通告管理全流程
- 完成富文本能力拓展（工具栏自定义、划词评论、OKR插入等）
- 接入Feelgood问卷体系，适配双端兼容性
- 参与性能专项优化，IOS端核心页面TTI提升43%，包体积缩减1.1MB

### 假勤业务线工作
负责休假、加班、统计、打卡等核心模块，覆盖标准版与企业版双系统。核心落地：
- 独立完成字节12W+员工年度假期结算一二期需求
- 承接全球化Mobility跨境派遣假勤需求
- 落地新员工延迟发假、假期额度补发等特色场景需求
- 完成老People系统迁移、双端跳转适配

### 双系统融合与控件组重构
- 完成休假、加班控件组从原生小程序到Web、H5全量迁移重构
- 抽象15+多端通用校验逻辑，实现多端复用
- 主导BPM加班控件组开发与H5迁移
- 搭建通用打印工程模板，后续业务接入人力成本减少80%

### 前端工程化建设
- 担任假勤业务线火车迭代司机，统筹9批次控件组灰度发布
- 优化前端火车流水线，新增灰度看板、包体积检测、自动化测试
- 接入代码覆盖率、包体积监控工具，持续优化工程质量

### JSError专项治理
- 制定团队JS错误巡检规范、整改时效、责任人机制
- 基于Slardar搭建错误监控看板与报警体系
- 完成休假员工端、管理端、打卡模块全量错误治理，整体JS错误量下降80%

### NPS用户体验治理
- 搭建三级问题打标体系，统一团队标准
- 建立周度反馈巡检、月度复盘机制
- 识别10大用户核心痛点，落地5项重点优化方案
- 系统整体满意度从87%提升至93%

### 全链路性能优化
- 网络层：接口合并、预请求、本地缓存、DNS预解析
- 构建层：路由分包、懒加载、preload/prefetch
- 工程层：剔除冗余依赖、CDN部署、清理无效代码
- 渲染层：虚拟列表懒加载，页面初始化性能提升70%

## 技术栈
React、Next.js、TypeScript、Vue、Node.js、Tailwind CSS、Webpack、Taro、小程序、H5

## 个人评价
1. 交付能力稳定：多年大厂高压迭代经验，需求交付零延期、零重大线上事故
2. 主动技术建设：主动承接稳定性、性能、工程化专项，擅长从0到1搭建标准化治理体系
3. 业务理解深刻：擅长站在用户、业务、团队效率视角发现问题、落地优化
4. 抗压与学习能力强：可快速适配多业务线、多端、复杂系统迭代
`;

async function main() {
  try {
    console.log('开始导入简历数据...');

    await prisma.entry.deleteMany({});

    const entries = [
      {
        type: 'work_experience',
        title: '自由前端开发者',
        summary: '承接前端外包项目，参与AI视频合成工具前端开发',
        status: 'published' as const,
        occurredAt: new Date('2025-05-01'),
        detailed_markdown: `## 自由前端开发者\n\n**时间**：2025.05 - 至今\n\n**职责**：承接前端外包项目，参与AI视频合成工具前端开发，负责视频上传、素材处理、AI合成、结果渲染全流程功能实现，持续跟进前端技术迭代，保持技术手感，无技术断层。`,
        suggested_modules: ['resume', 'timeline'],
      },
      {
        type: 'work_experience',
        title: '字节跳动-飞书 前端开发工程师',
        summary: '负责飞书汇报、假勤两大核心业务线前端开发与专项治理',
        status: 'published' as const,
        occurredAt: new Date('2022-04-01'),
        detailed_markdown: `## 字节跳动-飞书 前端开发工程师\n\n**时间**：2022.04 - 2025.05（3年）\n\n**职责**：负责飞书汇报、假勤两大核心业务线前端开发、架构迭代、多端适配与专项技术治理，服务千万级用户与企业租户。先后对接汇报业务、假勤休假/加班/统计/打卡等子模块，覆盖小程序、Web、H5、管理端多端开发；同时承担团队工程化建设、线上稳定性治理、用户体验优化专项负责人工作，保障业务平稳迭代与线上稳定。`,
        suggested_modules: ['resume', 'timeline'],
      },
      {
        type: 'work_experience',
        title: '滴滴出行-橙心优选 前端开发工程师',
        summary: '担任订单领域前端Owner，负责多端开发与重构优化',
        status: 'published' as const,
        occurredAt: new Date('2021-04-01'),
        detailed_markdown: `## 滴滴出行-橙心优选 前端开发工程师\n\n**时间**：2021.04 - 2022.04（1年）\n\n**职责**：担任订单领域前端Owner，负责橙心优选C端商城小程序、A端橙掌柜小程序、PC采购商城多端开发与重构优化，聚焦电商交易链路稳定性、性能优化与研发效率提升，适配大厂高压迭代节奏，保障核心交易链路稳定交付。`,
        suggested_modules: ['resume', 'timeline'],
      },
      {
        type: 'work_experience',
        title: '叙简科技 前端开发工程师',
        summary: '担任应急指挥系统前端负责人，主导GIS模块重构',
        status: 'published' as const,
        occurredAt: new Date('2019-07-01'),
        detailed_markdown: `## 叙简科技 前端开发工程师\n\n**时间**：2019.07 - 2021.04（1.5年）\n\n**职责**：担任应急指挥系统前端负责人，承接6+应急类子项目定制化开发，主导自研GIS核心模块重构优化，落地业务闭环能力与配置化方案，负责项目全流程交付、客户对接，助力项目顺利验收。`,
        suggested_modules: ['resume', 'timeline'],
      },
      {
        type: 'project',
        title: '飞书汇报2.0重构',
        summary: '参与飞书汇报2.0版本重构，完成小程序转Web端升级',
        status: 'published' as const,
        occurredAt: new Date('2022-06-01'),
        detailed_markdown: `## 飞书汇报2.0重构\n\n**项目背景**：飞书汇报2.0版本重构迭代\n\n**核心落地内容**：\n\n- 搭建汇报运营平台，实现公共通告新建、编辑、管理全流程能力\n- 完成富文本能力拓展，实现工具栏自定义、划词评论、OKR插入、代办任务等Web端能力\n- 接入Feelgood问卷体系，适配双端兼容性\n- 参与性能专项优化，IOS端核心页面TTI提升43%，包体积缩减1.1MB，Web端热启动TTI优化至1s内`,
        techStack: ['React', 'TypeScript', 'Taro', '小程序'],
        suggested_modules: ['projects', 'timeline'],
      },
      {
        type: 'project',
        title: '假勤双系统融合',
        summary: '负责假勤标准版与企业版双系统融合与控件组重构',
        status: 'published' as const,
        occurredAt: new Date('2023-01-01'),
        detailed_markdown: `## 假勤双系统融合\n\n**项目背景**：飞书假勤标准版、企业版系统割裂，需要融合统一\n\n**核心落地内容**：\n\n- 完成休假、加班控件组从原生小程序到Web、H5全量迁移重构\n- 抽象15+多端通用校验逻辑（假期冲突、时长校验、余额校验、班次校验等）\n- 主导BPM加班控件组开发与H5迁移\n- 搭建通用打印工程模板，后续业务接入人力成本减少80%\n- 使用ProTable重构大数据量列表页面，页面初始化渲染性能提升70%`,
        techStack: ['React', 'TypeScript', 'ProTable', 'H5'],
        suggested_modules: ['projects', 'timeline'],
      },
      {
        type: 'project',
        title: 'JSError稳定性治理',
        summary: '牵头假勤全链路JS错误治理，搭建稳定性闭环体系',
        status: 'published' as const,
        occurredAt: new Date('2023-06-01'),
        detailed_markdown: `## JSError稳定性治理\n\n**专项目标**：降低线上JS错误，提升系统稳定性\n\n**核心落地内容**：\n\n- 制定团队JS错误巡检规范、整改时效、责任人机制\n- 基于Slardar搭建错误监控看板与报警体系\n- 每周收敛Top错误、新增劣化错误，分类整改\n- 完成休假员工端、管理端、打卡模块全量错误治理\n- 整体JS错误量下降80%，打卡模块错误基本清零`,
        techStack: ['Slardar', '监控体系'],
        suggested_modules: ['projects', 'timeline'],
      },
      {
        type: 'project',
        title: 'NPS用户体验治理',
        summary: '跨团队联动，全权负责假勤用户满意度治理',
        status: 'published' as const,
        occurredAt: new Date('2023-09-01'),
        detailed_markdown: `## NPS用户体验治理\n\n**专项目标**：提升假勤用户满意度\n\n**核心落地内容**：\n\n- 搭建三级问题打标体系，从属性、功能、具体问题多维度归类用户反馈\n- 建立周度反馈巡检、月度复盘机制\n- 识别10大用户核心痛点，落地5项重点优化方案\n- 搭建Bot用户触达机制，考勤配置转化率达60%\n- 系统整体满意度从87%提升至93%`,
        techStack: ['Feelgood', '数据看板'],
        suggested_modules: ['projects', 'timeline'],
      },
      {
        type: 'project',
        title: '橙心优选订单领域重构',
        summary: '负责橙心优选订单领域全链路开发与重构',
        status: 'published' as const,
        occurredAt: new Date('2021-06-01'),
        detailed_markdown: `## 橙心优选订单领域重构\n\n**项目背景**：业务扩张后代码冗余、性能卡顿、低端机体验差\n\n**核心落地内容**：\n\n- 重构C端商城小程序订单模块，核心页面TTI从1909ms降至855ms\n- 主导A端橙掌柜订单模块BFF楼层化重构，实现前后端完全解耦\n- 分包体积从1680kb缩减至860kb\n- 团队订单领域研发人效提升50%以上`,
        techStack: ['React', 'Taro', 'BFF'],
        suggested_modules: ['projects', 'timeline'],
      },
      {
        type: 'project',
        title: '应急指挥系统GIS模块重构',
        summary: '基于React+PostMessage重构自研GIS地图模块',
        status: 'published' as const,
        occurredAt: new Date('2020-01-01'),
        detailed_markdown: `## 应急指挥系统GIS模块重构\n\n**项目背景**：原生JS开发二次开发效率低、兼容性差\n\n**核心落地内容**：\n\n- 基于React+PostMessage重构自研GIS地图模块\n- 解决二次开发效率低、兼容性差的历史痛点\n- 全覆盖6+应急项目\n- 落地静态数据可配置方案，减少前端频繁打包发版成本\n- Webpack优化项目打包体积，整体体积优化50%`,
        techStack: ['React', 'PostMessage', 'GIS'],
        suggested_modules: ['projects', 'timeline'],
      },
      {
        type: 'knowledge_link',
        title: '全链路性能优化实践',
        summary: '基于Perfee、Slardar的前端性能优化体系',
        status: 'published' as const,
        detailed_markdown: `## 全链路性能优化实践\n\n**优化策略**：\n\n### 网络层\n- 接口合并、接口预请求、本地缓存\n- DNS预解析、preconnect预连接\n\n### 构建层\n- 路由分包、webpackChunkName自定义懒加载\n- preload核心资源预加载、prefetch预取页面资源\n\n### 工程层\n- 剔除冗余依赖、升级轻量化SDK\n- 静态资源CDN部署\n- 清理无效代码与未使用文案\n\n### 渲染层\n- 大数据量列表采用ProTable虚拟列表懒加载\n- 优化骨架屏、加载状态\n\n### 体验层\n- 优化页面跳转逻辑，减少重定向损耗`,
        techStack: ['Perfee', 'Slardar', 'Webpack'],
        suggested_modules: ['knowledge', 'timeline'],
      },
      {
        type: 'knowledge_link',
        title: '前端工程化建设',
        summary: '假勤前端火车流水线与自动化发布流程',
        status: 'published' as const,
        detailed_markdown: `## 前端工程化建设\n\n**建设内容**：\n\n- 担任假勤业务线火车迭代司机，统筹9批次控件组灰度发布\n- 优化前端火车流水线，对齐字节LBA管控规范\n- 新增灰度看板、包体积检测、自动化测试、上线风险检测卡点\n- 将BPM、审批控件组仓库统一接入自动化发布流程\n- 输出控件组开发、接入、灰度全流程规范\n- 接入代码覆盖率、包体积监控工具`,
        techStack: ['CI/CD', '灰度发布', '监控体系'],
        suggested_modules: ['knowledge', 'timeline'],
      },
    ];

    for (const entry of entries) {
      const slug = entry.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') + '-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
      
      await prisma.entry.create({
        data: {
          type: entry.type,
          title: entry.title,
          summary: entry.summary,
          status: entry.status,
          occurredAt: entry.occurredAt,
          aiAnalysis: entry.detailed_markdown,
          slug: slug,
          textContent: {
            create: {
              content: entry.detailed_markdown,
              format: 'markdown',
            },
          },
          modules: {
            create: entry.suggested_modules.map(moduleName => ({
              moduleName: moduleName as any,
            })),
          },
        },
      });
    }

    console.log('简历数据导入成功！');
    process.exit(0);
  } catch (error) {
    console.error('导入失败:', error);
    process.exit(1);
  }
}

main();
