import { useState, useEffect } from 'react';
import { useToast } from './ToastContext';
import { getTypographyValue } from '../data/spectrum2TypographySizeTokens';

interface TypographySwatchProps {
  tokenName: string;
  category: 'fontFamily' | 'fontWeight' | 'fontSize' | 'lineHeight';
}

export function TypographySwatch({ tokenName, category }: TypographySwatchProps) {
  const [value, setValue] = useState<string>('');
  const { showToast } = useToast();

  useEffect(() => {
    // Use the static value map
    const val = getTypographyValue(tokenName);
    setValue(val);
  }, [tokenName]);

  const handleCopy = () => {
    // Copy the actual value if available, else the variable
    const valToCopy = value || `var(--s2-${tokenName})`;
    navigator.clipboard.writeText(valToCopy);
    showToast(`Copied ${valToCopy} to clipboard!`);
  };

  const getSampleText = () => {
    switch (category) {
      case 'fontFamily': return 'Ag';
      case 'fontWeight': return 'Aa';
      case 'fontSize': return 'Aa';
      case 'lineHeight': return 'The quick brown fox jumps over the lazy dog.\nSpectrum 2 Design System.';
      default: return 'Aa';
    }
  };

  const styles: React.CSSProperties = {
    // Use the resolved value directly for the preview style
    fontFamily: category === 'fontFamily' ? value : 'var(--s2-font-family-sans, sans-serif)',
    fontWeight: category === 'fontWeight' ? value : 'normal',
    fontSize: category === 'fontSize' ? value : '24px',
    lineHeight: category === 'lineHeight' ? value : '1.5',
  };

  // For specific rendering tweaks
  if (category === 'fontSize') {
      styles.fontSize = value; // Use value
      styles.lineHeight = '1.2';
  }

  return (
    <div className="token-swatch" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div 
        onClick={handleCopy}
        style={{ 
          width: '100%', 
          height: category === 'lineHeight' ? '120px' : '100px', 
          borderRadius: '8px', 
          backgroundColor: '#f5f5f5',
          border: '1px solid #e0e0e0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '16px',
          boxSizing: 'border-box',
          color: '#333',
          ...styles
        }}
        title={`Click to copy ${tokenName}`}
      >
        <span style={{ 
          display: 'block', 
          whiteSpace: category === 'lineHeight' ? 'pre-wrap' : 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textAlign: 'center',
          width: '100%'
        }}>
          {getSampleText()}
        </span>
      </div>
      <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: '600', textAlign: 'center', wordBreak: 'break-word', maxWidth: '100%' }}>
        {tokenName}
      </div>
      
      <div style={{ fontSize: '11px', color: '#666', fontFamily: 'monospace', height: '1.5em', marginTop: '2px' }}>
        {value || 'N/A'}
      </div>
    </div>
  );
}
