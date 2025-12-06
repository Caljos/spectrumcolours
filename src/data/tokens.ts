export const globalColors = [
  'gray',
  'blue',
  'green',
  'orange',
  'red',
  'cyan',
  'indigo',
  'purple',
  'fuchsia',
  'magenta',
  'pink',
  'yellow',
  'seafoam',
  'chartreuse',
  'celery',
  'turquoise',
  'brown',
  'silver',
  'cinnamon'
] as const;

export const colorSteps = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300];

export const graySteps = [50, ...colorSteps];

export type ColorScale = typeof globalColors[number];

export const semanticColors = [
  'accent',
  'informative',
  'negative',
  'notice',
  'positive'
] as const;

export const semanticSteps = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] as const;

// Note: Some semantic scales might have more steps (like negative going to 1600), 
// but we'll start with the standard range typically available in the main system aliases
// and can expand if specific ones are missing from our spectrum2Tokens definition.

export const textColors = [
  'text-neutral',
  'text-neutral-subdued',
  'text-disabled',
  'text-heading',
  'text-title',
  'text-body',
  'text-detail',
  'text-code',
  'text-accent',
  'text-negative',
];

export const backgroundColors = [
  'bg-base',
  'bg-layer-1',
  'bg-layer-2',
  'bg-pasteboard',
  'bg-elevated',
  'bg-disabled',
  'bg-neutral',
  'bg-neutral-subdued',
  'bg-neutral-subtle',
  'bg-accent',
  'bg-accent-subtle',
  'bg-negative',
  'bg-negative-subtle',
  'bg-positive',
  'bg-positive-subtle',
  'bg-notice',
  'bg-notice-subtle',
  'bg-informative',
  'bg-informative-subtle',
  'bg-gray',
  'bg-gray-subtle',
];

export const borderColors = [
  'border-default',
  'border-disabled',
  'border-negative',
];

export const fillColors = [
  'fill-neutral',
  'fill-accent',
  'fill-negative',
  'fill-positive',
  'fill-notice',
  'fill-informative',
  'fill-gray',
  'fill-red',
  'fill-orange',
  'fill-yellow',
  'fill-green',
  'fill-blue',
];
