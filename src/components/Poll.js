import React, {useState} from 'react';
import PollRow from './PollRow';

function Poll() {
    const [jsCount, setJsCount] = useState(0);
    const [pythonCount, setPythonCount] = useState(0);
    const [rubyCount, setRubyCount] = useState(0);
    const [javaCount, setJavaCount] = useState(0);

    const allCounters = [
        { name: "JavaScript", count: jsCount },
        { name: "Python", count: pythonCount },
        { name: "Ruby", count: rubyCount },
        { name: "Java", count: javaCount}
    ]

    let winner = allCounters.reduce((first, second) => {
        if (first.count > second.count) return first
        if (second.count > first.count) return second
        return {name: "No one"}
    })

    return (
        <div>
            <h1>WebDev Poll!</h1>
            <h3>Vote for your favorite WebDev Tool</h3>
            <h3>{winner.name} is winning!</h3>
            <PollRow count={jsCount} tool="JavaScript" addVote={ () => { setJsCount(jsCount+1) } } />
            <PollRow count={pythonCount} tool="Ruby" addVote={ () => { setPythonCount(pythonCount+1) }} />
            <PollRow count={rubyCount} tool="Python" addVote={ () => { setRubyCount(rubyCount+1) }} />
            <PollRow count={javaCount} tool="Java" addVote={() => { setJavaCount(javaCount + 1) }}/>
        </div>
    )
}
export default Poll;