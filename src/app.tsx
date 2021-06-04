import React from 'react'
import 'Src/app.scss'
import math from 'Utils/math'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props
  return (
    <div className="app">
      <span>{`你好,我是${name}，今年${age}岁`}</span>
      <h1>{math.add(10, 12)}</h1>
    </div>
  )
}

export default App
