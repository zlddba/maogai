// // 禁止复制
// // 禁止右键菜单（阻止查看源码和图片另存为）
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// })
// // 禁止复制/剪切/拖拽
// document.addEventListener('copy', disableAction);
// document.addEventListener('cut', disableAction);
// document.addEventListener('dragstart', disableAction);

// function disableAction(e) {
//   e.preventDefault();
//   alert('内容受保护，禁止复制！'); // 可自定义提示
// }

// // 禁止 Ctrl+C / Ctrl+V 快捷键
// document.addEventListener('keydown', function(e) {
//   if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'v' || e.key === 'V')) {
//     e.preventDefault();
//     alert('禁止使用快捷键复制！');
//   } else if (e.key === 'F12' || e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'i' || e.key === 'c')) {
//     e.preventDefault();
//     alert('开发者工具被禁用！');
//   } else if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
//     e.preventDefault();
//     alert('别乱看了');
//   }
// });


// 最顶新闻
const handBox: HTMLElement | null = document.getElementById('handBox');

if (handBox) {
    handBox.addEventListener("click", function() {
      window.location.href = "pages/news/new1/"
    });
} else {
    console.error('Element with id "handBox" not found.');
}


// 主页轮播图相关内容
const mainPageRoundImg: HTMLImageElement = document.getElementById('mainPageRoundImg') as HTMLImageElement;
const mainRoundBox: HTMLElement | null = document.getElementById('mainRoundBox');
const imgArr: string[] = [
  'imgs/mainRoundBox/1.png', 
  'imgs/mainRoundBox/2.png', 
  'imgs/mainRoundBox/3.png',
  'imgs/mainRoundBox/4.png'
  
];


function roundImg(): void {
  let a = 0;
  setInterval(() => {
      if (imgArr.length === 0 ) {
        console.log("a");
      }
      else if ( a < imgArr.length ) {
        mainPageRoundImg.src = imgArr[a];
        a++;
      } else {
        a = 0
      }
  }, 2000);

  if (mainRoundBox) {
    mainRoundBox.addEventListener('click', function() {
      if (a !== 0 ) {
        switch (a) {
          case 1:
            console.error(a);
            break;
          case 2:
            console.error(a);
            break;
          case 3:
            window.location.href = "pages/RedSpirit/20221027/new1/"
            break;
          case 4:
            window.location.href = "pages/news/new1/"
          default:
            break;
        }
      }
    });
  } else {
    console.error('Element with id "mainRoundBox" not found.');
  }
}

roundImg();

// 导航栏

 // 平滑滚动效果
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// 简单的图片加载动画
window.addEventListener('load', function() {
  const images = document.querySelectorAll('.card-img, .person-img');
  images.forEach(img => {
      (img as HTMLElement).style.opacity = '1';
  });
});