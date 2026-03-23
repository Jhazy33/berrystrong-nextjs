import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-oswald font-bold italic uppercase transition-all duration-300 rounded-[3px] hover:scale-105 active:scale-95';

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-berry-red text-white border-2 border-berry-red hover:bg-berry-red-dark hover:border-berry-red-dark hover:shadow-lg hover:shadow-berry-red/50',
    secondary: 'bg-black text-white border-2 border-black hover:bg-gray-800 hover:border-gray-800',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-8 py-2.5 text-sm',
    md: 'px-10 py-3 text-base',
    lg: 'px-14 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
