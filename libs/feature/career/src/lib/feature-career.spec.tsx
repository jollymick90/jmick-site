import { render } from '@testing-library/react';

import FeatureCareer from './feature-career';

describe('FeatureCareer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureCareer />);
    expect(baseElement).toBeTruthy();
  });
});
