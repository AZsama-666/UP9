# UP9 Website

<div align="center">

**Web3 研究、构建和资本对接的建设者社群**

[查看演示](http://localhost:3000) • [安装指南](INSTALLATION.md) • [开发文档](DEVELOPMENT.md)

</div>

---

## ✨ 项目简介

UP9 是一个现代化的 Web3 社群网站，为建设者提供从洞察到落地的全流程支持。网站采用 Next.js 14 构建，具有完整的响应式设计和优秀的用户体验。

### 核心功能

- 🎯 **完整的页面体系** - 10+ 页面覆盖所有功能
- 📱 **响应式设计** - 完美适配桌面和移动设备
- ⚡ **现代化技术栈** - Next.js 14 + TypeScript + Tailwind CSS
- 🎨 **精美 UI** - 专业的设计和交互体验
- 🌐 **国际化准备** - 语言切换功能已就绪
- ♿ **无障碍支持** - 遵循 WCAG 标准

## 🚀 快速开始

### 安装

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 在浏览器中打开 http://localhost:3000
```

详细的安装步骤请查看 [INSTALLATION.md](INSTALLATION.md)

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
UP9/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 主页（包含所有分区）
│   ├── about/             # 关于 UP9
│   ├── method/            # 方法论（Insight/Build/Capital）
│   ├── outcomes/          # 成果案例
│   ├── events/            # 活动与路演
│   ├── resources/         # 资源与模板
│   ├── partners/          # 伙伴合作
│   ├── apply/             # 申请加入
│   ├── legal/             # FAQ 与法律
│   └── contact/           # 联系我们
├── components/            # 可复用组件
│   ├── Navigation.tsx    # 响应式导航栏
│   ├── Footer.tsx        # 页脚
│   ├── Button.tsx        # 按钮组件
│   ├── Card.tsx          # 卡片组件
│   ├── Section.tsx       # 区块组件
│   └── LanguageSwitcher.tsx  # 语言切换
├── lib/                   # 工具函数和常量
└── public/                # 静态资源
```

## 🎯 页面路由

| 路由 | 说明 | 主要功能 |
|------|------|----------|
| `/` | 主页 | Hero、方法论介绍、案例展示、活动预告 |
| `/about` | 关于 | 使命、价值观、团队介绍 |
| `/method` | 方法论 | Insight/Build/Capital 详细说明 |
| `/outcomes` | 成果案例 | 项目案例展示与筛选 |
| `/events` | 活动路演 | 即将举行的活动和往期回顾 |
| `/resources` | 资源模板 | 专业模板和知识库预览 |
| `/partners` | 伙伴合作 | 合作类型、条件、案例 |
| `/partners/apply` | 合作申请 | 合作伙伴申请表单 |
| `/apply` | 申请加入 | 成员申请表单 |
| `/legal` | FAQ/法律 | 常见问题、隐私政策、使用条款 |
| `/contact` | 联系我们 | 联系方式和留言表单 |

## 🛠️ 技术栈

- **框架**: [Next.js 14](https://nextjs.org/) (App Router)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **图标**: [Lucide React](https://lucide.dev/)
- **部署**: [Vercel](https://vercel.com/)（推荐）

## 📖 文档

- [📥 安装指南](INSTALLATION.md) - 详细的安装步骤和常见问题
- [🔧 开发文档](DEVELOPMENT.md) - 组件使用、API 集成、部署指南
- [📋 结构说明](UP9_Site_Structure_CN.md) - 网站结构和跳转关系

## 🎨 设计特点

### 响应式导航
- **桌面**: 水平导航栏 + 语言切换 + 主按钮
- **移动**: 吸顶设计 + 汉堡菜单

### 主页分区（带锚点）
- `#hero` - 英雄区
- `#what-we-do` - 三大支柱
- `#deliverables` - 可交付物
- `#outcomes` - 成果案例
- `#events` - 活动预告
- `#join` - 加入流程
- `#partners` - 合作伙伴
- `#legal` - FAQ

### 组件库
- **Button** - 多种样式和大小
- **Card** - 灵活的卡片布局
- **Section** - 统一的区块容器
- **Navigation** - 完整的响应式导航
- **Footer** - 信息丰富的页脚

## 🔜 待实现功能

- [ ] 完整的国际化（i18n）
- [ ] 表单后端 API
- [ ] 邮件发送集成
- [ ] SEO 优化
- [ ] Google Analytics
- [ ] 图片优化

详见 [DEVELOPMENT.md](DEVELOPMENT.md)

## 📦 部署

### Vercel（推荐）

1. 推送代码到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成 ✅

### 其他平台

```bash
npm run build
# 将 .next 目录部署到任何支持 Node.js 的平台
```

## 🤝 贡献

欢迎贡献代码！请查看 [DEVELOPMENT.md](DEVELOPMENT.md) 了解代码规范和贡献指南。

## 📄 许可

© 2025 UP9. All rights reserved.

## 📞 联系

- **邮箱**: contact@up9.community
- **Telegram**: [@up9community](https://t.me/up9community)
- **Twitter**: [@up9community](https://twitter.com/up9community)
- **Discord**: [discord.gg/up9](https://discord.gg/up9)

---

<div align="center">

**用 ❤️ 为 Web3 建设者打造**

[网站](https://up9.community) • [Twitter](https://twitter.com/up9community) • [Telegram](https://t.me/up9community)

</div>

