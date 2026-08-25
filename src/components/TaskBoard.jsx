import React from 'react';
import { TASK_STATUS } from '../utils/constants';
import { TaskCard } from './TaskCard';

export function TaskBoard({ tasks, onUpdateStatus, onDelete }) {
  const columns = [
    { title: '📋 To Do', status: TASK_STATUS.TODO, color: 'col-todo' },
    { title: '⚡ In Progress', status: TASK_STATUS.IN_PROGRESS, color: 'col-progress' },
    { title: '🔍 In Review', status: TASK_STATUS.REVIEW, color: 'col-review' },
    { title: '✅ Completed', status: TASK_STATUS.DONE, color: 'col-done' },
  ];

  return (
    <div className="task-board">
      {columns.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col.status);

        return (
          <div key={col.status} className={`board-column ${col.color}`}>
            <div className="column-header">
              <h3>{col.title}</h3>
              <span className="col-count">{colTasks.length}</span>
            </div>

            <div className="column-body">
              {colTasks.length === 0 ? (
                <div className="empty-col">No tasks here</div>
              ) : (
                colTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onUpdateStatus={onUpdateStatus}
                    onDelete={onDelete}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
