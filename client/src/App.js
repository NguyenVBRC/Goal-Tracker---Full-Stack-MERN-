import React, {useState} from 'react'
import LongTerm from './components/LongTerm/LongTerm'
import ShortTerm from './components/ShortTerm/ShortTerm'
import CheckList from './components/Checklist/CheckList'

import "./App.css"

export default function App() {
  const [ goals, setGoals ] = useState(["Get Engineering Job", "Graduate with CS degree"]);
  return (
    <main className='main__container'>
        <LongTerm goals={goals}/>
        <ShortTerm />
        <CheckList />
    </main>
  )
}
