import './App.css';
import SearchForm from './components/Cerca/SearchForm';
import Contact from './components/Contatta/Contact';
import Filter from './components/Filtra/Filter';
import Header from './components/Layout/Header';

function App() {
  return (
    <div>
      <Header />
      <SearchForm />
      <Filter />
      <Contact />
    </div>
  )
}

export default App;
