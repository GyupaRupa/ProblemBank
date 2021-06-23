import React from 'react'
import Header from '../components/Header';

function ContestLayout(props) {
    const { children } = props;
    return (
        <div className="row">
            <Header/>
            <div className="body-container">
                { children }
            </div>
        </div>
    )
}


export default ContestLayout

