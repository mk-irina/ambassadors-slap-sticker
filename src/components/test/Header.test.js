import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Header } from '../Header';

test('renders header component', async () => {
  const { container } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
