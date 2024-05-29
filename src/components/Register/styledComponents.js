import styled from 'styled-components'

export const RegBgContainer = styled.div`
  font-family: 'Roboto';
`

export const Nav = styled.nav`
  display: flex;
  height: 10vh;
  padding: 20px;
`

export const Logo = styled.img`
  width: 120px;
`

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

export const RegisterImg = styled.img`
  width: 320px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 32px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.label`
  color: #7b8794;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Input = styled.input`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #000000;
  outline: none;
  margin-bottom: 17px;
`

export const Select = styled.select`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #000000;
  outline: none;
  margin-bottom: 8px;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  margin-top: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
`
