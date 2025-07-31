/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

// Type definitions for our Task
export interface Task {
  id: string;
  title: string;
  state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
}

// Type definition for our store state
export interface TaskBoxState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */
const TaskBoxData: TaskBoxState = {
  tasks: [],
  status: 'idle',
  error: null,
};

// Type for the API response from jsonplaceholder
interface TodoApiResponse {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

/*
 * Creates an asyncThunk to fetch tasks from a remote endpoint.
 * You can read more about Redux Toolkit's thunks in the docs:
 * https://redux-toolkit.js.org/api/createAsyncThunk
 */
export const fetchTasks = createAsyncThunk<Task[]>(
  'todos/fetchTodos',
  async (): Promise<Task[]> => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?userId=1'
    );
    const data: TodoApiResponse[] = await response.json();
    const result: Task[] = data.map((task: TodoApiResponse) => ({
      id: `${task.id}`,
      title: task.title,
      state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX',
    }));
    return result;
  }
);

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
const TasksSlice = createSlice({
  name: 'taskbox',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (
      state,
      action: { payload: { id: string; newTaskState: Task['state'] } }
    ) => {
      const { id, newTaskState } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex >= 0) {
        state.tasks[taskIndex].state = newTaskState;
      }
    },
    addNewTask: (state, action: { payload: { newTask: string } }) => {
      const { newTask } = action.payload;

      // Create a new copy of the tasks array
      const newTasks = [...state.tasks];

      // Push the new task into the new array
      newTasks.push({
        id: `${state.tasks.length + 1}`,
        title: newTask,
        state: 'TASK_INBOX',
      });

      // Assign the new array to the tasks state variable
      state.tasks = newTasks;
    },
  },
  /*
   * Extends the reducer for the async actions
   * You can read more about it at https://redux-toolkit.js.org/api/createAsyncThunk
   */
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.tasks = [];
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        // Add any fetched tasks to the array
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Something went wrong';
        state.tasks = [];
      });
  },
});

// The actions contained in the slice are exported for usage in our components
export const { updateTaskState } = TasksSlice.actions;
export const { addNewTask } = TasksSlice.actions;

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

// Export types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
