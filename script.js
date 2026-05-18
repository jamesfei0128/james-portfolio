const seriesList = [
  {
    id: "warm-botanicals",
    title: "Warm Botanicals",
    description: "杏橙、棕红与米色花卉，适合温暖、柔和的品牌视觉。",
  },
  {
    id: "quiet-neutrals",
    title: "Quiet Neutrals",
    description: "低对比花卉底纹，适合包装、壁纸和背景延展。",
  },
  {
    id: "fresh-blue",
    title: "Fresh Blue",
    description: "清爽蓝色枝干花卉，可用于春夏主题和生活方式产品。",
  },
  {
    id: "mirror-garden",
    title: "Mirror Garden",
    description: "镜面、画架与花园光影组合，带有梦境式的空间感。",
  },
  {
    id: "minimal-houses",
    title: "Minimal Houses",
    description: "极简建筑外观、干净背景与明亮色块。",
  },
  {
    id: "quiet-forest",
    title: "Quiet Forest",
    description: "孤树、室内光线和克制的自然场景。",
  },
  {
    id: "branch-composition",
    title: "Branch Composition",
    description: "枝条、叶片和留白构成的自然装饰作品。",
  },
];

const works = [
  {
    id: "soft-petal-repeat",
    image: "images/art-01.png",
    title: "Soft Petal Repeat",
    description: "浅米 / 低对比 / 背景纹样",
    series: "quiet-neutrals",
    alt: "浅米色花卉底纹图案",
  },
  {
    id: "apricot-garden",
    image: "images/art-02.png",
    title: "Apricot Garden",
    description: "杏橙 / 大花型 / 温暖装饰感",
    series: "warm-botanicals",
    alt: "杏橙色花卉重复图案",
  },
  {
    id: "mist-flower",
    image: "images/art-03.png",
    title: "Mist Flower",
    description: "灰绿 / 小花散点 / 安静细节",
    series: "quiet-neutrals",
    alt: "灰绿色小花重复图案",
  },
  {
    id: "line-poppy",
    image: "images/art-04.png",
    title: "Line Poppy",
    description: "线描 / 纵向枝条 / 自然留白",
    series: "warm-botanicals",
    alt: "棕色线描花卉图案",
  },
  {
    id: "ivory-blossom",
    image: "images/art-05.png",
    title: "Ivory Blossom",
    description: "米色 / 低饱和 / 轻柔线稿",
    series: "quiet-neutrals",
    alt: "米色花朵线稿图案",
  },
  {
    id: "blue-stem-bloom",
    image: "images/art-06.png",
    title: "Blue Stem Bloom",
    description: "蓝色 / 轻盈枝干 / 清爽背景",
    series: "fresh-blue",
    alt: "蓝色蒲公英花卉图案",
  },
  {
    id: "mirror-garden-01",
    image: "images/mirror-01.png",
    title: "Mirror Garden 01",
    description: "紫色花园 / 镜面画架 / 梦境光影",
    series: "mirror-garden",
    alt: "紫色花园中放在画架上的镜面作品",
  },
  {
    id: "mirror-garden-02",
    image: "images/mirror-02.png",
    title: "Mirror Garden 02",
    description: "镜面 / 花丛 / 柔和景深",
    series: "mirror-garden",
    alt: "花丛中的无边框镜子和画架",
  },
  {
    id: "mirror-garden-03",
    image: "images/mirror-03.png",
    title: "Mirror Garden 03",
    description: "宽幅场景 / 花园 / 反射构图",
    series: "mirror-garden",
    alt: "宽幅花园场景里的镜面画架",
  },
  {
    id: "mirror-garden-04",
    image: "images/mirror-04.png",
    title: "Mirror Garden 04",
    description: "静物装置 / 花园氛围 / 浪漫色彩",
    series: "mirror-garden",
    alt: "花园中镜子与画架的静物装置",
  },
  {
    id: "mirror-garden-05",
    image: "images/mirror-05.png",
    title: "Mirror Garden 05",
    description: "镜像空间 / 植物光斑 / 柔焦背景",
    series: "mirror-garden",
    alt: "植物环绕的镜面画架视觉作品",
  },
  {
    id: "mirror-garden-06",
    image: "images/mirror-06.png",
    title: "Mirror Garden 06",
    description: "横向花境 / 镜面中心 / 色彩层次",
    series: "mirror-garden",
    alt: "横向花园里摆放着镜面画架",
  },
  {
    id: "mirror-garden-07",
    image: "images/mirror-07.png",
    title: "Mirror Garden 07",
    description: "花间装置 / 反射 / 紫粉色调",
    series: "mirror-garden",
    alt: "紫粉花丛中的镜面装置",
  },
  {
    id: "mirror-garden-08",
    image: "images/mirror-08.png",
    title: "Mirror Garden 08",
    description: "宽幅花园 / 画架 / 幻想氛围",
    series: "mirror-garden",
    alt: "幻想花园中的宽幅镜面画架场景",
  },
  {
    id: "minimal-house-01",
    image: "images/house-01.png",
    title: "Blue Facade",
    description: "极简建筑 / 蓝色墙面 / 橙色门",
    series: "minimal-houses",
    alt: "蓝色极简房屋外观和橙色门",
  },
  {
    id: "minimal-house-02",
    image: "images/house-02.png",
    title: "Vertical House Study",
    description: "竖幅建筑 / 干净背景 / 明亮几何",
    series: "minimal-houses",
    alt: "竖幅极简房屋外观作品",
  },
  {
    id: "minimal-house-03",
    image: "images/house-03.png",
    title: "Clean Exterior",
    description: "宽幅建筑 / 青蓝色块 / 简洁立面",
    series: "minimal-houses",
    alt: "青蓝色极简房屋外立面",
  },
  {
    id: "quiet-forest-01",
    image: "images/forest-01.png",
    title: "Quiet Forest Room",
    description: "孤树 / 室内光线 / 雾感空间",
    series: "quiet-forest",
    alt: "极简空间中孤树伸向光源",
  },
  {
    id: "quiet-forest-02",
    image: "images/forest-02.png",
    title: "Lone Branch Light",
    description: "树枝 / 冷色空间 / 静默氛围",
    series: "quiet-forest",
    alt: "冷色室内空间中的孤树枝条",
  },
  {
    id: "branch-composition-01",
    image: "images/branch-01.png",
    title: "White Leaf Branch",
    description: "白色叶片 / 蓝色背景 / 装饰构图",
    series: "branch-composition",
    alt: "蓝色墙面前的白色叶片枝条",
  },
  {
    id: "branch-composition-02",
    image: "images/branch-02.png",
    title: "Branch Composition 02",
    description: "宽幅枝条 / 自然留白 / 柔和光线",
    series: "branch-composition",
    alt: "宽幅自然枝条与叶片构图",
  },
  {
    id: "branch-composition-03",
    image: "images/branch-03.png",
    title: "Branch Composition 03",
    description: "单枝 / 轻盈叶片 / 极简背景",
    series: "branch-composition",
    alt: "极简背景中的单枝叶片构图",
  },
  {
    id: "branch-composition-04",
    image: "images/branch-04.png",
    title: "Branch Composition 04",
    description: "植物枝条 / 柔光 / 留白",
    series: "branch-composition",
    alt: "自然植物枝条与柔和光影构图",
  },
];

