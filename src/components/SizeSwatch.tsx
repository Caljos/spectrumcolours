import { useState, useEffect } from 'react';
import { useToast } from './ToastContext';
import { getSizeValue } from '../data/spectrum2TypographySizeTokens';

interface SizeSwatchProps {
  tokenName: string;
  category: 'scale' | 'borderRadius' | 'borderWidth';
}

export function SizeSwatch({ tokenName, category }: SizeSwatchProps) {
  const [value, setValue] = useState<string>('');
  const { showToast } = useToast();

  useEffect(() => {
    // Use the static value map
    const val = getSizeValue(tokenName);
    setValue(val);
  }, [tokenName]);

  const handleCopy = () => {
    const valToCopy = value || `var(--s2-${tokenName})`;
    navigator.clipboard.writeText(valToCopy);
    showToast(`Copied ${valToCopy} to clipboard!`);
  };

  const getPreviewStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      backgroundColor: '#0070f3', // Blue for size visibility
      transition: 'all 0.2s',
    };

    if (category === 'scale') {
      return {
        ...baseStyle,
        width: value || '0px',
        height: value || '0px',
        minWidth: '2px',
        minHeight: '2px',
      };
    }
    
    if (category === 'borderRadius') {
      return {
        ...baseStyle,
        width: '64px',
        height: '64px',
        borderRadius: value || '0px',
        border: '2px solid #005aa3',
        backgroundColor: '#e6f2ff',
      };
    }

    if (category === 'borderWidth') {
        return {
          width: '64px',
          height: '64px',
          backgroundColor: '#fff',
          borderStyle: 'solid',
          borderColor: '#0070f3',
          borderWidth: value || '0px',
        };
      }

    return baseStyle;
  };

  return (
    <div className="token-swatch" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div 
        onClick={handleCopy}
        style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '8px', 
          backgroundColor: '#fff',
          backgroundImage: 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          border: '1px solid #e0e0e0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden', // Clip large items
          position: 'relative',
        }}
        title={`Click to copy ${tokenName}`}
      >
        <div style={getPreviewStyle()} />
      </div>
      <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: '600', textAlign: 'center', wordBreak: 'break-word', maxWidth: '100px' }}>
        {tokenName}
      </div>
      
      <div style={{ fontSize: '11px', color: '#666', fontFamily: 'monospace', height: '1.5em', marginTop: '2px' }}>
        {value || 'N/A'}
      </div>
    </div>
  );
}
