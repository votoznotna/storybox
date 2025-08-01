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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      // This WILL work - addon recognizes it
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos', ({ request }) => {
          const url = new URL(request.url);
          if (url.searchParams.get('userId') === '1') {
            return HttpResponse.json(MockedState.tasks, {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
            });
          }
          return HttpResponse.json([], {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
          });
        }),
      ],
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await fireEvent.click(canvas.getByLabelText('pinTask-1'));
      // Simulates pinning the third task
      await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    });
  },
};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/todos', () => {
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
