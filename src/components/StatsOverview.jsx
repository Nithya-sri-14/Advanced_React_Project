import React from 'react';
import { TASK_STATUS } from '../utils/constants';

export function StatsOverview({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === TASK_STATUS.DONE).length;
  const inProgress = tasks.filter((t) => t.status === TASK_STATUS.IN_PROGRESS).length;
  const todo = tasks.filter((t) => t.status === TASK_STATUS.TODO).length;

  const percentComplete = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">Total Tasks</span>
        <span className="stat-val">{total}</span>
      </div>
      <div className="stat-card stat-progress">
        <span className="stat-label">In Progress</span>
        <span className="stat-val">{inProgress}</span>
      </div>
      <div className="stat-card stat-todo">
        <span className="stat-label">To Do</span>
        <span className="stat-val">{todo}</span>
      </div>
      <div className="stat-card stat-done">
        <span className="stat-label">Completion Rate</span>
        <span className="stat-val">{percentComplete}%</span>
      </div>
    </div>
  );
}
