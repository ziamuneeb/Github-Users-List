import React from 'react';
import ReactDom from 'react-dom';
import User from './user.js'
import './index.css'
import {useState , useEffect} from 'react';


function App() {
const url = 'https://api.github.com/users';

const fetchData = async () => {
  const request = await fetch(url);
  const users = await request.json();
  setUser(users);

}
const [user, setUser] = useState([]);
console.log(user);

useEffect(()=>{
  fetchData();
},[])

return (
  <User people = {user}></User>
);
}



ReactDom.render(<App></App>, document.getElementById('root'));
