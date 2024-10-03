// ai_api.js


// ./funcs 디렉토리 전체를 불러옴
const funcs = require('./funcs');

function runAiFunction() {
    console.log('this is AI module');
}

async function runAIFunc_local(){
    console.log('Executing local Python function...');
    const result = await funcs.callAiFuncUsingLocalFunc();
    return result;  // 결과 반환
}

async function runAIFunc_remote(){
    console.log('Executing Python function via web...');
    const result = await funcs.callAiFuncUsingWeb();
    return result;  // 결과 반환
}

module.exports = {
    runAiFunction,
    runAIFunc_local,
    runAIFunc_remote
};
