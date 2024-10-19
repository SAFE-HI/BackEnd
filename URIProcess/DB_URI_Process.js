const express = require('express');
const router = express.Router();
const dbModule = require('../DB/db_api');

router.use(express.json());

// DB 모듈 라우팅
router.get('/', (req, res) => {
    dbModule.runDbFunction();
    res.send('DB module executed');
});

// USER ROUTES

// 특정 유저 조회
router.get('/users/:userId', async (req, res) => {
    try {
        const user = await dbModule.getUser(req.params.userId);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user');
    }
});

// 유저 생성
router.post('/users', async (req, res) => {
    const { name, phoneNumber, email, birthdate, gender, permission } = req.body;
    try {
        const result = await dbModule.createUser(name, phoneNumber, email, birthdate, gender, permission);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user');
    }
});

// 유저 정보 업데이트
router.put('/users/:userId', async (req, res) => {
    const { name, phoneNumber, email, birthdate, gender, permission } = req.body;
    try {
        const result = await dbModule.updateUser(req.params.userId, name, phoneNumber, email, birthdate, gender, permission);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating user');
    }
});

// 유저 삭제
router.delete('/users/:userId', async (req, res) => {
    try {
        const result = await dbModule.deleteUser(req.params.userId);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting user');
    }
});

// CLIENT ROUTES

// 특정 클라이언트 조회
router.get('/clients/:clientId', async (req, res) => {
    try {
        const client = await dbModule.getClient(req.params.clientId);
        res.json(client);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving client');
    }
});

// 클라이언트 생성
router.post('/clients', async (req, res) => {
    const { name, address, phoneNumber, status } = req.body;
    try {
        const result = await dbModule.createClient(name, address, phoneNumber, status);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating client');
    }
});

// 클라이언트 정보 업데이트
router.put('/clients/:clientId', async (req, res) => {
    const { name, address, phoneNumber, status } = req.body;
    try {
        const result = await dbModule.updateClient(req.params.clientId, name, address, phoneNumber, status);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating client');
    }
});

// 클라이언트 삭제
router.delete('/clients/:clientId', async (req, res) => {
    try {
        const result = await dbModule.deleteClient(req.params.clientId);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting client');
    }
});

// POLICY INFO ROUTES

// 특정 정책 정보 조회
router.get('/policies/:policyId', async (req, res) => {
    try {
        const policy = await dbModule.getPolicyInfo(req.params.policyId);
        res.json(policy);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving policy information');
    }
});

// 정책 정보 생성
router.post('/policies', async (req, res) => {
    const { age, region, assets, annualIncome, vulnerableGroup, description } = req.body;
    try {
        const result = await dbModule.createPolicyInfo(age, region, assets, annualIncome, vulnerableGroup, description);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating policy information');
    }
});

// 정책 정보 업데이트
router.put('/policies/:policyId', async (req, res) => {
    const { age, region, assets, annualIncome, vulnerableGroup, description } = req.body;
    try {
        const result = await dbModule.updatePolicyInfo(req.params.policyId, age, region, assets, annualIncome, vulnerableGroup, description);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating policy information');
    }
});

// 정책 정보 삭제
router.delete('/policies/:policyId', async (req, res) => {
    try {
        const result = await dbModule.deletePolicyInfo(req.params.policyId);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting policy information');
    }
});

// CHECKLIST ROUTES

// 특정 체크리스트 조회
router.get('/checklists/:checklistId', async (req, res) => {
    try {
        const checklist = await dbModule.getChecklist(req.params.checklistId);
        res.json(checklist);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving checklist');
    }
});

// 체크리스트 생성
router.post('/checklists', async (req, res) => {
    const { commentId, consultantId, clientId, date, question, answer1, answer2, answer3, answer4, selectedAnswer } = req.body;
    try {
        const result = await dbModule.createChecklist(commentId, consultantId, clientId, date, question, answer1, answer2, answer3, answer4, selectedAnswer);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating checklist');
    }
});

// 체크리스트 업데이트
router.put('/checklists/:checklistId', async (req, res) => {
    const { commentId, consultantId, clientId, date, question, answer1, answer2, answer3, answer4, selectedAnswer } = req.body;
    try {
        const result = await dbModule.updateChecklist(req.params.checklistId, commentId, consultantId, clientId, date, question, answer1, answer2, answer3, answer4, selectedAnswer);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating checklist');
    }
});

// 체크리스트 삭제
router.delete('/checklists/:checklistId', async (req, res) => {
    try {
        const result = await dbModule.deleteChecklist(req.params.checklistId);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting checklist');
    }
});

// CONSULTATION COMMENT ROUTES

// 특정 상담 코멘트 조회
router.get('/comments/:commentId', async (req, res) => {
    try {
        const comment = await dbModule.getConsultationComment(req.params.commentId);
        res.json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving consultation comment');
    }
});

// 상담 코멘트 생성
router.post('/comments', async (req, res) => {
    const { consultantId, clientId, comment, dateWritten } = req.body;
    try {
        const result = await dbModule.createConsultationComment(consultantId, clientId, comment, dateWritten);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating consultation comment');
    }
});

// 상담 코멘트 업데이트
router.put('/comments/:commentId', async (req, res) => {
    const { consultantId, clientId, comment, dateWritten } = req.body;
    try {
        const result = await dbModule.updateConsultationComment(req.params.commentId, consultantId, clientId, comment, dateWritten);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating consultation comment');
    }
});

// 상담 코멘트 삭제
router.delete('/comments/:commentId', async (req, res) => {
    try {
        const result = await dbModule.deleteConsultationComment(req.params.commentId);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting consultation comment');
    }
});

module.exports = router;
