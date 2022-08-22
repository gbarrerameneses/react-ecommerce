import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'

function App(props) {

  
  return (
    <div className="App">
      <NavBar   />
        <ItemListContainer greeting={'Saludos'}/>
      
    </div>
  );
}

export default App;