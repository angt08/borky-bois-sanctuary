import React from 'react';
import dogdata from './data/dogdata';
import Header from './components/Header';
import Pow from './components/Pow';
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
        <Header />

        {/* <Pow /> */}

        <div className="dog-grid">

          {dogdata.map((item, index) => {

            return <Adopt
              dog={item}
              key={index}
            />
          })}
        </div>



      </div>
    );
  }
}

export default App;
