import React from 'react';
import BookCreate from './components/BookCreate';

function App() {
  //const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log('Need title of this book: ', title)
};
  return (
    <div>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
