import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { getContestData } from '../../../../_actions/contestAction'
import { useDispatch, useSelector } from 'react-redux';
import ContestDisplayTable from '../../components/ContestDisplayTable';
import TotalContestsLayout from '../../../../layouts/TotalContestsLayout';

function TotalContestsPage(props) {

    const [contests, setContests] = useState([]);

    const dispatch = useDispatch();


    React.useEffect(() => {
        dispatch(getContestData()).then(response => {
            const { data } = response.payload;
            setContests(data)
        })
    }, [])


    return (
        <TotalContestsLayout>
            <div className="totalproblems__page">
                <div className="container">
                    <div className="wrapper__problems">
                        {
                            <ContestDisplayTable contests={contests} />

                        }
                    </div>
                </div>
            </div>
        </TotalContestsLayout>
    )
}

export default TotalContestsPage

