import React, {useState, useEffect} from 'react'
import Link from './Link'
import { useDebounce } from 'use-debounce'
import { useResultConext } from '../context/ResultContextProvider'

const Search = () => {

  const {setSearchTerm} = useResultConext();
  const [text, setText] = useState('Elon Musk');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect( () => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])

  return (
    <div className='relative  md:ml-48 lg:ml-96 sm:-mt-10 mt-3'>
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google"
        onChange={(e) => setText(e.target.value)}
      />
      { text && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
        x
      </button>
      )}
      <Link />
      </div>
  )
}

export default Search