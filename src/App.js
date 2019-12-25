import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import Slogan from './components/Slogan';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import MyProject from "./components/MyProject";


function App() {
    return (
        <div className="App">
            <div className="portfolio">
                <Header/>
                <Main/>
                <Skills/>
                <MyProject/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
