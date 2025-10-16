'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Clock, Download } from 'lucide-react';

export default function OvertimePage() {
  const overtimeRecords = [
    { id: 1, empId: 'EMP001', name: 'Ahmed Al Mansoori', date: '2024-10-14', hours: 2, rate: 150, amount: 300, status: 'Approved' },
    { id: 2, empId: 'EMP002', name: 'Sara Abdullah', date: '2024-10-13', hours: 3, rate: 120, amount: 360, status: 'Approved' },
    { id: 3, empId: 'EMP003', name: 'Mohammed Ali', date: '2024-10-15', hours: 1.5, rate: 130, amount: 195, status: 'Pending' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Overtime</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage employee overtime records</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-emerald-600" />
            Overtime Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Rate/Hour</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {overtimeRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-mono">{record.empId}</TableCell>
                  <TableCell className="font-medium">{record.name}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell className="font-semibold">{record.hours}h</TableCell>
                  <TableCell>AED {record.rate}</TableCell>
                  <TableCell className="font-semibold">AED {record.amount}</TableCell>
                  <TableCell>
                    <Badge className={record.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                      {record.status}
                    </Badge>
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
