import styled from 'styled-components'

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  
  @media (max-width: 768px) {
    min-height: 100vh;
    gap: 15px;
  }
`
export const Title = styled.h2`
  margin: 20px;
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export const ContainerUsers = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 margin-bottom: 80px;

 @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr ;
    margin-bottom: 5px;
  }

`
export const CardUsers = styled.div`
   background-color: #252d48;
   margin: 20px;
   padding: 16px;
   border-radius: 32px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 20px;
   max-width: 380px;

  h3{
    color: #fff;
    font-size: 24px;
    margin: 5px;
    font-weight: bold;
    text-transform: capitalize;
    
  }

  p{
    color: #fff;
    font-size: 14px;
    margin: 5px;
    font-weight: 400;
  }
`
export const TrashIcon = styled.img`
  cursor: pointer;
  padding: 0 15px;

  &:hover {
    transform: scale(1.2);
  } 
  &:active {
    transform: scale(0.9);
  }
`
export const AvatarUser = styled.img`
  height: 50px;
`