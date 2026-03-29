/**
 * Button Components
 * 
 * Centralized reusable button variants following consistency patterns.
 * Styled components for different button states and sizes.
 * 
 * Usage:
 *   import { PrimaryButton, SecondaryButton, IconButton } from '@/components/ui/buttons';
 */

import styled from 'styled-components';
import { theme } from '../../../styles/theme';

/**
 * Base button styles shared across variants
 */
const baseButtonStyles = `
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.sizes.md};
  font-weight: ${theme.typography.weights.medium};
  border: none;
  border-radius: ${theme.borderRadius.full};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${theme.spacing.lg};
  height: 32px;
  white-space: nowrap;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active {
    transform: scale(0.98);
  }
`;

/**
 * PrimaryButton
 * Main action button (blue background)
 */
export const PrimaryButton = styled.button`
  ${baseButtonStyles}
  background-color: ${theme.colors.blue};
  color: white;

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;

/**
 * SecondaryButton
 * Alternative action button (light ash background)
 */
export const SecondaryButton = styled.button`
  ${baseButtonStyles}
  background-color: ${theme.colors.lightAsh};
  color: ${theme.colors.black};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.lightAsh};
    filter: brightness(0.95);
  }
`;

/**
 * TertiaryButton
 * Text-only button (no background)
 */
export const TertiaryButton = styled.button`
  ${baseButtonStyles}
  background: transparent;
  color: ${theme.colors.blue};
  padding: 0 ${theme.spacing.md};

  &:hover:not(:disabled) {
    color: ${theme.colors.blue};
    filter: brightness(0.8);
  }
`;

/**
 * IconButton
 * Button for icon-only actions
 */
export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  transition: all ${theme.transitions.fast};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.backgroundLight};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/**
 * ApplyButton
 * Specific button for job applications
 */
export const ApplyButton = styled.button`
  ${baseButtonStyles}
  background-color: ${theme.colors.blue};
  color: white;
  flex: 1;

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;

/**
 * SaveButton
 * Specific button for saving/storing items
 */
export const SaveButton = styled.button`
  ${baseButtonStyles}
  background-color: ${theme.colors.lightAsh};
  color: ${theme.colors.black};
  margin-left: auto;

  &:hover:not(:disabled) {
    filter: brightness(0.95);
  }
`;

export default {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  IconButton,
  ApplyButton,
  SaveButton,
};
