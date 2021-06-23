var express = require('express');
var router = express.Router();
var db = require('../modules/db-connection');
var sql = require('../sql');
var checkLoginMiddleWare = require('../modules/check-login-middleware');
var randomstring = require("randomstring");
var fileController = require('../modules/file-controller');
var path = require('path');

// Check user for api
// router.use(checkLoginMiddleWare.injectUerforAPI)

//전체대회 출력함
router.get('/contestsdata', async function(req, res) {
    try {
        let [rows] = await db.query(sql.contests.selectContests)

        res.status(200).send({
            result : true,
            data: rows,
            message : '전체 경진대회 리스트'
        })
        
    } catch (error) {
        console.log("Problems Data" + error)
    }
    
})

//대회 문제 출력
router.get('/problemdata', async function(req, res) {
    id = req.query['id']
    try {
        let [rows] = await db.query(sql.contests.selectProblemIdFromRel,[id])
        let ids = []
        for(let i = 0; i < rows.length; i++){
            ids.push(rows[i]['problem_id'])
        }
        let [datas] = await db.query(sql.contests.selectProblemsInContest,[ids])
        res.status(200).send({
            result : true,
            data: datas,
            message : '경진대회 문제 리스트'
        })
        
    } catch (error) {
        console.log("Problems Data" + error)
    }
    
})


module.exports = router;