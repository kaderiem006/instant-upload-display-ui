
# Abdul Kader - Zoho Expert & Consultant Portfolio

A modern, responsive portfolio website for Abdul Kader, a Zoho Expert and Business Consultant with 8+ years of experience.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and interactive cards
- **Contact Form**: Functional contact form with validation
- **Client Showcase**: Display of verified clients and work areas
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework**: Bootstrap 5.3.0
- **Icons**: Font Awesome 6.4.0
- **Backend**: Node.js with Express.js
- **Security**: Helmet.js for security headers
- **Performance**: Compression middleware for gzip compression

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── server.js           # Node.js Express server
├── package.json        # Node.js dependencies (existing)
└── README.md           # Project documentation
```

## Installation & Setup

1. **Clone or download the project files**

2. **Install required Node.js dependencies**:
   ```bash
   npm install express cors helmet compression
   ```

3. **Start the development server**:
   ```bash
   node server.js
   ```

4. **Open your browser and visit**:
   ```
   http://localhost:3000
   ```

## Available Scripts

- `node server.js` - Start the production server
- The application uses vanilla HTML, CSS, and JavaScript - no build process needed

## Features Overview

### Sections

1. **Hero Section**: Introduction with profile image and call-to-action buttons
2. **About Section**: Professional background, experience, and quick facts
3. **Services Section**: Comprehensive list of Zoho services offered
4. **Skills Section**: Technical skills organized by categories
5. **Work Areas Section**: Industries and business types served
6. **Verified Clients Section**: Showcase of global clients with details
7. **Contact Section**: Contact information and inquiry form

### Interactive Features

- Smooth scrolling navigation
- Active navigation link highlighting
- Hover animations on cards and buttons
- Scroll-triggered fade-in animations
- Form validation and submission handling
- Responsive mobile navigation

### Performance Optimizations

- Gzip compression enabled
- Optimized images and assets
- Minimal external dependencies
- Efficient CSS and JavaScript
- Lazy loading for animations

## Customization

### Updating Content

- **Personal Information**: Edit the HTML content in `index.html`
- **Styling**: Modify `styles.css` for visual changes
- **Functionality**: Update `script.js` for behavioral changes
- **Clients Data**: Update the `clients` array in `script.js`
- **Work Areas**: Update the `workAreas` array in `script.js`

### Color Scheme

The website uses CSS custom properties for easy color customization:

```css
:root {
    --primary-color: #f97316;
    --primary-hover: #ea580c;
    --secondary-color: #1f2937;
    --dark-bg: #111827;
    --darker-bg: #000000;
}
```

## Deployment

This is a Node.js application that can be deployed to any hosting service:

### Node.js Hosting (Recommended)
- Deploy to Heroku, Railway, Render, or similar
- Includes Express server for enhanced functionality and API endpoints

### Static Hosting Alternative
- Deploy HTML, CSS, and JS files to Netlify, Vercel, or GitHub Pages
- Remove server.js if using static hosting only (contact form won't work)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

The application requires these Node.js packages:
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `helmet` - Security headers
- `compression` - Gzip compression

Install with: `npm install express cors helmet compression`

## License

This project is licensed under the MIT License.

## Contact

For any questions or customizations, please contact:

**Abdul Kader**
- Email: akader@infitarit.com
- Phone: +8801733687284
- Website: www.infitarit.com
- LinkedIn: linkedin.com/in/itabdulkader

---

*This portfolio showcases 8+ years of Zoho expertise and professional consulting services.*
