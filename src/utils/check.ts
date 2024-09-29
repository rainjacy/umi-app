import fs from 'fs';
import path from 'path';

export function checkSelfContained(componentPath: string): boolean {
  // 检查路径是否在 components 目录下
  if (!componentPath.includes('components')) {
    return false;
  }

  // 获取组件文件夹名称
  const componentName = path.basename(componentPath);

  // 检查是否存在同名的 TSX 文件
  const tsxFile = path.join(componentPath, `${componentName}.tsx`);
  if (!fs.existsSync(tsxFile)) {
    return false;
  }

  // 读取 TSX 文件内容
  const tsxContent = fs.readFileSync(tsxFile, 'utf-8');

  // 提取所有 import 语句
  const importRegex = /import\s+.*\s+from\s+['"](.+)['"]/g;
  const imports = [...tsxContent.matchAll(importRegex)].map(
    (match) => match[1],
  );

  // 检查每个 import 是否符合自包含规则
  for (const importPath of imports) {
    // 忽略 node_modules 和绝对路径导入
    if (importPath.startsWith('.')) {
      const fullPath = path.resolve(componentPath, importPath);
      const relativePath = path.relative(componentPath, fullPath);

      // 检查相对路径是否在组件文件夹内
      if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
        return false;
      }
    }
  }

  return true;
}
