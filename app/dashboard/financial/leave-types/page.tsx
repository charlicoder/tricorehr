'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function LeaveTypesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const leaveTypes = [
    { id: 1, code: 'AL', name: 'Annual Leave', days: 30, paid: true, carryForward: true, status: 'Active' },
    { id: 2, code: 'SL', name: 'Sick Leave', days: 15, paid: true, carryForward: false, status: 'Active' },
    { id: 3, code: 'UL', name: 'Unpaid Leave', days: 0, paid: false, carryForward: false, status: 'Active' },
    { id: 4, code: 'ML', name: 'Maternity Leave', days: 45, paid: true, carryForward: false, status: 'Active' },
    { id: 5, code: 'PL', name: 'Paternity Leave', days: 5, paid: true, carryForward: false, status: 'Active' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Leave Types</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage leave type configurations</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Leave Type
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-emerald-600" />
              All Leave Types
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search leave types..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Default Days</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>Carry Forward</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveTypes.map((leave) => (
                <TableRow key={leave.id}>
                  <TableCell className="font-mono font-medium">{leave.code}</TableCell>
                  <TableCell className="font-medium">{leave.name}</TableCell>
                  <TableCell>{leave.days === 0 ? 'Unlimited' : `${leave.days} days`}</TableCell>
                  <TableCell>{leave.paid ? <Badge className="bg-green-100 text-green-800">Yes</Badge> : <Badge variant="secondary">No</Badge>}</TableCell>
                  <TableCell>{leave.carryForward ? <Badge className="bg-blue-100 text-blue-800">Yes</Badge> : <Badge variant="secondary">No</Badge>}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{leave.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><Edit className="h-4 w-4 mr-2" />Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600"><Trash2 className="h-4 w-4 mr-2" />Delete</DropdownMenuItem>
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
