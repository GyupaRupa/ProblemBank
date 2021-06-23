import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import './style.scss'
var moment = require('moment');

function ContestDisplayTable(props) {
    const { contests } = props;
    return (
        <table className="table table-contribution" align="center">
            <thead>
                <tr>
                    <th width = "60%">대회이름</th>
                    <th width = "15%">시작</th>
                    <th width = "15%">종료</th>
                    <th width = "10%">상태</th>
                </tr>
            </thead>
            <tbody>
                {
                    contests.map((item,index) => {
                        var url = '/contest/view?id=' + item.id
                        return (
                            <tr key = {index} onClick={() => props.history.push(url)}>
                                <td>{item.name}</td>
                                <th>{moment(item.start_date).format("YYYY-MM-DD HH:mm")}</th>
                                <th>{moment(item.end_date).format("YYYY-MM-DD HH:mm")}</th>
                                <td> 대기 </td>
                            </tr>
                        )
                    })
                }
            </tbody>     
        </table>
    )
}
export default withRouter(ContestDisplayTable)

