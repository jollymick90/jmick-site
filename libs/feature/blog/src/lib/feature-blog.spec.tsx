import { render } from '@testing-library/react';

import FeatureBlog from './feature-blog';

describe('FeatureBlog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureBlog />);
    expect(baseElement).toBeTruthy();
  });
});
