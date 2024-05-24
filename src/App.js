import './App.css';
import { useEffect , useState } from 'react';
import axios from 'axios';
// import PersonList from './components/PersonList.js';

function App() {
  const [user , setUser] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=> setUser(res.data)
  )
  })
  return (
    <div ClassName="App">
      {user.map(u => (
        <div>
          {u.id} {u.name}{u.email} {'|| Phone no:'} {u.phone}
          </div>
      ))}
      {/* <PersonList/> */}
    </div>
  )
}

export default App;
