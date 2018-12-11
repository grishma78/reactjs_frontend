import React, { Component } from "react";
import Header from './Views/Header';
import './App.css';
import Footer from './Views/Footer';
import SideView from "./Views/SideView";
import MainLayout from "./Views/MainLayout";
class App extends Component {
  state = {         //intializing state
    posts: []
  }
  
  
  
  render() { //calling components
        return <div>
          <Header/>
        <SideView/>
    <MainLayout/>
    <Footer/>
    </div>;
      }
    }
export default App;
    