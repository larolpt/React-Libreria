import { useState } from 'react'
import ListBooks  from './components/ListBooks.jsx'
import Filters from './components/Filters.jsx'
import { library } from './data/books.json'

function useFilters(){
  const [filters, setFilters] = useState({
    genre: 'all',
    minPages: 0
  })

  const filterBooks = (library) => {
    return library.filter(list => {
      return (
        list.book.pages >= filters.minPages && 
        (
          filters.genre  == 'all' ||
          list.book.genre == filters.genre
        )
      )
    })
  }
  return {filterBooks, setFilters}
}

function App() {
  const {filterBooks, setFilters} = useFilters()
  const filteredBooks = filterBooks(library)

  return (
    <>
      <Filters changeFilters={setFilters}/>
      <ListBooks books={filteredBooks} />
    </>
  )
}

export default App
