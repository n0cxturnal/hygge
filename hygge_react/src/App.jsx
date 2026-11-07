import { useState } from 'react'
import './App.css'

function RoomStatus(){
  return (
    <>
    <div id="roomMenu" className="widget">
      <button id="roomHome">home</button>
      <button id="settings"></button>
      <p id="roomName">room title</p>
      <button id="shareButton">add ur friends twin</button>
    </div>
    </>
  )
}
function GuestList(){
  return (
    <>
    <div id="guestList" className="widget">
      <ul id="guestIcons">
        <li className="pfpicon">pfp1</li>
        <li className="pfpicon">pfp2</li>
        <li className="pfpicon">pfp3</li>
      </ul>
      <button id="addGuest">add a user</button>
    </div>
    </>
  )
}
function Dashboard(){
  return (
    <>
    <div id="dashboard" className="widget">
      {/* Timer */}
      <div className="dashWidget" id="timerWidget">
        <header className="widgetLabel" id="timerLabel">
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
      <div className="dashWidget" id="todoWidget">
        <header className="widgetLabel" id="todoLabel">
          To-do List
        </header>
        <ol id="taskList">
          <li>study<input className="check" type="checkbox" /></li>
          <li>get burnt tf out<input className="check" type="checkbox" /></li>
          <li>repeat<input className="check" type="checkbox" /></li>
        </ol>
        <footer>
          <input type="text" placeholder="add a task..." id="taskInput"/>
        </footer>
      </div>
    </div>
    {/* Chatbox */}
    <div className="dashWidget" id="chatWidget">
      <header className="widgetLabel" id="chatLabel"></header>
      <p id="chat"></p>
      <footer>
        <div id="typeBox">
          <textarea id="chatBox" name="chatBox" placeholder="yap here"></textarea>
          <input type="submit" label="send" id="sendButton"/>
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
    <nav>
      <RoomStatus />
    </nav>
      <div id="roomContainer">
        <p>hygge ultra mega alpha version (wip)</p>
        <GuestList />
        <Dashboard />
      </div>
    </>
  )
}

export default App
