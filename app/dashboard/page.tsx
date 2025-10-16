'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users,
  Building2,
  Clock,
  DollarSign,
  Briefcase,
  FileText,
  TrendingUp,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Download,
  UserPlus,
  CheckCircle2,
  AlertCircle,
  Activity,
  Award,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  Legend,
} from 'recharts';

const employeeTrendData = [
  { month: 'Jan', employees: 245 },
  { month: 'Feb', employees: 252 },
  { month: 'Mar', employees: 268 },
  { month: 'Apr', employees: 275 },
  { month: 'May', employees: 290 },
  { month: 'Jun', employees: 312 },
];

const departmentData = [
  { name: 'Engineering', value: 85, color: '#6366f1' },
  { name: 'Sales', value: 62, color: '#8b5cf6' },
  { name: 'Marketing', value: 38, color: '#ec4899' },
  { name: 'HR', value: 28, color: '#f59e0b' },
  { name: 'Finance', value: 45, color: '#10b981' },
  { name: 'Operations', value: 54, color: '#06b6d4' },
];

const attendanceData = [
  { day: 'Mon', present: 285, absent: 12, leave: 15 },
  { day: 'Tue', present: 290, absent: 8, leave: 14 },
  { day: 'Wed', present: 288, absent: 10, leave: 14 },
  { day: 'Thu', present: 292, absent: 7, leave: 13 },
  { day: 'Fri', present: 280, absent: 15, leave: 17 },
];

const recentActivities = [
  {
    id: 1,
    type: 'onboard',
    user: 'Sarah Johnson',
    action: 'completed onboarding',
    time: '2 hours ago',
    avatar: null,
  },
  {
    id: 2,
    type: 'leave',
    user: 'Michael Chen',
    action: 'requested annual leave',
    time: '4 hours ago',
    avatar: null,
  },
  {
    id: 3,
    type: 'training',
    user: 'Emma Williams',
    action: 'completed Leadership Training',
    time: '5 hours ago',
    avatar: null,
  },
  {
    id: 4,
    type: 'review',
    user: 'David Brown',
    action: 'submitted performance review',
    time: '1 day ago',
    avatar: null,
  },
  {
    id: 5,
    type: 'payroll',
    user: 'System',
    action: 'processed monthly payroll',
    time: '2 days ago',
    avatar: null,
  },
];

const upcomingEvents = [
  { id: 1, title: 'Leadership Training', date: '2025-10-18', type: 'Training', color: 'bg-blue-500' },
  { id: 2, title: 'Q4 Performance Reviews', date: '2025-10-20', type: 'Review', color: 'bg-purple-500' },
  { id: 3, title: 'Team Building Event', date: '2025-10-25', type: 'Event', color: 'bg-green-500' },
  { id: 4, title: 'Monthly Town Hall', date: '2025-10-28', type: 'Meeting', color: 'bg-orange-500' },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Quick Actions
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Employees
            </CardTitle>
            <Users className="h-5 w-5 text-indigo-600" />
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">312</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-green-600 font-medium">+8.2%</span>
              <span className="text-gray-500 dark:text-gray-400">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Departments
            </CardTitle>
            <Building2 className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">12</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <span className="text-blue-600 font-medium">6</span>
              <span className="text-gray-500 dark:text-gray-400">active projects</span>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Pending Approvals
            </CardTitle>
            <Clock className="h-5 w-5 text-orange-600" />
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">24</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 font-medium">8 urgent</span>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Monthly Payroll
            </CardTitle>
            <DollarSign className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent className="relative">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">$1.2M</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-green-600 font-medium">Processed</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Employee Growth Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="6months" className="space-y-4">
              <TabsList>
                <TabsTrigger value="6months">6 Months</TabsTrigger>
                <TabsTrigger value="12months">12 Months</TabsTrigger>
                <TabsTrigger value="ytd">YTD</TabsTrigger>
              </TabsList>
              <TabsContent value="6months" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={employeeTrendData}>
                    <defs>
                      <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="employees"
                      stroke="#6366f1"
                      fillOpacity={1}
                      fill="url(#colorEmployees)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {departmentData.map((dept) => (
                <div key={dept.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dept.color }}></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{dept.name}</span>
                  <span className="text-xs font-medium ml-auto">{dept.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="present" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="absent" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="leave" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Emily Rodriguez', score: 98, dept: 'Sales' },
                { name: 'James Wilson', score: 95, dept: 'Engineering' },
                { name: 'Sarah Martinez', score: 93, dept: 'Marketing' },
                { name: 'Michael Lee', score: 91, dept: 'Operations' },
              ].map((performer, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                        {performer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {index === 0 && (
                      <Award className="absolute -top-1 -right-1 h-5 w-5 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {performer.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{performer.dept}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-indigo-600">{performer.score}%</p>
                    <Progress value={performer.score} className="h-1 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Activities</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 dark:text-white">
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-gray-600 dark:text-gray-400">{activity.action}</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{activity.time}</p>
                  </div>
                  <Activity className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Events</CardTitle>
              <Button variant="ghost" size="sm">View Calendar</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <div className={`w-1 h-12 rounded-full ${event.color}`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {event.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <p className="text-xs text-gray-500 dark:text-gray-400">{event.date}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="shrink-0">{event.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
