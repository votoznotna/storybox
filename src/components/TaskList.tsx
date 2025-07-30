import Task from './Task';

export interface TaskListProps {
  tasks: {
    id: string;
    title: string;
    state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
  }[];
  loading: boolean;
  onArchiveTask: (id: string) => void;
  onUnArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}
export default function TaskList({
  tasks,
  loading,
  onArchiveTask,
  onUnArchiveTask,
  onPinTask,
}: TaskListProps) {
  const events = {
    onArchiveTask: (id: string) => onArchiveTask(id),
    onUnArchiveTask: (id: string) => onUnArchiveTask(id),
    onPinTask: (id: string) => onPinTask(id),
  };

  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox' />
      <span className='glow-text'>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
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
  } else if (tasks.length === 0) {
    return (
      <div className='list-items' key={'empty'} data-testid='empty'>
        <div className='wrapper-message'>
          <span className='icon-check' />
          <p className='title-message'>You have no tasks</p>
          <p className='subtitle-message'>Sit back and relax</p>
        </div>
      </div>
    );
  } else if (tasks.length > 0) {
    const tasksInOrder = [
      ...tasks.filter((t) => t.state === 'TASK_PINNED'),
      ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
    ];

    return (
      <div className='list-items'>
        {tasksInOrder.map((task) => (
          <Task
            key={task.id}
            task={task}
            onArchiveTask={events.onArchiveTask}
            onUnArchiveTask={() => {}}
            onPinTask={events.onPinTask}
          />
        ))}
      </div>
    );
  }
}
