import { cn } from '../../utils';

interface CustomHeadings extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = ({ className, children, ...rest }: CustomHeadings) => {
  return (
    <h1 className={cn('text-4xl font-bold', className)} {...rest}>
      {children}
    </h1>
  );
};

const H2 = ({ className, children, ...rest }: CustomHeadings) => {
  return (
    <h2 className={cn('text-xl font-bold', className)} {...rest}>
      {children}
    </h2>
  );
};

export const Headings = {
  H1,
  H2,
};
