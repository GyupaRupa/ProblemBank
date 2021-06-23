module.exports = {

    // SELECT 
    selectContests: "select * from problems.plass_contests",
    selectProblemIdFromRel: "select problem_id from problems.plass_contest_problem_rel where contest_id = ?",
    selectProblemsInContest: "select * from problems.plass_problems where id in (?)",

    // INSERT
    
    // DELETE
    
}
