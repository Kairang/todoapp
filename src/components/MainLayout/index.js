import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getAllTasks } from '../../axios/apis';
import { ROUTES } from '../../constants';
import AllTask from '../../Pages/AllTask';
import CreateTask from '../../Pages/CreateTask';
import DoingTask from '../../Pages/DoingTask';
import DoneTask from '../../Pages/DoneTask';
import EditTask from '../../Pages/EditTask';
import NewTask from '../../Pages/NewTask';
import SearchTask from '../../Pages/SearchTask';
import { getAllTodos } from '../../redux/actions';
import Heading from '../Header/Heading';
import Select from '../Sidebar/Select';

function MainLayout() {
  const dispatch = useDispatch()
  useEffect(() => {
      handleGetAllTask()
  }, [])

  const handleGetAllTask = async () => {
    try {
        const data = await getAllTasks()
        data && dispatch(getAllTodos(data))
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
      <Heading />
      <Select />
      <div className='task-container'>
        <Switch>
          <Route
            path={ROUTES.ALL_TASK.path}
            exact={ROUTES.ALL_TASK.exact}
          >
            <AllTask />
          </Route>
          <Route
            path={ROUTES.NEW_TASK.path}
            exact={ROUTES.NEW_TASK.exact}
          >
            <NewTask />
          </Route>
          <Route
            path={ROUTES.DOING_TASK.path}
            exact={ROUTES.DOING_TASK.exact}
          >
            <DoingTask />
          </Route>
          <Route
            path={ROUTES.DONE_TASK.path}
            exact={ROUTES.DONE_TASK.exact}
          >
            <DoneTask />
          </Route>
          <Route
            path={ROUTES.SEARCH.path}
            exact={ROUTES.DONE_TASK.exact}
          >
            <SearchTask />
          </Route>
          <Route
            path={ROUTES.CREATE_TASK.path}
            exact={ROUTES.CREATE_TASK.exact}
          >
            <CreateTask handleGetAllTask={handleGetAllTask}/>
          </Route>
          <Route
            path={`${ROUTES.EDIT_TASK.path}/:id`}
            exact={ROUTES.EDIT_TASK.exact}
          >
            <EditTask handleGetAllTask={handleGetAllTask}/>
          </Route>
        </Switch>
      </div>
    </>
  )
}
export default MainLayout;