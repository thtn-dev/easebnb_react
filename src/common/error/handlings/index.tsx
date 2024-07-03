import { FC } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

function getDisplayName(WrappedComponent: FC) {
  return '>>' + WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withErrorHandler<P extends object>(Component: FC<P>, FallbackComponent: FC<FallbackProps>) {
  function ComponentWithErrorHandling(props: P) {
    return (
      <ErrorBoundary FallbackComponent={FallbackComponent} onError={e => console.log(e)}>
        <Component {...(props as P)} />
      </ErrorBoundary>
    );
  }

  ComponentWithErrorHandling.displayName = `withErrorHandler(${getDisplayName(Component as FC<unknown>)})`;

  return ComponentWithErrorHandling;
}

export { withErrorHandler };
