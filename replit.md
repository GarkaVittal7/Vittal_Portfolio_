# Portfolio Website - Garka Vittal

## Overview

This is a modern, responsive portfolio website built with React and TypeScript, showcasing the professional profile of Garka Vittal, a Full Stack Developer. The application features a clean, modern design with sections for personal information, projects, skills, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Email Service**: Nodemailer for contact form submissions
- **Session Management**: In-memory storage with fallback to database

### Build System
- **Bundler**: Vite for frontend development and building
- **Backend Build**: esbuild for server-side bundling
- **Development**: Hot module replacement and runtime error overlay

## Key Components

### Frontend Components
1. **Layout Components**
   - Navbar: Fixed navigation with smooth scrolling
   - Hero: Landing section with social links and introduction
   - About: Professional summary and statistics
   - Projects: Portfolio showcase with technology tags
   - Skills: Technical skills categorized by type
   - Contact: Form with validation and submission handling
   - Footer: Social links and copyright information

2. **UI Components**
   - Comprehensive shadcn/ui component library
   - Form components with validation
   - Toast notifications for user feedback
   - Responsive design patterns

### Backend Components
1. **API Routes**
   - `/api/contact`: POST endpoint for contact form submissions
   - Error handling middleware
   - Request logging and monitoring

2. **Storage Layer**
   - Memory-based storage implementation
   - User and contact message models
   - Database schema with Drizzle ORM

3. **Email Integration**
   - Gmail SMTP configuration
   - HTML email templates
   - Error handling for email delivery

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form
   - Client-side validation with Zod schema
   - Form data submitted to `/api/contact` endpoint
   - Server validates and stores message
   - Email notification sent to portfolio owner
   - Success/error feedback displayed to user

2. **Page Navigation**:
   - Single-page application with smooth scrolling
   - Section-based navigation
   - Intersection Observer for scroll animations

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, ReactDOM
- **Styling**: Tailwind CSS, Radix UI components
- **Forms**: React Hook Form, Zod validation
- **HTTP Client**: Fetch API with React Query
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, date-fns

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Email**: Nodemailer
- **Validation**: Zod
- **Development**: tsx, esbuild

### Development Dependencies
- **Build Tools**: Vite, TypeScript
- **Linting**: ESLint, Prettier (implied)
- **Replit Integration**: Vite plugins for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: 
   - Vite builds React application to `dist/public`
   - Optimized bundle with code splitting
   - Asset optimization and compression

2. **Backend Build**:
   - esbuild bundles server code to `dist/index.js`
   - ES modules format with external dependencies
   - Single executable file for production

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution
- **Production**: Node.js runs compiled JavaScript
- **Database**: PostgreSQL with environment-based connection string
- **Email**: Gmail SMTP with environment variables

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database
- Environment variables for email configuration
- Static file serving for frontend assets

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Optimized with Vite and React Query
- **Accessibility**: Radix UI components with proper ARIA support
- **SEO**: Single-page application with meta tags
- **Email Integration**: Automated contact form to email pipeline
- **Database**: Persistent storage for contact messages
- **Development Experience**: Hot reload, error overlay, and type safety