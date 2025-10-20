# UP9 网站开发指南

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 运行开发服务器

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
UP9/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局（包含导航和页脚）
│   ├── page.tsx           # 主页
│   ├── about/             # 关于页面
│   ├── method/            # 方法论页面
│   ├── outcomes/          # 成果案例页面
│   ├── events/            # 活动页面
│   ├── resources/         # 资源页面
│   ├── partners/          # 合作伙伴页面
│   │   └── apply/        # 合作伙伴申请页面
│   ├── apply/             # 申请加入页面
│   ├── legal/             # FAQ 和法律声明页面
│   └── contact/           # 联系页面
├── components/            # 可复用组件
│   ├── Navigation.tsx    # 导航栏（响应式）
│   ├── Footer.tsx        # 页脚
│   ├── Button.tsx        # 按钮组件
│   ├── Card.tsx          # 卡片组件
│   ├── Section.tsx       # 页面区块组件
│   └── LanguageSwitcher.tsx  # 语言切换组件
├── lib/                   # 工具函数和常量
│   └── constants.ts      # 站点配置和常量
├── public/                # 静态资源
│   └── robots.txt        # SEO 配置
└── styles/
    └── globals.css       # 全局样式

```

## 核心功能

### 页面路由

根据文档 `UP9_Site_Structure_CN.md` 实现的页面：

- `/` - 主页（包含所有核心分区）
- `/about` - 关于 UP9
- `/method` - 方法论（Insight / Build / Capital）
- `/outcomes` - 成果案例展示
- `/events` - 活动与路演
- `/resources` - 资源与模板
- `/partners` - 伙伴合作
- `/partners/apply` - 合作伙伴申请表
- `/apply` - 申请加入表单
- `/legal` - FAQ 与法律声明
- `/contact` - 联系我们

### 主页分区（带锚点）

主页 `/` 包含以下分区，可通过锚点直接访问：

- `#hero` - Hero 区（标题、CTA、社交媒体）
- `#what-we-do` - 我们做什么（三大支柱）
- `#deliverables` - 可交付物（模板展示）
- `#outcomes` - 成果案例
- `#events` - 活动与路演
- `#join` - 加入方式（三步流程）
- `#partners` - 伙伴合作
- `#legal` - FAQ 简版

### 导航系统

#### 桌面导航
- 水平导航栏：About | Method | Outcomes | Events | Resources | Partners | Legal
- 右侧：语言切换 + 主按钮「申请加入」

#### 移动导航
- 吸顶设计
- 左侧：Logo
- 右侧：「申请加入」按钮 + 汉堡菜单
- 点击汉堡菜单展开全部链接

### 组件使用

#### Button 组件

```tsx
import Button from '@/components/Button'

// 链接按钮
<Button href="/apply" variant="primary">申请加入</Button>

// 普通按钮
<Button onClick={handleClick} variant="secondary">点击</Button>

// 变体：primary | secondary | link
// 大小：sm | md | lg
```

#### Card 组件

```tsx
import Card from '@/components/Card'

<Card
  title="标题"
  subtitle="副标题"
  description="描述文字"
  tags={['标签1', '标签2']}
  href="/link"  // 可选，添加后变为可点击
  icon={<Icon />}  // 可选
/>
```

#### Section 组件

```tsx
import Section from '@/components/Section'

<Section
  id="section-id"
  title="区块标题"
  description="描述"
  background="white"  // white | gray
>
  {/* 内容 */}
</Section>
```

## 样式系统

### Tailwind CSS

项目使用 Tailwind CSS 进行样式管理。

#### 主题色

```js
// tailwind.config.js
colors: {
  primary: {
    50: '#f0f9ff',
    // ... 到 900
    600: '#0284c7',  // 主色调
  }
}
```

#### 常用类名

```css
/* 容器 */
.max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

/* 渐变背景 */
.bg-gradient-to-br from-primary-600 to-primary-800

/* 悬停效果 */
.hover:shadow-xl transition-shadow

/* 响应式网格 */
.grid md:grid-cols-2 lg:grid-cols-3 gap-8
```

### 响应式断点

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 待实现功能

### 1. 国际化（i18n）

当前语言切换组件已准备就绪，但需要集成完整的国际化方案：

```bash
npm install next-i18next
```

参考 Next.js i18n 文档进行配置。

### 2. 表单后端

目前所有表单（申请加入、合作伙伴申请、联系表单）都是前端实现。需要：

- 设置 API 路由处理表单提交
- 集成邮件服务（如 SendGrid、Resend）
- 可选：集成 Airtable 或数据库存储申请

示例 API 路由：

```tsx
// app/api/apply/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  // 处理表单数据
  // 发送邮件通知
  return NextResponse.json({ success: true })
}
```

### 3. SEO 优化

添加元数据到每个页面：

```tsx
// app/about/page.tsx
export const metadata = {
  title: '关于 UP9 | Web3 建设者社群',
  description: '了解 UP9 的使命、价值观和团队',
}
```

### 4. 分析与追踪

集成 Google Analytics 或其他分析工具：

```bash
npm install @next/third-parties
```

### 5. 图片优化

使用 Next.js Image 组件优化图片加载：

```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
/>
```

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

### 其他平台

```bash
npm run build
```

构建输出在 `.next` 目录，可部署到任何支持 Node.js 的平台。

## 环境变量

复制 `.env.local.example` 到 `.env.local` 并填写值：

```env
NEXT_PUBLIC_SITE_URL=https://up9.community
NEXT_PUBLIC_CONTACT_EMAIL=contact@up9.community
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/up9community
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/up9community
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/up9
```

## 贡献指南

### 代码风格

- 使用 TypeScript
- 遵循 ESLint 规则
- 组件使用函数式写法
- 优先使用 Tailwind CSS

### Git 提交规范

```
feat: 添加新功能
fix: 修复 bug
docs: 文档更新
style: 样式调整
refactor: 代码重构
test: 测试相关
chore: 构建/工具相关
```

## 常见问题

### 开发服务器启动失败

```bash
# 清除缓存
rm -rf .next
npm run dev
```

### 样式不生效

检查 Tailwind 配置的 content 路径是否正确。

### 类型错误

```bash
# 重新生成类型
npm run build
```

## 联系

如有问题，请联系开发团队：
- Email: dev@up9.community
- Telegram: @up9dev

## 许可

© 2025 UP9. All rights reserved.

