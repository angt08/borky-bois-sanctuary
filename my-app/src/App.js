import React from 'react';
import dogdata from './data/dogdata';
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
     
      <div className="app">
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
