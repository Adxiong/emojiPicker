/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-03-15 23:15:28
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-03-16 17:34:52
 */
import { useRef, useState } from 'react'
import EmojiPicker from './components/emojiPicker/emojiPicker'
import './App.css'

function App() {
  const [EmojiDisplay, setEmojiDisplay] = useState<boolean>(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [textareaValue, setTextareaValue ] = useState<string>()
  const clickEmoji = (emoji: string) => {
    setTextareaValue(textareaValue+emoji)
    textareaRef.current?.focus()  
    showEmoji()
  }
  const showEmoji = () => {
    setEmojiDisplay(!EmojiDisplay)
  }
  const textAreaChange = () => {
    setTextareaValue(textareaRef.current?.value)
    
  }
  const send = () => {
    console.log(textareaRef.current?.value);
    
  }
  return (
    <div className="App">
      <div>
        <span onClick={showEmoji}>emoji</span>
        {
          EmojiDisplay && <EmojiPicker clickEmoji={clickEmoji}/>
        } 
      </div>
      <div>
        <textarea ref={textareaRef} cols={30} rows={20} value={textareaValue} onChange={textAreaChange}></textarea>
      </div>
      <button onClick={send}>发送</button>
    </div>
  )
}

export default App
