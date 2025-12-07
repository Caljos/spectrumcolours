import { SizeSwatch } from './SizeSwatch';

interface SizeSectionProps {
  title: string;
  tokens: string[];
  category: 'scale' | 'borderRadius' | 'borderWidth';
}

export function SizeSection({ title, tokens, category }: SizeSectionProps) {
  if (tokens.length === 0) return null;

  return (
    <section style={{ marginBottom: '32px' }}>
      <h2 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 'bold' }}>{title}</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
        gap: '16px' 
      }}>
        {tokens.map(token => (
          <SizeSwatch key={token} tokenName={token} category={category} />
        ))}
      </div>
    </section>
  );
}

