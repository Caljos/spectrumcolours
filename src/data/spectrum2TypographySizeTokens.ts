// Static definitions for Spectrum 2 Typography and Size tokens
// Used because runtime CSS variable access is unreliable in the current build environment.
// Values are approximations based on standard Spectrum 2 scales.

export const typographyValues: Record<string, string> = {
  // Font Family
  'font-family-sans': 'Adobe Clean, sans-serif',
  'font-family-code': 'Source Code Pro, monospace',
  'font-family-serif': 'Adobe Clean Serif, serif',

  // Font Weight
  'font-weight-regular': '400',
  'font-weight-medium': '500',
  'font-weight-bold': '700',
  'font-weight-extra-bold': '800',
  'font-weight-black': '900',

  // Font Size (T-shirt sizing approximation)
  'font-size-75': '12px',
  'font-size-100': '14px',
  'font-size-200': '16px',
  'font-size-300': '18px',
  'font-size-400': '20px',
  'font-size-500': '22px',
  'font-size-600': '25px',
  'font-size-700': '28px',
  'font-size-800': '32px',
  'font-size-900': '36px',
  'font-size-1000': '40px',
  'font-size-1100': '45px',
  'font-size-1200': '50px',
  'font-size-1300': '60px',

  // Line Height
  'line-height-100': '1.25',
  'line-height-200': '1.3',
  'line-height-300': '1.5',
  'line-height-400': '1.7',
  'line-height-500': '2.0',
};

export const sizeValues: Record<string, string> = {
  // Scale (Dimensions/Spacing) - Base 4/8 approximation
  'size-25': '2px',
  'size-50': '4px',
  'size-75': '6px',
  'size-100': '8px',
  'size-115': '10px',
  'size-125': '12px',
  'size-130': '14px',
  'size-150': '16px',
  'size-160': '20px',
  'size-175': '24px',
  'size-200': '32px',
  'size-225': '36px',
  'size-250': '40px',
  'size-300': '48px',
  'size-400': '64px',
  'size-500': '80px',
  'size-600': '96px',
  'size-700': '112px',
  'size-800': '128px',
  'size-900': '144px',
  'size-1000': '160px',
  'size-1200': '192px',
  'size-2000': '320px',
  'size-2400': '384px',
  'size-3000': '480px',
  'size-3600': '576px',
  'size-4600': '736px',
  'size-6000': '960px',

  // Border Radius
  'border-radius-none': '0px',
  'border-radius-xsmall': '2px',
  'border-radius-small': '4px',
  'border-radius-medium': '8px',
  'border-radius-large': '16px',
  'border-radius-xlarge': '32px',
  'border-radius-full': '9999px',

  // Border Width
  'border-width-100': '1px',
  'border-width-200': '2px',
  'border-width-300': '3px',
  'border-width-400': '4px',
};

export function getTypographyValue(tokenName: string): string {
  return typographyValues[tokenName] || '';
}

export function getSizeValue(tokenName: string): string {
  return sizeValues[tokenName] || '';
}

