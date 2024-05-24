// import React from 'react';
// import axios from 'axios';
// import { useEffect , useState } from 'react';

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         console.log(res.data);
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//         <div>

//         </div>
//     //   <ul>
//     //     {
//     //       this.state.persons
//     //         .map(person =>
//     //           <li key={person.id}>{person.name} {person.username} {person.address.street}</li>
//     //         )
//     //     }
//     //   </ul>
//     )
//   }
// }