
# Task manager app

 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
use [mockAPI](https://mockapi.io) for saving tasks
and also use [Redux](https://redux.js.org/) for managing task list
styling of the page done by [sass](https://sass-lang.com/)
get and post data with API done by [axios](https://www.npmjs.com/package/axios) package
## components
Project have 8 component, The main component after App :
### &lt;TaskBar/>
### &lt;CalendarBar/>
### &lt;Calendar  />

## TaskBar
for showing user data, add new task and displaying Tasks list
&lt;UserUi  /> 
&lt;CreateTask  />
&lt;CompeletedTasks  />
&lt;ModalTask  />

## CalendarBar
The content of this part includes current date, search button, toggle between month and displaying mood of calendar

## Calendar
displaying days of month

## Redux
in src directory, project have 2 folder with this name **action** and **reducer**
### action

 - **ModalAction** // show or hide Task modal
 - **getTasksList** // get data from api and update task content
 - **TaskListToggle** // toggle between completed task and not completed

  ### reducer 
  

 - **TaskReducer** // managing Task state
 - **VisibilityControlsReducer**// set controls for displaying components

## Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.
### `npm run build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!
