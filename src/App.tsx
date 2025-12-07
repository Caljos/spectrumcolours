import { useState, useMemo } from 'react';
import { Provider } from '@react-spectrum/s2';
import { 
  globalColors, colorSteps, graySteps, 
  semanticColors, semanticSteps,
  textColors, backgroundColors, borderColors, fillColors,
  typographyTokens, sizeTokens
} from './data/tokens';
import { TokenSection } from './components/TokenSection';
import { TypographySection } from './components/TypographySection';
import { SizeSection } from './components/SizeSection';
import { ToastProvider } from './components/ToastContext';

type Category = 'All' | 'Global' | 'Semantic' | 'Typography' | 'Size' | 'Text' | 'Background' | 'Border' | 'Fill';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  // Generate all global tokens
  const globalTokens = useMemo(() => {
    const tokens: string[] = [];
    globalColors.forEach(color => {
      const steps = color === 'gray' ? graySteps : colorSteps;
      steps.forEach(step => {
        tokens.push(`${color}-${step}`);
      });
    });
    return tokens;
  }, []);

  // Generate all semantic tokens
  const semanticTokens = useMemo(() => {
    const tokens: string[] = [];
    semanticColors.forEach(color => {
      semanticSteps.forEach(step => {
        tokens.push(`${color}-${step}`);
      });
    });
    return tokens;
  }, []);

  // Helper for filtering
  const filterTokens = (tokens: string[]) => {
    if (!searchTerm) return tokens;
    return tokens.filter(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const filteredGlobalTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Global') return [];
    return filterTokens(globalTokens);
  }, [globalTokens, searchTerm, selectedCategory]);

  const filteredSemanticTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Semantic') return [];
    return filterTokens(semanticTokens);
  }, [semanticTokens, searchTerm, selectedCategory]);

  const filteredTextTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Text') return [];
    return filterTokens(textColors);
  }, [searchTerm, selectedCategory]);

  const filteredBackgroundTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Background') return [];
    return filterTokens(backgroundColors);
  }, [searchTerm, selectedCategory]);

  const filteredBorderTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Border') return [];
    return filterTokens(borderColors);
  }, [searchTerm, selectedCategory]);

  const filteredFillTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Fill') return [];
    return filterTokens(fillColors);
  }, [searchTerm, selectedCategory]);

  // Typography Filtering
  const filteredFontFamilyTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Typography') return [];
    return filterTokens(typographyTokens.fontFamily);
  }, [searchTerm, selectedCategory]);

  const filteredFontWeightTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Typography') return [];
    return filterTokens(typographyTokens.fontWeight);
  }, [searchTerm, selectedCategory]);

  const filteredFontSizeTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Typography') return [];
    return filterTokens(typographyTokens.fontSize);
  }, [searchTerm, selectedCategory]);

  const filteredLineHeightTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Typography') return [];
    return filterTokens(typographyTokens.lineHeight);
  }, [searchTerm, selectedCategory]);

  // Size Filtering
  const filteredSizeScaleTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Size') return [];
    return filterTokens(sizeTokens.scale);
  }, [searchTerm, selectedCategory]);

  const filteredBorderRadiusTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Size') return [];
    return filterTokens(sizeTokens.borderRadius);
  }, [searchTerm, selectedCategory]);

  const filteredBorderWidthTokens = useMemo(() => {
      if (selectedCategory !== 'All' && selectedCategory !== 'Size') return [];
      return filterTokens(sizeTokens.borderWidth);
    }, [searchTerm, selectedCategory]);

  const toggleColorMode = () => {
    setColorMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const categories: Category[] = ['All', 'Global', 'Semantic', 'Typography', 'Size', 'Text', 'Background', 'Border', 'Fill'];

  return (
    <ToastProvider>
      <Provider background="base" colorScheme={colorMode}>
        <div style={{ 
          padding: '40px', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          fontFamily: 'sans-serif',
          minHeight: '100vh',
          backgroundColor: colorMode === 'light' ? '#ffffff' : '#1a1a1a',
          color: colorMode === 'light' ? '#000000' : '#ffffff'
        }}>
          <header style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>Spectrum 2 Token Explorer</h1>
              
              <button
                onClick={toggleColorMode}
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  border: colorMode === 'light' ? '1px solid #ccc' : '1px solid #444',
                  backgroundColor: colorMode === 'light' ? '#f5f5f5' : '#2a2a2a',
                  color: colorMode === 'light' ? '#000' : '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {colorMode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </div>
            
            <div style={{ marginBottom: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <input 
                  type="text" 
                  placeholder="Search tokens (e.g., blue, 500, font)..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    border: colorMode === 'light' ? '1px solid #ccc' : '1px solid #444',
                    backgroundColor: colorMode === 'light' ? '#fff' : '#2a2a2a',
                    color: colorMode === 'light' ? '#000' : '#fff'
                  }}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '14px',
                    borderRadius: '20px',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: selectedCategory === cat 
                      ? (colorMode === 'light' ? '#000' : '#fff') 
                      : (colorMode === 'light' ? '#f0f0f0' : '#333'),
                    color: selectedCategory === cat 
                      ? (colorMode === 'light' ? '#fff' : '#000') 
                      : (colorMode === 'light' ? '#000' : '#fff'),
                    fontWeight: selectedCategory === cat ? 'bold' : 'normal',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          <main>
            {/* Color Sections */}
            {(selectedCategory === 'All' || selectedCategory === 'Global') && (
              <TokenSection title="Global Colors" tokens={filteredGlobalTokens} colorMode={colorMode} />
            )}
            {(selectedCategory === 'All' || selectedCategory === 'Semantic') && (
              <TokenSection title="Semantic Colors" tokens={filteredSemanticTokens} colorMode={colorMode} />
            )}
            {(selectedCategory === 'All' || selectedCategory === 'Text') && (
              <TokenSection title="Text Colors" tokens={filteredTextTokens} colorMode={colorMode} />
            )}
            {(selectedCategory === 'All' || selectedCategory === 'Background') && (
              <TokenSection title="Background Colors" tokens={filteredBackgroundTokens} colorMode={colorMode} />
            )}
            {(selectedCategory === 'All' || selectedCategory === 'Border') && (
              <TokenSection title="Border Colors" tokens={filteredBorderTokens} colorMode={colorMode} />
            )}
            {(selectedCategory === 'All' || selectedCategory === 'Fill') && (
              <TokenSection title="Fill Colors" tokens={filteredFillTokens} colorMode={colorMode} />
            )}

            {/* Typography Sections */}
            {(selectedCategory === 'All' || selectedCategory === 'Typography') && (
              <>
                <TypographySection title="Font Families" tokens={filteredFontFamilyTokens} category="fontFamily" />
                <TypographySection title="Font Weights" tokens={filteredFontWeightTokens} category="fontWeight" />
                <TypographySection title="Font Sizes" tokens={filteredFontSizeTokens} category="fontSize" />
                <TypographySection title="Line Heights" tokens={filteredLineHeightTokens} category="lineHeight" />
              </>
            )}

            {/* Size Sections */}
            {(selectedCategory === 'All' || selectedCategory === 'Size') && (
              <>
                <SizeSection title="Dimensions & Spacing" tokens={filteredSizeScaleTokens} category="scale" />
                <SizeSection title="Border Radius" tokens={filteredBorderRadiusTokens} category="borderRadius" />
                <SizeSection title="Border Width" tokens={filteredBorderWidthTokens} category="borderWidth" />
              </>
            )}
          </main>

          <footer style={{ marginTop: '60px', paddingTop: '20px', borderTop: `1px solid ${colorMode === 'light' ? '#e0e0e0' : '#333'}`, textAlign: 'center', fontSize: '12px', opacity: 0.6 }}>
            <p>Spectrum 2 v0.12.0 • Color Mode: {colorMode === 'light' ? 'Light' : 'Dark'}</p>
          </footer>
        </div>
      </Provider>
    </ToastProvider>
  );
}

export default App;
