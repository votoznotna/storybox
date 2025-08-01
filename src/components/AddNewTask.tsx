import { useState } from 'react';
import { addNewTask } from '../lib/store';
import { useAppDispatch } from '../lib/hooks';

export const AddNewTask = () => {
  const [newTask, setNewTask] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };

  const handleAddNewTask = () => {
    dispatch(addNewTask({ newTask: newTask }));
    setNewTask('');
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Add a new task'
        value={newTask}
        onChange={handleChange}
        className='text_input'
      />
      <button
        className='new-task-button'
        onClick={() =>
          newTask === '' ? alert('please enter a title...') : handleAddNewTask()
        }
      >
        Add Task
      </button>
    </div>
  );
};
