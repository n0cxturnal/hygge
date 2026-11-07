import { useState } from 'react'
import './App.css'

function Dashboard(){
  return (
    <>
    <div id="dashboard" class="widget">
      {/* Timer */}
      <div class="dashWidget" id="timerWidget">
        <header class="widgetLabel" id="timerLabel">
          Timer
          </header>
        <div id="timer">
          00:00
        </div>
        <div id="timerPlay">
          <button>
            play
          </button>
        </div>
        <div id="timerReset">
          <button>
            reset
          </button>
        </div>
        <div></div> 
      </div>
      {/* To-do list */}
      <div class="dashWidget" id="todoWidget">
        <header class="widgetLabel" id="todoLabel">
          To-do List
        </header>
        <ol>
          <li>study<button class="check"></button></li>
          <li>get burnt tf out<button class="check"></button></li>
          <li>repeat<button class="check"></button></li>
        </ol>
        <footer>
          add a task
        </footer>
      </div>
    </div>
    {/* Chatbox */}
    <div class="dashWidget" id="chatWidget">
      <header class="widgetLabel" id="chatLabel"></header>
      <p id="chat"></p>
      <footer>
        <div id="typeBox">
          <div id="typeInput">yap here</div>
          <div id="sendContainer">
            <button>send</button>
          </div>
          </div>
      </footer>
    </div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>hygge</h1>
    </header>
      <div>
        <p>hygge ultra mega alpha version (wip)</p>
        <Dashboard />
      </div>
    </>
  )
}

export default App
