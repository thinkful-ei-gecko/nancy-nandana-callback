import React from 'react';
import List from './List';
import '../App.css'

function App(props) {
  return (
   <div className='main'> 
    <header>
      <h1>Trelloyes</h1>
    </header>
    <div className='list'>
    {
      props.store.lists.map(list => (
        <List 
          key = {list.id}
          header = {list.header}

          //what is the output? (is it the ids of each cardIds?)
          cards = {list.cardIds.map(id => props.store.allCards[id])}
          
        />
      ))
    }

    </div>

   </div>
  );
}

export default App;