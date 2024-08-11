import styled from 'styled-components'

export const Button = styled.button`
    border: ${ props =>
    props.theme === 'primary'
      ? 'none'
      : '1px solid #fff'};
  background: ${props =>
    props.theme === 'primary'
      ? 'linear-gradient(180deg, #fe7e5d 50%, #ff6378 100%)'
      : 'transparent'};
  color: #fff;
  font-size: 16px;
  /* margin-top: -50px; */
  padding: 16px 32px;
  width: fit-content;
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