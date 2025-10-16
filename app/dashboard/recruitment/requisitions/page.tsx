'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Plus, Search, MoreVertical, Edit, Trash2, Eye } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function JobRequisitionsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const requisitions = [
    { id: 1, jobId: 'JOB001', title: 'Senior Software Engineer', department: 'IT', positions: 2, status: 'Open', priority: 'High', deadline: '2024-11-15' },
    { id: 2, jobId: 'JOB002', title: 'HR Manager', department: 'HR', positions: 1, status: 'Open', priority: 'Medium', deadline: '2024-11-30' },
    { id: 3, jobId: 'JOB003', title: 'Accountant', department: 'Finance', positions: 1, status: 'In Progress', priority: 'Medium', deadline: '2024-10-31' },
    { id: 4, jobId: 'JOB004', title: 'Sales Executive', department: 'Sales', positions: 3, status: 'Open', priority: 'High', deadline: '2024-11-20' },
    { id: 5, jobId: 'JOB005', title: 'Marketing Specialist', department: 'Marketing', positions: 2, status: 'Closed', priority: 'Low', deadline: '2024-10-15' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Job Requisitions</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage job openings and hiring requests</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          New Requisition
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Requisitions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{requisitions.length}</p>
              </div>
              <Briefcase className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Open Positions</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {requisitions.filter(r => r.status === 'Open').reduce((sum, r) => sum + r.positions, 0)}
                </p>
              </div>
              <Briefcase className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">In Progress</p>
                <p className="text-2xl font-bold text-blue-600">
                  {requisitions.filter(r => r.status === 'In Progress').length}
                </p>
              </div>
              <Briefcase className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">High Priority</p>
                <p className="text-2xl font-bold text-red-600">
                  {requisitions.filter(r => r.priority === 'High').length}
                </p>
              </div>
              <Briefcase className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-emerald-600" />
              All Job Requisitions
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search requisitions..."
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
                <TableHead>Job ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Positions</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requisitions.map((req) => (
                <TableRow key={req.id}>
                  <TableCell className="font-mono">{req.jobId}</TableCell>
                  <TableCell className="font-medium">{req.title}</TableCell>
                  <TableCell>{req.department}</TableCell>
                  <TableCell className="font-semibold">{req.positions}</TableCell>
                  <TableCell>
                    <Badge className={
                      req.priority === 'High' ? 'bg-red-100 text-red-800' :
                      req.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }>
                      {req.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>{req.deadline}</TableCell>
                  <TableCell>
                    <Badge className={
                      req.status === 'Open' ? 'bg-green-100 text-green-800' :
                      req.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }>
                      {req.status}
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
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
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
