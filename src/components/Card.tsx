// src/components/Card/Card.tsx
import { ReactNode } from 'react';
import { CardContent, CardHeader, CardTitle } from "./ui/card";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl">
      {children}
    </div>
  );
}

export { CardContent, CardHeader, CardTitle };
