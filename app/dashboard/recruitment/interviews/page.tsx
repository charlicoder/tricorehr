'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, Search, MoreVertical, Eye, Edit, CheckCircle, XCircle } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function InterviewsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const interviews = [
    { id: 1, candidate: 'Michael Chen', position: 'Accountant', date: '2024-10-18', time: '10:00 AM', interviewer: 'Finance Manager', type: 'Technical', status: 'Scheduled' },
    { id: 2, candidate: 'Emily Johnson', position: 'HR Manager', date: '2024-10-20', time: '02:00 PM', interviewer: 'CEO', type: 'Final', status: 'Scheduled' },
    { id: 3, candidate: 'John Smith', position: 'Senior Software Engineer', date: '2024-10-17', time: '11:00 AM', interviewer: 'Tech Lead', type: 'Technical', status: 'Completed' },
    { id: 4, candidate: 'Sarah Williams', position: 'Sales Executive', date: '2024-10-22', time: '03:00 PM', interviewer: 'Sales Director', type: 'Initial', status: 'Scheduled' },
    { id: 5, candidate: 'Robert Lee', position: 'Marketing Specialist', date: '2024-10-16', time: '09:00 AM', interviewer: 'Marketing Head', type: 'Initial', status: 'Cancelled' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Interviews</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Schedule and manage candidate interviews</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Interview
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Interviews</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{interviews.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Scheduled</p>
                <p className="text-2xl font-bold text-blue-600">
                  {interviews.filter(i => i.status === 'Scheduled').length}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {interviews.filter(i => i.status === 'Completed').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">This Week</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {interviews.filter(i => i.status === 'Scheduled').length}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-emerald-600" />
              All Interviews
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search interviews..."
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
                <TableHead>Candidate</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Interviewer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {interviews.map((interview) => (
                <TableRow key={interview.id}>
                  <TableCell className="font-medium">{interview.candidate}</TableCell>
                  <TableCell>{interview.position}</TableCell>
                  <TableCell>{interview.date}</TableCell>
                  <TableCell className="font-mono text-sm">{interview.time}</TableCell>
                  <TableCell>{interview.interviewer}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{interview.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={
                      interview.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                      interview.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      interview.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }>
                      {interview.status}
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
                          View Details
                        </DropdownMenuItem>
                        {interview.status === 'Scheduled' && (
                          <>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Reschedule
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-green-600">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Mark Completed
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <XCircle className="h-4 w-4 mr-2" />
                              Cancel
                            </DropdownMenuItem>
                          </>
                        )}
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
