import React from 'react'
import './score.css'
const Score = ({ score }) => {
    return (
        <div className='score'>
            <div>
                <div>ROCK</div>
                <div>PAPER</div>
                <div>SCISSORS</div>
            </div>
            <div>
                <div>SCORE</div>
                <div>{score}</div>
            </div>
        </div>
    )
}

export default Score
