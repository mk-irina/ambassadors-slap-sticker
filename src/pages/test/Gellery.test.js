import { render } from '@testing-library/react';

import { Gallery } from '../Gallery';

test('renders gallery page', async () => {
  const { container } = render(<Gallery pictures={[{}]} />);
  expect(container).toMatchSnapshot();
});
