'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileText, Search, Download, Eye, Mail } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function PayslipsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const payslips = [
    { id: 1, empId: 'EMP001', name: 'Ahmed Al Mansoori', month: 'October 2024', netSalary: 19500, status: 'Paid', date: '2024-10-30' },
    { id: 2, empId: 'EMP002', name: 'Sara Abdullah', month: 'October 2024', netSalary: 15700, status: 'Paid', date: '2024-10-30' },
    { id: 3, empId: 'EMP003', name: 'Mohammed Ali', month: 'October 2024', netSalary: 13100, status: 'Paid', date: '2024-10-30' },
    { id: 4, empId: 'EMP004', name: 'Fatima Hassan', month: 'October 2024', netSalary: 23200, status: 'Processing', date: '2024-10-30' },
    { id: 5, empId: 'EMP005', name: 'Khalid Ibrahim', month: 'October 2024', netSalary: 18150, status: 'Processing', date: '2024-10-30' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Payslips</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">View and manage employee payslips</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Download className="h-4 w-4 mr-2" />
          Bulk Download
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-emerald-600" />
              All Payslips
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search payslips..."
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
                <TableHead>Employee ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Net Salary</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payslips.map((payslip) => (
                <TableRow key={payslip.id}>
                  <TableCell className="font-mono">{payslip.empId}</TableCell>
                  <TableCell className="font-medium">{payslip.name}</TableCell>
                  <TableCell>{payslip.month}</TableCell>
                  <TableCell className="font-bold">AED {payslip.netSalary.toLocaleString()}</TableCell>
                  <TableCell>{payslip.date}</TableCell>
                  <TableCell>
                    <Badge className={
                      payslip.status === 'Paid'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }>
                      {payslip.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Actions
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Payslip
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Email to Employee
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
