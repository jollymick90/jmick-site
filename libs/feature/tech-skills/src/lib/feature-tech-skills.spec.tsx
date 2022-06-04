import { render } from '@testing-library/react';

import FeatureTechSkills from './feature-tech-skills';

describe('FeatureTechSkills', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureTechSkills />);
    expect(baseElement).toBeTruthy();
  });
});
