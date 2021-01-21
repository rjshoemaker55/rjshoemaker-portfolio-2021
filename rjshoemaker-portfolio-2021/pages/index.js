import styled from 'styled-components'
import Background from '../components/Background'
import Button from '../components/Button'
import ProjectsSection from '../components/ProjectsSection'
import { colors } from '../utils/theme'

const IndexWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 9999;
  flex-direction: column;
  justify-content: center;
`
const HeaderWrapper = styled.div`
  justify-content: center;
  flex: 1;
  position: relative;
  width: 100%;
  padding: 25px 10px;
`

const HeaderText = styled.div`
  color: white;
  line-height: 1;
  padding-bottom: 3px;
  display: table;
  text-align: center;
  font-size: 57px;
  font-weight: bold;
  margin: auto;

  /* Tables and large phones */
  @media only screen and (min-width: 600px) {
    border-bottom: 3px solid ${colors('green')};
  }
`

const HeaderLinkWrapper = styled.div`
  margin-top: 25px;
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
            <Button color='red'>
              <img src='/images/logos/GitHub_Logo.png' />
            </Button>
            <Button color='yellow'>
              <img src='/images/logos/linkedin-logo.png' />
            </Button>
          </HeaderLinkWrapper>
        </HeaderWrapper>
        <ProjectsSection />
      </IndexWrapper>
    </>
  )
}

export default Index
