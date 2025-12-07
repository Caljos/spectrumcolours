import { TypographySwatch } from './TypographySwatch';

interface TypographySectionProps {
  title: string;
  tokens: string[];
  category: 'fontFamily' | 'fontWeight' | 'fontSize' | 'lineHeight';
}

export function TypographySection({ title, tokens, category }: TypographySectionProps) {
  if (tokens.length === 0) return null;

  return (
    <section style={{ marginBottom: '32px' }}>
      <h2 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 'bold' }}>{title}</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '16px' 
      }}>
        {tokens.map(token => (
          <TypographySwatch key={token} tokenName={token} category={category} />
        ))}
      </div>
    </section>
  );
}

