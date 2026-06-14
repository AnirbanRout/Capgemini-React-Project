# Hostel Maintenance — React + Vite

**Overview:** A small React application (Vite) for managing hostel maintenance complaints. It includes student and admin flows, an auth context, a mock JSON backend, request filtering, and summary/overview components.

**Quick Links:**
- **Entry / Router:** [src/main.jsx](src/main.jsx#L1)
- **Dashboard:** [src/day1/pages/DashBoard.jsx](src/day1/pages/DashBoard.jsx#L1)
- **Login:** [src/day2/pages/Login.jsx](src/day2/pages/Login.jsx#L1)
- **Mock DB:** [src/json/db.json](src/json/db.json#L1)

**Features**
- **Authentication:** Simple email/password login using a mock JSON backend and `AuthContext`.
- **Role-based routes:** `ProtectedRoute` guards admin vs student views.
- **Raise complaints:** Students can submit requests via the complaint form.
- **Request list & details:** View, filter, and inspect individual maintenance requests.
- **Admin overview:** Admins get aggregated metrics and category counts.
- **Filtering & sorting:** Client-side filters for search, category, status, priority, and sort order.

Tech stack
- **Framework:** React (with Vite)
- **Routing:** react-router-dom
- **HTTP:** axios
- **Forms & validation:** Formik + Yup
- **Mock backend:** json-server (local `src/json/db.json`)
- **Styling:** Bootstrap

Project structure (high-level)
- **src/main.jsx:** app entry, router and role-protected routes.
- **src/day1/**: core dashboard, complaint form/list, summary cards, and API client.
- **src/day2/**: authentication context, login, request details, protected route and NotFound.
- **src/day3/**: hooks (`useFetch`, `useRequestFilters`), FilterBar, RequestCard, AdminOverview and extra components.
- **src/json/db.json:** mock data for `users`, `requests`, and `categories`.

Local API endpoints (json-server)
- `GET /users` — users list (used for login lookup)
- `GET /requests` — list of maintenance requests
- `GET /requests/:id` — request details
- `GET /categories` — request categories

Setup & run (development)
1. Install dependencies:

```
npm install
```

2. Run the mock JSON server (in a separate terminal):

```
npx json-server --watch src/json/db.json --port 3000
```

3. Start the Vite dev server:

```
npm run dev
```

4. Open the app at `http://localhost:5173` (Vite default) and ensure json-server runs at `http://localhost:3000` (the app expects this base URL in [src/day1/services/api.js](src/day1/services/api.js#L1)).

Credentials (from mock DB)
- Admin: `warden@hostel.com` / `admin123`
- Students: `aarav@student.com` / `1234`, `diya@student.com` / `1234`

Notes & pointers for contributors
- The API client is in [src/day1/services/api.js](src/day1/services/api.js#L1). Change `baseURL` if you run the backend elsewhere.
- Add a `json-server` script to `package.json` for convenience, for example:

```
"scripts": {
	"dev": "vite",
	"json-server": "json-server --watch src/json/db.json --port 3000"
}
```

- Components and pages are grouped by the demo day folders (`day1`, `day2`, `day3`). Refactor if you prefer domain-based structure.

Known quirks
- Some `status`/`priority` strings in `db.json` vary in case (e.g., "Open" vs "open"). Filters are case-sensitive in some places — normalizing data or filter logic is recommended.

If you want, I can:
- add a `json-server` npm script and start scripts, or
- create a small CONTRIBUTING section and code-style checks.

---
Generated on 2026-06-14 by GitHub Copilot.


