const jsonPath: string = "new.json";

interface ArticleData {
    metadata: {
        document_id: string;
        version: string;
        language: string;
    };
    article: {
        header: {
            title: string;
            publish_date: string;
            author?: string;
            source: {
                name: string;
                type?: string;
            };
        };
        content: {
            structure: Array<{
                type: "image" | "text" | "video" | "hd";
                order: number;
                path?: string;
                caption?: string;
                paragraphs?: string[];
                controls?: boolean;
                width?: number;
                blVideoSrc?: string;
            }>;
        };
    };
}


// 渲染函数
function renderArticle(data: ArticleData) {
    // 填充头部信息
    document.getElementById('article-title')!.textContent = data.article.header.title;
    document.getElementById('publish-date')!.textContent = data.article.header.publish_date;
    if (!(data?.article?.header?.source?.type)) {
        document.getElementById('source-name')!.textContent = `| ${data.article.header.source.name}`;    
    } else {
        document.getElementById('source-name')!.textContent = `| ${data.article.header.source.name} (${data.article.header.source.type})`;
    }
    if ((data?.article?.header?.author)) {
        document.getElementById('author')!.textContent = `| ${data.article.header.author}`
    }

    // 填充内容
    const contentContainer = document.getElementById('content')!;
    data.article.content.structure.sort((a, b) => a.order - b.order).forEach(item => {
        if (item.type === 'image') {
            const imageDiv = document.createElement('div');
            imageDiv.className = 'image';
            imageDiv.innerHTML = `
                <img src="${item.path}" alt="${item.caption}" style="max-width: 100%;">
                <div class="caption">${item.caption}</div>
            `;
            contentContainer.appendChild(imageDiv);
        } else if (item.type === 'text') {
            item.paragraphs?.forEach(text => {
                const p = document.createElement('p');
                p.textContent = text;
                contentContainer.appendChild(p);
            });
        } else if (item.type === 'video') {
          const videoContainer = document.createElement('div');
          videoContainer.className = 'video-container';

          const video = document.createElement('video');
          video.src = item.path ?? '';
          video.controls = item.controls ?? true; // 默认显示控制条
          video.style.width = item.width ? `${item.width}px` : '100%';

          const caption = document.createElement('div');
          caption.className = 'caption';
          caption.textContent = item.caption ?? '';

          videoContainer.appendChild(video);
          videoContainer.appendChild(caption);
          contentContainer.appendChild(videoContainer);
        } else if (item.type === "hd") {
            item.paragraphs?.forEach(text => {
                const hd = document.createElement('h2');
                hd.textContent = text;
                contentContainer.appendChild(hd);
            });
        }
    });
}

async function loadArticleData(): Promise<ArticleData> {
    try {
        const response = await fetch(jsonPath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json() as ArticleData;
    } catch (error) {
        console.error('加载 JSON 文件失败:', error);
        throw error;
    }
}


// 异步渲染入口
async function init() {
    try {
        const data = await loadArticleData();
        renderArticle(data);
    } catch {
        document.getElementById('content')!.innerHTML = '<p>⚠️ 文章加载失败，请检查控制台</p>';
    }
}

// 执行初始化
init();