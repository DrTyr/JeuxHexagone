import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CHILDREN OF PROUT
        </p>
        <p>
          {display()}
          {/* Commande pour afficher result foncton display dans le HTML, mettre des {} pour signifier que c'est du JS  */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function display(week) {

  let week2 = week.map((day) => {
    return (<li>{day}</li>)
  })


  return (week2)


}

const gestion_week = (nbjour) => { }






export default App;
