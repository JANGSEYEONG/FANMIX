'use client';

import { Component, type ReactNode, type ErrorInfo } from 'react';
import ErrorFallback from './ErrorFallback';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  onReset: () => void;
  children: ReactNode;
  fallbackMessage: string;
  fallbackClassName?: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false, error: null };

    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  // 에러 상태 변경
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  // 에러 상태 기본 초기화
  resetErrorBoundary(): void {
    this.props.onReset();

    this.setState({
      hasError: false,
      error: null,
    });
  }

  render() {
    const { state, props } = this;
    const { hasError, error } = state;
    const { children, fallbackMessage, fallbackClassName } = props;

    if (hasError && error) {
      return (
        <ErrorFallback
          error={error}
          resetErrorBoundary={this.resetErrorBoundary}
          message={fallbackMessage}
          className={fallbackClassName}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
