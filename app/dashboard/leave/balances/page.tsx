'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Download } from 'lucide-react';

export default function LeaveBalancesPage() {
  const balances = [
    { id: 1, empId: 'EMP001', name: 'Ahmed Al Mansoori', annualLeave: 25, sickLeave: 12, unpaidLeave: 5 },
    { id: 2, empId: 'EMP002', name: 'Sara Abdullah', annualLeave: 28, sickLeave: 14, unpaidLeave: 0 },
    { id: 3, empId: 'EMP003', name: 'Mohammed Ali', annualLeave: 20, sickLeave: 15, unpaidLeave: 2 },
    { id: 4, empId: 'EMP004', name: 'Fatima Hassan', annualLeave: 30, sickLeave: 15, unpaidLeave: 0 },
    { id: 5, empId: 'EMP005', name: 'Khalid Ibrahim', annualLeave: 18, sickLeave: 10, unpaidLeave: 3 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Leave Balances</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">View employee leave balance summary</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-emerald-600" />
            Employee Leave Balances
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Annual Leave</TableHead>
                <TableHead>Sick Leave</TableHead>
                <TableHead>Unpaid Leave</TableHead>
                <TableHead>Total Available</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {balances.map((balance) => (
                <TableRow key={balance.id}>
                  <TableCell className="font-mono">{balance.empId}</TableCell>
                  <TableCell className="font-medium">{balance.name}</TableCell>
                  <TableCell className="font-semibold text-green-600">{balance.annualLeave} days</TableCell>
                  <TableCell className="font-semibold text-blue-600">{balance.sickLeave} days</TableCell>
                  <TableCell className="font-semibold text-gray-600">{balance.unpaidLeave} days</TableCell>
                  <TableCell className="font-bold">{balance.annualLeave + balance.sickLeave + balance.unpaidLeave} days</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
