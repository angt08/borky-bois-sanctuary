import React from 'react';
import './App.css';
import dogdata from './data/dogdata';
import Header from './components/Header';
import Pow from './components/Pow';
import Banner from './components/Banner';
import Adopt from './components/Adopt';
import { Route, Link } from "react-router-dom";
// import robert from '../images/robert.jpg';


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

        <Route path="/adopt-a-dog"

          render={() =>
            <Banner />
          } />

        <Route
          path="/adopt-a-dog"
          render={() =>
            <div className="dog-grid">

              {dogdata.map((item, index) => {
                return <Adopt
                  dog={item}
                  key={index}
                />
              })}
            </div>
          } />
        
        <Route
          path="/pooch-of-the-week"
          render={()=>
            <Pow/>
          } />
        


      </div>
    );
  }
}

export default App;
