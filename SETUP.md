# Thrive Women - Homepage Prototype

A modern, responsive homepage for Thrive Women - a platform focused on women empowerment through education, mentorship, and community support.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Setup

```bash
# Navigate to project directory
cd thrive-women

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser and navigate to
# http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage component
├── components/
│   ├── Header.tsx           # Navigation header with login modal
│   ├── Hero.tsx             # Hero section with illustration
│   ├── Statistics.tsx       # Impact statistics section
│   ├── Testimonials.tsx     # User testimonials with carousel
│   ├── Courses.tsx          # Program/courses grid section
│   ├── Fundraising.tsx      # Fundraising information section
│   ├── FinalEmpowerment.tsx # Call-to-action with illustration
│   └── Footer.tsx           # Site footer with links
```

## 🎨 Design Decisions

### Color Palette
- **Primary Purple**: `#7C3AED` - Brand color for CTAs and highlights
- **Secondary Teal**: `#0D9488` - Accent color for empowerment messaging
- **Supporting Colors**: Green, blue, orange gradients for illustrations
- **Neutral Grays**: For text and subtle backgrounds

### Typography
- **System Font Stack**: Optimized for performance and readability
- **Font Weights**: Bold (700) for headings, Regular (400) for body text
- **Responsive Scaling**: `text-4xl` to `text-6xl` for main headings

### Layout & Spacing
- **Mobile-First Approach**: Designed for mobile and scaled up
- **Grid System**: CSS Grid and Flexbox for responsive layouts
- **Consistent Spacing**: Using Tailwind's spacing scale (4, 6, 8, 12, 16)
- **Container Max-Width**: Centered content with proper margins

### Component Architecture
- **Modular Components**: Each section is a separate, reusable component
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: All components adapt to different screen sizes

### Interactive Elements
- **Hover Effects**: Subtle animations on buttons and cards
- **Focus States**: Keyboard navigation support
- **Loading States**: Smooth transitions and animations
- **Testimonial Carousel**: Interactive carousel with navigation

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: All interactive elements are focusable
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Indicators**: Visible focus states for all interactive elements

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Single column layout
- **Tablet**: `768px - 1024px` - Two column layouts
- **Desktop**: `> 1024px` - Full multi-column layouts

## 🔧 Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: TailwindCSS for rapid development
- **Icons**: Custom SVG icons for lightweight performance
- **Optimization**: Built-in Next.js image and font optimization

## 🎯 Key Features

1. **Responsive Design**: Works seamlessly on all device sizes
2. **Performance Optimized**: Fast loading with minimal dependencies
3. **Accessible**: WCAG 2.1 AA compliance
4. **Modern UI**: Clean, contemporary design
5. **Interactive Elements**: Engaging user experience
6. **Type Safe**: Full TypeScript implementation

## 🚀 Deployment

The application is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📝 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is created as a prototype and is available for educational and demonstration purposes.