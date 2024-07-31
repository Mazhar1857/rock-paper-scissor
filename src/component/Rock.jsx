import React from 'react'
import './rock.css'
import rockIcon from '../assets/icon-rock.svg'
const Rock = () => {
    return (
        <div className='rock'>
            <div>
                <div>
                    <img src={rockIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Rock
