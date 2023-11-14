import { useState } from 'react';
import './Votes.css'

const Votes = () => {

const [votes, setVotes] = useState({Chocolate: 0, Vanilla: 0, Strawberry: 0});


// Hint: Percentage is calculated as [votes for this flavor] / [total votes] * 100. 
/* <p>{((flavor.votes / totalVotes) * 100).toFixed(2)}%</p> */


  return (
    <section className='Votes'>
        <h2>Vote Here</h2>
        <button onClick={()=>setVotes()}>Chocolate</button>
        <button>Vanilla</button>
        <button>Strawberry</button>
    {votes === 0 &&  <p>No votes yet.</p>}
    <div className='graph chocolate'></div>
    <div className='graph vanilla'></div>
    <div className='graph strawberry'></div>
    </section>
  )




};


export default Votes;
