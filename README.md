# Book Explorer

A React app that lets users search books through the Google Books API, view details, and manage favorites.

## Features

* Multi-field search (title, author, genre/keyword)
* Search results in a responsive grid
* Book details page (`/book/:id`) — lazy-loaded with React.lazy + Suspense
* Favorites management using Context API + localStorage
* Routing with React Router (`/`, `/book/:id`, `/favorites`)
* Form validation: at least one field is required
* Unit tests with Jest + React Testing Library
* ESLint + Prettier configured

## Setup

1. Clone the repo / copy files.
2. Install dependencies:

```bash
npm install
```

3. (Optional) If you have a Google Books API key you may append it to requests by setting an environment variable in a `.env` file:

```env
REACT_APP_GOOGLE_BOOKS_KEY=your_api_key_here
```

The scaffold will work without a key for basic usage but subject to public quota limits.

4. Run the app:

```bash
npm start
```

5. Run tests:

```bash
npm test
```

6. Lint and format:

```bash
npm run lint
npm run format
```

## Approach & trade-offs

* State management: I used Context API + localStorage for favorites to keep the solution simple and interview-friendly. For a larger app, Redux or Zustand would be appropriate.
* Routing & Lazy loading: Book details and route components are lazy-loaded to reduce initial bundle size.
* API integration: `src/utils/googleBooksApi.js` encapsulates the Google Books API calls. It supports advanced query construction using `intitle:`, `inauthor:`, and `subject:`.
* Testing: Provided basic tests to cover routing, search form, and favorites rendering. For full coverage, mock API calls using Jest and React Testing Library.

## Unit Testing Examples

Here are some example unit test cases included in the project:

### SearchForm.test.js

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

test('renders all input fields and search button', () => {
  render(<SearchForm onSearch={() => {}} />);
  expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/author/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/genre \/ keyword/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
});

test('calls onSearch when form is submitted', () => {
  const mockSearch = jest.fn();
  render(<SearchForm onSearch={mockSearch} />);

  fireEvent.change(screen.getByPlaceholderText(/title/i), { target: { value: 'React' } });
  fireEvent.click(screen.getByRole('button', { name: /search/i }));
  expect(mockSearch).toHaveBeenCalled();
});
```

### Favorites.test.js

```javascript
import { render, screen } from '@testing-library/react';
import Favorites from '../routes/Favorites';
import { FavoritesProvider } from '../context/FavoritesContext';

test('renders empty favorites message', () => {
  render(
    <FavoritesProvider>
      <Favorites />
    </FavoritesProvider>
  );
  expect(screen.getByText(/No favorites yet/i)).toBeInTheDocument();
});
```

### Routing.test.js

```javascript
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders search link and favorites link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Search/i)).toBeInTheDocument();
  expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
});
```

These tests cover core components, routing, and favorites functionality.

## Next steps / improvements

* Add pagination (use `startIndex` parameter) and infinite scroll or page controls.
* Improve UI/UX and add skeleton loaders.
* Add better error handling and retry logic for API failures.
* Add end-to-end tests (Cypress) for full user flows.
