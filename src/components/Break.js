import moment from 'moment'
import React from 'react'

const Break = ({
  breakLength,
  decrementBreakLengthByOneMinute,
  incrementBreakLengthByOneMinute,
}) => {
  const breakLengthInMinutes = moment.duration(breakLength, 's').minutes()
  return (
    <div>
      <div class='title' id='break-label'>
        休憩する時間
      </div>
      <div class='text' id='break-length'>
        {breakLengthInMinutes}
      </div>
      <div class='controls'>
        <button
          class='btn'
          id='break-decrement'
          onClick={decrementBreakLengthByOneMinute}
        >
          -
        </button>
        <button
          class='btn'
          id='break-increment'
          onClick={incrementBreakLengthByOneMinute}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Break
