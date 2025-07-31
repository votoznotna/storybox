import Task from './Task';
import { updateTaskState } from '../lib/store';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import type { Task as TaskType } from '../lib/store';

export default function TaskList() {
  // We're retrieving our state from the store
  const tasks = useAppSelector((state) => {
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((t: TaskType) => t.state === 'TASK_PINNED'),
      ...state.taskbox.tasks.filter((t: TaskType) => t.state !== 'TASK_PINNED'),
    ];
    const filteredTasks = [
      ...tasksInOrder.filter(
        (t: TaskType) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
      ),
      ...tasksInOrder.filter((t: TaskType) => t.state === 'TASK_ARCHIVED'),
    ];
    return filteredTasks;
  });

  const { status } = useAppSelector((state) => state.taskbox);

  const dispatch = useAppDispatch();

  const pinTask = (value: string) => {
    // We're dispatching the Pinned event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
  };
  const archiveTask = (value: string) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
  };

  const unArchiveTask = (value: string) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_INBOX' }));
  };

  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox' />
      <span className='glow-text'>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (status === 'loading') {
    return (
      <div className='list-items' data-testid='loading' key={'loading'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className='list-items' key={'empty'} data-testid='empty'>
        <div className='wrapper-message'>
          <span className='icon-check' />
          <p className='title-message'>You have no tasks</p>
          <p className='subtitle-message'>Sit back and relax</p>
        </div>
      </div>
    );
  }

  return (
    <div className='list-items' data-testid='success' key={'success'}>
      {tasks.map((task: TaskType) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={(task: string) => pinTask(task)}
          onArchiveTask={(task: string) => archiveTask(task)}
          onUnArchiveTask={(task: string) => unArchiveTask(task)}
        />
      ))}
    </div>
  );
}
