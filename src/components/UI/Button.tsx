import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  download?: boolean;
  external?: boolean;
  Icon?: FC<{className?: string}>;
  className?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = memo(
  ({href, children, variant = 'primary', download, external, Icon, className}) => {
    const base =
      'inline-flex items-center gap-x-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-deck-accent focus-visible:ring-offset-2';
    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-deck-accent text-white hover:bg-blue-700',
      secondary: 'border border-deck-border bg-white text-deck-text hover:bg-deck-surface',
      ghost: 'text-deck-accent hover:bg-deck-accent-muted',
    };

    return (
      <a
        className={classNames(base, variants[variant], className)}
        download={download}
        href={href}
        rel={external ? 'noopener noreferrer' : undefined}
        target={external ? '_blank' : undefined}>
        {children}
        {Icon && <Icon className="h-4 w-4" />}
      </a>
    );
  },
);

Button.displayName = 'Button';
export default Button;
