// 返回顶部按钮
// 获取按钮元素
const backToTopBtn = document.querySelector('.back-to-top');

// 显示/隐藏按钮的滚动阈值
const scrollThreshold = 400;

// 滚动事件监听
window.addEventListener('scroll', () => {
  // 获取当前滚动位置
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
  // 判断是否超过阈值
  if (scrollPosition > scrollThreshold) {
    if (backToTopBtn) {
        backToTopBtn.classList.add('show');
    }
  } else {
    if (backToTopBtn) {
        backToTopBtn.classList.remove('show');
    }
  }
});

// 点击返回顶部
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // 平滑滚动
    });
  });
}

// 可选：触摸设备惯性滚动处理
let isScrolling;
window.addEventListener('scroll', () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    // 滚动停止后才更新按钮状态
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (backToTopBtn) {
        backToTopBtn.classList.toggle('show', scrollPosition > scrollThreshold);
    }
  }, 500);
}, false);

// 导航栏跳转有关的内容
function tiaoZhuan1(a: string): void {
  window.location.href = a;
}

// 网络状态检测类
class NetworkMonitor {
  constructor() {
    this.initialize();
  }

  private initialize(): void {
    // 初始检测
    this.handleConnectionChange();

    // 添加事件监听
    window.addEventListener('online', this.handleConnectionChange);
    window.addEventListener('offline', this.handleConnectionChange);
  }

  // 处理网络状态变化
  private handleConnectionChange = (): void => {
    if (!navigator.onLine) {
      this.showOfflineAlert();
    }
  }

  // 显示断网提示（可替换为自定义UI）
  private showOfflineAlert(): void {
    alert('网络连接已断开，请检查您的网络设置! \n 连接互联网以获得更好的体验');
  }

  // 销毁时移除监听（可选）
  public destroy(): void {
    window.removeEventListener('online', this.handleConnectionChange);
    window.removeEventListener('offline', this.handleConnectionChange);
  }
}

// 使用示例
const _networkMonitor = new NetworkMonitor();

// 需要时销毁监听（如单页应用路由切换时）
// networkMonitor.destroy();

//  导航栏相关

function tiaozhauan3(srcname: string): void {
  switch (srcname) {
    case "中共党史里程碑":
      window.location.href = "/pages/hongshelishichanglang/#zhonggongdangshilichengbei"
      break;
    case "重大历史战役":
      window.location.href = "/pages/hongshelishichanglang/#zhongdalishizhanyi"
      break;
    case "革命根据地建设专题":
      window.location.href = "/pages/hongshelishichanglang/#geminggenjudijianshezhuanti"
      break;
    case "红色故事剧场":
      window.location.href = "/pages/hongshegushijuchang/"
      break;
    case "革命领袖数字纪念馆":
      window.location.href = "/pages/hongsherenwuzhi/#memorial"
      break;
    case "英烈事迹数据库":
      window.location.href = "/pages/hongsherenwuzhi/#database"
      break;
    case "红色精神谱系":
      window.location.href = "/pages/hongshejingshenpuxi/"
      break;
  }
}

let nav_links1 = document.getElementById("fl1")?.querySelectorAll("li");
let nav_links2 = document.getElementById("fl2")?.querySelectorAll("li");
let nav_links3 = document.getElementById("fl3")?.querySelectorAll("li");
let nav_links4 = document.getElementById("fl4")?.querySelectorAll("li");


nav_links1?.forEach(each1 => {
  each1.addEventListener("click", () => {
    tiaozhauan3(String(each1.textContent));
  });
});

nav_links2?.forEach(each1 => {
  each1.addEventListener("click", () => {
    tiaozhauan3(String(each1.textContent));
  });
});

nav_links3?.forEach(each1 => {
  each1.addEventListener("click", () => {
    tiaozhauan3(String(each1.textContent));
  });
});

nav_links4?.forEach(each1 => {
  each1.addEventListener("click", () => {
    tiaozhauan3(String(each1.textContent));
  });
});