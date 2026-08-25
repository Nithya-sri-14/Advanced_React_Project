import { useReducer, useEffect } from 'react';
import { INITIAL_TASKS } from '../utils/constants';

const STORAGE_KEY = 'protask_state_v1';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [action.payload, ...state];

    case 'UPDATE_STATUS':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, status: action.payload.status } : task
      );

    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);

    case 'RESET':
      return INITIAL_TASKS;

    default:
      return state;
  }
};

export function useTasks() {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    try {
      const localData = localStorage.getItem(STORAGE_KEY);
      return localData ? JSON.parse(localData) : INITIAL_TASKS;
    } catch {
      return INITIAL_TASKS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error('Failed to persist tasks state:', e);
    }
  }, [tasks]);

  const addTask = (newTask) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        id: `task-${Date.now()}`,
        ...newTask,
      },
    });
  };

  const updateTaskStatus = (id, status) => {
    dispatch({ type: 'UPDATE_STATUS', payload: { id, status } });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const resetTasks = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    tasks,
    addTask,
    updateTaskStatus,
    deleteTask,
    resetTasks,
  };
}
