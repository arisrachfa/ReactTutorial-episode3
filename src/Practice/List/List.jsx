import React from 'react'
import User from './User'
import '../../App.css'

const List = () => {
    const users = [
        { name: 'Rexxy', age: '22'},
        { name: 'Lary', age: '30'},
        { name: 'Dax', age: '25'},
    ]

  return (
    <div className='App'>
        {users.map((user, key) => {
            return <User name={user.name} age={user.age}/>
        })}
    </div>
  )
}

export default List