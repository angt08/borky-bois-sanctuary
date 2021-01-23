import React from 'react';
import './App.css';
import dogdata from './data/dogdata';
import Header from './components/Header';
import Info from './components/Info';
import Pow from './components/Pow';
import Banner from './components/Banner';
import PowBanner from './components/PowBanner';
import Adopt from './components/Adopt';
import { Route, Link } from "react-router-dom";
// import Robert from './images/robert.jpg';
import Footer from './components/Footer';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {

    return (

      <>
    
        <Header />

        <Route exact path="/" 
          component={Info} 
        /> 

         <Route
          path="/adopt-a-dog"
          render={() =>
            <Banner />
          }
        /> 

        
        <Route
          path="/adopt-a-dog"
          render={() =>

            <div className="dog-flexbox">
             
              { dogdata.map((item) => {
                return <Adopt
                  dog={item}
                  // key={index}
                   
                />
              })}
            </div>
          } />
        
        <Route
          path="/pooch-of-the-week"
          render={() =>
            <>
            <PowBanner/>
            <Pow/>
            </>
          }
        />
        {/* <Footer/> */}


      </>
    );
  }
}

export default App;
