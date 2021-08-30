import { useState, useEffect } from 'react';
import { Articles } from '../../shared';

import { api } from '../../services/devto.api';

export function useArticles() {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    api.get(`feed`).then(response => {
      setArticles(response.data);
    });
  }, []);

  return articles;
}
