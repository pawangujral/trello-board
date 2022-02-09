import React from 'react';
import List from './list';
import Add from './add';
import {TaskContext} from './../../context/taskContext/taskStore';
import Button from './../../components/button';
import {taskType, cntxtType} from './../../utils/types';
import './tasks.css';

const defaultState = {
  id: null,
  title: '',
  description: '',
  createDate: null,
  tags: '',
  status: '',
};

const dataDefaultState = {
  start: [],
  inProgress: [],
  completed: [],
};

type dataType = {
    start: taskType[],
    inProgress: taskType[],
    completed: taskType[]
}

const Tasks: React.FC = () => {
  const {tasks, handleLocalStorage} = React.useContext<cntxtType>(TaskContext);
  const [taskData, setTaskData] = React.useState<dataType>(dataDefaultState);
  const [openModal, setModal] = React.useState<boolean>(false);
  const [modalData, setModalData] = React.useState<taskType>(defaultState);

  React.useEffect(() => {
    (() => {
      // divide each category for respective state
      const startData = tasks.filter((task) => task.status === 'start');
      const progressData = tasks.filter((task) => task.status === 'inProgress');
      const completedData = tasks.filter((task) => task.status === 'completed');

      setTaskData({
        start: [...startData],
        inProgress: [...progressData],
        completed: [...completedData]});
    })();
  }, [tasks]);

  // handle add new task fn
  const handleModal = (open: boolean) => {
    setModalData(defaultState);
    setModal(!openModal);
  };

  // Handle Card Edit fn
  const handleEdit = (
      event: React.MouseEvent<HTMLButtonElement>,
      data: taskType) => {
    setModalData(data);
    setModal(true);
  };

  // save to local storage fn
  const handleLocalState = (type: string) => {
    if (handleLocalStorage) {
      const isSuccess = handleLocalStorage(type);

      if (isSuccess) {
        // TODO : add toast message
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="title-bar">
        <div>
          <h1>My Tasks</h1>
          <Button
            title="add task"
            data-testid="add-task"
            handleClick={(e) => handleModal(true)}/>
        </div>
        <div className="button-group">
          <Button
            title="save your board"
            handleClick={(e) => handleLocalState('save')}/>
          <Button
            title="Clear your board"
            variant="text"
            handleClick={(e) => handleLocalState('delete')}/>
        </div>
      </div>

      <main>
        <div className="tasks-list-wrapper">
          <List
            title="To do"
            data={taskData.start}
            handleEdit={handleEdit}/>
          <List
            title="In progress..."
            data={taskData.inProgress} handleEdit={handleEdit}/>
          <List
            title="Completed"
            data={taskData.completed} handleEdit={handleEdit}/>
        </div>
        {openModal && <Add handleModal={handleModal} preFill={modalData}/>}
      </main>
    </div>
  );
};

export default Tasks;
