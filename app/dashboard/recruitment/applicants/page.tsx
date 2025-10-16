'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Users, Search, MoreVertical, Eye, Mail, CheckCircle, XCircle, Calendar } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function ApplicantsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const applicants = [
    { id: 1, name: 'John Smith', position: 'Senior Software Engineer', email: 'john.smith@email.com', phone: '+971501234567', status: 'Under Review', appliedDate: '2024-10-10', experience: '8 years' },
    { id: 2, name: 'Emily Johnson', position: 'HR Manager', email: 'emily.j@email.com', phone: '+971507654321', status: 'Shortlisted', appliedDate: '2024-10-12', experience: '10 years' },
    { id: 3, name: 'Michael Chen', position: 'Accountant', email: 'michael.chen@email.com', phone: '+971509876543', status: 'Interview Scheduled', appliedDate: '2024-10-08', experience: '5 years' },
    { id: 4, name: 'Sarah Williams', position: 'Sales Executive', email: 'sarah.w@email.com', phone: '+971506543210', status: 'New', appliedDate: '2024-10-15', experience: '3 years' },
    { id: 5, name: 'David Brown', position: 'Marketing Specialist', email: 'david.b@email.com', phone: '+971502345678', status: 'Rejected', appliedDate: '2024-10-05', experience: '2 years' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Applicants</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage job applications and candidates</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Applicants</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{applicants.length}</p>
              </div>
              <Users className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">New</p>
                <p className="text-2xl font-bold text-blue-600">
                  {applicants.filter(a => a.status === 'New').length}
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Under Review</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {applicants.filter(a => a.status === 'Under Review').length}
                </p>
              </div>
              <Users className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Shortlisted</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {applicants.filter(a => a.status === 'Shortlisted').length}
                </p>
              </div>
              <Users className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Interviews</p>
                <p className="text-2xl font-bold text-purple-600">
                  {applicants.filter(a => a.status === 'Interview Scheduled').length}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-600" />
              All Applicants
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search applicants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell className="font-medium">{applicant.name}</TableCell>
                  <TableCell>{applicant.position}</TableCell>
                  <TableCell>{applicant.email}</TableCell>
                  <TableCell className="font-mono text-sm">{applicant.phone}</TableCell>
                  <TableCell>{applicant.experience}</TableCell>
                  <TableCell>{applicant.appliedDate}</TableCell>
                  <TableCell>
                    <Badge className={
                      applicant.status === 'New' ? 'bg-blue-100 text-blue-800' :
                      applicant.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      applicant.status === 'Shortlisted' ? 'bg-emerald-100 text-emerald-800' :
                      applicant.status === 'Interview Scheduled' ? 'bg-purple-100 text-purple-800' :
                      'bg-red-100 text-red-800'
                    }>
                      {applicant.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Interview
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-green-600">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Shortlist
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
