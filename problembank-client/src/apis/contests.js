import axiosClient from './axios'

const contests = {
    getContestAllData: (params) => {
        const url = '/contests/contestsdata';
        return axiosClient.get(url);
    },
    getContestProblemAllData: (params) => {
        const url = '/contests/problemdata';
        return axiosClient.get(url, {params});
    },
}

export default contests;