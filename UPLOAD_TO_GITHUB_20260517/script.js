const seriesList = [
  {
    id: "warm-botanicals",
    title: "Warm Botanicals",
    description: "ææ©™ã€æ£•çº¢ä¸Žç±³è‰²èŠ±å‰ï¼Œé€‚åˆæ¸©æš–ã€æŸ”å’Œçš„å“ç‰Œè§†è§‰ã€‚",
  },
  {
    id: "quiet-neutrals",
    title: "Quiet Neutrals",
    description: "ä½Žå¯¹æ¯”èŠ±å‰åº•çº¹ï¼Œé€‚åˆåŒ…è£…ã€å£çº¸å’ŒèƒŒæ™¯å»¶å±•ã€‚",
  },
  {
    id: "fresh-blue",
    title: "Fresh Blue",
    description: "æ¸…çˆ½è“è‰²æžå¹²èŠ±å‰ï¼Œå¯ç”¨äºŽæ˜¥å¤ä¸»é¢˜å’Œç”Ÿæ´»æ–¹å¼äº§å“ã€‚",
  },
  {
    id: "mirror-garden",
    title: "Mirror Garden",
    description: "é•œé¢ã€ç”»æž¶ä¸ŽèŠ±å›­å…‰å½±ç»„åˆï¼Œå¸¦æœ‰æ¢¦å¢ƒå¼çš„ç©ºé—´æ„Ÿã€‚",
  },
  {
    id: "minimal-houses",
    title: "Minimal Houses",
    description: "æžç®€å»ºç­‘å¤–è§‚ã€å¹²å‡€èƒŒæ™¯ä¸Žæ˜Žäº®è‰²å—ã€‚",
  },
  {
    id: "quiet-forest",
    title: "Quiet Forest",
    description: "å­¤æ ‘ã€å®¤å†…å…‰çº¿å’Œå…‹åˆ¶çš„è‡ªç„¶åœºæ™¯ã€‚",
  },
  {
    id: "branch-composition",
    title: "Branch Composition",
    description: "æžæ¡ã€å¶ç‰‡å’Œç•™ç™½æž„æˆçš„è‡ªç„¶è£…é¥°ä½œå“ã€‚",
  },
];

