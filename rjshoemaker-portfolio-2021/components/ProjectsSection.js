import styled from 'styled-components'
import projects from '../utils/projects'

const ProjectsSection = () => {
  const ProjectsSectionWrapper = styled.div`
    width: 80%;
    height: 600px;
    margin: auto;
    display: flex;
  `

  const ProjectsList = styled.div`
    flex: 1;
  `

  const ProjectDisplay = styled.div`
    background-color: red;
    flex: 3;
  `

  const ProjectListItem = styled.div`
    color: white;
    font-weight: bold;
    font-size: 28px;
  `

  return (
    <ProjectsSectionWrapper>
      <ProjectsList>
        {projects.map((project) => (
          <ProjectListItem key={project.id}>{project.name}</ProjectListItem>
        ))}
      </ProjectsList>
      <ProjectDisplay>'hi'</ProjectDisplay>
    </ProjectsSectionWrapper>
  )
}

export default ProjectsSection
