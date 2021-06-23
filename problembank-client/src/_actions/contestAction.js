import problemAPI from '../apis/contests'
import {
    GET_CONTESTS_DATA,
    GET_CONTESTS_INFOR
}from './types.js'

export async function getContestData(){
    const request = problemAPI.getContestAllData()
    return {
        type: GET_CONTESTS_DATA,
        payload: request
    }
}

export async function getContestProblem(params){
    const request = problemAPI.getContestProblemAllData(params)
    return {
        type: GET_CONTESTS_DATA,
        payload: request
    }
}