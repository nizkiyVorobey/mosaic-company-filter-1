import React, { useState } from 'react';
import { getUsers } from './api/getUsers';
import { UserList } from './components/UserList/UserList';
import { FieldsSortList } from './components/FieldsSortList/FieldsSortList';
import './App.css';

function App() {
  const [userSorted, setUserSorted] = useState([...getUsers]);
  const [inputError, setInputError] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  return (
    <div className="App">
      <h1>Test Task!</h1>

      <FieldsSortList
        setUserSorted={setUserSorted}
        setInputError={setInputError}
        setEmptyList={setEmptyList}
        userSorted={userSorted}
        initialUser={getUsers}
      />

      <div className="user-list">
        <div className="user-list-title">
          <div className="user-list-title-item-row">
            <div className="user-list-title-item-column">Name</div>
            <div className="user-list-title-item-column">Surname</div>
            <div className="user-list-title-item-column">Email</div>
            <div className="user-list-title-item-column">phonenumber</div>
            <div className="user-list-title-item-column">Birthday</div>
            <div className="user-list-title-item-column">company</div>
          </div>
        </div>
        {
          emptyList ?
            <p>Empty</p>
            : inputError
            ? <p>Error</p>
            : (
              <div className="user-list-body">
                {
                  userSorted.map(user => <UserList user={user} key={user.company}/>)
                }
              </div>
            )
        }
      </div>

    </div>
  );
}

export default App;
