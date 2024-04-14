import { render } from '@testing-library/react';

import { StickersGallery } from '../StickersGallery';

test('renders sticker gallery', async () => {
  const { container } = render(<StickersGallery />);
  const buttons = container.querySelectorAll('.sticker-button');
  expect(buttons).toHaveLength(21);
});
