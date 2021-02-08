import React from 'react';

function PollRow(props) {
    return (
        <div className="row">
        <span>{props.count}</span>
        <span>{props.tool}</span>
        <button onClick={props.addVote}>Vote</button>
        </div>
    )
}

export default PollRow;