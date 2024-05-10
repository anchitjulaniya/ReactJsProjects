import React from 'react';
import 'regenerator-runtime/runtime';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div id="buttonBox" className='h-[60px] px-8 flex justify-between items-center pb-8'>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]'>Copy To Clipboard</button>
      <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]' onClick={SpeechRecognition.startListening}>Start</button>
      <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]' onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]' onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;