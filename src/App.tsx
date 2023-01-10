import { QueryClientProvider } from '@context/query-client';
import React, { ReactElement } from 'react';

const App = (): ReactElement => {
  return (
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  );
};

export { App };
