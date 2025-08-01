import { http, HttpResponse } from 'msw';

// Mock data that matches your Task interface
const mockTasks = [
  { id: 1, title: 'Task 1', completed: false, userId: 1 },
  { id: 2, title: 'Task 2', completed: true, userId: 1 },
  { id: 3, title: 'Task 3', completed: false, userId: 1 },
  { id: 4, title: 'Task 4', completed: false, userId: 1 },
  { id: 5, title: 'Task 5', completed: true, userId: 1 },
];

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/todos', ({ request }) => {
    console.log('MSW intercepted request:', request.url);
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');
    console.log('UserId parameter:', userId);

    if (userId === '1') {
      console.log('Returning mock tasks for userId=1');
      return HttpResponse.json(mockTasks);
    }

    console.log('No userId=1, returning empty array');
    return HttpResponse.json([]);
  }),
];
