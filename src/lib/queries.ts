import { prisma } from './db'

export async function getProfile() {
  return {
    name: '何西元',
    title: '高级前端工程师',
    bio: '专注于 Web 前端开发，热爱技术创新与知识分享',
    location: '杭州',
    email: 'contact@hexiyuan.me',
    githubUrl: 'https://github.com/hexiyuan',
  }
}

export async function getProjects() {
  return await prisma.entry.findMany({
    where: {
      type: 'project',
      status: 'published',
    },
    include: {
      project: true,
    },
    orderBy: { occurredAt: 'desc' },
  })
}

export async function getProjectById(id: string) {
  return await prisma.entry.findUnique({
    where: { id },
    include: {
      project: true,
      textContent: true,
    },
  })
}

export async function getKnowledge() {
  return await prisma.entry.findMany({
    where: {
      type: 'knowledge_link',
      status: 'published',
    },
    include: {
      knowledge: true,
    },
    orderBy: { createdAt: 'desc' },
  })
}

export async function getKnowledgeById(id: string) {
  return await prisma.entry.findUnique({
    where: { id },
    include: {
      knowledge: true,
      textContent: true,
    },
  })
}

export async function getResume() {
  const workExperiences = await prisma.entry.findMany({
    where: {
      type: 'work_experience',
      status: 'published',
    },
    include: {
      workExp: true,
      children: {
        where: {
          type: 'project',
          status: 'published',
        },
        include: {
          project: true,
        },
        orderBy: { occurredAt: 'desc' },
      },
    },
    orderBy: {
      workExp: {
        startDate: 'desc',
      },
    },
  })

  return { workExperiences }
}

export async function getExperienceById(id: string) {
  return await prisma.entry.findUnique({
    where: { id },
    include: {
      workExp: true,
      textContent: true,
      children: {
        where: {
          type: 'project',
          status: 'published',
        },
        include: {
          project: true,
        },
        orderBy: { occurredAt: 'desc' },
      },
    },
  })
}

export async function getTimeline() {
  return await prisma.entry.findMany({
    where: {
      status: 'published',
    },
    orderBy: { occurredAt: 'desc' },
  })
}

export async function getEntriesByModule(moduleName: string) {
  return await prisma.entry.findMany({
    where: {
      status: 'published',
      modules: {
        some: {
          moduleName: moduleName as any,
        },
      },
    },
    orderBy: { occurredAt: 'desc' },
  })
}

export async function getProjectsByModule() {
  return await prisma.entry.findMany({
    where: {
      status: 'published',
      type: 'project',
      modules: {
        some: {
          moduleName: 'projects',
        },
      },
    },
    include: {
      project: true,
    },
    orderBy: { occurredAt: 'desc' },
  })
}

export async function getResumeByModule() {
  return await prisma.entry.findMany({
    where: {
      status: 'published',
      modules: {
        some: {
          moduleName: 'resume',
        },
      },
    },
    include: {
      workExp: true,
      project: true,
    },
    orderBy: { occurredAt: 'desc' },
  })
}

export async function getKnowledgeByModule() {
  return await prisma.entry.findMany({
    where: {
      status: 'published',
      modules: {
        some: {
          moduleName: 'knowledge',
        },
      },
    },
    include: {
      knowledge: true,
    },
    orderBy: { createdAt: 'desc' },
  })
}

export async function getAllEntries() {
  return await prisma.entry.findMany({
    include: {
      workExp: true,
      project: true,
      knowledge: true,
      travel: true,
      lifestyle: true,
      modules: true,
    },
    orderBy: { createdAt: 'desc' },
  })
}

export async function deleteEntry(id: string) {
  return await prisma.entry.delete({
    where: { id },
  })
}

export async function updateEntry(id: string, data: any) {
  return await prisma.entry.update({
    where: { id },
    data,
  })
}