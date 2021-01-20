import styled from 'styled-components'
import { colors } from '../utils/theme'

const Button = (props) => {
  const CustomButton = styled.button`
    background-color: ${colors(props.color)};
    width: 100px;
    border: none;
    border-radius: 5px;

    &:nth-child(2) {
      margin-left: 40px;
    }

    > img {
      width: 100%;
      height: auto;
    }
  `
  return <CustomButton href={props.href}>{props.children}</CustomButton>
}

export default Button
