# Copilot Instructions for 303website

## Project Overview
**InterPolishForces** - React 19 + React Router 7 website with multi-language support (Polish/English via i18next), Framer Motion animations, and dark neon aesthetic (#00ff66 green theme). Deployed on Netlify. **Note**: Brand recently updated from "Shadow Abyssal X" to "InterPolishForces".

## Critical Architecture

### Routing Flow
- **HashRouter** in [src/App.jsx](src/App.jsx) - ALL routes use hash navigation (#/home, #/staff, #/war-logs, etc.)
- **Language Selector** appears first (before app) if `selectedLanguage` not in localStorage
- **LoadingScreen** appears for 3 seconds after language selection
- **Routes**: Home, About, Regulations, Q&A, Staff, **War Logs**, Changelog

### Startup Flow (Critical!)
```jsx
App.jsx logic:
1. No selectedLanguage → show LanguageSelector (forceShow=true)
2. Language chosen → trigger 3s LoadingScreen
3. LoadingScreen done → show actual app with LanguageSelector float
```

### i18n Implementation
- **Config**: [src/i18n.js](src/i18n.js) - Polish default fallback to English
- **Storage**: `i18nextLng` in localStorage (auto-managed by i18next)
- **Usage**: `const { t } = useTranslation()` then `t('warLogs.labels.reason')`
- **Files**: [src/Locales/en.json](src/Locales/en.json) and [src/Locales/pl.json](src/Locales/pl.json)
- **Key structure**: Nested (nav.home, warLogs.labels.warWith, staff.roles.administrator, etc.)

## Feature-Specific Patterns

### War Logs System (New!)
**Location**: [src/Components/WarLogs/](src/Components/WarLogs/)

**Data Structure**:
```jsx
{
  id, opponent, date, map, result, duration, mvp, 
  reason, members (comma-separated Roblox usernames), 
  img (optional screenshot)
}
```

**Result Types**: WIN (green #00ff66), LOSS (red #ff3333), EASY_WIN
**Components**:
- **WarLogs.jsx**: Page container with grid layout, empty state ("COMING SOON")
- **WarLogCard.jsx**: Preview card with image, result badge, hover animation
- **WarLogModal.jsx**: Two-column layout (image/stats sidebar + details main content)
- **Members display**: Grid of tags with ::before accent line

**Translation Keys Required**:
```json
"warLogs": {
  "title", "labels": { warWith, reason, result, duration, members, mvp },
  "results": { WIN, LOSS, EASY_WIN },
  "readMore", "modalTitle", "briefing"
}
```

### LoadingScreen (Redesigned)
**Location**: [src/Components/LoadingScreen/](src/Components/LoadingScreen/)

**Styling** (NOT MS-DOS): 
- Graphical logo with pulsing glow (pulseLogo animation)
- Progress bar 0-100% with dynamic text stages
- Glitch effect on "INTERPOLISHFORCES" title (via ::after clip-rect animation)
- Scan line animation across screen
- Mobile responsive (font-size 1.5rem on tablets)
- Background: radial + repeating gradients with grid effect

**Data Flow**: 
- 8 status messages cycling as progress increases
- Message updates tied to progress percentage
- Animation completes at 3000ms in App.jsx

### Staff System
**Location**: [src/Components/Pages/Staff.jsx](src/Components/Pages/Staff.jsx) (361 lines!)

**Data Structure**:
```jsx
staffData = {
  factionCommand: [{ id, name, role, avatar, robloxUsername, robloxUserId, inGameRank }],
  factionCoLeader: [...],
  administrator: [...],
  // 14+ role categories total
}
```

**Components**:
- **StaffRoleSection**: Groups members by role, handles empty states
- **StaffMemberCard**: Avatar + name + role + "VIEW DOSSIER" button with hover scale
- **StaffMemberModal**: Sidebar (avatar, stats) + main content (description, achievements)

**Note**: Removed (Gemini AI cleanup): `sync_ok`, `bpm`, `secure_link` metadata

### Navbar (Responsive)
- Logo + organization name on left (pushed via flex)
- Nav links centered/right (Home → Changelog)
- LanguageDropdown on right
- **Hamburger menu** on mobile (<768px) that toggles `.active` class
- Menu auto-closes when route changes

### Hero Section
- Title + welcome text (translated)
- 3 action buttons: Discord, YouTube, TikTok (hardcoded URLs in Hero.jsx)
- Translation keys: hero.title, hero.welcome, hero.discord_button, hero.youtube_button, hero.tiktok_button

## Animation Patterns (Framer Motion)

**Standard Card Pattern**:
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay, duration: 0.5 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02, translateY: -5 }}
>
```

**Modal Pattern**: 
```jsx
<AnimatePresence>
  {selectedItem && <Modal initial={{ scale: 0.9 }} animate={{ scale: 1 }} />}
</AnimatePresence>
```

**Interactive Elements**: All buttons get `whileHover` + `whileTap` for tactile feedback

## Styling Architecture

- **Color Scheme**: Dark (#050805), neon green (#00ff66), reds (#ff3333), golds (#ffd700)
- **Fonts**: Orbitron (headers), Chakra Petch (UI), Share Tech Mono (monospace/tech)
- **Responsive Breakpoint**: 768px (mobile first where applicable)
- **Effects**: Neon glows (text-shadow/box-shadow), glass morphism (backdrop-filter), grid backgrounds
- **CSS Files**: One .css per component folder, no CSS-in-JS or modules

## Build & Deployment

- **npm start**: Dev server http://localhost:3000 with fast refresh
- **npm run build**: Production bundle
- **npm test**: Jest + React Testing Library (setupTests.js configured)
- **Netlify**: `NPM_FLAGS = "--legacy-peer-deps"` required in [netlify.toml](netlify.toml)
- **Dependency Notes**: React 19.2.1 is cutting-edge; axios installed for future API calls

## Common Development Tasks

**Add new War Log entry**:
1. Add object to war logs data array with all required fields
2. Ensure `opponent`, `reason`, `members` are properly formatted
3. MVP field should match member name exactly

**Add navigation item**:
1. Add route in [src/App.jsx](src/App.jsx) routes
2. Add link in Navbar.jsx `<NavLink to="/...">`
3. Add translation keys in both en.json and pl.json under `nav`

**Update staff member**:
1. Edit staffData object in Staff.jsx
2. Import avatar image if new member
3. Ensure Roblox username and rank are current

**Modify LoadingScreen messages**:
1. Update loadingMessages array in LoadingScreen.jsx
2. Adjust timing via interval increment (currently 30ms)
3. Update translation keys in locales if changing to `t()` calls

**Add translation**:
1. Add key-value pair to BOTH en.json AND pl.json
2. Use in component: `t('path.to.key')`
3. Provide fallback in t() call if key might be missing: `t('nav.warLogs', 'WAR LOGS')`

## Component Checklist

- ✅ HashRouter with hash-based navigation
- ✅ i18next with localStorage persistence
- ✅ Framer Motion animations throughout
- ✅ Mobile-responsive design (<768px hamburger menu)
- ✅ War Logs system (cards + modal)
- ✅ LoadingScreen (graphical, not terminal-style)
- ✅ Staff data with 14+ roles
- ✅ Dark neon aesthetic (green #00ff66)
- ✅ External links (Discord, YouTube, TikTok)
