import { Container } from '@/components/container/container';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn('py-7 bg-secondary', className)}>
        <Container className='text-primary justify-center'>
            &copy; {new Date().getFullYear()} BirrLink
        </Container>
    </footer>
  );
};