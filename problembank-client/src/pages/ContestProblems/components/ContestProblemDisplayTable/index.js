import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import './style.scss'
var moment = require('moment');

function ProblemDisplayTable(props) {
    const { problems } = props;
    return (
        <table className="table table-contribution">
            <thead>
                <tr>
                    <th width = "5%">번호</th>
                    <th width = "95%">제목</th>
                </tr>
            </thead>
            <tbody>
                {
                    problems.map((item,index) => {
                        return (
                            <tr key = {index} onClick={() => props.history.push('/problem/view?id=1')}>
                                <th>{index+1}</th>
                                <td>{item.name}</td>
                            </tr>
                        )
                    })
                }
            </tbody>     
        </table>
    )
}
export default withRouter(ProblemDisplayTable)

