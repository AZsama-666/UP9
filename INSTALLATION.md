# UP9 网站安装指南

## 系统要求

- **Node.js**: 18.17 或更高版本
- **npm**: 9.0 或更高版本（或 yarn/pnpm）
- **操作系统**: Windows、macOS 或 Linux

## 安装步骤

### 1. 克隆或下载项目

如果项目在 Git 仓库中：
```bash
git clone <repository-url>
cd UP9
```

### 2. 安装依赖

```bash
npm install
```

这将安装所有必需的依赖包，包括：
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React（图标库）

### 3. 启动开发服务器

```bash
npm run dev
```

成功启动后，你将看到：
```
✓ Ready in 2.3s
○ Local:   http://localhost:3000
```

### 4. 访问网站

在浏览器中打开 [http://localhost:3000](http://localhost:3000)

你应该能看到 UP9 的主页！

## 可用的脚本命令

### 开发模式
```bash
npm run dev
```
启动开发服务器，支持热重载。

### 生产构建
```bash
npm run build
```
构建优化的生产版本。

### 启动生产服务器
```bash
npm start
```
运行生产构建版本（需要先执行 `npm run build`）。

### 代码检查
```bash
npm run lint
```
运行 ESLint 检查代码质量。

## 目录结构预览

安装完成后，你的项目结构应该是这样的：

```
UP9/
├── node_modules/          # 依赖包（自动生成）
├── .next/                 # Next.js 构建输出（自动生成）
├── app/                   # 应用页面
├── components/            # React 组件
├── lib/                   # 工具函数
├── public/                # 静态资源
├── package.json           # 项目配置
├── tsconfig.json          # TypeScript 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── next.config.js         # Next.js 配置
└── README.md              # 项目说明
```

## 常见问题

### 安装依赖时出错

**问题**: `npm install` 失败

**解决方案**:
```bash
# 清除 npm 缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 端口被占用

**问题**: 端口 3000 已被使用

**解决方案**: 使用不同的端口
```bash
PORT=3001 npm run dev
```

### TypeScript 错误

**问题**: 类型检查报错

**解决方案**:
```bash
# 删除 .next 文件夹
rm -rf .next

# 重新启动开发服务器
npm run dev
```

### 样式不显示

**问题**: Tailwind CSS 样式未生效

**解决方案**:
1. 确认 `tailwind.config.js` 的 content 路径正确
2. 重启开发服务器
3. 清除浏览器缓存

## Windows 用户特别说明

### 使用 PowerShell

在 Windows PowerShell 中，某些命令可能需要调整：

```powershell
# 删除文件夹
Remove-Item -Recurse -Force node_modules, .next

# 设置端口
$env:PORT=3001; npm run dev
```

### 使用 Git Bash

推荐 Windows 用户使用 Git Bash，可以直接使用 Unix 风格的命令。

## 下一步

安装成功后，你可以：

1. **查看所有页面**: 浏览 `/about`、`/method`、`/outcomes` 等页面
2. **修改内容**: 编辑 `app/` 目录下的页面文件
3. **自定义样式**: 修改 `tailwind.config.js` 中的主题配置
4. **添加功能**: 在 `components/` 中创建新组件

详细的开发指南请查看 `DEVELOPMENT.md`。

## 获取帮助

如果遇到问题：

1. 查看 `DEVELOPMENT.md` 中的常见问题部分
2. 检查 Next.js 官方文档：https://nextjs.org/docs
3. 联系开发团队：dev@up9.community

## 更新日志

### v1.0.0 (2025-10-20)
- ✅ 初始版本发布
- ✅ 实现所有核心页面
- ✅ 响应式设计
- ✅ 基础组件库
- ✅ 语言切换准备

---

祝你开发愉快！🚀

