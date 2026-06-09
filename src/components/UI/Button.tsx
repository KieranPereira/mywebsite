import classNames from 'classnames';
import {FC, memo, PropsWithChildren, ReactNode} from 'react';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  download?: boolean;
  external?: boolean;
  Icon?: FC<{className?: string}>;
  className?: string;
}

/**
 * Reusable link-styled button. Used for hero CTAs and project links so we don't
 * repeat long Tailwind class strings everywhere.
 */
const Button: FC<PropsWithChildren<ButtonProps>> = memo(
  ({href, children, variant = 'primary', download, external, Icon, className}) => {
    const base =
      'inline-flex items-center gap-x-2 rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 sm:text-base';
    const variants: Record<ButtonVariant, string> = {
      primary: 'border-accent-500 bg-accent-500 text-white hover:bg-accent-600 hover:border-accent-600',
      secondary: 'border-neutral-400 bg-transparent text-neutral-100 hover:bg-neutral-700/60',
    };

    const content: ReactNode = (
      <>
        {children}
        {Icon && <Icon className="h-5 w-5" />}
      </>
    );

    return (
      <a
        className={classNames(base, variants[variant], className)}
        download={download}
        href={href}
        rel={external ? 'noopener noreferrer' : undefined}
        target={external ? '_blank' : undefined}>
        {content}
      </a>
    );
  },
);

Button.displayName = 'Button';
export default Button;
