#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

interface SeedItem {
  type: string;
  title: string;
  eventDate?: string;
  modules?: string[];
  fields: {
    company?: string;
    role?: string;
    start_date?: string;
    end_date?: string;
    description?: string;
    tech_stack?: string[];
    name?: string;
    url?: string;
    category?: string;
    tags?: string[];
    highlights?: string[];
    link?: string;
  };
}

async function batchImport(seedFile: string, clearExisting: boolean = false) {
  try {
    const filePath = path.resolve(seedFile);
    
    if (!fs.existsSync(filePath)) {
      console.error(`❌ 文件不存在: ${filePath}`);
      process.exit(1);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const items: SeedItem[] = JSON.parse(fileContent);

    console.log(`📦 准备导入 ${items.length} 条数据...`);
    
    if (clearExisting) {
      console.log('⚠️  将清空现有数据...');
    }

    const response = await fetch('http://localhost:3000/api/import/batch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items, clearExisting }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    console.log('\n✅ 导入完成!');
    console.log(`   - 工作经历: ${result.results.created.experiences.length} 条`);
    console.log(`   - 项目: ${result.results.created.projects.length} 条`);
    console.log(`   - 知识库: ${result.results.created.knowledge.length} 条`);
    console.log(`   - 其他: ${result.results.created.other.length} 条`);

    if (result.results.failed > 0) {
      console.log(`\n⚠️  失败 ${result.results.failed} 条:`);
      result.results.errors.forEach((err: string) => console.log(`   - ${err}`));
    }

    console.log('\n🎉 数据导入成功!');
    console.log('   访问 http://localhost:3000 查看效果');

  } catch (error: any) {
    console.error('❌ 导入失败:', error.message);
    console.error('\n请确保:');
    console.error('1. 开发服务器正在运行 (pnpm dev)');
    console.error('2. 数据库已初始化 (pnpm db:push)');
    process.exit(1);
  }
}

const args = process.argv.slice(2);
const seedFile = args[0] || './seed.json';
const clearExisting = args.includes('--clear');

batchImport(seedFile, clearExisting);
