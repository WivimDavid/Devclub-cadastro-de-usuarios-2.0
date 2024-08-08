import { useRef } from 'react';

import Banner from '../../assets/users.png'
import {
  Container,
  TopBackground,
  ImgBanner,
  Form,
  Title,
  ContainerInputs,
  PrimaryInputs,
  SubContainersInputs,
  InputLabel,
  Input,
  Button
} from './styles'

export function Home() {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputAge = useRef();

  const registerNewUser = () => {
    console.log(inputName.current.value);
    console.log(inputEmail.current.value);
    console.log(inputAge.current.value);
  }

  return (
    <>
      <Container>
        <TopBackground>
          <ImgBanner src={Banner} alt="banner-users" />
        </TopBackground>

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

        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
        <Button >Listar Usuários</Button>

      </Container>
    </>
  )
}






