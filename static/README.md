# Global Leaders in Travel, Tours & Logistics - Static Website

A professional single-page landing site for Rodney & Nuch Pattison, showcasing their extensive 30+ years of expertise in cruise logistics and tour operations.

## Features

- **Responsive Design**: Mobile-first approach with professional travel imagery
- **Interactive Expertise Calculator**: Explore cumulative 160+ years of travel industry experience
- **Comprehensive Cruise Line Partners**: Display of 14 major cruise line partnerships
- **Affiliate Partner Integration**: 9 trusted travel service partners with professional styling
- **Modern UI/UX**: Gradient-styled expertise icons, hover effects, and smooth animations
- **Contact Form**: Professional contact form with validation
- **SEO Optimized**: Proper meta tags, Open Graph tags, and semantic HTML

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, and Vanilla JavaScript
- **Icons**: Lucide Icons CDN
- **Fonts**: Google Fonts (Inter & Playfair Display)
- **Animations**: CSS animations and JavaScript interactions
- **Deployment**: Optimized for Vercel static hosting

## Project Structure

```
static/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
├── vercel.json         # Vercel deployment configuration
├── assets/             # All images and media files
│   ├── HERO IMAGE1_*   # Main hero background
│   ├── HERO IMAGE2_*   # Contact section background
│   ├── RODNEY_*        # Rodney's profile photo
│   ├── NUCH_*         # Nuch's profile photo
│   └── [cruise-logos]  # 14 cruise line partner logos
└── README.md          # This file
```

## Key Sections

### 1. Affiliate Partners Bar
- 9 trusted travel service partners with affiliate links
- Professional icons and hover effects
- External link indicators

### 2. Hero Section
- Professional headline positioning them as "Global Leaders"
- Authentic hero imagery
- Call-to-action button with smooth scroll

### 3. Interactive Expertise Calculator
- 6 clickable expertise areas
- Real-time calculation of cumulative experience
- Animated results display with detailed breakdown
- Sticky results panel for better UX

### 4. Professional Profiles
- Individual profiles for Rodney and Nuch
- Professional photos and language capabilities
- Detailed experience descriptions

### 5. Expertise Showcase
- 6 specialized areas with colorful gradient icons
- Hover effects and professional descriptions
- Center-aligned content with enhanced visual hierarchy

### 6. Cruise Line Partners
- 14 major cruise line logos in responsive grid
- Hover animations and professional styling
- Additional partnerships note

### 7. Contact Section
- Professional contact form with validation
- Trust indicators (Free Consultation, Industry Expertise, Global Network)
- Background imagery for visual consistency

## Deployment Instructions

### Deploy to Vercel

1. **Upload files to Vercel**:
   - Zip the entire `static/` folder contents
   - Or connect a GitHub repository containing these files

2. **Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Upload your files or connect GitHub repo
   - Vercel will automatically detect it as a static site

3. **Configuration**:
   - The `vercel.json` file is already configured
   - No build step required - pure static files
   - Automatic HTTPS and CDN optimization

4. **Custom Domain** (Optional):
   - Add your custom domain in Vercel dashboard
   - Update the Open Graph URL in `index.html`

### Alternative Deployment Options

- **Netlify**: Drag and drop the `static/` folder
- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **AWS S3 + CloudFront**: Upload to S3 bucket with static hosting

## Customization

### Update Content
- Edit text content directly in `index.html`
- Replace images in the `assets/` folder
- Modify affiliate links and partner information

### Styling Changes
- All styles are in `styles.css`
- CSS variables at the top for easy color/font changes
- Responsive breakpoints clearly marked

### Functionality Updates
- Interactive features in `script.js`
- Expertise calculator data can be modified
- Contact form can be connected to a backend service

## Performance Features

- **Optimized Images**: All images properly sized and compressed
- **CDN Resources**: Icons and fonts loaded from CDNs
- **Caching Headers**: Long-term caching for static assets
- **Minified Code**: Production-ready CSS and JavaScript
- **Lazy Loading**: Images load as needed
- **Responsive Images**: Proper sizing for different screen sizes

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## Contact Form Integration

The contact form currently shows a success message for demonstration. To connect to a real backend:

1. Replace the form submission logic in `script.js`
2. Connect to services like Formspree, Netlify Forms, or your own API
3. Update the form action and method attributes

## Analytics Integration

To add analytics:

1. Add Google Analytics or similar tracking code to `index.html`
2. Track form submissions and user interactions
3. Monitor affiliate link clicks and conversions

## License

This is a professional business website. All content and branding belong to Rodney & Nuch Pattison.