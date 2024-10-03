const express = require('express');
const cors = require('cors'); // CORS 미들웨어 추가

const app = express();
const port = 3000;

// CORS 미들웨어 사용 (모든 출처에 대해 허용)
app.use(cors());

// 라우팅 파일 불러오기
const aiRoutes = require('./URIProcess/AI_URI_Process');
const dbRoutes = require('./URIProcess/DB_URI_Process');
const remoteDataRoutes = require('./URIProcess/RD_URI_Process');

///////////////////////////////////////////////
//////////////////// 라우팅 ////////////////////
///////////////////////////////////////////////

// AI 라우팅
app.use('/ai', aiRoutes);

// DB 라우팅
app.use('/db', dbRoutes);

// Remote Data 라우팅
app.use('/remotedata', remoteDataRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
