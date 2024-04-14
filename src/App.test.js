import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('renders logo link', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/readme']}>
      <App />
    </MemoryRouter>
  );
  const title = container.querySelector('.logo');
  expect(title).toBeInTheDocument();
});
