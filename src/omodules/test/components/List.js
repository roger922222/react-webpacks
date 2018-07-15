import React from 'react'

const List = (props) => { 

  const list = props.listItems.map((items, i) => (
    <li key={i} >
       <h2 
            onClick={() => props.onClick(i)}
            style={items.done ? {textDecoration: 'line-through', fontSize: '20px'} : {textDecoration: 'none', fontSize: '20px'}}
            >{items.item}
        </h2>
        <button onClick={() => props.onDelete(i)} style={{width: '200px', height: '70px', fontSize: '20px', border: '1px solid #000'}}>删除</button>
       </li>))

  return (
      <ul>
          {list}
      </ul>
  )

}

export default List