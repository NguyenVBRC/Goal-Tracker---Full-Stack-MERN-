import React, {useEffect, useRef, useState} from 'react';
import "./longTerm.css";

export default function LongTerm() {
    const [ goals, setGoals ] = useState([]);
    const goalEntry = useRef(); // Text Input
    const [ containerHeight, setContainerHeight] = useState(false);

    // Maps over the given input text
    const mappedGoals = goals.map((givenGoals)=> {
      return (
        <p key={givenGoals.title}>{givenGoals.title}</p>
      )
    }

    );
    //On Click, Changes Height
    let styleHeight = containerHeight ? "50px" : "300px";
    //On Click, Changes Opacity
    let toggleDisplay = containerHeight ? "0" : "1";
    // Technically toggles height and opacity
    function toggleHeight(){
      setContainerHeight(prevContainerHeight => !prevContainerHeight);
    }

    // On Click, update state with goals, sends a POST request to save the goals to the DB, and clears input text
    async function handleSubmit(){
      if (goals.includes(goalEntry.current.value)){
        console.log("Goal already exists.")
        return 
      }

      async function createGoal(goal){
        const response = await fetch("http://localhost:4000/Goals",{
          body: JSON.stringify(goal),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          mode: "cors",
        });
        return response.json();
      }
      const item = await createGoal({type: "longTerm", title: goalEntry.current.value});
      setGoals([...goals, item]);
      goalEntry.current.value = null;
      console.log(item)
    }

<<<<<<< HEAD
    // DELETE Request. Clears DB and State. 
    async function clearGoals(){
      await fetch("http://localhost:4000/Goals",{
        method: "DELETE"
      })
      .then(setGoals([]))
=======
    // Change into a delete request.
    function clearGoals(){
      setGoals([]);
>>>>>>> 44772e613bed7f94f15dad3983f9113c324f83aa
    }

    // Initializing the GET request
    async function getRequest(url){
      const response = await fetch(url);
      const data = await response.json();
      return data
    }

    // On Page loads, sends a GET request to the DB to get the saved goals.
    useEffect(()=>{
      getRequest("http://localhost:4000/Goals")
        .then(data => {
          setGoals(data);
          console.log(`Fetch Data:`, data)
        })
        .catch(error => {
          console.error("Error:", error);
        })
    }, [])

  return (
    <section style={{height: styleHeight}}>
      <h3 onClick={toggleHeight}>Long Term Goals</h3>
      <div className='details' style={{opacity:toggleDisplay}}>
        {/* Maps over goals state and renders to page */}
        <div className='checklist' >
          <div id='checklist__goals'>
            {mappedGoals}
          </div>
          <button onClick={clearGoals} id="goal__button">Clear</button>
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
              onKeyDown={e => {if (e.key === "Enter") handleSubmit(e)}}
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
