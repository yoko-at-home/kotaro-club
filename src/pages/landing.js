import React, { useState, useEffect, useRef } from 'react'
import Break from '../components/Break'
import Session from '../components/Session'
import TimeLeft from '../components/TimeLeft'
import Over40 from '../assets/img/icon.png'
import meow from '../assets/audio/meow.mp4'
import meowBaby from '../assets/audio/meow-baby.mp3'

function Landing() {
  const audioElement = useRef(null)
  const audioElementBaby = useRef(null)
  const [currentSessionType, setCurrentSessionType] = useState('🐈...🏃‍♀️') // '🐈...🏃‍♀️' or '☕︎..☕️'
  const [intervalId, setIntervalId] = useState(null)
  const [sessionLength, setSessionLength] = useState(60 * 25)
  const [breakLength, setBreakLength] = useState(60 * 5)
  const [timeLeft, setTimeLeft] = useState(sessionLength)

  // change timeLeft whenever sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength)
  }, [sessionLength])

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60

    if (newBreakLength < 0) {
      setBreakLength(0)
      setCurrentSessionType('🐈...🏃‍♀️')
    } else {
      setBreakLength(newBreakLength)
    }
  }

  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60)
  }

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60

    if (newSessionLength < 0) {
      setSessionLength(0)
      audioElement.current.play()
      setCurrentSessionType('☕︎..☕️')
    } else {
      setSessionLength(newSessionLength)
    }
  }

  const incrementSessionLengthByOneMinute = () => {
    setSessionLength(sessionLength + 60)
  }

  const isStarted = intervalId !== null
  const handleStartStopClick = () => {
    if (isStarted) {
      // if we are in started mode:
      // we want to stop the timer
      // clearInterval
      clearInterval(intervalId)
      setIntervalId(null)
    } else {
      // if we are in stopped mode:
      // decrement timeLeft by one every second (1000 ms)
      // to do this we'll use setInterval
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1
          }
          // time left is less than zero
          audioElement.current.play()
          // if session:
          if (currentSessionType === '🐈...🏃‍♀️') {
            // switch to break
            setCurrentSessionType('☕︎..☕️')
            // setTimeLeft to breakLength
            setTimeLeft(breakLength)
          }
          // if break:
          else if (currentSessionType === '☕︎..☕️') {
            // switch to session
            setCurrentSessionType('🐈...🏃‍♀️')
            // setTimeLeft to sessionLength
            setTimeLeft(sessionLength)
          }
        })
      }, 100) // TODO: turn back into 1000
      setIntervalId(newIntervalId)
    }
  }

  const handleResetButtonClick = () => {
    // reset audio
    audioElement.current.load()
    audioElementBaby.current.load()
    audioElementBaby.current.play()
    // clear the timeout interval
    clearInterval(intervalId)
    // set the intervalId null
    setIntervalId(null)
    // set the sessiontype to '作業中'
    setCurrentSessionType('🐈...🏃‍♀️')
    // reset the session length to 25 minutes
    setSessionLength(60 * 25)
    // reset the break length to 5 minutes
    setBreakLength(60 * 5)
    // reset the timer to 25 minutes (initial session length)
    setTimeLeft(60 * 25)
  }

  return (
    <div className='main'>
      <div class='container'>
        <div class='left'>
          <div className='h1' id='kotaro'>
            Meow You Ready?{' '}
          </div>
          <div class='controls__wrapper'>
            <Session
              sessionLength={sessionLength}
              decrementSessionLengthByOneMinute={
                decrementSessionLengthByOneMinute
              }
              incrementSessionLengthByOneMinute={
                incrementSessionLengthByOneMinute
              }
            />
            <Break
              breakLength={breakLength}
              decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
              incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
            />

            <TimeLeft
              handleStartStopClick={handleStartStopClick}
              timerLabel={currentSessionType}
              startStopButtonLabel={isStarted ? 'Stop' : 'Start'}
              timeLeft={timeLeft}
            />
            <button
              class='btn_reset'
              id='reset'
              onClick={handleResetButtonClick}
            >
              Reset
            </button>
          </div>
          <audio id='beep' ref={audioElement}>
            <source src={meow} type='audio/mp4' />
          </audio>
          <audio id='beep' ref={audioElementBaby}>
            <source src={meowBaby} type='audio/mp3' />
          </audio>
        </div>
        <div class='right'>
          <div class='composition'>
            <a href='https://over40webclub.netlify.app/' target='_blank'>
              <img class='composition__photo' src={Over40} />
            </a>
          </div>
        </div>
      </div>
      <div class='container__ad_side'>
        <div class='ad'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          necessitatibus fugiat eius modi repellendus ipsum doloribus earum
          laudantium pariatur!
        </div>
        <div class='ad'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          necessitatibus fugiat eius modi repellendus ipsum doloribus earum
          laudantium pariatur!
        </div>
      </div>
    </div>
  )
}

export default Landing
