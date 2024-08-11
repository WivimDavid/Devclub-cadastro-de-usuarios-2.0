import api from '../../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';
import Trash from '../../assets/trash.svg';

import {
  Container,
  Title,
  ContainerUsers,
  CardUsers,
  TrashIcon,
  AvatarUser,
} from '../ListUsers/styles';

function ListUsers() {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios');

      setUsers(data);
    }
    getUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    await api.delete(`/usuarios/${id}`);
    
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  } 


  return (
    <>
      <Container>
        <TopBackground />
        <Title>Lista de Usuários</Title>
        <ContainerUsers>
          {users.map((user) => (
            <CardUsers key={user.id}>
              <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} alt="avatar" />
              <div>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
                <p>{user.email}</p>
              </div>
              <TrashIcon src={Trash} alt="trash" onClick={() => handleDeleteUser(user.id)} />
            </CardUsers>
          ))}
        </ContainerUsers>
        <Button type="button" onClick={() => navigate('/')}>
          Voltar
        </Button>
      </Container>
    </>
  )
}
export default ListUsers


