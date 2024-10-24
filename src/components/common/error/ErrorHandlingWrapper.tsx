'use client';
import { Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary from './ErrorBoundary';

interface ErrorHandlingWrapperProps {
  children: React.ReactNode;
  suspenseFallback: React.ReactNode;
  errorFallbackMessage: string;
  errorClassName?: string;
}

const ErrorHandlingWrapper = ({
  children,
  suspenseFallback,
  errorFallbackMessage,
  errorClassName,
}: ErrorHandlingWrapperProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackMessage={errorFallbackMessage}
          fallbackClassName={errorClassName}>
          <Suspense fallback={suspenseFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ErrorHandlingWrapper;
