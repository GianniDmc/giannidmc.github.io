# Wedding Website - Gianni & Anaëlle

This is a static HTML wedding website deployed on GitHub Pages with two different versions and no build system required.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Quick Setup and Development
- Clone the repository: `git clone https://github.com/GianniDmc/giannidmc.github.io.git`
- Navigate to repository: `cd giannidmc.github.io`
- Start local development server: `python3 -m http.server 8000`
- Server starts in **2 seconds**. NEVER CANCEL early.
- Access website at: `http://localhost:8000/mariage-gianni-anaelle.html` or `http://localhost:8000/mariage-gianni-anaelle/`

### HTML Validation
- Install validator: `pip install html5validator` -- takes **30 seconds** 
- Validate all HTML files: `html5validator --root . --ignore-re ".*\\.git.*"` -- takes **2 seconds**
- NEVER CANCEL: HTML validation completes quickly but is essential for quality

### Repository Structure
```
/
├── README.md                           # Repository overview
├── mariage-gianni-anaelle.html        # Main wedding page (inline styles)
└── mariage-gianni-anaelle/            # Alternative version directory
    ├── index.html                     # Bootstrap-based homepage
    ├── notre-histoire.html            # Our story page
    ├── le-lieu.html                   # Venue information
    ├── programme.html                 # Wedding program
    ├── inscription.html               # RSVP registration form
    ├── inscription-simple.html       # Simplified RSVP form
    ├── README-STATIC.md              # Static version documentation
    └── static/
        └── images/                    # Wedding images and assets
```

## Two Website Versions

### Version 1: Root Level (`/mariage-gianni-anaelle.html`)
- Single-page application with inline CSS/JS
- Medieval-fantasy theme with retro-futuristic elements
- Self-contained countdown timer and RSVP form
- Access via: `http://localhost:8000/mariage-gianni-anaelle.html`

### Version 2: Directory-based (`/mariage-gianni-anaelle/`)
- Multi-page Bootstrap-based website
- Separate pages for different sections
- External CDN dependencies for styling
- Access via: `http://localhost:8000/mariage-gianni-anaelle/`

## Validation and Testing

### Manual Testing Scenarios
Always test these complete scenarios after making changes:

1. **Main Website Functionality Test**:
   - Start server: `python3 -m http.server 8000`
   - Visit `http://localhost:8000/mariage-gianni-anaelle.html`
   - Verify page loads with wedding information and countdown timer displays
   - Navigate through all sections: Lieu, Programme, Dress code, FAQ, RSVP
   - Test RSVP form: fill name, email, guest count, presence selection, menu choice
   - Verify form validation works and submit button is functional

2. **Directory Version Complete Test**:
   - Visit `http://localhost:8000/mariage-gianni-anaelle/`
   - Navigate through all pages: Notre Histoire, Le Lieu, Programme, Inscription
   - Test registration form: fill all fields including dietary preferences and additional guests
   - Verify all navigation links work correctly
   - Confirm images load from static/images/ directory

3. **Cross-Version Compatibility Test**:
   - Verify both entry points work: root HTML file and directory index
   - Test that both versions display correctly despite different styling approaches
   - Confirm countdown timers work (where present)
   - Test contact email links: `damico.gianni@yahoo.fr`

### HTML Quality Assurance
- **MANDATORY**: Run `html5validator --root . --ignore-re ".*\\.git.*"` before committing changes
- **Known issue**: CSS validation shows warnings for modern CSS properties (`inset`, `mask`, `backdrop-filter`) that work in modern browsers but aren't recognized by the validator
- HTML structure validation is what matters - CSS property warnings can be ignored
- Validation takes **2 seconds** - NEVER CANCEL early
- HTML validation is ESSENTIAL for GitHub Pages compatibility

### Known CSS Validation Warnings (Can be Ignored)
The validator reports these CSS warnings which can be safely ignored:
- `"inset": Property "inset" doesn't exist` - Modern CSS property, works fine
- `"mask": ... is not a "mask" value` - Vendor prefixes used, works correctly  
- `"backdrop-filter": Property "backdrop-filter" doesn't exist` - Modern CSS, supported
- Google Maps iframe warnings - external service, works as intended

## Development Workflow

### Making Changes
1. Edit HTML files directly (no build process needed)
2. Start local server: `python3 -m http.server 8000`
3. Test changes in browser immediately
4. Validate HTML: `html5validator --root . --ignore-re ".*\\.git.*"`
5. Test both website versions thoroughly
6. Commit changes when validation passes

### No Build Process Required
- This is a static website with no build system
- No package.json, no npm install, no compilation steps
- Changes are immediately visible after browser refresh
- Simply edit HTML/CSS/JS directly in files

### External Dependencies
The websites use external CDN resources:
- Google Fonts (Uncial Antiqua, Cinzel, Space Mono)
- Bootstrap CSS/JS (directory version only)
- Font Awesome icons (directory version only)

These may be blocked in some environments but the sites remain functional.

## Common Tasks and Reference Information

### Starting Development Server
```bash
# Method 1: Python built-in server (recommended)
python3 -m http.server 8000

# Method 2: Node.js serve (if available)
npx serve . -p 8000
```

### File Locations for Common Changes

#### Wedding Date/Countdown
- Main page: Search for `new Date('2026-10-10T00:00:00')` in `mariage-gianni-anaelle.html`
- Directory version: Check individual page files for date references

#### Contact Information  
- Email contact: `damico.gianni@yahoo.fr` (in RSVP sections)
- Update in both website versions if changed

#### Venue Information
- Address: "Château de Mauriac — Lieu-dit, 81600 Senouillac"
- Google Maps links embedded in venue sections

#### Images and Assets
- All images stored in `mariage-gianni-anaelle/static/images/`
- Referenced in HTML with relative paths like `static/images/filename.jpg`

### Git and Deployment
- This is a GitHub Pages repository
- Changes pushed to main branch are automatically deployed
- Live site accessible at: `https://giannidmc.github.io/mariage-gianni-anaelle.html`
- Alternative URL: `https://giannidmc.github.io/mariage-gianni-anaelle/`

### Troubleshooting
- **Forms not submitting**: Check Formspree configuration in JavaScript
- **Images not loading**: Verify file paths in `static/images/` directory
- **Styling issues**: External CDN resources may be blocked, fallback styles should work
- **Countdown not working**: Verify wedding date format and JavaScript execution

## Key Technical Details

### Themes and Styling
- **Main page**: Medieval-fantasy with retro-futuristic elements
- **Colors**: Emerald (#2b8c73), wine (#5e1f37), gold (#c7a75b), brass (#b37720)
- **Typography**: Uncial Antiqua for titles, Cinzel for body, Space Mono for technical elements

### JavaScript Functionality
- Countdown timer with real-time updates
- Form validation and submission
- FAQ accordion sections
- Smooth scrolling navigation

### Performance Expectations
- Server startup: **2 seconds** - NEVER CANCEL early
- HTML validation: **2 seconds** - NEVER CANCEL early  
- Page load: **instant** (static files)
- Full site navigation test: **under 1 minute**

### CRITICAL: Do NOT Cancel Commands
All timed operations complete very quickly for this static website:
- **NEVER CANCEL** the HTTP server startup - it takes only 2 seconds
- **NEVER CANCEL** HTML validation - completes in 2 seconds
- **NEVER CANCEL** any testing commands - all complete under 1 minute

Always allow adequate time for these operations and NEVER CANCEL prematurely.