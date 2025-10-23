# 贡献指南 | Contributing Guide

---

## 🚨 首要规则 | PRIMARY RULE

### **在当前分支工作，除非明确指示切换**
### **Work on current branch unless explicitly instructed to switch**

```bash
# 每次开始工作前，先确认当前分支
# Before starting any work, confirm current branch
git branch
git status

# ⚠️ 不要主动切换分支！
# ⚠️ Do NOT switch branches unless told to!
```

---

## 📋 工作流检查清单 | Workflow Checklist

在开始任何任务前，请遵循以下步骤：

### ✅ 任务开始前 | Before Starting
- [ ] 运行 `git branch` 确认当前分支
- [ ] 运行 `git status` 检查工作区状态
- [ ] 确认是否需要拉取最新代码 `git pull`
- [ ] 阅读任务需求，确认不需要切换分支

### ✅ 开发过程中 | During Development
- [ ] 在当前分支进行所有修改
- [ ] 频繁提交，保持小步迭代
- [ ] 提交信息清晰描述改动
- [ ] 本地测试验证功能

### ✅ 任务完成后 | After Completion
- [ ] 再次确认当前分支 `git branch`
- [ ] 推送到对应的远程分支
- [ ] 验证部署结果（如果是gh-pages分支）
- [ ] 清除浏览器缓存测试

---

## 🌿 分支策略 | Branch Strategy

### 分支说明
```
gh-pages    ← 生产环境（自动部署到 up9.one）
UP9V5.0     ← V5.0版本分支
demo4.0     ← 开发主线
demo3.0     ← V3.0存档
main        ← 主分支存档
```

### 分支规则
1. **gh-pages**: 只推送经过测试的稳定代码
2. **UP9V5.0**: 版本分支，记录重要里程碑
3. **demo4.0**: 日常开发，新功能测试
4. **不创建临时分支**，除非有明确需求

---

## 💻 提交规范 | Commit Convention

### 提交消息格式
```
<type>: <subject>

<optional body>
```

### Type 类型
| Type | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | feat: 添加YouTube链接 |
| `fix` | 修复bug | fix: 修复导航菜单问题 |
| `style` | 样式/格式 | style: 优化社区卡片布局 |
| `refactor` | 重构代码 | refactor: 简化翻译逻辑 |
| `docs` | 文档更新 | docs: 更新README |
| `cleanup` | 代码清理 | cleanup: 删除未使用代码 |
| `deploy` | 部署相关 | deploy: 触发重新部署 |

### 提交示例
```bash
# 好的提交 ✅
git commit -m "feat: 添加TikTok社交媒体按钮"
git commit -m "fix: 修复页脚图标title显示问题"
git commit -m "style: 优化响应式布局为3列"

# 不好的提交 ❌
git commit -m "update"
git commit -m "fix bug"
git commit -m "改了一些东西"
```

---

## 🔄 标准工作流 | Standard Workflow

### 1. 开始工作
```bash
# 确认当前分支
git branch
# 输出: * gh-pages

# 拉取最新代码
git pull origin gh-pages

# 开始编辑文件
code index.html
```

### 2. 提交更改
```bash
# 查看修改
git status
git diff

# 添加文件
git add index.html
# 或添加所有更改
git add .

# 提交
git commit -m "feat: 添加新功能"
```

### 3. 推送代码
```bash
# 推送到当前分支对应的远程分支
git push origin gh-pages
```

### 4. 验证部署（如果是gh-pages）
```bash
# 等待 1-3 分钟
# 访问 https://up9.one
# 强制刷新: Ctrl + Shift + R
```

---

## ⚠️ 禁止操作 | Prohibited Actions

### 除非明确指示，否则不要：

```bash
# ❌ 不要切换分支
git checkout other-branch
git switch other-branch

# ❌ 不要创建新分支
git checkout -b new-feature
git branch new-branch

# ❌ 不要合并分支
git merge other-branch

# ❌ 不要强制推送到main/master
git push --force origin main

# ❌ 不要删除分支
git branch -D branch-name

# ❌ 不要修改历史（除非明确需要）
git rebase
git reset --hard
```

---

## 🐛 问题排查 | Troubleshooting

### 问题：不确定当前分支
```bash
# 解决：
git branch          # 查看所有分支，*号表示当前分支
git status          # 查看详细状态
```

### 问题：误切换了分支
```bash
# 解决：切换回正确的分支
git checkout gh-pages  # 或其他正确的分支
git status             # 确认切换成功
```

### 问题：修改了错误的分支
```bash
# 解决：使用git stash保存修改
git stash              # 保存当前修改
git checkout 正确分支   # 切换到正确分支
git stash pop          # 恢复修改
```

### 问题：推送后网站未更新
```bash
# 解决步骤：
1. 访问 https://github.com/AZsama-666/UP9/actions
2. 确认 "pages build and deployment" 成功
3. 等待 5-10 分钟（CDN缓存更新）
4. 强制刷新浏览器: Ctrl + Shift + R
5. 清除浏览器缓存
```

---

## 📝 日常操作示例 | Daily Operations

### 场景1: 修复一个小bug
```bash
git branch              # 确认分支: * gh-pages
# 编辑文件修复bug
git add .
git commit -m "fix: 修复导航按钮问题"
git push origin gh-pages
```

### 场景2: 添加新功能
```bash
git branch              # 确认分支: * demo4.0
# 编辑文件添加功能
git add .
git commit -m "feat: 添加新的社交媒体按钮"
git push origin demo4.0
```

### 场景3: 更新文档
```bash
git branch              # 确认分支: * gh-pages
# 编辑 README.md
git add README.md
git commit -m "docs: 更新README贡献指南"
git push origin gh-pages
```

---

## 🎯 核心原则 | Core Principles

### 1. 确认分支 → 2. 开发 → 3. 提交 → 4. 推送

```
┌─────────────────────────────────────────┐
│  🚨 每次任务开始前                      │
│                                         │
│  1. git branch   (确认当前分支)        │
│  2. git status   (检查工作状态)        │
│  3. 在当前分支工作，不主动切换          │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📞 需要帮助？ | Need Help?

如果遇到以下情况，请立即询问：
- 不确定应该在哪个分支工作
- 需要切换分支
- 需要创建新分支
- 需要合并代码
- 遇到Git冲突
- 不确定如何操作

**记住：宁可多问一句，也不要在错误的分支上工作！**

---

## ✅ 最佳实践 | Best Practices

1. **频繁确认分支**: 养成运行 `git branch` 的习惯
2. **小步提交**: 每个功能点完成就提交
3. **清晰命名**: 提交信息要能看懂改了什么
4. **本地测试**: 推送前先本地验证
5. **及时推送**: 不要积累太多本地提交
6. **保持同步**: 开始工作前先 `git pull`
7. **不要假设**: 不确定就问，不要猜测

---

**记住：在当前分支工作！**

```
┌───────────────────────────────────┐
│                                   │
│   当前分支 ──> 开发 ──> 提交      │
│       ↑                    │       │
│       └────────────────────┘       │
│                                   │
│   除非明确指示，不切换分支         │
│                                   │
└───────────────────────────────────┘
```

---

**最后更新**: 2024-10-23  
**维护者**: UP9 Team

