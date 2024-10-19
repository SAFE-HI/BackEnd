const pool = require('./funcs/db_connection.js');

// db_api.js
function runDbFunction() {
    console.log('this is DB module');
}

// USER
// 특정 유저 조회
async function getUser(userId) {
    const [rows, fields] = await pool.query('SELECT * FROM Users WHERE user_id = ?', [userId]);
    console.log(`get User with ID ${userId}:`, rows);
    return rows;
}

// 유저 생성
async function createUser(name, phoneNumber, email, birthdate, gender, permission) {
    const [result] = await pool.query('INSERT INTO Users (name, phone_number, email, birthdate, gender, permission) VALUES (?, ?, ?, ?, ?, ?)', [name, phoneNumber, email, birthdate, gender, permission]);
    console.log('create User:', result);
    return result;
}

// 유저 정보 업데이트
async function updateUser(userId, name, phoneNumber, email, birthdate, gender, permission) {
    const [result] = await pool.query('UPDATE Users SET name = ?, phone_number = ?, email = ?, birthdate = ?, gender = ?, permission = ? WHERE user_id = ?', [name, phoneNumber, email, birthdate, gender, permission, userId]);
    console.log(`update User with ID ${userId}:`, result);
    return result;
}

// 유저 삭제
async function deleteUser(userId) {
    const [result] = await pool.query('DELETE FROM Users WHERE user_id = ?', [userId]);
    console.log(`delete User with ID ${userId}:`, result);
    return result;
}

// Client

// 특정 클라이언트 조회
async function getClient(clientId) {
    const [rows, fields] = await pool.query('SELECT * FROM Client WHERE client_id = ?', [clientId]);
    console.log(`get Client with ID ${clientId}:`, rows);
    return rows;
}

// 클라이언트 생성
async function createClient(name, address, phoneNumber, status) {
    const [result] = await pool.query('INSERT INTO Client (name, address, phone_number, status) VALUES (?, ?, ?, ?)', [name, address, phoneNumber, status]);
    console.log('create Client:', result);
    return result;
}

// 클라이언트 정보 업데이트
async function updateClient(clientId, name, address, phoneNumber, status) {
    const [result] = await pool.query('UPDATE Client SET name = ?, address = ?, phone_number = ?, status = ? WHERE client_id = ?', [name, address, phoneNumber, status, clientId]);
    console.log(`update Client with ID ${clientId}:`, result);
    return result;
}

// 클라이언트 삭제
async function deleteClient(clientId) {
    const [result] = await pool.query('DELETE FROM Client WHERE client_id = ?', [clientId]);
    console.log(`delete Client with ID ${clientId}:`, result);
    return result;
}

// PolicyInfo

// 특정 정책 정보 조회
async function getPolicyInfo(policyId) {
    const [rows, fields] = await pool.query('SELECT * FROM PolicyInfo WHERE policy_id = ?', [policyId]);
    console.log(`get PolicyInfo with ID ${policyId}:`, rows);
    return rows;
}

// 정책 정보 생성
async function createPolicyInfo(age, region, assets, annualIncome, vulnerableGroup, description) {
    const [result] = await pool.query('INSERT INTO PolicyInfo (age, region, assets, annual_income, vulnerable_group, description) VALUES (?, ?, ?, ?, ?, ?)', [age, region, assets, annualIncome, vulnerableGroup, description]);
    console.log('create PolicyInfo:', result);
    return result;
}

// 정책 정보 업데이트
async function updatePolicyInfo(policyId, age, region, assets, annualIncome, vulnerableGroup, description) {
    const [result] = await pool.query('UPDATE PolicyInfo SET age = ?, region = ?, assets = ?, annual_income = ?, vulnerable_group = ?, description = ? WHERE policy_id = ?', [age, region, assets, annualIncome, vulnerableGroup, description, policyId]);
    console.log(`update PolicyInfo with ID ${policyId}:`, result);
    return result;
}

