import { useState } from 'react'
import { library } from '../data/books.json'

export default function Filters({changeFilters}){
    const [minPages, setMinPages] = useState(0)

    const gender = [...new Set(library.map(list => list.book.genre))]

    const handleChangeMinPages = (event) => {
        setMinPages(event.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPages: event.target.value
        }))
    }

    const handleChangeGenre = (event) => {
        changeFilters(prevState => ({
            ...prevState,
            genre: event.target.value
        }))
    }

    return(
        <section>
            <div>
                <label htmlFor="pages">Paginas min</label>
                <input
                    type="range"
                    id='pages'
                    min='0'
                    max='5000'
                    onChange={handleChangeMinPages}
                />
                <span>{minPages}</span>
            </div>
            <div>
                <label htmlFor="genre">Genero </label>
                <select id='genre' onChange={handleChangeGenre} className='appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                <option value='all'>Todas</option>
                    {gender.map(listGenre => (
                            <option value={listGenre}>{listGenre}</option>
                        )
                    )}
                </select>
            </div>
        </section>
    )
}