const featuredWorksEl = document.querySelector("#featuredWorks");
const seriesGridEl = document.querySelector("#seriesGrid");
const seriesWorksEl = document.querySelector("#seriesWorks");
const seriesDetailEl = document.querySelector("#seriesDetail");
const seriesDetailTitleEl = document.querySelector("#seriesDetailTitle");
const lightboxEl = document.querySelector("#lightbox");
const lightboxImageEl = document.querySelector("#lightboxImage");
const lightboxTitleEl = document.querySelector("#lightboxTitle");

function shuffleItems(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function createWorkCard(work, options = {}) {
  const article = document.createElement("article");
  article.className = options.wide ? "work-card work-card-wide" : "work-card";

  const button = document.createElement("button");
  button.className = "work-card-button";
  button.type = "button";
  button.dataset.workId = work.id;

  button.innerHTML = `
    <img src="${work.image}" alt="${work.alt}" />
    <div>
      <h3>${work.title}</h3>
      <p>${work.description}</p>
    </div>
  `;

  article.append(button);
  return article;
}

function createInlineAd() {
  const ad = document.createElement("aside");
  ad.className = "ad-slot ad-inline";
  ad.setAttribute("aria-label", "广告位");
  ad.innerHTML = `
    <span>AD</span>
    <strong>画廊穿插广告位</strong>
    <p>适合放置品牌图、横幅、展览信息或产品购买入口。</p>
  `;
  return ad;
}

function renderSeriesCards() {
  seriesGridEl.innerHTML = "";

  seriesList.forEach((series, index) => {
    const button = document.createElement("button");
    button.className = "series-item";
    button.type = "button";
    button.dataset.series = series.id;
    button.innerHTML = `
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${series.title}</strong>
      <p>${series.description}</p>
    `;
    seriesGridEl.append(button);
  });
}

function renderFeaturedWorks() {
  featuredWorksEl.innerHTML = "";
  const randomWorks = shuffleItems(works).slice(0, 8);

  randomWorks.forEach((work, index) => {
    featuredWorksEl.append(createWorkCard(work, { wide: index === 0 || index === randomWorks.length - 1 }));

    if (index === 2) {
      featuredWorksEl.append(createInlineAd());
    }
  });
}

function renderSeriesWorks(seriesId) {
  const series = seriesList.find((item) => item.id === seriesId);
  const filteredWorks = works.filter((work) => work.series === seriesId);

  seriesWorksEl.innerHTML = "";
  seriesDetailTitleEl.textContent = series ? series.title : "系列作品";
  filteredWorks.forEach((work, index) => {
    seriesWorksEl.append(createWorkCard(work, { wide: index === 0 && filteredWorks.length > 1 }));
  });

  seriesDetailEl.hidden = false;
  seriesDetailEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getWorkById(workId) {
  return works.find((work) => work.id === workId);
}

function openLightbox(work) {
  lightboxImageEl.src = work.image;
  lightboxImageEl.alt = work.alt;
  lightboxTitleEl.textContent = work.title;
  lightboxEl.hidden = false;
  document.body.classList.add("modal-open");
}

function closeLightbox() {
  lightboxEl.hidden = true;
  document.body.classList.remove("modal-open");
  lightboxImageEl.src = "";
}

document.addEventListener("click", (event) => {
  const workTrigger = event.target.closest("[data-work-id]");
  const seriesTrigger = event.target.closest("[data-series]");

  if (workTrigger) {
    const work = getWorkById(workTrigger.dataset.workId);
    if (work) {
      openLightbox(work);
    }
  }

  if (seriesTrigger) {
    renderSeriesWorks(seriesTrigger.dataset.series);
  }
});

document.querySelector("#shuffleWorksButton").addEventListener("click", renderFeaturedWorks);

document.querySelector("#backToWorksButton").addEventListener("click", () => {
  seriesDetailEl.hidden = true;
  document.querySelector("#works").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#backToSeriesButton").addEventListener("click", () => {
  seriesDetailEl.hidden = true;
  document.querySelector("#series").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
document.querySelector(".lightbox-backdrop").addEventListener("click", closeLightbox);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightboxEl.hidden) {
    closeLightbox();
  }
});

renderSeriesCards();
renderFeaturedWorks();
