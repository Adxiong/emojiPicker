/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-03-15 23:24:09
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-03-16 17:32:22
 */
import React, { useEffect, useState } from "react"
import emojis from "./emoji"
import style from "./styles/emojiiPicker.module.less"

interface emojiTableType {
  [propName: string]: {
    [propName: string]: string
  }[]
}

interface Props {
  clickEmoji: (emoji: string) => void
}

const EmojiPicker = (props: Props) => {
  const [emojiTable, setEmojiTable] = useState<emojiTableType[]>([])
  useEffect( () => {
    generateEmojiTable()
  }, [])

  const generateEmojiTable = () => {
    const data: emojiTableType[] = []
    for (const category in emojis){
      let categoryList: {[propName: string]: string}[] = []
      for (const emoji in emojis[category]) {
        categoryList.push({
          [emoji]: emojis[category][emoji]
        })
      }
      data.push({[category]:categoryList})
    }
    setEmojiTable(data)
  }
  
  const clickEmoji = (e) => {
    if (e.target.localName === 'span') {      
      props.clickEmoji(e.target.innerText)
    }
    e.preventDefault()
    
  }
  
  return (
    <div className={style.emojiPicker} style={{width: 400, height: 200}} onClick={clickEmoji}>
      {
        emojiTable.map( (category, index) => {
          return category[Object.keys(category)[0]].map( (emoji, index) => {
            return <span className={style.emoji} key={Object.keys(emoji)[0]+index}>{emoji[Object.keys(emoji)[0]]}</span>
          })
        })
      }
    </div>
  )
}


export default EmojiPicker