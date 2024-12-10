# Template: react-ts-material-ui-rtk-vite-linter

## Includes

React v19 examples:

- `use()` hook.
- `useFormState()` hook.

## Development

add in to `.env` file

```bash
VITE_API_URL=https://fakestoreapi.com/products
```

- `pnpm install`
- `pnpm run dev`

## Testing

- `pnpm run test`

## Linting

- `pnpm run lint`

## References

- [React Typescript Vite Testing with vitest, React Testing Library(RTL) and Mock Service Worker.](https://medium.com/@kimtai.developer/react-typescript-vite-testing-with-vitest-react-testing-library-rtl-and-mock-service-worker-6f5790eedf84)

## Important

- redux has peer dependencies conflict with react v19 and react-dom v19. So, github action will use `npm install --legacy-peer-deps` as a temporary solution
