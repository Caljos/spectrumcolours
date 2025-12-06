import { TokenSwatch } from './TokenSwatch';

interface TokenSectionProps {
  title: string;
  tokens: string[];
  colorMode?: 'light' | 'dark';
}

export function TokenSection({ title, tokens, colorMode = 'light' }: TokenSectionProps) {
  if (tokens.length === 0) return null;

  return (
    <section style={{ marginBottom: '32px' }}>
      <h2 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 'bold' }}>{title}</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
        gap: '16px' 
      }}>
        {tokens.map(token => (
          <TokenSwatch key={token} tokenName={token} colorMode={colorMode} />
        ))}
      </div>
    </section>
  );
}
