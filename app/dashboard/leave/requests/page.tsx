'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, CheckCircle, XCircle } from 'lucide-react';

export default function LeaveRequestsPage() {
  const leaveRequests = [
    { id: 1, empId: 'EMP001', name: 'Ahmed Al Mansoori', type: 'Annual Leave', from: '2024-10-20', to: '2024-10-25', days: 5, status: 'Pending' },
    { id: 2, empId: 'EMP002', name: 'Sara Abdullah', type: 'Sick Leave', from: '2024-10-18', to: '2024-10-19', days: 2, status: 'Approved' },
    { id: 3, empId: 'EMP003', name: 'Mohammed Ali', type: 'Annual Leave', from: '2024-11-01', to: '2024-11-10', days: 10, status: 'Pending' },
    { id: 4, empId: 'EMP005', name: 'Khalid Ibrahim', type: 'Sick Leave', from: '2024-10-15', to: '2024-10-15', days: 1, status: 'Approved' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Leave Requests</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage employee leave applications</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          New Request
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-600" />
            All Leave Requests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Leave Type</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-mono">{request.empId}</TableCell>
                  <TableCell className="font-medium">{request.name}</TableCell>
                  <TableCell><Badge variant="outline">{request.type}</Badge></TableCell>
                  <TableCell>{request.from}</TableCell>
                  <TableCell>{request.to}</TableCell>
                  <TableCell className="font-semibold">{request.days}</TableCell>
                  <TableCell>
                    <Badge className={
                      request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      request.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }>
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {request.status === 'Pending' && (
                      <div className="flex gap-2 justify-end">
                        <Button size="sm" variant="outline" className="text-green-600">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600">
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
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
