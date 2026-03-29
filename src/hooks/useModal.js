/**
 * useModal Hook
 * Manages modal state with automatic scroll lock
 *
 * Usage:
 *   const [activeModal, setActiveModal] = useModal();
 *   {activeModal && <Modal onClose={() => setActiveModal(null)} />}
 */

import { useState, useEffect, useCallback } from 'react';
import { SCROLL_LOCK_DELAY } from '../constants/notificationConfig';

export function useModal(initialState = null) {
  const [activeModal, setActiveModal] = useState(initialState);

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    
    // Add small delay to ensure smooth transition
    const timeoutId = setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, SCROLL_LOCK_DELAY);

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeModal]);

  const closeModal = useCallback(() => setActiveModal(null), []);

  return [activeModal, setActiveModal, closeModal];
}
