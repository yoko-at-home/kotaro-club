import React from 'react'
import '../App.css'

function Footer() {
  return (
    <footer>
      <div className='container__ad_bottom'>
        <div className='howto'>
          <div className='ad'>ポモドーロタイマーの使い方</div>
          <ul style={{ paddingLeft: '1rem'}}>
            <li>タスクを決める</li>
            <li>25分集中 </li>
            <li>ニャーと聞こえたら5分休憩</li>
          </ul>
          深呼吸したり、瞑想したり、仕事とはまったく関係のないことをして脳を休ませ、
          ポモドーロを4回した後に長い休憩（20〜30分）を取ると効果が絶大だそうです。
        </div>
        <div className='ad'>琥太郎くんが鳴くよ♪</div>
      </div>
    </footer>
  )
}

export default Footer
