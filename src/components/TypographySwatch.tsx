import { useState, useEffect, useRef } from 'react';
import { useToast } from './ToastContext';

interface TypographySwatchProps {
  tokenName: string;
  category: 'fontFamily' | 'fontWeight' | 'fontSize' | 'lineHeight';
}

export function TypographySwatch({ tokenName, category }: TypographySwatchProps) {
  const [value, setValue] = useState<string>('');
  const elementRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  useEffect(() => {
    if (elementRef.current) {
      const computed = window.getComputedStyle(elementRef.current);
      let val = '';
      
      switch (category) {
        case 'fontFamily':
          val = computed.fontFamily;
          break;
        case 'fontWeight':
          val = computed.fontWeight;
          break;
        case 'fontSize':
          val = computed.fontSize;
          break;
        case 'lineHeight':
          val = computed.lineHeight;
          break;
      }
      setValue(val);
    }
  }, [tokenName, category]);

  const handleCopy = () => {
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
    fontFamily: category === 'fontFamily' ? `var(--s2-${tokenName})` : 'var(--s2-font-family-sans, sans-serif)',
    fontWeight: category === 'fontWeight' ? `var(--s2-${tokenName})` : 'normal',
    fontSize: category === 'fontSize' ? `var(--s2-${tokenName})` : '24px',
    lineHeight: category === 'lineHeight' ? `var(--s2-${tokenName})` : '1.5',
    // Apply token if it matches the category, otherwise default
  };

  // For specific rendering tweaks
  if (category === 'fontSize') {
      styles.fontSize = `var(--s2-${tokenName})`;
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
        ref={elementRef}
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
        {value}
      </div>
    </div>
  );
}

