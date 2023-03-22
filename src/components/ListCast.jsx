import { useState, useEffect } from "react";

export default () => {
  // use state has an initial value of an array so it will know how to handle json file
  const [cast, setCast] = useState([]);

  // async and await tell the fetch to do things in order
  //happens after DOM is done rendering
  async function fetchCast() {
    // await tells the function to wait for info to be fetched from json file and assigned to const 
    const response = await fetch('cast.json');
    //then wait until the data has been parsed before calling the setCast function
    setCast(await response.json());
  }
// calls the fetchCast function
  useEffect(() => {
    fetchCast();
  });
// returns data in a grid layout based on below properties
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: `1rem`,
      marginBottom: '1rem'
    }}>
      {/* iterates over the cast variable and for each member */}
      {cast.map(member => ( 
      //set an id so when div is created, each img has its own id set to the key 
      //and then tell it to show name when img is hoovered over
        <a key={member.id} data-tooltip={member.name}>
          {/* path to photos */}
        <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        </a>
      ))}
      
    </div>
  )
}