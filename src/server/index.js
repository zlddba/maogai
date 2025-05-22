require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');

// 初始化 Express 应用
const app = express();
const PORT = process.env.PORT || 9000;

// 安全中间件
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"]
    }
  }
}));

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' 'unsafe-inline' 'unsafe-eval'");
  next();
});

// 性能优化中间件
app.use(compression({ level: 6 }));
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200
}));

// 静态文件服务
app.use(express.static(path.join(__dirname, '../public/src'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
        }
    }
}));



// SPA 路由处理
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/src'));
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



// 讨论区文件上传
// 在文件上传配置前添加目录创建逻辑
const uploadDir = path.join(__dirname, '../public/src/discussionImg');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// 配置存储
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // 使用预定义的目录路径
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

// 文件过滤
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 5MB限制
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('仅支持图片文件'), false);
        }
    }
});

// 上传路由
app.post('/upload', upload.single('avatar'), (req, res) => {
    try {
        const avatarUrl = req.file 
            ? `/discussionImg/${req.file.filename}`  // 修正访问路径
            : null;

        res.json({
            success: true,
            avatarUrl: avatarUrl,
            comment: req.body.comment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`
  🚀 服务器以${process.env.NODE_ENV}模式运行
  🔗 http://localhost:${PORT}
  📅 ${new Date().toLocaleString()}
  按 Ctrl + C 退出
  `);
});