import React, { useEffect, useState } from 'react'
import './Result.css'
import Paper from './Paper'
import Scissor from './Scissor'
import Rock from './Rock'
const Result = ({ handlePlayAgain, housePick, yourPick, result, status }) => {

    const [shadow, setShadow] = useState('add');

    useEffect(() => {
        if (status) {
            const interval = setInterval(() => {
                setShadow((pre) => {
                    return pre === 'add' ? 'remove' : 'add';
                })
            }, 1000);

            return () => clearInterval(interval);
        }

    })

    return (
        <div className={`result ${status ? 'declared' : ''}`}>

            <div className='col you'>YOU PICKED</div>
            <div className='col house'>THE HOUSE PICKED</div>
            <div className='btn'>
                <div>
                    <div>{result && (result === 'TIE' ? 'TIE' : `YOU ${result}`)}</div>
                    <button onClick={handlePlayAgain}>PLAY AGAIN</button>
                </div>
            </div>
            <section className={`you-picked ${result === 'WON' ? 'won' : 'lose'}`}>
                <div className={`${result === 'WON' ? 'won' : ''} ${shadow} ${yourPick === 'scissor' ? 'unhide' : 'hide'}`}><Scissor /></div>
                <div className={`${result === 'WON' ? 'won' : ''} ${shadow} ${yourPick === 'rock' ? 'unhide' : 'hide'}`}><Rock /></div>
                <div className={`${result === 'WON' ? 'won' : ''} ${shadow} ${yourPick === 'paper' ? 'unhide' : 'hide'}`}><Paper /></div>

            </section>
            <section className={`house-picked ${result === 'LOSE' ? 'won' : 'lose'}`}>
                <div></div>
                <div className={`${result === 'LOSE' ? 'won' : ''} ${shadow} ${housePick === 'rock' ? 'unhide' : 'hide'}`}><Rock /></div>
                <div className={`${result === 'LOSE' ? 'won' : ''} ${shadow} ${housePick === 'paper' ? 'unhide' : 'hide'}`}><Paper /></div>
                <div className={`${result === 'LOSE' ? 'won' : ''} ${shadow} ${housePick === 'scissor' ? 'unhide' : 'hide'}`}><Scissor /></div>
            </section>

        </div>
    )
}

export default Result
