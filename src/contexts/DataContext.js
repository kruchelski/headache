import React, { createContext, useState } from 'react';
import { HttpService } from '../services';
import { UtilsService } from '../services';

const DataContext = createContext();

const dataContextApi = (dataState, setDataState, projects, setProjects) => {

  const brutalDataLoad = async () => {

    // Defining the object model
    let dataObject = {
      step0: null,
      step1: {
        projectCount: null
      },
      step2: {
        projectName: null,
        projectActivity: null,
        projectStars: null,
        projectDesc: null,
      },
      step3: {
        groupCount: null
      },
      step4: {
        commitCount: null,
      },
      step5: {
        commitTitle: null,
        commitDate: null
      },
      step6: null,
      error: null,
    }

    try {
      // Request the projects
      const projectsResponse = await HttpService.makeRequest(
        'getAllProjects',
        null,
        null,
        null
      )

      // Map projects
      let allProjects = [];

      if (!projectsResponse || !projectsResponse.data) {
        throw new Error('Failed to get projects data');
      }

      allProjects = projectsResponse.data.map((proj) => {
        return {
          id: proj.id,
          name: proj.name,
          created: proj.created_at,
          lastActivity: proj.last_activity_at,
          stars: proj.star_count,
          desc: proj.description || 'Description not available',
          url: proj.web_url
        }
      })

      // Set the number of projects (step1.projectCount)
      dataObject.step1.projectCount = allProjects.length;

      // Randomizes a project
      const randomIndex = UtilsService.numberRandomizer(allProjects.length);

      // Set the data of the randomized project (step2.*)
      dataObject.step2.projectName = allProjects[randomIndex].name;
      dataObject.step2.projectDesc = allProjects[randomIndex].desc;
      dataObject.step2.projectActivity = allProjects[randomIndex].lastActivity;
      dataObject.step2.projectStars = allProjects[randomIndex].stars;

      // Request the commits from all projects in parallel
      let promises = [];
      allProjects.forEach(proj => {
        promises.push(
          HttpService.makeRequest(
            'getCommits',
            null,
            {
              projectId: proj.id,
            },
            null
          )
        )
      })

      const commitsResponse = await Promise.all(promises);

      if (!commitsResponse) {
        throw new Error('Failed to get commits data');
      }

      // Maps the commits
      let allCommits = [];

      if (commitsResponse.length) {

        commitsResponse.forEach(resp => {
          if (!resp.data) {
            return
          }
          resp.data.forEach(commit => {
            allCommits.push({
              id: commit.id,
              message: commit.message,
              date: commit.committed_date
            })
          })
        })

        // Set the commit count (step 4.commitCount)
        dataObject.step4.commitCount = allCommits.length;

        // Randomizes a commit
        const commitIndex = UtilsService.numberRandomizer(allCommits.length);

        // Set the data of the randomized commit (step5.*)
        dataObject.step5.commitTitle = allCommits[commitIndex].message;
        dataObject.step5.commitDate = allCommits[commitIndex].date;
      }

      // Request all the groups
      const groupsResponse = await HttpService.makeRequest(
        'getGroups',
        null,
        null,
        null
      )

      if (!groupsResponse || !groupsResponse.data) {
        throw new Error('Failed to get groups data');
      }

      // Set the number of groups
      dataObject.step3.groupCount = groupsResponse.data.length;

      // Set the dataState and the projects
      setProjects(Array.from(allProjects))
      setDataState((prevState) => {
        return {
          ...prevState,
          ...dataObject
        }
      });

    } catch (err) {

      throw err;

    }
  }

  const dataErrorHandler = (errorObject, defaultMessage = null) => {
    setDataState((prevState) => {
      return {
        ...prevState,
        error: errorObject?.error ||
        errorObject?.message ||
        defaultMessage ||
        'An unexpected data request error happened',
      }
    })
  }

  return {
    brutalDataLoad,
    dataErrorHandler
  }
}

const DataProvider = ({ children }) => {
  const initialState = {
    step0: null,
    step1: {
      projectCount: null
    },
    step2: {
      projectName: null,
      projectActivity: null,
      projectStars: null,
      projectDesc: null,
    },
    step3: {
      groupCount: null
    },
    step4: {
      commitCount: null,
    },
    step5: {
      commitTitle: null,
      commitDate: null
    },
    step6: null
  }
  const [dataState, setDataState] = useState({
    ...initialState
  });
  const [projects, setProjects] = useState([])

  return (
    <DataContext.Provider
      value={{
        dataState,
        projects,
        ...dataContextApi(dataState, setDataState, projects, setProjects)
      }}
    >
      { children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider };