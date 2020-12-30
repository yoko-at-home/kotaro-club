import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import React from 'react'

momentDurationFormatSetup(moment)

const TimeLeft = ({
  handleStartStopClick,
  startStopButtonLabel,
  timeLeft,
  timerLabel,y
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, 's')
    .format('mm:ss', { trim: false })
  return (
    <div>
      <div class='text_timerlabel' id='timer-label'>
        {timerLabel}
      </div>
      <div class='text' id='time-left'>
        {formattedTimeLeft}
      </div>
      <button class='btn_start' id='start_stop' onClick={handleStartStopClick}>
        {startStopButtonLabel}
      </button>
    </div>
  )
}

export default TimeLeft
