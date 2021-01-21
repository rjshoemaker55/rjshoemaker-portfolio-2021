import { useState } from 'react'
import styled from 'styled-components'
import projects from '../utils/projects'
import { colors } from '../utils/theme'
import LazyImage from '../components/LazyImage'

const ProjectListItem = styled.div`
  color: rgb(${colors.purple});
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  border: 2px rgb(${colors.purple}) solid;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  transition-duration: 0.3s;

  &:hover {
    background-color: rgb(${colors.purple});
    color: black;
    cursor: pointer;
  }

  &:nth-child(${(props) => props.currentProject.id + 1}) {
    background-color: rgb(${colors.purple});
    color: black;
  }
`

const ProjectDisplayFooter = styled.div`
  border: 2px solid rgb(${colors.yellow});
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  display: flex;
`

const TechHeader = styled.div`
  display: block;
  color: rgb ${colors.yellow};
  font-weight: bold;
  font-size: 18px;
`

const ProjectTechItem = styled.div`
  color: rgb(${colors.red});
`

const ProjectDisplayTitle = styled.div`
  font-weight: bold;
  color: rgb(${colors.yellow});
  font-size: 25px;
`

const ProjectDisplayDesc = styled.div`
  color: rgb(${colors.purple});
`

const ProjectDisplayRepo = styled.div`
  color: white;

  > a {
    text-decoration: underline;
    transition-duration: 0.3s;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`

const ProjectDisplayDeployed = styled.div`
  color: rgb(${colors.green});

  > a {
    text-decoration: underline;
    transition-duration: 0.3s;

    &:hover {
      background-color: rgb(${colors.green});
      color: black;
    }
  }
`

const ProjectDisplayGif = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  border: rgb(${colors.blue}) 2px solid;
  border-radius: 5px;
  opacity: 0.85;
`

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(projects[0])

  return (
    <div className='projects-section-wrapper'>
      <div className='project-list'>
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            currentProject={currentProject}
            onClick={() => setCurrentProject(project)}
          >
            {project.name}
          </ProjectListItem>
        ))}
      </div>
      <div className='project-display'>
        <LazyImage src={currentProject.gif} />
        {/* <ProjectDisplayGif src={currentProject.gif} /> */}
        <ProjectDisplayFooter>
          <div className='project-display-info'>
            <ProjectDisplayTitle>{currentProject.name}</ProjectDisplayTitle>
            <ProjectDisplayDesc>
              {currentProject.description}
            </ProjectDisplayDesc>
            <ProjectDisplayRepo>
              Github:{' '}
              <a href={currentProject.repo} target='_blank' rel='noreferrer'>
                {currentProject.repo}
              </a>
            </ProjectDisplayRepo>
            <ProjectDisplayDeployed>
              Visit Deployed:{' '}
              <a
                href={currentProject.deployed}
                target='_blank'
                rel='noreferrer'
              >
                {currentProject.deployed}
              </a>
            </ProjectDisplayDeployed>
          </div>
          <div className='project-display-tech'>
            <TechHeader>Technologies used:</TechHeader>
            {currentProject.tech.map((tech) => (
              <ProjectTechItem key={tech}>{tech}</ProjectTechItem>
            ))}
          </div>
        </ProjectDisplayFooter>
      </div>
    </div>
  )
}

export default ProjectsSection
