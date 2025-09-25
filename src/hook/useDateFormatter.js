import { useCallback } from "react";

export const useDateFormatter = () => {
  const formatDate = useCallback((dateString) => {
    if (!dateString) return "N/A";
    const d = new Date(dateString);

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year}. ${hours}:${minutes}`;
  }, []);

  const formatTime = useCallback((dateString) => {
    if (!dateString) return "N/A";
    const d = new Date(dateString);

    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }, []);

  return { formatDate, formatTime };
};
