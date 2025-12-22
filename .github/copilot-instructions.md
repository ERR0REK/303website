# Copilot Instructions for 303website

## Project Overview
A **React 19 + React Router** website for "Shadow Abyssal X" organization. Uses **i18next** for multi-language support (Polish/English) and **Framer Motion** for animations. Built with Create React App and deployed on Netlify.

## Key Architecture Patterns

### Routing & Page Structure
- **HashRouter** (not BrowserRouter) in [src/App.jsx](src/App.jsx) - routes use hash navigation (#/about, etc.)
- Pages located in [src/Components/Pages/](src/Components/Pages/) (Home, About, Regulations, QA, Staff, Changelog)
- Each page imports its own components (Navbar, Hero, etc.) - no shared layout wrapper

### Internationalization (i18n)
- **Config**: [src/i18n.js](src/i18n.js) initializes i18next with Polish (pl) and English (en)
- **Storage**: Active language persists in localStorage (`i18nextLng` key)
- **Usage pattern**: Import `useTranslation` hook in components, call `const { t } = useTranslation()`, then use `t('nav.home')` with nested JSON keys
- **Translation files**: [src/Locales/en.json](src/Locales/en.json) and [src/Locales/pl.json](src/Locales/pl.json) use dot notation (e.g., `nav.home`, `hero.title`)
- **Important**: Language selector in [src/Components/LanguageDropdown/LanguageSelector.jsx](src/Components/LanguageDropdown/LanguageSelector.jsx) must trigger i18next language change

### Animation Library
- **Framer Motion** is the exclusive animation library (imported in card components)
- Standard animation pattern in [src/Components/Staff/StaffMemberCard.jsx](src/Components/Staff/StaffMemberCard.jsx):
  ```jsx
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  />
  ```
- All interactive elements use `whileHover` and `whileTap` for smooth interactions

### Component Patterns
- **Presentational components** receive data via props (e.g., `StaffMemberCard` receives `member` and `onMoreInfo` callback)
- **Container/Page components** manage state and data fetching (e.g., [src/Components/Pages/Staff.jsx](src/Components/Pages/Staff.jsx))
- No prop drilling through intermediate pages - each page is self-contained
- Modal components like [src/Components/Staff/StaffMemberModal.jsx](src/Components/Staff/StaffMemberModal.jsx) use translation keys for dynamic content

## Critical Dependencies & Build
- **npm start**: Development mode, runs on http://localhost:3000
- **npm run build**: Production build (outputs to build/ folder)
- **npm test**: Test runner using React Testing Library
- **Netlify config** [netlify.toml](netlify.toml): Sets `NPM_FLAGS = "--legacy-peer-deps"` (required for peer dependency conflicts)
- **Note**: React 19.2.1 + React Router 7.10.1 combination - ensure compatibility when updating

## Coding Conventions
1. **File organization**: Components grouped by feature (Staff/, Regulations/, etc.) with accompanying .css files
2. **Naming**: JSX files use PascalCase (StaffMemberCard.jsx), page components use descriptive names
3. **Imports**: Polish comments in some files (e.g., App.jsx) - maintain when adding code
4. **Styling**: CSS modules coexist with .css files - check existing patterns before adding styles
5. **URLs**: External links hardcoded (Discord, YouTube, TikTok) - keep in Hero.jsx and Staff components

## Common Tasks
- **Adding new page**: Create file in Pages/, add route in App.jsx, add translation key in both JSON files, add nav link in Navbar
- **Updating translations**: Modify both en.json and pl.json simultaneously to maintain parity
- **Creating reusable component**: Place in Components/ folder with its own CSS file, receive data via props
- **Adding animation**: Use Framer Motion with `initial`, `whileInView`, `whileHover` pattern

## Integration Points
- **External APIs**: Currently hardcoded social links; future backend integration would go through axios (already installed)
- **Staff data**: Likely sourced from JSON or external API - check [src/Components/Pages/Staff.jsx](src/Components/Pages/Staff.jsx) data structure
- **Assets**: Profile pictures stored in [src/Assets/StaffMembersPFP/](src/Assets/StaffMembersPFP/)
