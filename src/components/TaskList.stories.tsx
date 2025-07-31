import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import TaskList from './TaskList';
import * as TaskStories from './Task.stories';
import type { Task, TaskBoxState } from '../lib/store';

// A super-simple mock of the state of the store
export const MockedState: TaskBoxState = {
  tasks: [
    { ...TaskStories.Default.args!.task, id: '1', title: 'Task 1' },
    {
      ...TaskStories.Default.args!.task,
      id: '2',
      title: 'Task 2',
      state: 'TASK_PINNED',
    },
    { ...TaskStories.Default.args!.task, id: '3', title: 'Task 3' },
    {
      ...TaskStories.Default.args!.task,
      id: '4',
      title: 'Task 4',
      state: 'TASK_ARCHIVED',
    },
    { ...TaskStories.Default.args!.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args!.task, id: '6', title: 'Task 6' },
    { ...TaskStories.Default.args!.task, id: '7', title: 'Task 7' },
  ],
  status: 'idle',
  error: null,
};

// A super-simple mock of a redux store
interface MockstoreProps {
  taskboxState: TaskBoxState;
  children: React.ReactNode;
}

const Mockstore = ({ taskboxState, children }: MockstoreProps) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: 'taskbox',
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state, action) => {
              const { id, newTaskState } = action.payload;
              const taskIndex = state.tasks.findIndex(
                (task: Task) => task.id === id
              );
              if (taskIndex >= 0) {
                state.tasks[taskIndex].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const meta: Meta<typeof TaskList> = {
  component: TaskList,
  title: 'TaskList',
  decorators: [
    (story: () => React.ReactElement) => (
      <div style={{ padding: '3rem' }}>{story()}</div>
    ),
  ],
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (story: () => React.ReactElement) => (
      <Mockstore taskboxState={MockedState}>{story()}</Mockstore>
    ),
  ],
};

export const filteredDefault: Story = {
  decorators: [
    (story: () => React.ReactElement) => {
      const tasksInOrder = [
        ...MockedState.tasks.filter((t: Task) => t.state === 'TASK_PINNED'),
        ...MockedState.tasks.filter((t: Task) => t.state !== 'TASK_PINNED'),
      ];
      const filteredTasks = [
        ...tasksInOrder.filter(
          (t: Task) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
        ),
        ...tasksInOrder.filter((t: Task) => t.state === 'TASK_ARCHIVED'),
      ];
      return (
        <Mockstore
          taskboxState={{
            ...MockedState,
            tasks: filteredTasks,
          }}
        >
          {story()}
        </Mockstore>
      );
    },
  ],
};

export const WithPinnedTasks: Story = {
  decorators: [
    (story: () => React.ReactElement) => {
      const pinnedtasks: Task[] = [
        ...MockedState.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' as const },
      ];

      return (
        <Mockstore
          taskboxState={{
            ...MockedState,
            tasks: pinnedtasks,
          }}
        >
          {story()}
        </Mockstore>
      );
    },
  ],
};

export const Loading: Story = {
  decorators: [
    (story: () => React.ReactElement) => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          status: 'loading',
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};

export const Empty: Story = {
  decorators: [
    (story: () => React.ReactElement) => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          tasks: [],
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};
