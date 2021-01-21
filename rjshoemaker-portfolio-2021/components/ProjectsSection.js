import { useState } from 'react'
import styled from 'styled-components'
import projects from '../utils/projects'
import { colors } from '../utils/theme'

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
  color: ${colors('purple')};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  border: 2px ${colors('purple')} solid;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${colors('purple')};
    color: black;
    cursor: pointer;
  }

  &:nth-child(${(props) => props.currentProject.id + 1}) {
    background-color: ${colors('purple')};
    color: black;
  }
`

const ProjectDisplayFooter = styled.div`
  border: 2px solid ${colors('yellow')};
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  display: flex;
`

const ProjectDisplayInfo = styled.div`
  flex: 3;
`

const ProjectDisplayTech = styled.div`
  flex: 1;
  justify-content: flex-end;
  text-align: right;
`

const TechHeader = styled.div`
  display: block;
  color: ${colors('blue')};
  font-weight: bold;
`

const ProjectTechItem = styled.div`
  color: white;
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
  border: ${colors('blue')} 2px solid;
  border-radius: 5px;
  opacity: 0.85;
`

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(projects[0])

  return (
    <ProjectsSectionWrapper>
      <ProjectsList>
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            currentProject={currentProject}
            onClick={() => setCurrentProject(project)}
          >
            {project.name}
          </ProjectListItem>
        ))}
      </ProjectsList>
      <ProjectDisplay>
        <ProjectDisplayGif src={currentProject.gif} />
        <ProjectDisplayFooter>
          <ProjectDisplayInfo>
            <ProjectDisplayTitle>{currentProject.name}</ProjectDisplayTitle>
            <ProjectDisplayDesc>
              {currentProject.description}
            </ProjectDisplayDesc>
            <ProjectDisplayRepo>
              Github: <a href={currentProject.repo}>{currentProject.repo}</a>
            </ProjectDisplayRepo>
            <ProjectDisplayDeployed>
              Visit Deployed:{' '}
              <a href={currentProject.deployed}>{currentProject.deployed}</a>
            </ProjectDisplayDeployed>
          </ProjectDisplayInfo>
          <ProjectDisplayTech>
            <TechHeader>Technologies used:</TechHeader>
            {currentProject.tech.map((tech) => (
              <ProjectTechItem key={tech}>{tech}</ProjectTechItem>
            ))}
          </ProjectDisplayTech>
        </ProjectDisplayFooter>
      </ProjectDisplay>
    </ProjectsSectionWrapper>
  )
}

export default ProjectsSection
