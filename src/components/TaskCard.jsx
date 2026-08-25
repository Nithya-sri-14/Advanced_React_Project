import React from 'react';
import { TASK_STATUS } from '../utils/constants';

export function TaskCard({ task, onUpdateStatus, onDelete }) {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'priority-urgent';
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      default:
        return 'priority-low';
    }
  };

  return (
    <div className="task-card">
      <div className="task-header">
        <span className={`priority-tag ${getPriorityClass(task.priority)}`}>
          {task.priority.toUpperCase()}
        </span>
        <button onClick={() => onDelete(task.id)} className="btn-delete" title="Delete task">
          ✕
        </button>
      </div>

      <h4 className="task-title">{task.title}</h4>
      <p className="task-desc">{task.description}</p>

      <div className="task-footer">
        <span className="task-assignee">👤 {task.assignee}</span>

        <select
          value={task.status}
          onChange={(e) => onUpdateStatus(task.id, e.target.value)}
          className="status-select"
        >
          <option value={TASK_STATUS.TODO}>To Do</option>
          <option value={TASK_STATUS.IN_PROGRESS}>In Progress</option>
          <option value={TASK_STATUS.REVIEW}>Review</option>
          <option value={TASK_STATUS.DONE}>Done</option>
        </select>
      </div>
    </div>
  );
}
