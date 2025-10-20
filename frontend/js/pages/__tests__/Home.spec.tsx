import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { restRestCheckRetrieve } from '@/js/api';
import Home from '@/js/pages/Home';

jest.mock('@/js/api', () => ({
  restRestCheckRetrieve: jest.fn(),
}));

describe('Home', () => {
  beforeEach(() => {
    (restRestCheckRetrieve as jest.Mock).mockResolvedValue({
      data: {
        message: 'Test Result',
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders static assets and rest API data', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Static assets')).toBeInTheDocument();
    expect(screen.getByText('Rest API')).toBeInTheDocument();
    expect(await screen.findByText('Test Result')).toBeInTheDocument();
  });

  test('calls restRestCheckRetrieve on mount', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(restRestCheckRetrieve).toHaveBeenCalledWith();
    });
  });
});
