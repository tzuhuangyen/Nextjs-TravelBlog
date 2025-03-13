// src/components/Header.tsx
interface HeaderProps {
  title: string;
  description?: string;
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <header className='text-center py-5'>
      <h1>{title}</h1>
      {description && <p className='lead'>{description}</p>}
    </header>
  );
}
