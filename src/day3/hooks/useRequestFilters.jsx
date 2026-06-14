import { useMemo } from "react";

const useRequestFilters = (
  requests,
  search,
  category,
  status,
  priority,
  sort,
) => {
  const filteredRequests = useMemo(() => {
    let filtered = [...requests];

    if (search) {
      filtered = filtered.filter((req) =>
        req.title.toLowerCase().includes(search.toLowerCase())    
      );
    }

    if (category) {
      filtered = filtered.filter((req) => req.category === category);
    }

    if (status) {
      filtered = filtered.filter((req) => req.status === status);
    }

    if (priority) {
      filtered = filtered.filter((req) => req.priority === priority);
    }

    if (sort === "latest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (sort === "oldest") {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (sort === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [requests, search, category, status, priority, sort]);

  return filteredRequests;
};

export default useRequestFilters;
