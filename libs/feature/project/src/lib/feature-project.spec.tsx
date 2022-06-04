import { render } from '@testing-library/react';

import FeatureProject from './feature-project';

describe('FeatureProject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureProject />);
    expect(baseElement).toBeTruthy();
  });
});
