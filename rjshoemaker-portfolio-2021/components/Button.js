import styled from 'styled-components'
import { colors } from '../utils/theme'

const Button = (props) => {
  const color = colors(props.color)
  const CustomButton = styled.button`
    background-color: ${color};
    width: 9em;
    border: 3px solid ${color};
    border-radius: 5px;
    padding: 5px 10px;
    transition-duration: 0.3s;

    &:hover {
      background-color: transparent;
      cursor: pointer;

      > img {
        filter: invert(100%);
      }
    }

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
