import React, { useEffect, useState,  } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navIndex';
import Footer from './components/footer/footIndex';
import Card from './components/card/cardIndex';
import MainCard from './components/main/mainIndex';
import AddPost from './components/addPost/addIndex';
import { Post, TPost } from '../src/commonTypes'
import { AppContext } from './appContext';
import Upart from './components/upart/upart';




function App() {

  const [jsonData, setJsonData] = useState<Post[] | undefined>()

  const data = {jsonData, setJsonData}




useEffect(() => {
  fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(json => setJsonData((json as TPost).posts))
}, [])


  return (
    <AppContext.Provider value={data}>
    <div className='App'>
    
    

    <Upart/>
    <MainCard/>
    
    
    </div>
    </AppContext.Provider>
  );
}

export default App;


















/* <div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
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
</div> */
