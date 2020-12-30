import moment from 'moment'
import React from 'react'

const Session = ({
  sessionLength,
  decrementSessionLengthByOneMinute,
  incrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes()
  return (
    <>
      <div class='title' id='session-label'>
        集中する時間
      </div>
        <div class='text' id='session-length'>
          {sessionLengthInMinutes}
        </div>
        <div class='controls'>
          <button
            class='btn'
            id='session-decrement'
            onClick={decrementSessionLengthByOneMinute}
          >
            -
          </button>
          <button
            class='btn'
            id='session-increment'
            onClick={incrementSessionLengthByOneMinute}
          >
            +
          </button>
        </div>
    </>
  )
}

export default Session
