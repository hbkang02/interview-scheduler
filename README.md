# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

​
## Project Description

This project is a simple website that allows the user to make an appointment, Monday through Friday, with an interviewer, if the student name is provided.


## Website preview && Functionalities

###User Creates, Saves, Confirms the Delete function
![](https://github.com/hbkang02/interview-scheduler/blob/master/doc/Create-Save-Delete-Confirm.gif?raw=true)

###Updates remaining spots when an appointment is deleted, or created. If edited, there will not be a change
![]([https://github.com/hbkang02/interview-scheduler/blob/master/doc/Create-Save-Delete-Confirm.gif?raw=tru](https://github.com/hbkang02/interview-scheduler/blob/master/doc/Delete-updatespots.gif?raw=true)e)

###Returns message if student name is not inserted or if interviewer is not selected.
![]([https://github.com/hbkang02/interview-scheduler/blob/master/doc/Create-Save-Delete-Confirm.gif?raw=true](https://github.com/hbkang02/interview-scheduler/blob/master/doc/Empty-student,interviewer11.gif?raw=true))

###Edit existing appointment, allows the user to change student name or/and interviewer
![]([https://github.com/hbkang02/interview-scheduler/blob/master/doc/Create-Save-Delete-Confirm.gif?raw=true](https://github.com/hbkang02/interview-scheduler/blob/master/doc/days-Edit-Save.gif?raw=true))

#Dependencies
- storybook
- react: ^16.9.0
- react-dom: ^16.9.0
- react-scripts: 3.4.4
- testing-library/react-hooks: ^8.0.1
- axios: ^0.20.0
- sass: ^1.53.0
- @babel/core: ^7.4.3
