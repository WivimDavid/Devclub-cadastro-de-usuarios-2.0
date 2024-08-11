import styled from 'styled-components'

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 20px;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    min-height: 100vh;
    gap: 15px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`
export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`
export const ContainerInputs = styled.div`

`

export const PrimaryInputs = styled.div`
  display: flex;
  gap: 10px;
`

export const SubContainersInputs = styled.div`
  margin-bottom: 20px;
`
export const InputLabel = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 600;

  span {
    color: #ef4f45;
    font-weight: bold;
  }
`

export const Input = styled.input`
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #d2dae2;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;

  &::placeholder{
    font-size: 14px;
  }
`



