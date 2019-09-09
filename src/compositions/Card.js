import React from 'react';


export default function Card(props){
    console.log('props thats passed into Card', props)
    return (
    <div className='Card'>
                <button type="button" onClick= {() => props.onClickDelete(props.id)}>delete</button>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
    </div>
    )
}