import { render } from '@testing-library/react';

import { Readme } from '../Readme';

test('renders readme page', async () => {
  const { container } = render(<Readme />);
  expect(container).toMatchSnapshot();
});
