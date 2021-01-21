import styled from 'styled-components'

const ProjectsSection = () => {
  const ProjectsSectionWrapper = styled.div`
    width: 80%;
    height: 600px;
    background-color: white;
    margin: auto;
    display: flex;
  `

  const ProjectsList = styled.div`
    background-color: blue;
    flex: 1;
  `

  const ProjectDisplay = styled.div`
    background-color: red;
    flex: 3;
  `

  return (
    <ProjectsSectionWrapper>
      <ProjectsList>'hello'</ProjectsList>
      <ProjectDisplay>'hi'</ProjectDisplay>
    </ProjectsSectionWrapper>
  )
}

export default ProjectsSection
