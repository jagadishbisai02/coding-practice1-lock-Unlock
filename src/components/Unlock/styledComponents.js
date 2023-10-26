// Style your elements here
import styled from 'styled-components'

export const Containers = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LockImage = styled.img`
  width: 150px;
`

export const Text = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
`

export const Button = styled.button`
  background: #06b6d4;
  border: none;
  border-radius: 3px;
  padding: 5px 17px;
  color: #e2e8f0;
`
