import React, {useState, useRef} from 'react';
import "./longTerm.css";

export default function LongTerm() {
    const [ goals, setGoals ] = useState([]);
    const goalEntry = useRef();
// Container Open = False, Container Collapsed = True
    const [ containerHeight, setContainerHeight] = useState(false);
    let styleHeight = containerHeight ? "5vh" : "30vh";
  
    function toggleHeight(){
      setContainerHeight(prevContainerHeight => !prevContainerHeight);
    }

    // On Button Click, update state with goals and clear input
    function handleSubmit(){
      setGoals([...goals, goalEntry.current.value]);
      goalEntry.current.value = null;
    }

  return (
    <section
      style={{height: styleHeight}}
    >
      <h3 onClick={toggleHeight}>Long Term Goals</h3>
      <div className='details'>
        <div className='checklist'>
          {goals.map((goals)=>{
            return <p key={goals}>{goals}</p>
          })}
        </div>
        <aside className='checklist'>
          <div className='aside__details'>
            <h4>What goals are you working towards in the long run?</h4>
            <p>To achieve your long-term goals, it’s a good idea to incorporate some short-term goals into the process.</p>
          </div>
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
