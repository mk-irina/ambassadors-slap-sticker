import { render } from '@testing-library/react';

import { EffectsGallery } from '../EffectsGallery';

test('renders effects gallery', async () => {
  const { container } = render(<EffectsGallery />);
  const buttons = container.querySelectorAll('.effects-button');
  expect(buttons).toHaveLength(3);
});
