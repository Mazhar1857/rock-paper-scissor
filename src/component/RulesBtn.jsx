import React from 'react'
import './RulesBtn.css'

function RulesBtn({ handleRule }) {
    return (
        <div className='rule-btn'>
            <button onClick={handleRule}>RULES</button>
        </div>
    )
}

export default RulesBtn
