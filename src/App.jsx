import React, { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import { Header } from './components/Header';
import { StatsOverview } from './components/StatsOverview';
import { TaskBoard } from './components/TaskBoard';
import { TASK_STATUS, TASK_PRIORITY } from './utils/constants';
import './App.css';

export default function App() {
  const { tasks, addTask, updateTaskStatus, deleteTask, resetTasks } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState(TASK_PRIORITY.MEDIUM);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      title,
      description,
      assignee: assignee || 'Unassigned',
      priority,
      status: TASK_STATUS.TODO,
    });

    setTitle('');
    setDescription('');
    setAssignee('');
    setPriority(TASK_PRIORITY.MEDIUM);
    setIsModalOpen(false);
  };

  return (
    <div className="layout-container">
      <Header onOpenNewTaskModal={() => setIsModalOpen(true)} taskCount={tasks.length} />

      <main className="main-content">
        <div className="section-header">
          <StatsOverview tasks={tasks} />
          <button onClick={resetTasks} className="btn-secondary">
            ↻ Reset Sample Data
          </button>
        </div>

        <TaskBoard tasks={tasks} onUpdateStatus={updateTaskStatus} onDelete={deleteTask} />
      </main>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Create New Task</h3>
              <button onClick={() => setIsModalOpen(false)} className="btn-close">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="task-form">
              <div className="form-group">
                <label>Task Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Implement Authorization Middleware"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Descriptions</label>
                <textarea
                  rows="3"
                  placeholder="Describe task requirements..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Assignee</label>
                  <input
                    type="text"
                    placeholder="e.g. Nithya Sri"
                    value={assignee}
                    onChange={(e) => setAssignee(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Priority</label>
                  <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value={TASK_PRIORITY.LOW}>Low</option>
                    <option value={TASK_PRIORITY.MEDIUM}>Medium</option>
                    <option value={TASK_PRIORITY.HIGH}>High</option>
                    <option value={TASK_PRIORITY.URGENT}>Urgent</option>
                  </select>
                </div>
              </div>

              <div className="modal-actions">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-cancel">
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
