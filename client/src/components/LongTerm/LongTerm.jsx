import React, {useEffect, useRef, useState} from 'react';
import "./longTerm.css";

export default function LongTerm() {
    // Goals are rendered and mapped over. 
    // The Reference is to the input on the right
    const [ goals, setGoals ] = useState([]);
    const goalEntry = useRef();
    // Container Open = False, Container Collapsed = True
    const [ containerHeight, setContainerHeight] = useState(false);
    let styleHeight = containerHeight ? "5vh" : "30vh";
    function toggleHeight(){
      setContainerHeight(prevContainerHeight => !prevContainerHeight);
    }

    // On Button Click, update state with goals and clears input
    function handleSubmit(){
      if (goals.includes(goalEntry.current.value)){
        console.log("Goal already exists.")
      } else {
        setGoals([...goals, goalEntry.current.value]);
        // Replace first paramenter of setItem to uuid?
        localStorage.setItem(goalEntry.current.value, goalEntry.current.value);
        console.log(Object.entries(localStorage));
        goalEntry.current.value = null;
      }
    }

    // Clear Goals
    function clearGoals(){
      setGoals([]);
      localStorage.clear()
    }

    // Loads saved goals to state on initial render only
    useEffect(()=>{
      setGoals(Object.values(localStorage));
    }, [])

  return (
    <section style={{height: styleHeight}}>
      <h3 onClick={toggleHeight}>Long Term Goals</h3>
      <div className='details'>
        {/* Maps over goals state and renders to page */}
        <div className='checklist' >
          <div id='checklist__goals'>
            {goals.map((goals)=>{
              return <p key={goals}>{goals}</p>
            })}
          </div>
          <button onClick={clearGoals}>Clear</button>
        </div>
        <aside className='checklist'>
          {/* Description and details what should be input */}
          <div className='aside__details'>
            <h4>What goals are you working towards in the long run?</h4>
            <p>To achieve your long-term goals, it’s a good idea to incorporate some short-term goals into the process.</p>
          </div>
          {/* Input and Button */}
          <div>
            <input 
              type="text" 
              placeholder="Goals"
              id='long__term__input'
              ref={goalEntry}
            />
            <button id="goal__button" onClick={handleSubmit}>
              Enter
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}
