// 简单的内存存储用于开发
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'temp-data.json');

interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  githubUrl: string;
}

interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  techStack: string[];
  profileId: string;
}

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  period: string;
}

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  type: string;
}

interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  content?: string;
  date: string;
  tags: string[];
}

interface DataStore {
  profile: Profile & { experiences: Experience[] };
  projects: Project[];
  timeline: TimelineItem[];
  knowledge: KnowledgeArticle[];
}

const defaultData: DataStore = {
  profile: {
    id: '1',
    name: '何西元',
    title: '高级前端工程师',
    bio: '专注于 Web 前端开发，热爱技术创新与知识分享',
    location: '杭州',
    email: 'contact@hexiyuan.me',
    githubUrl: 'https://github.com/hexiyuanhecy',
    experiences: [],
  },
  projects: [],
  timeline: [],
  knowledge: [],
};

function loadData(): DataStore {
  if (existsSync(DATA_PATH)) {
    try {
      const data = readFileSync(DATA_PATH, 'utf-8');
      return JSON.parse(data);
    } catch {
      return JSON.parse(JSON.stringify(defaultData));
    }
  }
  return JSON.parse(JSON.stringify(defaultData));
}

function saveData(data: DataStore) {
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

let store = loadData();

export {
  loadData,
  saveData,
  store,
  defaultData,
  type Profile,
  type Experience,
  type Project,
  type TimelineItem,
  type KnowledgeArticle,
  type DataStore,
};
