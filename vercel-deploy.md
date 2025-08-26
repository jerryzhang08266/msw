# BrandZ - 一键部署到Vercel

## 🚀 一键部署链接

点击下面的按钮即可一键部署BrandZ网站到Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjerryzhang08266%2Fmsw&project-name=brandz-website&repository-name=brandz-website)

## 📋 部署步骤

### 方法一：使用一键部署按钮
1. 点击上面的"Deploy with Vercel"按钮
2. 使用GitHub账号登录Vercel
3. 授权Vercel访问您的GitHub仓库
4. 确认项目设置（项目名称、仓库名称等）
5. 点击"Deploy"开始部署
6. 等待几分钟，部署完成后获得生产环境URL

### 方法二：手动导入
1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击"New Project"
3. 从GitHub导入 `jerryzhang08266/msw` 仓库
4. 配置项目设置：
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `pnpm build` 或 `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install` 或 `npm install`
5. 点击"Deploy"

## ⚙️ 项目配置

Vercel会自动检测到这是一个Vite + React项目，并使用以下默认配置：

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install",
  "devCommand": "pnpm dev"
}
```

## 🌐 自定义域名

部署完成后，您可以：
1. 使用Vercel提供的免费域名（如：brandz-website.vercel.app）
2. 绑定自定义域名（需要在Vercel项目设置中配置）

## 🔄 自动部署

一旦设置完成，每次您向GitHub仓库的main分支推送代码时，Vercel都会自动重新部署网站。

## 📊 部署后功能

- ✅ 自动HTTPS
- ✅ 全球CDN加速
- ✅ 自动压缩和优化
- ✅ 实时部署日志
- ✅ 分支预览部署
- ✅ 性能监控

## 🔗 相关链接

- **GitHub仓库**: https://github.com/jerryzhang08266/msw
- **Vercel文档**: https://vercel.com/docs
- **Vite部署指南**: https://vitejs.dev/guide/static-deploy.html#vercel

---

部署完成后，您的BrandZ网站将在全球范围内快速访问，并且每次代码更新都会自动部署！

