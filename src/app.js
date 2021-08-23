import BooksList from './containers/booksList';
import BooksForm from './containers/booksForm';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <div className="backBG bg-dark-grey">
        <div className="container center">
          <BooksList />
          <BooksForm />
        </div>
      </div>
    </div>
  );
}

export default App;
