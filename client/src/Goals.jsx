import React, {useEffect, useRef, useState} from 'react';

export default function Goals() {
    const [ goals, setGoals ] = useState([]);
    const goalEntry = useRef(); // Text Input

    // Maps over the given input text
    const mappedGoals = goals.map((givenGoals)=> {
      return (
        <p key={givenGoals.title}>{givenGoals.title}</p>
      )
    });

    // Update state with goals, sends a POST request to the DB
    async function handleSubmit(){
      if (goals.includes(goalEntry.current.value)){
        console.log("Goal already exists.")
        return 
      }
      // Creating the POST Request function
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
      // Creating item and calling POST request
      const item = await createGoal({type: "longTerm", title: goalEntry.current.value});
      setGoals([...goals, item]);
      // Clears the input text
      goalEntry.current.value = null;
      // console.log(item)
    }



    // DELETE Request. Clears DB and State. 
    async function clear(){
      await fetch("http://localhost:4000/Goals",{
        method: "DELETE"
      })
      .then(setGoals([]))
    }



    // Sends a GET request to the DB to get the saved goals.
    useEffect(()=>{
      // Initializing the GET request
      async function getRequest(url){
        const response = await fetch(url);
        const data = await response.json();
        return data
      }
      // Calling GET Request Function
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
    <section>

        {/* Goals and Clear Button */}
        <main>
          <div className='goals__container'>{mappedGoals}</div>
          <button onClick={clear} id='btn'>Clear</button>
        </main>

        {/* Input and Enter Button */}
        <div className='input__container'>
          <h4>What goals are you working towards?</h4>
          <div className='input__controls'>
            <input 
              type="text" 
              placeholder="Goals"
              ref={goalEntry}
              onKeyDown={e => {if (e.key === "Enter") handleSubmit(e)}}
              id='input__text'
            />
            <button onClick={handleSubmit} id='btn'>Enter</button>
          </div>
        </div>

    </section>
  )
}
