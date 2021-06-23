import React, { useState } from 'react'
import './style.scss'
import { getContestProblem } from '../../../../_actions/contestAction'
import { useDispatch, useSelector } from 'react-redux';
import ContestProblemDisplayTable from '../../components/ContestProblemDisplayTable';
import ContestProblemsLayout from '../../../../layouts/ContestProblemsLayout';

function ContestProblemsPage(props) {
    const id = props.location.search.split('=')[1];
    const params = {
        'id': id,
    }

    const [problems, setProblems ] = useState([]);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getContestProblem(params)).then(response => {
            const { data } = response.payload;
            setProblems(data)
        })
    }, [])
    console.log(problems)

    return (
        <ContestProblemsLayout>
            <div className="ContestProblem__page">
                <div className="container">
                    <div className="wrapper__problems">
                        {
                            <ContestProblemDisplayTable problems = {problems} />

                        }
                    </div>
                </div>
            </div>
        </ContestProblemsLayout>
    )
}

export default ContestProblemsPage

