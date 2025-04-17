# Birthday Reminder

## Development

### Naming Conventions

- Pascal case for components
- Kebab case for folders
- Camel case for other files

### Folder Structure

- `public` - contains static assets
- `app` - contains the pages using file based routing.
- `components` - contains shared components used across the app. The same does for `hooks`, `utils`, etc.
- for each route in `app` a local `_compontents` directory can be used to store components that only used in that route. Same does for `_hooks`, `utils`, etc.
- `data` - contains sever side data fetching and mutations.

### Data fetching

- drizzle
