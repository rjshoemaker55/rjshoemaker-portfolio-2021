import styled from 'styled-components'
import { colors } from '../utils/theme'

const CustomButton = styled.button`
  background-color: ${(props) => colors(props.color)};
  width: 7em;
  border: 3px solid ${(props) => colors(props.color)};
  border-radius: 5px;
  padding: 0px 10px;
  line-height: 1;
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
const Button = (props) => {
  return (
    <CustomButton color={props.color} href={props.href}>
      {props.children}
    </CustomButton>
  )
}

export default Button