const works = [
  {
    id: "soft-petal-repeat",
    image: "images/web/art-01.jpg",
    title: "Soft Petal Repeat",
    description: "æµ…ç±³ / ä½Žå¯¹æ¯” / èƒŒæ™¯çº¹æ ·",
    series: "quiet-neutrals",
    alt: "æµ…ç±³è‰²èŠ±å‰åº•çº¹å›¾æ¡ˆ",
  },
  {
    id: "apricot-garden",
    image: "images/web/art-02.jpg",
    title: "Apricot Garden",
    description: "ææ©™ / å¤§èŠ±åž‹ / æ¸©æš–è£…é¥°æ„Ÿ",
    series: "warm-botanicals",
    alt: "ææ©™è‰²èŠ±å‰é‡å¤å›¾æ¡ˆ",
  },
  {
    id: "mist-flower",
    image: "images/web/art-03.jpg",
    title: "Mist Flower",
    description: "ç°ç»¿ / å°èŠ±æ•£ç‚¹ / å®‰é™ç»†èŠ‚",
    series: "quiet-neutrals",
    alt: "ç°ç»¿è‰²å°èŠ±é‡å¤å›¾æ¡ˆ",
  },
  {
    id: "line-poppy",
    image: "images/web/art-04.jpg",
    title: "Line Poppy",
    description: "çº¿æ / çºµå‘æžæ¡ / è‡ªç„¶ç•™ç™½",
    series: "warm-botanicals",
    alt: "æ£•è‰²çº¿æèŠ±å‰å›¾æ¡ˆ",
  },
  {
    id: "ivory-blossom",
    image: "images/web/art-05.jpg",
    title: "Ivory Blossom",
    description: "ç±³è‰² / ä½Žé¥±å’Œ / è½»æŸ”çº¿ç¨¿",
    series: "quiet-neutrals",
    alt: "ç±³è‰²èŠ±æœµçº¿ç¨¿å›¾æ¡ˆ",
  },
  {
    id: "blue-stem-bloom",
    image: "images/web/art-06.jpg",
    title: "Blue Stem Bloom",
    description: "è“è‰² / è½»ç›ˆæžå¹² / æ¸…çˆ½èƒŒæ™¯",
    series: "fresh-blue",
    alt: "è“è‰²è’²å…¬è‹±èŠ±å‰å›¾æ¡ˆ",
  },
  {
    id: "mirror-garden-01",
    image: "images/web/mirror-01.jpg",
    title: "Mirror Garden 01",
    description: "ç´«è‰²èŠ±å›­ / é•œé¢ç”»æž¶ / æ¢¦å¢ƒå…‰å½±",
    series: "mirror-garden",
    alt: "ç´«è‰²èŠ±å›­ä¸­æ”¾åœ¨ç”»æž¶ä¸Šçš„é•œé¢ä½œå“",
  },
  {
    id: "mirror-garden-02",
    image: "images/web/mirror-02.jpg",
    title: "Mirror Garden 02",
    description: "é•œé¢ / èŠ±ä¸› / æŸ”å’Œæ™¯æ·±",
    series: "mirror-garden",
    alt: "èŠ±ä¸›ä¸­çš„æ— è¾¹æ¡†é•œå­å’Œç”»æž¶",
  },
  {
    id: "mirror-garden-03",
    image: "images/web/mirror-03.jpg",
    title: "Mirror Garden 03",
    description: "å®½å¹…åœºæ™¯ / èŠ±å›­ / åå°„æž„å›¾",
    series: "mirror-garden",
    alt: "å®½å¹…èŠ±å›­åœºæ™¯é‡Œçš„é•œé¢ç”»æž¶",
  },
  {
    id: "mirror-garden-04",
    image: "images/web/mirror-04.jpg",
    title: "Mirror Garden 04",
    description: "é™ç‰©è£…ç½® / èŠ±å›­æ°›å›´ / æµªæ¼«è‰²å½©",
    series: "mirror-garden",
    alt: "èŠ±å›­ä¸­é•œå­ä¸Žç”»æž¶çš„é™ç‰©è£…ç½®",
  },
  {
    id: "mirror-garden-05",
    image: "images/web/mirror-05.jpg",
    title: "Mirror Garden 05",
    description: "é•œåƒç©ºé—´ / æ¤ç‰©å…‰æ–‘ / æŸ”ç„¦èƒŒæ™¯",
    series: "mirror-garden",
    alt: "æ¤ç‰©çŽ¯ç»•çš„é•œé¢ç”»æž¶è§†è§‰ä½œå“",
  },
  {
    id: "mirror-garden-06",
    image: "images/web/mirror-06.jpg",
    title: "Mirror Garden 06",
    description: "æ¨ªå‘èŠ±å¢ƒ / é•œé¢ä¸­å¿ƒ / è‰²å½©å±‚æ¬¡",
    series: "mirror-garden",
    alt: "æ¨ªå‘èŠ±å›­é‡Œæ‘†æ”¾ç€é•œé¢ç”»æž¶",
  },
  {
    id: "mirror-garden-07",
    image: "images/web/mirror-07.jpg",
    title: "Mirror Garden 07",
    description: "èŠ±é—´è£…ç½® / åå°„ / ç´«ç²‰è‰²è°ƒ",
    series: "mirror-garden",
    alt: "ç´«ç²‰èŠ±ä¸›ä¸­çš„é•œé¢è£…ç½®",
  },
  {
    id: "mirror-garden-08",
    image: "images/web/mirror-08.jpg",
    title: "Mirror Garden 08",
    description: "å®½å¹…èŠ±å›­ / ç”»æž¶ / å¹»æƒ³æ°›å›´",
    series: "mirror-garden",
    alt: "å¹»æƒ³èŠ±å›­ä¸­çš„å®½å¹…é•œé¢ç”»æž¶åœºæ™¯",
  },
  {
    id: "minimal-house-01",
    image: "images/web/house-01.jpg",
    title: "Blue Facade",
    description: "æžç®€å»ºç­‘ / è“è‰²å¢™é¢ / æ©™è‰²é—¨",
    series: "minimal-houses",
    alt: "è“è‰²æžç®€æˆ¿å±‹å¤–è§‚å’Œæ©™è‰²é—¨",
  },
  {
    id: "minimal-house-02",
    image: "images/web/house-02.jpg",
    title: "Vertical House Study",
    description: "ç«–å¹…å»ºç­‘ / å¹²å‡€èƒŒæ™¯ / æ˜Žäº®å‡ ä½•",
    series: "minimal-houses",
    alt: "ç«–å¹…æžç®€æˆ¿å±‹å¤–è§‚ä½œå“",
  },
  {
    id: "minimal-house-03",
    image: "images/web/house-03.jpg",
    title: "Clean Exterior",
    description: "å®½å¹…å»ºç­‘ / é’è“è‰²å— / ç®€æ´ç«‹é¢",
    series: "minimal-houses",
    alt: "é’è“è‰²æžç®€æˆ¿å±‹å¤–ç«‹é¢",
  },
  {
    id: "quiet-forest-01",
    image: "images/web/forest-01.jpg",
    title: "Quiet Forest Room",
    description: "å­¤æ ‘ / å®¤å†…å…‰çº¿ / é›¾æ„Ÿç©ºé—´",
    series: "quiet-forest",
    alt: "æžç®€ç©ºé—´ä¸­å­¤æ ‘ä¼¸å‘å…‰æº",
  },
  {
    id: "quiet-forest-02",
    image: "images/web/forest-02.jpg",
    title: "Lone Branch Light",
    description: "æ ‘æž / å†·è‰²ç©ºé—´ / é™é»˜æ°›å›´",
    series: "quiet-forest",
    alt: "å†·è‰²å®¤å†…ç©ºé—´ä¸­çš„å­¤æ ‘æžæ¡",
  },
  {
    id: "branch-composition-01",
    image: "images/web/branch-01.jpg",
    title: "White Leaf Branch",
    description: "ç™½è‰²å¶ç‰‡ / è“è‰²èƒŒæ™¯ / è£…é¥°æž„å›¾",
    series: "branch-composition",
    alt: "è“è‰²å¢™é¢å‰çš„ç™½è‰²å¶ç‰‡æžæ¡",
  },
  {
    id: "branch-composition-02",
    image: "images/web/branch-02.jpg",
    title: "Branch Composition 02",
    description: "å®½å¹…æžæ¡ / è‡ªç„¶ç•™ç™½ / æŸ”å’Œå…‰çº¿",
    series: "branch-composition",
    alt: "å®½å¹…è‡ªç„¶æžæ¡ä¸Žå¶ç‰‡æž„å›¾",
  },
  {
    id: "branch-composition-03",
    image: "images/web/branch-03.jpg",
    title: "Branch Composition 03",
    description: "å•æž / è½»ç›ˆå¶ç‰‡ / æžç®€èƒŒæ™¯",
    series: "branch-composition",
    alt: "æžç®€èƒŒæ™¯ä¸­çš„å•æžå¶ç‰‡æž„å›¾",
  },
  {
    id: "branch-composition-04",
    image: "images/web/branch-04.jpg",
    title: "Branch Composition 04",
    description: "æ¤ç‰©æžæ¡ / æŸ”å…‰ / ç•™ç™½",
    series: "branch-composition",
    alt: "è‡ªç„¶æ¤ç‰©æžæ¡ä¸ŽæŸ”å’Œå…‰å½±æž„å›¾",
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
  ad.setAttribute("aria-label", "å¹¿å‘Šä½");
  ad.innerHTML = `
    <span>AD</span>
    <strong>ç”»å»Šç©¿æ’å¹¿å‘Šä½</strong>
    <p>é€‚åˆæ”¾ç½®å“ç‰Œå›¾ã€æ¨ªå¹…ã€å±•è§ˆä¿¡æ¯æˆ–äº§å“è´­ä¹°å…¥å£ã€‚</p>
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
  seriesDetailTitleEl.textContent = series ? series.title : "ç³»åˆ—ä½œå“";
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

