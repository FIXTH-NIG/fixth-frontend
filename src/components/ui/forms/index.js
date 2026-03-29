/**
 * Form Components
 * 
 * Centralized reusable form input elements with consistent styling.
 * 
 * Usage:
 *   import { FormInput, FormTextarea, FormCheckbox } from '@/components/ui/forms';
 */

import styled from 'styled-components';
import { theme } from '../../../styles/theme';

/**
 * Base input styles shared across form elements
 */
const baseInputStyles = `
  width: 100%;
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.lightAsh};
  background-color: ${theme.colors.backgroundLight};
  padding: 0 ${theme.spacing.md};
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.black};
  font-family: ${theme.typography.fontFamily};
  font-weight: ${theme.typography.weights.medium};
  transition: all ${theme.transitions.fast};

  &::placeholder {
    color: ${theme.colors.grey};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
    box-shadow: 0 0 0 3px rgba(75, 111, 187, 0.1);
  }

  &:disabled {
    background-color: ${theme.colors.lightAsh};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

/**
 * FormInput
 * Standard text input field
 */
export const FormInput = styled.input`
  ${baseInputStyles}
  height: 38px;
`;

/**
 * FormTextarea
 * Multi-line text input field
 */
export const FormTextarea = styled.textarea`
  ${baseInputStyles}
  padding: ${theme.spacing.md};
  resize: none;
  min-height: 100px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.backgroundLight};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.lightAsh};
    border-radius: 3px;
  }
`;

/**
 * FormLabel
 * Label for form inputs
 */
export const FormLabel = styled.label`
  display: block;
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing.sm};
`;

/**
 * FormCheckbox
 * Checkbox input with label
 */
export const FormCheckbox = styled.input`
  width: 14px;
  height: 14px;
  accent-color: ${theme.colors.blue};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

/**
 * CheckboxLabel
 * Label for checkbox inputs (typically used with display: flex)
 */
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.grey};
  cursor: pointer;
  margin-bottom: ${theme.spacing.md};

  &:hover input:not(:disabled) {
    filter: brightness(0.9);
  }
`;

/**
 * FormGroup
 * Container for form inputs with spacing
 */
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

/**
 * FormRow
 * Container for multiple form inputs in a row
 */
export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
`;

/**
 * FormError
 * Error message for form validation
 */
export const FormError = styled.span`
  color: #dc3545;
  font-size: ${theme.typography.sizes.xs};
  margin-top: ${theme.spacing.xs};
  display: block;
`;

/**
 * FormHint
 * Helper text for form fields
 */
export const FormHint = styled.span`
  font-size: ${theme.typography.sizes.xs};
  color: ${theme.colors.grey};
  margin-top: ${theme.spacing.xs};
  display: block;
`;

export default {
  FormInput,
  FormTextarea,
  FormLabel,
  FormCheckbox,
  CheckboxLabel,
  FormGroup,
  FormRow,
  FormError,
  FormHint,
};
