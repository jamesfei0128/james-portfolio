# James's Portfolio

这是一个静态个人作品展示页，可以直接打开 `index.html` 预览。

## 如何本地打开

在文件夹中双击 `index.html`，浏览器会直接打开网站。主要文件是：

- `index.html`：页面结构
- `styles.css`：视觉样式
- `script.js`：作品数据、随机展示、系列筛选、图片预览
- `images/`：作品图片

## 本次整理后的图片

新增图片已经复制成更短、更好维护的文件名：

- `mirror-01.png` 到 `mirror-08.png`
- `house-01.png` 到 `house-03.png`
- `forest-01.png` 到 `forest-02.png`
- `branch-01.png` 到 `branch-04.png`

原始长文件名图片仍保留在 `images` 文件夹里。

## 部署时必须上传的图片

线上网站现在会读取 `images/web/` 里的轻量图片。部署到 GitHub + Vercel 时，必须确保 GitHub 仓库里也有这些文件，否则页面能打开但图片会显示为空。

请上传：

- `images/web/art-01.jpg` 到 `images/web/art-06.jpg`
- `images/web/mirror-01.jpg` 到 `images/web/mirror-08.jpg`
- `images/web/house-01.jpg` 到 `images/web/house-03.jpg`
- `images/web/forest-01.jpg` 到 `images/web/forest-02.jpg`
- `images/web/branch-01.jpg` 到 `images/web/branch-04.jpg`

这套网页图片总共约 10.45 MB，比原始 PNG 小很多，更适合 GitHub 上传和 Vercel 部署。

如果线上图片不显示，先打开 GitHub 仓库确认是否存在 `images/web/art-06.jpg`。如果这个文件不存在，说明 `images/web` 文件夹还没有上传到 GitHub。

## 如何新增作品

1. 把新图片放进 `images` 文件夹。
2. 建议复制或重命名成简短文件名，例如 `new-series-01.png`。
3. 打开 `script.js`。
4. 在 `works` 数组里新增一条作品数据：

```js
{
  id: "new-work-id",
  image: "images/your-image.png",
  title: "作品标题",
  description: "颜色 / 风格 / 用途",
  series: "quiet-neutrals",
  alt: "图片内容描述",
}
```

`id` 不要和其他作品重复；`image` 使用原图路径，点击预览时也会使用这张图。

## 如何分配 series

每个作品通过 `series` 字段归类。当前可用系列是：

- `warm-botanicals`
- `quiet-neutrals`
- `fresh-blue`
- `mirror-garden`
- `minimal-houses`
- `quiet-forest`
- `branch-composition`

如果要新增系列，在 `script.js` 的 `seriesList` 数组里新增一条系列数据，然后把作品的 `series` 填成同一个 `id`。

## 如何替换邮箱

在 `index.html` 中搜索 `jamesfei0128@gmail.com`，同时修改显示文字和 `mailto:` 链接。

## 广告位

页面保留了首页广告位、画廊穿插广告位、右侧栏广告位。搜索 `AD` 或 `ad-slot` 可以快速找到对应位置。

## 部署

GitHub Pages：

1. 新建 GitHub 仓库并上传这些文件。
2. 在仓库设置里打开 Pages。
3. Source 选择 main 分支，目录选择 root。

Vercel：

1. 登录 Vercel。
2. 导入 GitHub 仓库。
3. Framework 选择 Other 或静态站点默认配置。
4. 部署后即可获得访问链接。
