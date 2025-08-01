import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { Provider } from 'react-redux';
import { fireEvent, within, waitFor, waitForElementToBeRemoved } from '@storybook/test';
import InboxScreen from './InboxScreen';
import store from '../lib/store';
import { MockedState } from './TaskList.stories';

const meta: Meta<typeof InboxScreen> = {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos', ({ request }) => {
          console.log('META LEVEL MSW intercepted (docs page):', request.url);

          // Convert MockedState.tasks to the format expected by the API
          const apiTasks = MockedState.tasks.map((task) => ({
            id: parseInt(task.id),
            title: task.title,
            completed: task.state === 'TASK_ARCHIVED',
            userId: 1,
          }));

          console.log('META LEVEL MSW returning API tasks for docs');
          return HttpResponse.json(apiTasks, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
          });
        }),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Wait for loading to disappear (if it exists)
    try {
      const loadingElement = canvas.queryByTestId('loading');
      if (loadingElement) {
        await waitForElementToBeRemoved(loadingElement);
      }
    } catch (error) {
      console.log('Loading element not found or already removed');
    }

    // Wait for tasks to be loaded and then interact with them
    await waitFor(async () => {
      const pinTask1 = canvas.queryByLabelText('pinTask-1');
      const pinTask3 = canvas.queryByLabelText('pinTask-3');

      if (pinTask1) await fireEvent.click(pinTask1);
      if (pinTask3) await fireEvent.click(pinTask3);
    });
  },
};

export const Error: Story = {
  parameters: {
    docs: {
      disable: true, // This prevents the Error story from showing in docs
    },
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos', () => {
          console.log('ERROR STORY MSW intercepted - returning 403');
          return new HttpResponse(null, {
            status: 403,
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          });
        }),
      ],
    },
  },
};
