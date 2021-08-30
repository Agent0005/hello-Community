import { useState, useEffect } from 'react';
import { Articles } from '../../shared';

import { api } from '../../services/devto.api';

export function useArticles() {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    api.get(`top-headlines?sources=techcrunch&apiKey=cf370461f1a249c38cc72997821354d1`).then(response => {
      setArticles(response.data);
    });
  }, []);

  return articles;
}
