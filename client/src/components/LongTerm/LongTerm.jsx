import React, {useState} from 'react';
import "./longTerm.css"

export default function LongTerm() {
    const [ longGoals, setLongGoals ] = useState(["test"]);
  
    // Container Open = False, Container Collapsed = True
    const [ containerHeight, setContainerHeight] = useState(false);
    let styleHeight = containerHeight ? "5vh" : "30vh";
  
    function toggleHeight(){
      setContainerHeight(prevContainerHeight => !prevContainerHeight);
      console.log(containerHeight)
    }

    // const goals = longGoals.map((e)=>{
    //   return (
    //     <p key={e}>{e}</p>
    //   )
    // })

  return (
    <section 
      // className='long__container' 
      style={{height: styleHeight}}
    >
      <h3 onClick={toggleHeight}>Long Term Goals</h3>
      <div className='details'>
        <div className='checklist'>
          {/* {goals} */}
        </div>
        <aside className='checklist'>
          <div className='aside__details'>
            <h4>What goals are you working towards in the long run?</h4>
            <p>To achieve your long-term goals, it’s a good idea to incorporate some short-term goals into the process.</p>
          </div>
          <input 
            type="text" 
            placeholder="Goals" 
            onChange={(e)=> {
              setLongGoals(...longGoals, e.target.value) 
              console.log(longGoals)
            }}
          />
        </aside>
      </div>
    </section>
  )
}
