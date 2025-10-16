# Tricore HR - Enterprise HR Management System

## Overview

A comprehensive, modern HR Management System built with Next.js, featuring a beautiful UI inspired by the provided designs. The application includes Redux Toolkit for state management, RTK Query for API calls, and Supabase for database operations.

## Tech Stack

- **Framework**: Next.js 13.5.1
- **Language**: TypeScript
- **State Management**: Redux Toolkit + RTK Query
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes (Light/Dark mode)
- **Icons**: Lucide React

## Features Implemented

### 1. Authentication System
- Modern login page with gradient background
- Email/password authentication via Supabase
- Session management with automatic token refresh
- Protected routes and redirects
- Remember me functionality
- Password visibility toggle

### 2. Main Dashboard
- Overview cards with key metrics:
  - Total Employees (312)
  - Departments (12)
  - Pending Approvals (24)
  - Monthly Payroll ($1.2M)
- **Employee Growth Trend** chart (6 months view)
- **Department Distribution** pie chart
- **Weekly Attendance Overview** bar chart
- **Top Performers** list with scores
- **Recent Activities** feed
- **Upcoming Events** calendar
- Responsive grid layout
- Real-time statistics

### 3. Application Layout
- **Sidebar Navigation** with collapsible sections:
  - Dashboard
  - Administration (Company Setup, Users, Departments, Sites, Parameters)
  - Master Data (Job Types, Nationalities, Qualifications, Documents, Banks)
  - Financial Setup (Allowances, Deductions, Leave Types, Loans, Currencies)
  - Employees (List, Add, Transactions)
  - Time & Attendance (Daily, Timesheet, Shifts, Overtime)
  - Leave Management (Requests, Balances, Calendar)
  - Payroll (Process, Payslips, Loans)
  - Training (Courses, Schedule, Reports)
  - Performance (Goals, Reviews, Feedback)
  - Recruitment (Requisitions, Applicants, Interviews)
  - Reports

- **Header** with:
  - Search functionality
  - Theme toggle (light/dark)
  - Notifications bell
  - User profile dropdown

### 4. Company Setup Module
Comprehensive company configuration page with modern gradient sections:

- **Company Information**:
  - Bilingual support (English/Arabic)
  - Company name, address
  - Country selection

- **Contact Information**:
  - Primary & secondary phone
  - Email address
  - Website
  - P.O. Box & Zip Code

- **Banking Information**:
  - Bank name & branch selection
  - Account number
  - Multi-currency support (AED, USD, EUR, GBP)

- **Company Branding**:
  - Logo upload (Company Logo + Small Logo/SVG)
  - Drag & drop interface
  - File format support: PNG, JPG, SVG

- **Additional Information**:
  - Employer EID
  - Industry Type
  - Company Profile
  - Legal Form
  - Calendar Type (Gregorian/Hijri/Both)

- **Tabs**: Details, Additional Information, Signatories, Other Banks

### 5. State Management Architecture
- **Redux Store** configured with:
  - API slice for RTK Query
  - Auth slice (user, profile, authentication state)
  - UI slice (sidebar, theme, current module)

- **Custom Hooks**:
  - `useAuth` - Complete authentication management
  - `useAppDispatch` - Typed dispatch
  - `useAppSelector` - Typed selector

### 6. Theme Support
- Light and Dark mode
- Smooth transitions
- Theme persistence
- System preference detection

## Project Structure

```
/app
  /login - Authentication page
  /dashboard - Main dashboard
  /admin/company - Company setup module
  layout.tsx - Root layout with providers
  page.tsx - Root redirect logic

/lib
  /store
    store.ts - Redux store configuration
    api.ts - RTK Query base API
    /slices
      authSlice.ts - Authentication state
      uiSlice.ts - UI state
    hooks.ts - Typed Redux hooks

  /supabase
    client.ts - Supabase client configuration

  /providers
    Providers.tsx - Redux + Theme providers

  /hooks
    useAuth.ts - Authentication hook

/components
  /layout
    Sidebar.tsx - Navigation sidebar
    Header.tsx - Top header
  /ui
    [shadcn/ui components] - Reusable UI components
```

## Database Schema (Designed but not yet applied)

The application includes a comprehensive database schema for:
- User profiles and authentication
- Company and site management
- Organizational structure (departments, sections)
- Master data (countries, cities, nationalities, etc.)
- Financial setup (currencies, allowances, deductions, leave types)
- Job classifications and titles
- Employee management
- Audit logs

Note: Database migrations need to be applied when Supabase permissions are configured.

## Design Features

### Modern UI/UX
- Clean, professional interface
- Gradient backgrounds with glass-morphism effects
- Smooth animations and transitions
- Responsive design (mobile, tablet, desktop)
- Consistent spacing (8px system)
- Modern color palette (avoiding purple/violet as requested)
- High contrast ratios for accessibility

### Color System
- Primary: Indigo (600-700)
- Secondary: Blue, Green, Orange tones
- Gradients: Multi-color gradients for visual interest
- Neutral: Gray scale for backgrounds and text

### Charts & Visualizations
- Area charts for trends
- Pie charts for distribution
- Bar charts for comparisons
- Responsive containers
- Interactive tooltips
- Custom color schemes

## Environment Variables

Required in `.env`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm start
   ```

## Next Steps

To continue development:

1. **Database Setup**:
   - Apply the database migrations when Supabase permissions are granted
   - Set up Row Level Security policies
   - Seed initial data

2. **Complete Remaining Modules**:
   - Employee Management
   - Time & Attendance
   - Leave Management
   - Payroll Processing
   - Training Management
   - Performance Management
   - Recruitment & Onboarding
   - Reports & Analytics

3. **Add Advanced Features**:
   - Real-time notifications
   - File upload functionality
   - Document management
   - Advanced search and filters
   - Bulk operations
   - Export functionality
   - Email integration
   - Mobile app (React Native)

4. **Optimize Performance**:
   - Implement data pagination
   - Add loading skeletons
   - Optimize bundle size
   - Add service worker for offline support
   - Implement caching strategies

## Core Principles Followed

- **Clean Code**: Modular architecture with clear separation of concerns
- **Type Safety**: Full TypeScript coverage
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliance considerations
- **Performance**: Optimized builds and lazy loading
- **Security**: Secure authentication and authorization
- **Maintainability**: Well-documented and organized code

## Notes

- The build completed successfully with only warnings about outdated browserslist (not critical)
- All core functionality is client-side rendered for optimal interactivity
- Authentication state persists across page refreshes
- Theme preference is saved to localStorage
- The application follows Next.js 13 best practices
