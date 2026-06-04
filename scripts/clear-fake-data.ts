#!/usr/bin/env node

const fakeTitles = [
  '周末阅读时光',
  '杭州西湖醋鱼',
  '云南大理之旅',
  'Next.js 14 新特性详解',
  'React Hooks 完全指南',
  '电商前端架构升级',
  '企业级低代码平台',
  '前端开发工程师',
  '高级前端工程师',
];

async function clearFakeData() {
  try {
    console.log('🔍 获取所有条目...');
    const response = await fetch('http://localhost:3000/api/entries');
    const entries = await response.json();

    console.log(`📊 当前数据库中有 ${entries.length} 条记录`);

    const fakeEntries = entries.filter((entry: any) => 
      fakeTitles.includes(entry.title)
    );

    console.log(`🗑️  将删除 ${fakeEntries.length} 条虚构数据:`);
    fakeEntries.forEach((entry: any) => {
      console.log(`   - ${entry.title}`);
    });

    let deleted = 0;
    let failed = 0;

    for (const entry of fakeEntries) {
      try {
        const res = await fetch(`http://localhost:3000/api/entries/${entry.id}`, {
          method: 'DELETE',
        });
        
        if (res.ok) {
          deleted++;
          console.log(`✅ 删除成功: ${entry.title}`);
        } else {
          failed++;
          console.log(`❌ 删除失败: ${entry.title}`);
        }
      } catch (error) {
        failed++;
        console.log(`❌ 删除失败: ${entry.title} - ${error}`);
      }
    }

    console.log('\n📝 清理完成!');
    console.log(`   - 删除成功: ${deleted} 条`);
    console.log(`   - 删除失败: ${failed} 条`);

    const finalResponse = await fetch('http://localhost:3000/api/entries');
    const finalEntries = await finalResponse.json();
    console.log(`   - 剩余记录: ${finalEntries.length} 条`);

  } catch (error: any) {
    console.error('❌ 清理失败:', error.message);
    console.error('\n请确保开发服务器正在运行 (pnpm dev)');
    process.exit(1);
  }
}

clearFakeData();
