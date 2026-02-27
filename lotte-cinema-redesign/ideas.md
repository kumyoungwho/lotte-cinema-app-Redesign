# Lotte Cinema App Redesign — Design Ideas

## Reference Analysis
The provided reference image shows a clean, modern mobile UI with:
- Light/white backgrounds with subtle gray tones
- Card-based layouts with soft shadows
- Tab navigation with underline indicators
- Clean sans-serif typography with strong hierarchy
- Accent colors (blue/teal) used sparingly for CTAs and active states
- Ample whitespace and breathing room
- Phone mockup presentation style

---

## Design Approaches

<response>
<idea>
**Design Movement:** Swiss International Typographic Style meets Contemporary Mobile UX

**Core Principles:**
1. Information hierarchy through typography scale, not decoration
2. White space as a structural element — sections breathe, nothing crowds
3. Accent red (Lotte's brand) used only for primary actions and key highlights
4. Cards as the atomic unit — every content block lives in a clean card

**Color Philosophy:**
- Background: Pure white (#FFFFFF) and near-white (#F7F8FA) for layering
- Primary accent: Lotte Red (#E8002D) — used sparingly for CTAs, active tabs, ratings
- Text: Deep charcoal (#1A1A2E) for headings, medium gray (#6B7280) for secondary
- Card surface: White with 1px border or very soft shadow
- Tab active: Red underline, inactive: gray text

**Layout Paradigm:**
- Mobile-first vertical scroll with sticky top navigation
- Horizontal scroll carousels for movie posters
- Bottom tab bar for primary navigation (Home, Movies, Booking, My Page)
- Full-bleed hero section at top with movie backdrop

**Signature Elements:**
1. Movie poster cards with rating badge overlay (bottom-left corner)
2. Pill-shaped genre/filter chips in a horizontal scroll row
3. Seat map grid with color-coded availability

**Interaction Philosophy:**
- Tap targets are large and thumb-friendly
- Active states use red accent with smooth transition
- Swipe gestures for carousels, pull-to-refresh on lists

**Animation:**
- Fade-in + slight upward translate for page transitions (200ms ease-out)
- Card press: subtle scale-down (0.97) on tap
- Tab switch: underline slides horizontally

**Typography System:**
- Headings: Pretendard Bold (Korean-friendly) or DM Sans Bold
- Body: Pretendard Regular / DM Sans Regular
- Hierarchy: 24px title / 18px section header / 15px body / 13px caption
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement:** Glassmorphism + Soft Gradient Cinema Aesthetic

**Core Principles:**
1. Depth through layered translucency — frosted glass panels over gradient backgrounds
2. Movie poster colors bleed into the UI background (dynamic color extraction feel)
3. Rounded corners everywhere — cards, buttons, avatars all use large radii
4. Subtle grain texture on backgrounds for cinematic warmth

**Color Philosophy:**
- Background: Very dark navy (#0D0F1A) with subtle gradient overlays
- Glass panels: rgba(255,255,255,0.08) with backdrop-blur
- Accent: Warm amber/gold (#F5A623) for premium feel, red for Lotte branding
- Text: White primary, light gray secondary

**Layout Paradigm:**
- Floating card layout with generous padding
- Horizontal poster scroll with parallax depth effect
- Overlapping UI elements for visual richness

**Signature Elements:**
1. Frosted glass navigation bar that blurs content behind it
2. Movie cards with gradient overlay from poster's dominant color
3. Glowing CTA buttons with subtle pulse animation

**Interaction Philosophy:**
- Hover/focus states use glow effects
- Smooth morphing transitions between screens

**Animation:**
- Background gradient shifts slowly as user scrolls
- Cards float in with staggered delay

**Typography System:**
- Display: Clash Display Bold for headers
- Body: Plus Jakarta Sans for readability
</idea>
<probability>0.06</probability>
</response>

<response>
<idea>
**Design Movement:** Editorial Minimalism — Magazine-style Cinema App

**Core Principles:**
1. Strong typographic contrast — ultra-bold headlines against clean white
2. Asymmetric layouts break the grid intentionally for visual interest
3. Photography (movie stills) as the primary design element
4. Functional minimalism: every element earns its place

**Color Philosophy:**
- Background: Off-white (#FAFAF8) with warm undertone
- Primary: Lotte Red (#E8002D) used as a bold editorial accent
- Secondary: Warm black (#111111) for maximum contrast
- Accent: Pale cream (#F5F0E8) for card backgrounds

**Layout Paradigm:**
- Asymmetric hero with large type on left, poster on right
- Masonry-style movie grid for browsing
- Sticky sidebar navigation on tablet+, bottom bar on mobile

**Signature Elements:**
1. Large bold section numbers (01, 02) as decorative typographic elements
2. Horizontal rule dividers with category labels
3. Full-bleed movie still backgrounds with text overlay

**Interaction Philosophy:**
- Hover reveals additional movie info with smooth slide-up
- Keyboard navigable with visible focus rings

**Animation:**
- Text reveals with clip-path animation on scroll
- Image zoom on hover (1.03 scale)

**Typography System:**
- Display: Bebas Neue or Oswald for bold headers
- Body: Source Sans Pro for legibility
- Mix of all-caps labels with sentence-case body text
</idea>
<probability>0.07</probability>
</response>

---

## Selected Approach: Swiss International Typographic Style (Option 1)

This approach best matches the reference image — clean white backgrounds, card-based layouts, tab navigation with underline indicators, and the Lotte Cinema red brand color used purposefully for primary actions. It creates a professional, trustworthy cinema booking experience that feels modern without being trendy.
