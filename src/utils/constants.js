export const TASK_STATUS = {
  TODO: 'todo',
  IN_PROGRESS: 'in_progress',
  REVIEW: 'review',
  DONE: 'done',
};

export const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
};

export const INITIAL_TASKS = [
  {
    id: 'task-1',
    title: 'Architect WebContainer Integration',
    description: 'Implement bi-directional git syncing and in-memory tarball streaming.',
    status: TASK_STATUS.DONE,
    priority: TASK_PRIORITY.URGENT,
    assignee: 'Alex Rivera',
    dueDate: '2026-08-30',
  },
  {
    id: 'task-2',
    title: 'Optimize React Virtual DOM Tree',
    description: 'Use React.memo and custom hooks for smooth 60fps UI re-renders.',
    status: TASK_STATUS.IN_PROGRESS,
    priority: TASK_PRIORITY.HIGH,
    assignee: 'Nithya Sri',
    dueDate: '2026-09-02',
  },
  {
    id: 'task-3',
    title: 'Design Dark Mode Theme System',
    description: 'Add CSS variable theme provider and smooth color transitions.',
    status: TASK_STATUS.TODO,
    priority: TASK_PRIORITY.MEDIUM,
    assignee: 'Sam Dev',
    dueDate: '2026-09-05',
  },
  {
    id: 'task-4',
    title: 'Write Automated E2E Test Suites',
    description: 'Verify GitHub OAuth authorization, commit streaming, and ZIP exports.',
    status: TASK_STATUS.REVIEW,
    priority: TASK_PRIORITY.HIGH,
    assignee: 'Jordan Lee',
    dueDate: '2026-09-01',
  },
];
