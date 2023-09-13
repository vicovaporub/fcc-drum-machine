import { useEffect, useState } from 'react'

import './App.css';

const AudioButtonTest = ({ audioSrc, buttonText, audioName, onSelect, onKeyPress, className = '' }) => {


  const handleButtonClick = async () => {
    const audioElement = document.getElementById(buttonText)
    document.getElementById('display').innerText = audioName
    await audioElement.play()

    onSelect(audioName)
  }

  return (
    <div 
      id={audioName}
      className={`${className} drum-pad`}
      onClick={handleButtonClick} 
      onKeyDown={onKeyPress}
      >

      <audio src={audioSrc} id={buttonText} className="clip"></audio>
      {buttonText}
    </div>

  )
}

const AllButtons = ({ onSelect }) => {
  return (
    <div id="allButtons">
      <AudioButtonTest className="eachButton" onSelect={onSelect} audioName="Heater 1" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" buttonText="Q" />
      <AudioButtonTest className="eachButton" onSelect={onSelect} audioName="Heater 2" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" buttonText="W" />
      <AudioButtonTest className="eachButton" onSelect={onSelect} audioName="Heater 3" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" buttonText="E" />
      <AudioButtonTest className="eachButton" onSelect={onSelect} audioName="Heater 4" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" buttonText="A" />
      <AudioButtonTest className="eachButton" onSelect={onSelect} audioName="Clap" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" buttonText="S" />
      <AudioButtonTest className="eachButton" onSelect={onSelect} audioName="Open-HH" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" buttonText="D" />
      <AudioButtonTest className="eachButton" onSelect={onSelect} audioName="Kick-n'-Hat" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" buttonText="Z" />
      <AudioButtonTest className="eachButton" onSelect={onSelect} audioName="Kick" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" buttonText="X" />
      <AudioButtonTest className="eachButton" onSelect={onSelect} audioName="Closed-HH" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" buttonText="C" />
    </div>
  )
}



const Display = ({selectedAudioName}) => {

  const defaultText = 'Choose a Button'
  
  return (
    <div id="display">{selectedAudioName ? selectedAudioName : defaultText}</div>
  )
}



const DrumMachine = () => {

  const [audioName, setAudioName] = useState('')

  const keyAudioList = {
    'KeyQ': 'Heater 1',
    'KeyW': 'Heater 2',
    'KeyE': 'Heater 3',
    'KeyA': 'Heater 4',
    'KeyS': 'Clap',
    'KeyD': 'Open-HH',
    'KeyZ': 'Kick-n\'-Hat',
    'KeyX': 'Kick',
    'KeyC': 'Closed-HH'
  }

  const handleKeyDown = (e) => {
    const audioId = keyAudioList[e.code]
    const buttonElement = document.getElementById(audioId)

    if (buttonElement) {
      setAudioName(audioId)
      buttonElement.click()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <main id="main">
      <section id="drum-machine">
        <Display selectedAudioName={audioName} />
        <AllButtons onSelect={setAudioName} />
      </section>
    </main>
  );
}

export default DrumMachine;
