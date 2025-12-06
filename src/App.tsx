import { useState, useMemo } from 'react';
import { Provider } from '@react-spectrum/s2';
import { globalColors, colorSteps, graySteps, textColors, backgroundColors, borderColors, fillColors } from './data/tokens';
import { TokenSection } from './components/TokenSection';

type Category = 'All' | 'Global' | 'Text' | 'Background' | 'Border' | 'Fill';

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

  const filteredGlobalTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Global') return [];
    const filtered = searchTerm ? globalTokens.filter(t => t.toLowerCase().includes(searchTerm.toLowerCase())) : globalTokens;
    return filtered;
  }, [globalTokens, searchTerm, selectedCategory]);

  const filteredTextTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Text') return [];
    const filtered = searchTerm ? textColors.filter(t => t.toLowerCase().includes(searchTerm.toLowerCase())) : textColors;
    return filtered;
  }, [searchTerm, selectedCategory]);

  const filteredBackgroundTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Background') return [];
    const filtered = searchTerm ? backgroundColors.filter(t => t.toLowerCase().includes(searchTerm.toLowerCase())) : backgroundColors;
    return filtered;
  }, [searchTerm, selectedCategory]);

  const filteredBorderTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Border') return [];
    const filtered = searchTerm ? borderColors.filter(t => t.toLowerCase().includes(searchTerm.toLowerCase())) : borderColors;
    return filtered;
  }, [searchTerm, selectedCategory]);

  const filteredFillTokens = useMemo(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Fill') return [];
    const filtered = searchTerm ? fillColors.filter(t => t.toLowerCase().includes(searchTerm.toLowerCase())) : fillColors;
    return filtered;
  }, [searchTerm, selectedCategory]);

  const toggleColorMode = () => {
    setColorMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const categories: Category[] = ['All', 'Global', 'Text', 'Background', 'Border', 'Fill'];

  return (
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
                placeholder="Search tokens (e.g., blue, 500)..." 
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
          {(selectedCategory === 'All' || selectedCategory === 'Global') && (
            <TokenSection title="Global Colors" tokens={filteredGlobalTokens} colorMode={colorMode} />
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
        </main>

        <footer style={{ marginTop: '60px', paddingTop: '20px', borderTop: `1px solid ${colorMode === 'light' ? '#e0e0e0' : '#333'}`, textAlign: 'center', fontSize: '12px', opacity: 0.6 }}>
          <p>Spectrum 2 v0.12.0 • Color Mode: {colorMode === 'light' ? 'Light' : 'Dark'}</p>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
