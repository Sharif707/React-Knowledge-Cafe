

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  
  const handleBookmark = (blog) => {
   const newBookmarks = [...bookmarks, blog]
   
   setBookMarks(newBookmarks)
  
  
  }

  const handleReadingTime = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    console.log('removed bookmark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => {
      console.log(bookmark);
      return bookmark.id !== id
    })
    setBookMarks(remainingBookmarks)
  }
 

  return (
    <>
      <Header></Header>
     <div className='flex py-5'>
        <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
     </div>
     
    </>
  )
}

export default App
