import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const { users } = useSelector((state) => state.UserReducer);

  return (
    <div className='m-auto container p-10 mt-5 bg-blue-300'>
      <h1 className='text-2xl font-medium text-black-300'>User List</h1>
      <ul>
        {users.map((elem, index) => (
          <li key={index}>
            <h1>{elem.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
