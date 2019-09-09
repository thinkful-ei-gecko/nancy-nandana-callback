import React from 'react';
import Card from './Card'


export default function List(props){

    console.log('props passing into LIST', props)

  
    return(<section className="List">
    <header className="List-header">
       <h2>{props.header}</h2>
    </header>
    <div className='List-cards'>
        {
            props.cards.map((card) => (
                <Card 
                    key = {card.id}
                    id= {card.id}
                    title = {card.title}
                    content = {card.content}
                    onClickDelete = {props.onClickDelete}
                />
            ))
       
        }
        <button type="button" onClick={ () => props.onClickAdd(props.id)
            } className="List-add-button">
              + Add Random Card
        </button>
 
    </div>
    </section>
    );
}

List.defaultProps = {
    onClickAdd: () => {},
  }