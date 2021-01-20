import styled from 'styled-components'
import Background from '../components/Background'
import Button from '../components/Button'
import { colors } from '../utils/theme'

const IndexWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
  z-index: 9999;
`
const HeaderWrapper = styled.div`
  justify-content: center;
  flex: 1;
  position: relative;
  width: 100%;
  padding: 50px;
`

const HeaderText = styled.div`
  color: ${colors('salmon')};
  text-shadow: 3px 2px ${colors('denim')};
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  margin: auto;
`

const HeaderLinkWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const Index = () => {
  return (
    <>
      <Background />
      <IndexWrapper>
        <HeaderWrapper>
          <HeaderText>Hello, I'm RJ Shoemaker</HeaderText>
          <HeaderLinkWrapper>
            <Button color='aqua'>
              <img src='/images/logos/GitHub_Logo.png' />
            </Button>
            <Button color='hotpink'>
              <img src='/images/logos/linkedin-logo.png' />
            </Button>
          </HeaderLinkWrapper>
        </HeaderWrapper>
      </IndexWrapper>
    </>
  )
}

export default Index
