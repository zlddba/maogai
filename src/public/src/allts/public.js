var _a, _b, _c, _d;
// 返回顶部按钮
// 获取按钮元素
var backToTopBtn = document.querySelector('.back-to-top');
// 显示/隐藏按钮的滚动阈值
var scrollThreshold = 400;
// 滚动事件监听
window.addEventListener('scroll', function () {
    // 获取当前滚动位置
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    // 判断是否超过阈值
    if (scrollPosition > scrollThreshold) {
        if (backToTopBtn) {
            backToTopBtn.classList.add('show');
        }
    }
    else {
        if (backToTopBtn) {
            backToTopBtn.classList.remove('show');
        }
    }
});
// 点击返回顶部
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 平滑滚动
        });
    });
}
// 可选：触摸设备惯性滚动处理
var isScrolling;
window.addEventListener('scroll', function () {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
        // 滚动停止后才更新按钮状态
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (backToTopBtn) {
            backToTopBtn.classList.toggle('show', scrollPosition > scrollThreshold);
        }
    }, 500);
}, false);
// 导航栏跳转有关的内容
function tiaoZhuan1(a) {
    window.location.href = a;
}
// 网络状态检测类
var NetworkMonitor = /** @class */ (function () {
    function NetworkMonitor() {
        var _this = this;
        // 处理网络状态变化
        this.handleConnectionChange = function () {
            if (!navigator.onLine) {
                _this.showOfflineAlert();
            }
        };
        this.initialize();
    }
    NetworkMonitor.prototype.initialize = function () {
        // 初始检测
        this.handleConnectionChange();
        // 添加事件监听
        window.addEventListener('online', this.handleConnectionChange);
        window.addEventListener('offline', this.handleConnectionChange);
    };
    // 显示断网提示（可替换为自定义UI）
    NetworkMonitor.prototype.showOfflineAlert = function () {
        alert('网络连接已断开，请检查您的网络设置! \n 连接互联网以获得更好的体验');
    };
    // 销毁时移除监听（可选）
    NetworkMonitor.prototype.destroy = function () {
        window.removeEventListener('online', this.handleConnectionChange);
        window.removeEventListener('offline', this.handleConnectionChange);
    };
    return NetworkMonitor;
}());
// 使用示例
var _networkMonitor = new NetworkMonitor();
// 需要时销毁监听（如单页应用路由切换时）
// networkMonitor.destroy();
//  导航栏相关
function tiaozhauan3(srcname) {
    switch (srcname) {
        case "中共党史里程碑":
            window.location.href = "/pages/hongshelishichanglang/#zhonggongdangshilichengbei";
            break;
        case "重大历史战役":
            window.location.href = "/pages/hongshelishichanglang/#zhongdalishizhanyi";
            break;
        case "革命根据地建设专题":
            window.location.href = "/pages/hongshelishichanglang/#geminggenjudijianshezhuanti";
            break;
        case "红色故事剧场":
            window.location.href = "/pages/hongshegushijuchang/";
            break;
        case "革命领袖数字纪念馆":
            window.location.href = "/pages/hongsherenwuzhi/#memorial";
            break;
        case "英烈事迹数据库":
            window.location.href = "/pages/hongsherenwuzhi/#database";
            break;
        case "红色精神谱系":
            window.location.href = "/pages/hongshejingshenpuxi/";
            break;
    }
}
var nav_links1 = (_a = document.getElementById("fl1")) === null || _a === void 0 ? void 0 : _a.querySelectorAll("li");
var nav_links2 = (_b = document.getElementById("fl2")) === null || _b === void 0 ? void 0 : _b.querySelectorAll("li");
var nav_links3 = (_c = document.getElementById("fl3")) === null || _c === void 0 ? void 0 : _c.querySelectorAll("li");
var nav_links4 = (_d = document.getElementById("fl4")) === null || _d === void 0 ? void 0 : _d.querySelectorAll("li");
nav_links1 === null || nav_links1 === void 0 ? void 0 : nav_links1.forEach(function (each1) {
    each1.addEventListener("click", function () {
        tiaozhauan3(String(each1.textContent));
    });
});
nav_links2 === null || nav_links2 === void 0 ? void 0 : nav_links2.forEach(function (each1) {
    each1.addEventListener("click", function () {
        tiaozhauan3(String(each1.textContent));
    });
});
nav_links3 === null || nav_links3 === void 0 ? void 0 : nav_links3.forEach(function (each1) {
    each1.addEventListener("click", function () {
        tiaozhauan3(String(each1.textContent));
    });
});
nav_links4 === null || nav_links4 === void 0 ? void 0 : nav_links4.forEach(function (each1) {
    each1.addEventListener("click", function () {
        tiaozhauan3(String(each1.textContent));
    });
});
