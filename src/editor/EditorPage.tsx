import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditorWrapper } from './EditorWrapper';
import { savePage, loadPage } from './persistence';

export const EditorPage = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!pageId) {
      navigate('/admin/editor/home');
      return;
    }

    // Load saved page data
    const savedData = loadPage(pageId);
    if (savedData) {
      setInitialData(savedData);
    }
    setLoading(false);
  }, [pageId, navigate]);

  const handleSave = (data: string) => {
    if (pageId) {
      savePage(pageId, data);
      alert('✅ Page saved successfully!');
    }
  };

  if (loading) {
    return (
      <div className="p-6" style={{ textAlign: 'center' }}>
        <p>Loading editor...</p>
      </div>
    );
  }

  return (
    <EditorWrapper onSave={handleSave} initialData={initialData} />
  );
};
