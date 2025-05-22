var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var jsonPath = "new.json";
// 渲染函数
function renderArticle(data) {
    var _a, _b, _c, _d, _e;
    // 填充头部信息
    document.getElementById('article-title').textContent = data.article.header.title;
    document.getElementById('publish-date').textContent = data.article.header.publish_date;
    if (!((_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.article) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.source) === null || _c === void 0 ? void 0 : _c.type)) {
        document.getElementById('source-name').textContent = "| ".concat(data.article.header.source.name);
    }
    else {
        document.getElementById('source-name').textContent = "| ".concat(data.article.header.source.name, " (").concat(data.article.header.source.type, ")");
    }
    if (((_e = (_d = data === null || data === void 0 ? void 0 : data.article) === null || _d === void 0 ? void 0 : _d.header) === null || _e === void 0 ? void 0 : _e.author)) {
        document.getElementById('author').textContent = "| ".concat(data.article.header.author);
    }
    // 填充内容
    var contentContainer = document.getElementById('content');
    data.article.content.structure.sort(function (a, b) { return a.order - b.order; }).forEach(function (item) {
        var _a, _b, _c, _d, _e;
        if (item.type === 'image') {
            var imageDiv = document.createElement('div');
            imageDiv.className = 'image';
            imageDiv.innerHTML = "\n                <img src=\"".concat(item.path, "\" alt=\"").concat(item.caption, "\" style=\"max-width: 100%;\">\n                <div class=\"caption\">").concat(item.caption, "</div>\n            ");
            contentContainer.appendChild(imageDiv);
        }
        else if (item.type === 'text') {
            (_a = item.paragraphs) === null || _a === void 0 ? void 0 : _a.forEach(function (text) {
                var p = document.createElement('p');
                p.textContent = text;
                contentContainer.appendChild(p);
            });
        }
        else if (item.type === 'video') {
            var videoContainer = document.createElement('div');
            videoContainer.className = 'video-container';
            var video = document.createElement('video');
            video.src = (_b = item.path) !== null && _b !== void 0 ? _b : '';
            video.controls = (_c = item.controls) !== null && _c !== void 0 ? _c : true; // 默认显示控制条
            video.style.width = item.width ? "".concat(item.width, "px") : '100%';
            var caption = document.createElement('div');
            caption.className = 'caption';
            caption.textContent = (_d = item.caption) !== null && _d !== void 0 ? _d : '';
            videoContainer.appendChild(video);
            videoContainer.appendChild(caption);
            contentContainer.appendChild(videoContainer);
        }
        else if (item.type === "hd") {
            (_e = item.paragraphs) === null || _e === void 0 ? void 0 : _e.forEach(function (text) {
                var hd = document.createElement('h2');
                hd.textContent = text;
                contentContainer.appendChild(hd);
            });
        }
    });
}
function loadArticleData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(jsonPath)];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("HTTP error! status: ".concat(response.status));
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_1 = _a.sent();
                    console.error('加载 JSON 文件失败:', error_1);
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
// 异步渲染入口
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var data, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, loadArticleData()];
                case 1:
                    data = _b.sent();
                    renderArticle(data);
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    document.getElementById('content').innerHTML = '<p>⚠️ 文章加载失败，请检查控制台</p>';
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// 执行初始化
init();
