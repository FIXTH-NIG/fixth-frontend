/**
 * useSelectedItemFromParams Hook
 * Finds and returns selected item from data array based on URL search params
 *
 * Usage:
 *   const selectedJob = useSelectedItemFromParams(jobs, 'jobId');
 */

import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useSelectedItemFromParams(data, paramKey) {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    const selectedId = searchParams.get(paramKey);
    return data.find((item) => item.id === selectedId) || null;
  }, [data, paramKey, searchParams]);
}
