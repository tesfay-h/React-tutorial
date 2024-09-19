import Greet from './components/Greet'
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message'

function App() {
  return (
    <div className="App">
      <Message/>
      < Greet name= 'bruce' heroName ="Batman"  />
      <p>This is the first paragraph! </p>
      < Greet name= 'gebru' heroName = "Superman"/>
      <button>click here! </button>
      < Greet name= 'hellen' heroName = "Wonder woman"/>
      < Welcome  name= 'bruce' heroName ="Batman"/>
      < Welcome  name= 'gebru' heroName ="superman"/>
      < Welcome  name= 'hellen' heroName ="wondor woman"/>
      {/*< Hello/>*/}
    
    </div>
  );
}

export default App;
