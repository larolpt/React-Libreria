import {} from 'react'
import '../index.css'



export default function ListBooks({books}){
    
    return (
        <main>
            <div className='flex justify-center'>
                <ul className='list-none grid grid-cols-3'>
                    {books.map(list => (
                        <li key={list.book.ISBN} className=''>
                            <img
                                className='w-40 h-auto'
                                src={list.book.cover}
                                alt={list.book.title}
                            />
                            <div>
                                <strong>
                                    {list.book.title}
                                </strong>
                            </div>
                            <div>
                                <h4>
                                    {list.book.author.name}
                                </h4>
                            </div>
                            <div>
                                <button>
                                    add list
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}