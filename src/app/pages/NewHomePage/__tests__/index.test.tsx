import * as React from 'react';
import { render } from '@testing-library/react';

import { NewHomePage } from '..';


describe('<NewHomePage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<NewHomePage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
