import './App.css'
import { useEffect, useState } from 'react'

function Header ({ text }) {
  return <h3>{text}</h3>
}

function Container ({ toggle, handleToggle, text }) {
  return (
    <header className='App-header'>
      {toggle && <Header text={text} />}

      <button
        onClick={() => {
          handleToggle(!toggle)
        }}
      >
        {toggle ? 'Ocultar' : 'Mostrar'}
      </button>
    </header>
  )
}

function App () {
  const [toggle, setToggle] = useState(true)
  const [data, setData] = useState(null)
  const [dataTwo, setDataTwo] = useState(null)
  const [hasData, setHasData] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setData({ text: 'Esto funciona' })
    }, 1000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDataTwo({ age: 27 })
    }, 1000)
  }, [])

  useEffect(() => {
    if (data && dataTwo) {
      setHasData(true)
    }
  }, [data, dataTwo])

  return (
    <div className='App'>
      {hasData && (
        <Container text={data.text} toggle={toggle} handleToggle={setToggle} />
      )}
    </div>
  )
}

export default App
