const express = require('express');
const cors = require('cors'); // CORS 미들웨어 추가

const app = express();
const port = 3000;

// CORS 미들웨어 사용 (모든 출처에 대해 허용)
app.use(cors());

// 모듈 불러오기
const aiModule = require('./AI/ai_api');
const dbModule = require('./DB/db_api');
const remoteDataModule = require('./REMOTEDATA/remote_data_api');

///////////////////////////////////////////////
//////////////////// 라우팅 ////////////////////
///////////////////////////////////////////////

// AI Routing
app.get('/ai', (req, res) => {
    aiModule.runAiFunction();
    res.send('AI module executed');
});

// AI Routing
app.get('/db', (req, res) => {
    dbModule.runDbFunction();
    res.send('DB module executed');
});

// RemoteData Routing
app.get('/remotedata', (req, res) => {
    remoteDataModule.runRemoteDataFunction();
    res.send('Remote Data module executed');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
