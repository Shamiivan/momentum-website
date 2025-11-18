// Simple localStorage-based persistence
// For production, you'd replace this with API calls to your backend

const STORAGE_KEY_PREFIX = 'momentum_page_';

export interface PageData {
  id: string;
  name: string;
  content: string;
  updatedAt: string;
}

export const savePage = (pageId: string, content: string): void => {
  const pageData: PageData = {
    id: pageId,
    name: pageId,
    content,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(`${STORAGE_KEY_PREFIX}${pageId}`, JSON.stringify(pageData));
  console.log(`✅ Page "${pageId}" saved successfully`);
};

export const loadPage = (pageId: string): string | null => {
  const stored = localStorage.getItem(`${STORAGE_KEY_PREFIX}${pageId}`);

  if (!stored) {
    console.log(`ℹ️ No saved data found for page "${pageId}"`);
    return null;
  }

  try {
    const pageData: PageData = JSON.parse(stored);
    console.log(`✅ Page "${pageId}" loaded (last updated: ${pageData.updatedAt})`);
    return pageData.content;
  } catch (error) {
    console.error(`❌ Error loading page "${pageId}":`, error);
    return null;
  }
};

export const listPages = (): PageData[] => {
  const pages: PageData[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(STORAGE_KEY_PREFIX)) {
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          pages.push(JSON.parse(stored));
        } catch (error) {
          console.error(`Error parsing page data for key ${key}:`, error);
        }
      }
    }
  }

  return pages.sort((a, b) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
};

export const deletePage = (pageId: string): void => {
  localStorage.removeItem(`${STORAGE_KEY_PREFIX}${pageId}`);
  console.log(`🗑️ Page "${pageId}" deleted`);
};

// Export page data as JSON file
export const exportPage = (pageId: string): void => {
  const content = loadPage(pageId);
  if (!content) {
    alert('No data to export');
    return;
  }

  const blob = new Blob([content], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${pageId}-export.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Import page data from JSON file
export const importPage = (pageId: string, file: File): Promise<void> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        savePage(pageId, content);
        resolve();
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
};
