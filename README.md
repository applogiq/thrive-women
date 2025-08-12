# Thrive Women - Project Prototype

A responsive crowdfunding platform prototype built with Next.js 14, TypeScript, and TailwindCSS, designed specifically for women entrepreneurs and their projects.

## 🚀 Features

- **Responsive Design**: Mobile-first layout that works seamlessly across all devices
- **Accessible Components**: Built with accessibility in mind, including proper ARIA labels, keyboard navigation, and focus management
- **Category Filtering**: Interactive category system with visual icons
- **Project Cards**: Detailed project cards with funding progress, location, and statistics
- **Project Details Page**: Comprehensive project view with funding progress, description, updates, contributors, and comments
- **Tabbed Navigation**: Organized content sections with smooth tab switching
- **Interactive Comments**: Comment system with sorting, likes, and reply functionality
- **Contributor Showcase**: Display of top backers and contribution statistics
- **Project Updates Timeline**: Regular updates from project creators with engagement metrics
- **Modern UI**: Clean, modern design inspired by the original mockup
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance

## 📁 Project Structure

```
thrive-prototype/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page component
│   └── project/[id]/
│       └── page.tsx         # Dynamic project details page
├── components/
│   ├── CategoryFilter.tsx   # Category selection component
│   ├── Footer.tsx           # Footer with links and social media
│   ├── Header.tsx           # Navigation header with mobile menu
│   ├── ProjectCard.tsx      # Individual project card component (with navigation)
│   ├── ProjectGrid.tsx      # Project grid with filtering and sorting
│   ├── ProjectHero.tsx      # Project details hero section
│   ├── ProjectTabs.tsx      # Tabbed navigation for project details
│   ├── ProjectDescription.tsx  # Project description and funding breakdown
│   ├── ProjectContributors.tsx # Contributors list and statistics
│   ├── ProjectUpdates.tsx   # Project updates timeline
│   └── ProjectComments.tsx  # Comments system with interactions
├── data/
│   └── mockData.ts          # Sample data (projects, contributors, updates, comments)
├── types/
│   └── index.ts             # TypeScript type definitions
├── package.json
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or download the project files** to your desired directory

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Decisions

### Color Palette
- **Primary**: Pink/magenta tones (#ec4899) to align with the feminine, empowering brand
- **Neutral**: Gray scales for content and backgrounds
- **Gradients**: Subtle pink gradients in the hero section for visual appeal

### Typography
- **Font**: Inter - chosen for its excellent readability and modern appearance
- **Hierarchy**: Clear typography scale from headings to body text

### Layout & Responsive Design
- **Mobile-first**: Designed primarily for mobile users, then enhanced for larger screens
- **Grid System**: CSS Grid and Flexbox for flexible, responsive layouts
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px  
  - Desktop: > 1024px

### Component Architecture
- **Modular Design**: Each component is self-contained and reusable
- **State Management**: React hooks for local state, easily extensible to global state management
- **Accessibility**: 
  - Semantic HTML elements
  - ARIA labels and roles
  - Keyboard navigation support
  - Focus management
  - Screen reader friendly

### Performance Optimizations
- **Next.js Image**: Optimized image loading with proper sizing
- **Code Splitting**: Automatic code splitting via Next.js App Router
- **Minimal Dependencies**: Only essential packages to reduce bundle size

### User Experience
- **Intuitive Navigation**: Clear category filtering and sorting options
- **Visual Feedback**: Hover states, loading states, and interactive elements
- **Progressive Enhancement**: Works without JavaScript for basic functionality

## 🔧 Key Components

### Header
- Responsive navigation with mobile hamburger menu
- Search functionality (UI only in prototype)
- User profile access
- "Start a project" CTA button

### Category Filter
- Interactive category icons with active states
- Responsive grid layout
- Filter and view controls

### Project Cards
- Funding progress visualization
- Project statistics (backers, days left, location)
- Optimized images with lazy loading
- Hover effects and accessibility support
- Clickable navigation to project details

### Project Details Page (`/project/[id]`)
- **ProjectHero**: Comprehensive project overview with funding progress, creator info, and action buttons
- **ProjectTabs**: Tabbed navigation system with counts and active states
- **ProjectDescription**: Detailed project story, funding breakdown, timeline, and milestones
- **ProjectContributors**: Top contributors showcase, recent contributions, and statistics
- **ProjectUpdates**: Timeline of project updates with engagement metrics and subscription
- **ProjectComments**: Interactive comment system with sorting, moderation, and community guidelines

### Footer
- Social media links
- Organized link sections
- Newsletter signup CTA
- Responsive layout

## 🚀 Future Enhancements

- User authentication and profiles
- Payment integration
- Real-time funding updates
- Project creation flow
- Search functionality
- Advanced filtering options
- Social sharing capabilities
- Analytics and tracking

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

This is a prototype project. For production use, consider adding:
- Database integration
- API routes
- Authentication system
- Payment processing
- Content management
- Testing suite

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS