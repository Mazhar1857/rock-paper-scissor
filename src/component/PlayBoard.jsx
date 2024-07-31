import React, { useState } from 'react'
import './playBoard.css'
import triangle from '../assets/bg-triangle.svg'
import Paper from './Paper'
import Rock from './Rock'
import Scissor from './Scissor'
const PlayBoard = ({ handleYourPick }) => {

    return (
        <div className='play-board selecting selected result'>
            <img className={`triangle`} src={triangle} alt="" />
            <section className={`paper-section`} onClick={() => { handleYourPick('paper') }}><Paper /></section>
            <section className={`rock-section`} onClick={() => { handleYourPick('rock') }}><Rock /></section>
            <section className={`scissor-section`} onClick={() => { handleYourPick('scissor') }}><Scissor /></section>
        </div>
    )
}

export default PlayBoard
