interface TaskProps {
  task: {
    id: string;
    title: string;
    state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
  };
  onArchiveTask: (id: string) => void;
  onUnArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onUnArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor='checked'
        aria-label={`archiveTask-${id}`}
        className='checkbox'
      >
        <input
          type='checkbox'
          name='checked'
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
          readOnly
        />
        <span
          className='checkbox-custom'
          onClick={() =>
            state === 'TASK_INBOX' || state === 'TASK_PINNED'
              ? onArchiveTask(id)
              : onUnArchiveTask(id)
          }
        />
      </label>

      <label htmlFor='title' aria-label={title} className='title'>
        <input
          type='text'
          value={title}
          readOnly={true}
          name='title'
          placeholder='Input title'
          style={{ textOverflow: 'ellipsis' }}
        />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className='pin-button'
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}
