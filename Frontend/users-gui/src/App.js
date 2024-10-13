import AddUser from "./components/AddUser";
import Header from "./components/Header";
import React, { useState, useEffect } from 'react';
import { Container } from "./components/Header/styles";
import UserItems from "./components/UserItems";
import GlobalStyle from "./globalStyles";
import api from "./services/api";
import EditUser from "./components/EditUser";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (err) {
        console.log('Erro ao carregar usuários: ' + err.message);
      }
    };

    fetchUsers();
  });

  const deleteUser = async (userId) => {
    try{
      await api.delete(`/users/${userId}`)

    }catch(err){
      console.log('Erro ao remover usuário:' + err.message);
    }

  }

  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Header/>
        <Container>
          <AddUser/>
          <EditUser/>
          {users.map(user => <UserItems key={user.id} user={user} handleDelete={() => deleteUser(user.id)}/> )}
        </Container>
      </div>
    </>

  );
}

export default App;
