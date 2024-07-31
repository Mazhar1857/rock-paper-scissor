import React, { useEffect, useState } from 'react'
import './App.css'
import Score from './component/Score'
import PlayBoard from './component/PlayBoard'
import RulesBtn from './component/RulesBtn'
import Result from './component/Result'
import Rule from './component/Rule'

const App = () => {
  const [yourPick, setYourPick] = useState('');
  const [housePick, setHousePick] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState(false);
  const [rule, setRule] = useState('hide');

  const handleYourPick = (n) => {
    setYourPick(n);
  }

  const handlePlayAgain = () => {
    setYourPick('');
    setHousePick('');
    setResult('');
    setStatus('');
  }

  const handleRule = () => {
    setRule((pre) => {
      return pre === 'hide' ? 'show' : 'hide';
    })
  }

  useEffect(() => {
    let random = 0
    if (yourPick) {
      random = Math.floor((Math.random() * 3) + 1);
    }
    const time = setTimeout(() => {
      switch (random) {
        case 0:
          setHousePick('')
          break;
        case 1:
          setHousePick('rock')
          break;
        case 2:
          setHousePick('paper')
          break;
        case 3:
          setHousePick('scissor')
          break;
      }
    }, 1000);

    return () => clearTimeout(time);

  }, [yourPick])

  useEffect(() => {
    if (yourPick && housePick) {
      if (yourPick === 'rock') {
        switch (housePick) {
          case 'rock':
            setResult('TIE');
            break;
          case 'scissor':
            setResult('WON');
            break;
          case 'paper':
            setResult('LOSE');
            break;
        }
      } else if (yourPick === 'paper') {

        switch (housePick) {
          case 'rock':
            setResult('WON');
            break;
          case 'scissor':
            setResult('LOSE');
            break;
          case 'paper':
            setResult('TIE');
            break;
        }

      } else if (yourPick === 'scissor') {

        switch (housePick) {
          case 'rock':
            setResult('LOSE');
            break;
          case 'scissor':
            setResult('TIE');
            break;
          case 'paper':
            setResult('WON');
            break;
        }
      }
    }

  }, [yourPick, housePick])

  useEffect(() => {
    if (yourPick && housePick) {

      if (result === 'WON') {
        setScore((pre) => {
          return pre + 1;
        })
      }
      if (result === 'LOSE') {
        setScore((pre) => {
          return pre - 1;
        })
      }
    }
  }, [yourPick, housePick, result])


  useEffect(() => {
    if (result) {
      setStatus(true);
    }
  }, [result])

  return (
    <div className='container'>
      <Score score={score} />
      <section className={yourPick ? 'picked' : ''}><PlayBoard handleYourPick={handleYourPick} /></section>
      <section className={yourPick ? '' : 'picked'}><Result yourPick={yourPick} housePick={housePick} result={result} status={status} handlePlayAgain={handlePlayAgain} /></section>
      <RulesBtn handleRule={handleRule} />
      <section className={`rule-section ${rule}`}>
        <Rule />
      </section>
    </div>
  )
}

export default App
