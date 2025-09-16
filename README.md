# Book Explorer


A React app that lets users search books through the Google Books API, view details, and manage favorites.


## Features


- Multi-field search (title, author, genre/keyword)
- Search results in a responsive grid
- Book details page (`/book/:id`) — lazy-loaded with React.lazy + Suspense
- Favorites management using Context API + localStorage
- Routing with React Router (`/`, `/book/:id`, `/favorites`)
- Form validation: at least one field is required
- Unit tests with Jest + React Testing Library
- ESLint + Prettier configured


## Setup


1. Clone the repo / copy files.
2. Install dependencies:


npm install


3. (Optional) If you have a Google Books API key you may append it to requests by setting an environment variable in a `.env` file like:



REACT_APP_GOOGLE_BOOKS_KEY=your_api_key_here



The scaffold will work without a key for basic usage but subject to public quota limits.


4. Run the app:


npm start

5. Run tests:


npm test



6. Lint and format:


npm run lint
npm run format


## Approach & trade-offs


-State management: I used Context API + localStorage for favorites to keep the solution simple and interview-friendly. For a larger app, Redux or Zustand would be appropriate.
- Routing & Lazy loading: Book details and route components are lazy-loaded to reduce initial bundle size.
- API integration: `src/utils/googleBooksApi.js` encapsulates the Google Books API calls. It supports advanced query construction using `intitle:`, `inauthor:`, and `subject:`.
- Testing: Provided basic tests to cover routing and favorites rendering. For full coverage, mock `axios` and write integration tests for search flow and details page.


## Next steps / improvements


- Add pagination (use `startIndex` parameter) and infinite scroll or page controls.
- Improve UI/UX and add skeleton loaders.
- Add better error handling and retry logic for API failures.
- Add end-to-end tests (Cypress) for full user flows.


---


