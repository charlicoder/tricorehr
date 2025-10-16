'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Building2,
  LayoutDashboard,
  Users,
  Settings,
  Briefcase,
  Calendar,
  Clock,
  GraduationCap,
  TrendingUp,
  FileText,
  DollarSign,
  UserPlus,
  ChevronDown,
  ChevronRight,
  Database,
  MapPin,
  Banknote,
  Shield,
  Ticket,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useUI } from '@/lib/contexts/UIContext';

interface NavItem {
  title: string;
  href?: string;
  icon: any;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Administration',
    icon: Settings,
    children: [
      { title: 'Company Setup', href: '/dashboard/admin/company', icon: Building2 },
      { title: 'User Management', href: '/dashboard/admin/users', icon: Shield },
      { title: 'Departments', href: '/dashboard/admin/departments', icon: Building2 },
      { title: 'Sites & Locations', href: '/dashboard/admin/sites', icon: MapPin },
      { title: 'System Parameters', href: '/dashboard/admin/parameters', icon: Database },
    ],
  },
  {
    title: 'Master Data',
    icon: Database,
    children: [
      { title: 'Job Types', href: '/dashboard/master/job-types', icon: Briefcase },
      { title: 'Nationalities', href: '/dashboard/master/nationalities', icon: Users },
      { title: 'Qualifications', href: '/dashboard/master/qualifications', icon: GraduationCap },
      { title: 'Document Types', href: '/dashboard/master/document-types', icon: FileText },
      { title: 'Banks', href: '/dashboard/master/banks', icon: Banknote },
    ],
  },
  {
    title: 'Financial Setup',
    icon: DollarSign,
    children: [
      { title: 'Allowances', href: '/dashboard/financial/allowances', icon: DollarSign },
      { title: 'Deductions', href: '/dashboard/financial/deductions', icon: DollarSign },
      { title: 'Leave Types', href: '/dashboard/financial/leave-types', icon: Calendar },
      { title: 'Loan Types', href: '/dashboard/financial/loan-types', icon: Banknote },
      { title: 'Currencies', href: '/dashboard/financial/currencies', icon: DollarSign },
    ],
  },
  {
    title: 'Employees',
    icon: Users,
    children: [
      { title: 'Employee List', href: '/dashboard/employees/list', icon: Users },
      { title: 'Add Employee', href: '/dashboard/employees/new', icon: UserPlus },
      { title: 'Employee Transactions', href: '/dashboard/employees/transactions', icon: FileText },
    ],
  },
  {
    title: 'Time & Attendance',
    icon: Clock,
    children: [
      { title: 'Daily Attendance', href: '/dashboard/attendance/daily', icon: Clock },
      { title: 'Timesheet', href: '/dashboard/attendance/timesheet', icon: FileText },
      { title: 'Shifts', href: '/dashboard/attendance/shifts', icon: Clock },
      { title: 'Overtime', href: '/dashboard/attendance/overtime', icon: Clock },
    ],
  },
  {
    title: 'Leave Management',
    icon: Calendar,
    children: [
      { title: 'Leave Requests', href: '/dashboard/leave/requests', icon: Calendar },
      { title: 'Leave Balances', href: '/dashboard/leave/balances', icon: FileText },
      { title: 'Leave Calendar', href: '/dashboard/leave/calendar', icon: Calendar },
    ],
  },
  {
    title: 'Payroll',
    icon: Banknote,
    children: [
      { title: 'Process Payroll', href: '/dashboard/payroll/process', icon: Banknote },
      { title: 'Payslips', href: '/dashboard/payroll/payslips', icon: FileText },
      { title: 'Loans', href: '/dashboard/payroll/loans', icon: DollarSign },
    ],
  },
  {
    title: 'Training',
    icon: GraduationCap,
    children: [
      { title: 'Training Courses', href: '/dashboard/training/courses', icon: GraduationCap },
      { title: 'Schedule Training', href: '/dashboard/training/schedule', icon: Calendar },
      { title: 'Training Reports', href: '/dashboard/training/reports', icon: FileText },
    ],
  },
  {
    title: 'Performance',
    icon: TrendingUp,
    children: [
      { title: 'Goals & OKRs', href: '/dashboard/performance/goals', icon: TrendingUp },
      { title: 'Reviews', href: '/dashboard/performance/reviews', icon: FileText },
      { title: 'Feedback', href: '/dashboard/performance/feedback', icon: Award },
    ],
  },
  {
    title: 'Recruitment',
    icon: UserPlus,
    children: [
      { title: 'Job Requisitions', href: '/dashboard/recruitment/requisitions', icon: Briefcase },
      { title: 'Applicants', href: '/dashboard/recruitment/applicants', icon: Users },
      { title: 'Interviews', href: '/dashboard/recruitment/interviews', icon: Calendar },
    ],
  },
  {
    title: 'Reports',
    icon: FileText,
    href: '/dashboard/reports',
  },
];

function NavItemComponent({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === item.href;
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
            depth === 0 ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50',
            'text-gray-700 dark:text-gray-300'
          )}
        >
          <item.icon className="h-5 w-5 shrink-0" />
          <span className="flex-1 text-left">{item.title}</span>
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        {isOpen && (
          <div className="ml-6 mt-1 space-y-1">
            {item.children?.map((child) => (
              <NavItemComponent key={child.title} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href!}
      className={cn(
        'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
        isActive
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
      )}
    >
      <item.icon className="h-5 w-5 shrink-0" />
      <span>{item.title}</span>
    </Link>
  );
}

export function Sidebar() {
  const { sidebarCollapsed } = useUI();

  if (sidebarCollapsed) {
    return null;
  }

  return (
    <div className="flex flex-col w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-indigo-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Tricore HR</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Enterprise Edition</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <NavItemComponent key={item.title} item={item} />
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
