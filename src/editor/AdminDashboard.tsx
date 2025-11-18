import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listPages, deletePage, exportPage, type PageData } from './persistence';
import './AdminDashboard.css';

export const AdminDashboard = () => {
  const [pages, setPages] = useState<PageData[]>([]);

  const loadPages = () => {
    setPages(listPages());
  };

  useEffect(() => {
    loadPages();
  }, []);

  const handleDelete = (pageId: string) => {
    if (confirm(`Are you sure you want to delete "${pageId}"?`)) {
      deletePage(pageId);
      loadPages();
    }
  };

  const handleExport = (pageId: string) => {
    exportPage(pageId);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Page Editor Dashboard</h1>
        <Link to="/" className="btn-secondary">
          Back to Site
        </Link>
      </div>

      <div className="admin-content">
        <div className="admin-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <Link to="/admin/editor/home" className="action-card">
              <h3>Edit Home Page</h3>
              <p>Customize your homepage content</p>
            </Link>
            <Link to="/admin/editor/services" className="action-card">
              <h3>Edit Services Page</h3>
              <p>Update services information</p>
            </Link>
            <Link to="/admin/editor/about" className="action-card">
              <h3>Edit About Page</h3>
              <p>Modify about section</p>
            </Link>
          </div>
        </div>

        <div className="admin-section">
          <h2>Saved Pages ({pages.length})</h2>
          {pages.length === 0 ? (
            <p className="empty-state">
              No pages saved yet. Start editing a page to see it here!
            </p>
          ) : (
            <div className="pages-list">
              {pages.map((page) => (
                <div key={page.id} className="page-item">
                  <div className="page-info">
                    <h3>{page.name}</h3>
                    <p className="page-date">
                      Last updated: {new Date(page.updatedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="page-actions">
                    <Link to={`/admin/editor/${page.id}`} className="btn-edit">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleExport(page.id)}
                      className="btn-export"
                    >
                      Export
                    </button>
                    <button
                      onClick={() => handleDelete(page.id)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="admin-section">
          <h2>Getting Started</h2>
          <div className="help-content">
            <h3>How to use the editor:</h3>
            <ol>
              <li>Click on any "Edit" button above to start editing a page</li>
              <li>Drag components from the left sidebar onto the canvas</li>
              <li>Click on any component to edit its properties in the right sidebar</li>
              <li>Toggle between "Editing" and "Preview" mode using the top bar</li>
              <li>Click "Save" to persist your changes</li>
            </ol>

            <h3>Tips:</h3>
            <ul>
              <li>Your styles are preserved - only content is editable</li>
              <li>Use Undo/Redo buttons to revert changes</li>
              <li>Export pages to backup your work</li>
              <li>Changes are saved in your browser's localStorage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
