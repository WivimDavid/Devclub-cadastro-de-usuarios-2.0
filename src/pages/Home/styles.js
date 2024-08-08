import styled from 'styled-components'

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 20px;
  height: 100vh;
  
  @media (max-width: 768px) {
    height: 120vh;
    gap: 15px;
  }
`
export const TopBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 80vw;
  max-width: 800px;
  border-radius: 30px;
`
export const ImgBanner = styled.img`
  max-width: 100%;
  max-height: 100%;
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

export const Button = styled.button`
  background: linear-gradient(180deg, #fe7e5d 50%, #ff6378 100%);
  color: #fff;
  font-size: 16px;
  margin-top: -50px;
  padding: 16px 32px;
  width: fit-content;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }

`

