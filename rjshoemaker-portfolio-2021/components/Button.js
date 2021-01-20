import styled from 'styled-components'

const Button = (props) => {
  const CustomButton = styled.button`
    background-color: ${({ theme }) => theme.colors.aqua};
    width: 100px;
    border: none;
    border-radius: 5px;

    > img {
      width: 100%;
      height: auto;
    }
  `
  return <CustomButton href={props.href}>{props.children}</CustomButton>
}

export default Button
