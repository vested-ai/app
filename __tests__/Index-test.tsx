import { render } from '@testing-library/react-native';

import Index from 'app/index';

describe('<App />', () => {
  test('Text renders correctly on App', () => {
    const { getByText } = render(<Index />);

    getByText('Edit app/index.tsx to edit this screen.');
  });
});
