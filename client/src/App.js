import React from 'react'
import LongTerm from './components/LongTerm/LongTerm'
// import ShortTerm from './components/ShortTerm/ShortTerm'
// import CheckList from './components/Checklist/CheckList'

import "./App.css"

export default function App() {
  return (
    <main className='main__container'>
        <LongTerm />
        {/* <ShortTerm />
        <CheckList /> */}
    </main>
  )
}
