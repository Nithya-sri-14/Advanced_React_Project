import React from 'react';

export function Header({ onOpenNewTaskModal, taskCount }) {
  return (
    <header className="app-header">
      <div className="header-brand">
        <div className="brand-logo">⚡</div>
        <div>
          <h2>ProTask Agile Studio</h2>
          <p className="header-sub">Advanced React Dashboard Template</p>
        </div>
      </div>

      <div className="header-actions">
        <span className="badge-count">{taskCount} Active Tasks</span>
        <button onClick={onOpenNewTaskModal} className="btn-primary">
          + New Task
        </button>
      </div>
    </header>
  );
}
