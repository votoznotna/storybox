import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TaskList from './TaskList';

const meta: Meta<typeof TaskList> = {
  component: TaskList,
  title: 'TaskList',
  tags: ['autodocs'],
  args: {
    onArchiveTask: fn(),
    onUnArchiveTask: fn(),
    onPinTask: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tasks: [
      { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
      { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
      { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
      { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
      { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
      { id: '6', title: 'Task 6', state: 'TASK_INBOX' },
    ],
    loading: false,
  },
};

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      { id: '1', title: 'Task 1 (pinned)', state: 'TASK_PINNED' },
      { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
      { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
      { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
      { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    tasks: [],
    loading: false,
  },
};
