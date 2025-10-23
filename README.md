# UP9 - Web3 Builder Community

![UP9 Logo](UP9_logo_transparent_2048.png)

**Official Website**: [up9.one](https://up9.one)

---

## 🚨 重要开发规则 | Important Development Rules

### **分支工作流规则 | Branch Workflow Rules**

> **⚠️ 核心规则：在当前分支开发，除非明确指示切换分支**

```bash
# 规则说明
# 1. 开发工作在当前所在分支进行
# 2. 不主动切换分支，除非收到明确的切换指令
# 3. 每次开始任务前确认当前分支
# 4. 提交前再次确认分支正确性
```

#### 检查当前分支
```bash
git branch  # 查看当前分支（带*号的是当前分支）
git status  # 查看详细状态
```

#### 分支切换（仅在明确指示时）
```bash
# 仅在收到明确指令时执行
git checkout [branch-name]
# 或
git switch [branch-name]
```

---

## 📁 项目结构

```
UP9/
├── index.html                          # 主页（统一入口）
├── CNAME                               # 域名配置（up9.one）
├── UP9_logo_transparent_2048.png       # Logo资源
└── README.md                           # 项目文档
```

---

## 🌿 分支说明

| 分支 | 用途 | 状态 |
|------|------|------|
| `gh-pages` | 生产环境（GitHub Pages部署） | 🟢 活跃 |
| `UP9V5.0` | V5.0版本分支 | 🟢 稳定 |
| `demo4.0` | 开发主线 | 🟢 活跃 |
| `demo3.0` | V3.0版本存档 | 🔵 存档 |
| `main` | 主分支 | 🔵 存档 |

---

## 🚀 快速开始

### 本地开发
```bash
# 克隆仓库
git clone https://github.com/AZsama-666/UP9.git
cd UP9

# 查看当前分支
git branch

# 本地预览（使用任意HTTP服务器）
python -m http.server 8000
# 或
npx serve
```

访问 `http://localhost:8000`

### 部署
本项目通过 GitHub Pages 自动部署：
- **触发**: 推送到 `gh-pages` 分支
- **访问**: https://up9.one
- **DNS**: CNAME配置指向自定义域名

---

## 🛠️ 开发工作流

### 标准工作流程

```bash
# 1. 确认当前分支
git branch
# 输出示例: * gh-pages

# 2. 在当前分支进行开发
# 编辑 index.html 或其他文件

# 3. 查看修改
git status
git diff

# 4. 提交更改
git add .
git commit -m "描述你的更改"

# 5. 推送到远程（当前分支）
git push origin gh-pages  # 示例：如果在gh-pages分支
```

### ⚠️ 禁止操作（除非明确指示）
```bash
# ❌ 不要随意切换分支
git checkout other-branch

# ❌ 不要创建新分支（除非明确需要）
git checkout -b new-branch

# ❌ 不要合并分支（除非明确指示）
git merge other-branch
```

---

## 📝 版本历史

### V5.0 (Current) - 2024-10-23
- ✅ 统一为单一 `index.html` 文件
- ✅ 删除冗余文件（index-web3.html, vercel.json）
- ✅ 优化社交媒体中心（6个平台）
- ✅ 修复页脚图标title显示
- ✅ 清理未使用的翻译键
- 📦 代码减少 2,536 行

### V4.0
- 社交媒体重构
- JOIN US导航优化
- 响应式布局改进

### V3.0
- 移动端优化
- 会员体系完善

---

## 🎨 功能特性

- **响应式设计**: 适配桌面、平板、移动端
- **多语言支持**: 英文、简体中文、繁体中文
- **社交媒体集成**: 6个社交平台（TG频道、TG社群、Twitter、Discord、YouTube、TikTok）
- **平滑滚动**: 锚点导航体验优化
- **会员体系**: Maker、Partner、Host三类角色

---

## 🔗 社交媒体

| 平台 | 链接 | 说明 |
|------|------|------|
| 🔔 Telegram Channel | [UP9_Global](https://t.me/UP9_Global) | 官方公告 |
| 💬 Telegram Community | [UP9_Official](https://t.me/UP9_Official) | 社区讨论 |
| 🐦 X (Twitter) | [@UP9_Global](https://x.com/UP9_Global) | 快讯更新 |
| 💜 Discord | [discord.gg/up9](https://discord.gg/up9) | 社区服务器 |
| 📺 YouTube | Coming Soon | 视频内容 |
| 🎵 TikTok | Coming Soon | 短视频 |

---

## 🧰 技术栈

- **前端**: HTML5, CSS3, Vanilla JavaScript
- **部署**: GitHub Pages
- **域名**: up9.one (CNAME配置)
- **图标**: Font Awesome
- **字体**: Orbitron (Google Fonts)

---

## 📧 联系方式

- **邮箱**: contact@up9.community
- **Telegram**: [@UP9_Official](https://t.me/UP9_Official)
- **工作时间**: 工作日 9:00-18:00 UTC+8

---

## 📜 许可证

本项目代码仅供 UP9 社区使用。

---

## 🤝 贡献指南

### 提交规范

```bash
# 格式: <type>: <subject>

# Type类型:
# feat:     新功能
# fix:      修复bug
# style:    样式调整
# refactor: 代码重构
# docs:     文档更新
# cleanup:  代码清理
# deploy:   部署相关

# 示例:
git commit -m "feat: 添加YouTube社交媒体链接"
git commit -m "fix: 修复移动端导航菜单问题"
git commit -m "style: 优化社区卡片布局"
```

### 开发流程提醒

1. ✅ **确认分支**: 始终在正确的分支工作
2. ✅ **小步提交**: 频繁提交，每次改动清晰
3. ✅ **描述清晰**: 提交信息简洁明了
4. ✅ **测试验证**: 本地测试后再推送
5. ✅ **清除缓存**: 部署后强制刷新验证

---

## 🔍 故障排查

### 网站显示旧内容
```bash
# 解决方案:
1. 强制刷新: Ctrl + Shift + R (Win) / Cmd + Shift + R (Mac)
2. 清除缓存: Ctrl + Shift + Delete
3. 隐私模式: 测试是否缓存问题
4. 等待CDN: GitHub Pages CDN更新需5-10分钟
```

### JOIN US按钮不工作
```bash
# 检查步骤:
1. F12 打开开发者工具
2. Elements标签搜索 "nav-cta"
3. 确认 href="#community"
4. Console标签查看错误
5. 测试: document.querySelector('#community').scrollIntoView({behavior:'smooth'})
```

---

## 📊 项目统计

- **代码行数**: ~2,747 行
- **文件数量**: 3 个核心文件
- **翻译键**: 82 x 3语言 = 246 个
- **社交平台**: 6 个
- **版本迭代**: V5.0

---

**最后更新**: 2024-10-23  
**维护者**: UP9 Team

---

## 🎯 记住：在当前分支工作！

```
     当前分支 ──> 开发 ──> 提交 ──> 推送
         ↑                              │
         └──────────────────────────────┘
         除非明确指示，否则不切换分支
```

