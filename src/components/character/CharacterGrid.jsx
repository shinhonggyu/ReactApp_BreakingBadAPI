import React from 'react'
import CharacterItem from '../character/CharacterItem'
import Spinner from '../UI/Spinner'
import Sinner from '../UI/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>
      <Spinner />
    </h1>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid
