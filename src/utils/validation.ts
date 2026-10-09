/**
 * Validates email according to requirement:
 * - Requires a domain containing a dot after '@' (e.g., nagaraj@gmail.com, name@company.co.in)
 * - Empty email -> "Please enter your email address."
 * - Invalid format -> "Please enter a valid email address."
 */
export const validateEmailFormat = (email: string): { isValid: boolean; error: string } => {
  const trimmed = email.trim();
  
  if (!trimmed) {
    return { isValid: false, error: 'Please enter your email address.' };
  }

  // Regular expression requiring non-whitespace before '@', '@', domain characters, '.', and top-level domain (2+ chars)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  
  if (!emailPattern.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }

  return { isValid: true, error: '' };
};
