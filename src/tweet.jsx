import React from 'react'

export default function tweet({id ,name,content,like,onDelete,onLike}) {

  

  

  return (
    <div>
        <div className='tweet'>
          <button className='delete' onClick={() => onDelete(id)}>X</button>
            <h3> {name} </h3>
            <p>{content} </p>
            <button onClick= {() => onLike(id)} >{like} 💗</button>
        </div>
    </div>
  )
}