// 정책 정보 삭제
async function deletePolicyInfo(policyId) {
    const [result] = await pool.query('DELETE FROM PolicyInfo WHERE policy_id = ?', [policyId]);
    console.log(`delete PolicyInfo with ID ${policyId}:`, result);
    return result;
}

// Checklist

// 특정 체크리스트 조회
async function getChecklist(checklistId) {
    const [rows, fields] = await pool.query('SELECT * FROM Checklist WHERE checklist_id = ?', [checklistId]);
    console.log(`get Checklist with ID ${checklistId}:`, rows);
    return rows;
}

// 체크리스트 생성
async function createChecklist(commentId, consultantId, clientId, date, question, answer1, answer2, answer3, answer4, selectedAnswer) {
    const [result] = await pool.query('INSERT INTO Checklist (comment_id, consultant_id, client_id, data, question, answer1, answer2, answer3, answer4, selected_answer) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [commentId, consultantId, clientId, date, question, answer1, answer2, answer3, answer4, selectedAnswer]);
    console.log('create Checklist:', result);
    return result;
}

// 체크리스트 업데이트
async function updateChecklist(checklistId, commentId, consultantId, clientId, date, question, answer1, answer2, answer3, answer4, selectedAnswer) {
    const [result] = await pool.query('UPDATE Checklist SET comment_id = ?, consultant_id = ?, client_id = ?, data = ?, question = ?, answer1 = ?, answer2 = ?, answer3 = ?, answer4 = ?, selected_answer = ? WHERE checklist_id = ?', [commentId, consultantId, clientId, date, question, answer1, answer2, answer3, answer4, selectedAnswer, checklistId]);
    console.log(`update Checklist with ID ${checklistId}:`, result);
    return result;
}

// 체크리스트 삭제
async function deleteChecklist(checklistId) {
    const [result] = await pool.query('DELETE FROM Checklist WHERE checklist_id = ?', [checklistId]);
    console.log(`delete Checklist with ID ${checklistId}:`, result);
    return result;
}

// ConsultationComment

// 특정 상담 코멘트 조회
async function getConsultationComment(commentId) {
    const [rows, fields] = await pool.query('SELECT * FROM ConsultationComments WHERE comment_id = ?', [commentId]);
    console.log(`get ConsultationComment with ID ${commentId}:`, rows);
    return rows;
}

// 상담 코멘트 생성
async function createConsultationComment(consultantId, clientId, comment, dateWritten) {
    const [result] = await pool.query('INSERT INTO ConsultationComments (consultant_id, client_id, comment, date_written) VALUES (?, ?, ?, ?)', [consultantId, clientId, comment, dateWritten]);
    console.log('create ConsultationComment:', result);
    return result;
}

// 상담 코멘트 업데이트
async function updateConsultationComment(commentId, consultantId, clientId, comment, dateWritten) {
    const [result] = await pool.query('UPDATE ConsultationComments SET consultant_id = ?, client_id = ?, comment = ?, date_written = ? WHERE comment_id = ?', [consultantId, clientId, comment, dateWritten, commentId]);
    console.log(`update ConsultationComment with ID ${commentId}:`, result);
    return result;
}

// 상담 코멘트 삭제
async function deleteConsultationComment(commentId) {
    const [result] = await pool.query('DELETE FROM ConsultationComments WHERE comment_id = ?', [commentId]);
    console.log(`delete ConsultationComment with ID ${commentId}:`, result);
    return result;
}



module.exports = {
    runDbFunction,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getClient,
    createClient,
    updateClient,
    deleteClient,
    getPolicyInfo,
    createPolicyInfo,
    updatePolicyInfo,
    deletePolicyInfo,
    getChecklist,
    createChecklist,
    updateChecklist,
    deleteChecklist,
    getConsultationComment,
    createConsultationComment,
    updateConsultationComment,
    deleteConsultationComment,
};
