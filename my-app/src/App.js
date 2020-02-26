import React from 'react';
import dogdata from './data/dogdata';
import Header from './components/Header'
import Adopt from './components/Adopt';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    
    return (
     
      <div className="App">
       <Header/>
       
      <h1>Angie's Borky Bois Sanctuary</h1>
       {dogdata.map((item, index) => {
        
        return  <Adopt
          dog={item}
          key={index}
       
        />
    })}

        

      </div>
    );
  }
}

export default App;
