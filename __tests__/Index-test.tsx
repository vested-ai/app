import { render } from '@testing-library/react-native';

import App from '../app/index';


describe('<App />', () => {
  test('Text renders correctly on App', () => {
    const { getByText } = render(<App />);

    getByText('Already have an account?');
  });
});
