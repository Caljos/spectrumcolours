import { useState, useEffect } from 'react';
import { resolveToken } from '../data/spectrum2ColorTokens';

interface TokenSwatchProps {
  tokenName: string;
  colorMode?: 'light' | 'dark';
}

export function TokenSwatch({ tokenName, colorMode = 'light' }: TokenSwatchProps) {
  const [colorValue, setColorValue] = useState<string>('');
  const [hexDisplay, setHexDisplay] = useState<string>('...');
  const [resolvedName, setResolvedName] = useState<string>('');

  useEffect(() => {
    const resolution = resolveToken(tokenName, colorMode);
    
    if (resolution.value) {
      setColorValue(resolution.value);
      
      // Convert rgb to hex for display
      if (resolution.value.startsWith('rgb')) {
        setHexDisplay(rgbToHex(resolution.value));
      } else {
        setHexDisplay(resolution.value);
      }

      // Only show resolved name if it's different from the token name
      // (e.g. text-neutral -> gray-800)
      if (resolution.resolvedName && resolution.resolvedName !== tokenName) {
        setResolvedName(resolution.resolvedName);
      } else {
        setResolvedName('');
      }
    } else {
      setColorValue(''); 
      setHexDisplay('N/A');
      setResolvedName('');
    }
  }, [tokenName, colorMode]);

  const handleCopy = () => {
    if (colorValue) {
      const valToCopy = hexDisplay !== 'N/A' && hexDisplay.startsWith('#') ? hexDisplay : colorValue;
      navigator.clipboard.writeText(valToCopy);
      
      const element = document.activeElement as HTMLElement;
      if (element) element.blur();
    }
  };

  return (
    <div className="token-swatch" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div 
        onClick={handleCopy}
        style={{ 
          width: '80px', 
          height: '80px', 
          borderRadius: '8px', 
          backgroundColor: colorValue || '#f0f0f0',
          border: '1px solid #e0e0e0',
          cursor: colorValue ? 'pointer' : 'default',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: !colorValue || colorValue === 'transparent' ? 
            'repeating-conic-gradient(#eee 0% 25%, white 0% 50%)' : 'none',
          backgroundSize: '16px 16px',
          transition: 'transform 0.1s ease',
        }}
        onMouseDown={(e) => {
          if (colorValue) {
            (e.currentTarget as HTMLElement).style.transform = 'scale(0.95)';
          }
        }}
        onMouseUp={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        }}
        title={colorValue ? `Click to copy ${tokenName}` : `Token not available: ${tokenName}`}
      />
      <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: '600', textAlign: 'center', wordBreak: 'break-word', maxWidth: '100px' }}>
        {tokenName}
      </div>
      
      {resolvedName && (
        <div style={{ fontSize: '10px', color: '#005aa3', marginTop: '2px' }}>
          → {resolvedName}
        </div>
      )}

      <div style={{ fontSize: '11px', color: '#666', fontFamily: 'monospace', height: '1.5em', marginTop: '2px' }}>
        {hexDisplay}
      </div>
    </div>
  );
}

function rgbToHex(rgb: string): string {
  if (!rgb) return '';
  const values = rgb.match(/\d+/g);
  if (!values || values.length < 3) return rgb;

  const r = parseInt(values[0]);
  const g = parseInt(values[1]);
  const b = parseInt(values[2]);

  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}
