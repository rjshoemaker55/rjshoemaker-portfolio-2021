import { useState } from 'react'
import styled from 'styled-components'
import projects from '../utils/projects'
import { colors } from '../utils/theme'

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(projects[0])

  const ProjectsSectionWrapper = styled.div`
    width: 80%;
    height: 600px;
    margin: auto;
    display: flex;
  `

  const ProjectsList = styled.div`
    flex: 1;
    margin-right: 18px;
  `

  const ProjectDisplay = styled.div`
    flex: 3;
  `

  const ProjectListItem = styled.div`
    color: ${colors('blue')};
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 10px;
    border: 2px ${colors('blue')} solid;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    transition-duration: 0.3s;

    &:hover {
      background-color: ${colors('blue')};
      color: black;
      cursor: pointer;
    }
  `

  const ProjectDisplayHeader = styled.div`
    border: 2px solid ${colors('yellow')};
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
  `

  const ProjectDisplayTitle = styled.div`
    font-weight: bold;
    color: ${colors('yellow')};
    font-size: 25px;
  `

  const ProjectDisplayDesc = styled.div`
    color: ${colors('purple')};
  `

  const ProjectDisplayRepo = styled.div`
    color: white;

    > a {
      text-decoration: underline;
    }
  `

  const ProjectDisplayDeployed = styled.div`
    color: ${colors('green')};

    > a {
      text-decoration: underline;
    }
  `

  const ProjectDisplayGif = styled.img`
    width: 100%;
    height: auto;
    z-index: -10;
    position: relative;
  `

  return (
    <ProjectsSectionWrapper>
      <ProjectsList>
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            onClick={() => setCurrentProject(project)}
          >
            {project.name}
          </ProjectListItem>
        ))}
      </ProjectsList>
      <ProjectDisplay>
        <ProjectDisplayGif src='/images/gifs/my-concierge.gif' />
        <ProjectDisplayHeader>
          <ProjectDisplayTitle>{currentProject.name}</ProjectDisplayTitle>
          <ProjectDisplayDesc>{currentProject.description}</ProjectDisplayDesc>
          <ProjectDisplayRepo>
            Github: <a href={currentProject.repo}>{currentProject.repo}</a>
          </ProjectDisplayRepo>
          <ProjectDisplayDeployed>
            Visit Deployed:{' '}
            <a href={currentProject.deployed}>{currentProject.deployed}</a>
          </ProjectDisplayDeployed>
        </ProjectDisplayHeader>
      </ProjectDisplay>
    </ProjectsSectionWrapper>
  )
}

export default ProjectsSection
