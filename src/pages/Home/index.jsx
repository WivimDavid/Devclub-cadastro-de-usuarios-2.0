import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import {
  Container,
  Form,
  Title,
  ContainerInputs,
  PrimaryInputs,
  SubContainersInputs,
  InputLabel,
  Input,
} from './styles'


import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';

function Home() {

  const inputName = useRef();
  const inputEmail = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function registerNewUser() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    });

  }

  return (
    <>
      <Container>
        <TopBackground />
        <Form>
          <Title>Cadastrar Usuários</Title>

          <ContainerInputs>
            <PrimaryInputs>
              <SubContainersInputs>
                <InputLabel>Nome <span>*</span></InputLabel>
                <Input type="text" placeholder="nome do usuário" ref={inputName} />
              </SubContainersInputs>

              <SubContainersInputs>
                <InputLabel>Idade <span>*</span></InputLabel>
                <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
              </SubContainersInputs>
            </PrimaryInputs>

            <SubContainersInputs>
              <InputLabel>E-mail <span>*</span></InputLabel>
              <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
            </SubContainersInputs>

          </ContainerInputs>
        </Form>

        <Button type='button' onClick={registerNewUser} theme='primary'>
          Cadastrar Usuários
        </Button>

        <Button type='button'  onClick={() => navigate('/lista-usuarios')}>
          Ver lista de Usuários
        </Button>

      </Container>
    </>
  )
}

export default Home




