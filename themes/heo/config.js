const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首頁博客兩列顯示，若爲false則只顯示一列
  HEO_LOADING_COVER: true, // 頁面加載的遮罩動畫

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2025-01-25', // 建站日期，用于計算網站運行的第幾天

  // 首頁頂部通知條滾動內容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
   // { title: '歡迎來到我的博客', url: 'https://blog.tangly1024.com' },
   // { title: '訪問文檔中心獲取更多幫助', url: 'https://docs.tangly1024.com' }
  ],

  // 英雄區左右側組件顛倒位置
  HEO_HERO_REVERSE: false,
  // 博客主體區左右側組件顛倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄區(首頁頂部大卡)
   //HEO_HERO_TITLE_1: '分享編程',
   //HEO_HERO_TITLE_2: '與思維認知',
  // HEO_HERO_TITLE_3: 'TANGLY1024.COM',
  // HEO_HERO_TITLE_4: '新版上綫',
   //HEO_HERO_TITLE_5: 'NotionNext4.0 輕鬆定制主題',
   //HEO_HERO_TITLE_LINK: 'https://tangly1024.com',
  // 英雄區遮罩文字
  // HEO_HERO_COVER_TITLE: '隨便逛逛',

  // 英雄區顯示三個置頂分類
  HEO_HERO_CATEGORY_1: { title: '必看精選', url: '/tag/必看精選' },
  HEO_HERO_CATEGORY_2: { title: '熱門文章', url: '/tag/熱門文章' },
  HEO_HERO_CATEGORY_3: { title: '實用教程', url: '/tag/實用教程' },

  // 英雄區右側推薦文章標簽, 例如 [推薦] , 最多六篇文章; 若留空白''，則推薦最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推薦',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推薦文章排序，爲`true`時將强制按最後修改時間倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄區右側圖片

  // 右側個人資料卡牌歡迎語，點擊可自動切換
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享與熱心幫助',
    '🤝 專修交互與設計',
    '🏃 脚踏實地行動派',
    '🏠 智能家居小能手',
    '🤖️ 數碼科技愛好者',
    '🧱 團隊小組發動機'
  ],

  // 個人資料底部按鈕
  // HEO_INFO_CARD_URL1: '/about',
 //  HEO_INFO_CARD_ICON1: 'fas fa-user',
 //  HEO_INFO_CARD_URL2: 'https://github.com/tangly1024',
 //  HEO_INFO_CARD_ICON2: 'fab fa-github',
 //  HEO_INFO_CARD_URL3: 'https://www.tangly1024.com',
 //  HEO_INFO_CARD_TEXT3: '瞭解更多',

  // 用戶技能圖標
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否顯示右側，點擊加入社群按鈕
  HEO_SOCIAL_CARD_TITLE_1: '交流頻道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我們的社群討論分享',
  HEO_SOCIAL_CARD_TITLE_3: '點擊加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // 底部統計面板文案
  HEO_POST_COUNT_TITLE: '文章數:',
  HEO_SITE_TIME_TITLE: '建站天數:',
  HEO_SITE_VISIT_TITLE: '訪問量:',
  HEO_SITE_VISITOR_TITLE: '訪客數:',

  // *****  以下配置無效，只是預留開發 ****
  // 菜單配置
  HEO_MENU_INDEX: true, // 顯示首頁
  HEO_MENU_CATEGORY: true, // 顯示分類
  HEO_MENU_TAG: true, // 顯示標簽
  HEO_MENU_ARCHIVE: true, // 顯示歸檔
  HEO_MENU_SEARCH: true, // 顯示搜索

  HEO_POST_LIST_COVER: true, // 列表顯示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠標懸停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面爲空時用站點背景做默認封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 讀取文章預覽
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表圖片左右交錯

  HEO_ARTICLE_ADJACENT: true, // 顯示上一篇下一篇文章推薦
  HEO_ARTICLE_COPYRIGHT: true, // 顯示文章版權聲明
  HEO_ARTICLE_RECOMMEND: true, // 文章關聯推薦

  HEO_WIDGET_LATEST_POSTS: true, // 顯示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 顯示統計卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到評論區
  HEO_WIDGET_DARK_MODE: true, // 夜間模式
  HEO_WIDGET_TOC: true // 移動端懸浮目錄
}
export default CONFIG
