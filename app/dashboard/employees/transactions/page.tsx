'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EmployeeTransactionsPage() {
  const transactions = [
    { id: 1, date: '2024-10-15', employee: 'Ahmed Al Mansoori', type: 'Promotion', description: 'Promoted to Senior Developer', status: 'Approved' },
    { id: 2, date: '2024-10-14', employee: 'Sara Abdullah', type: 'Transfer', description: 'Department Transfer to HR', status: 'Approved' },
    { id: 3, date: '2024-10-13', employee: 'Mohammed Ali', type: 'Salary Adjustment', description: 'Annual Increment - 10%', status: 'Pending' },
    { id: 4, date: '2024-10-12', employee: 'Fatima Hassan', type: 'Leave', description: 'Annual Leave - 15 days', status: 'Approved' },
    { id: 5, date: '2024-10-11', employee: 'Khalid Ibrahim', type: 'Document Update', description: 'Passport Renewal', status: 'Completed' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Employee Transactions</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            View and manage employee transactions and changes
          </p>
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
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Employee</TableHead>
                <TableHead>Transaction Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-mono text-sm">{transaction.date}</TableCell>
                  <TableCell className="font-medium">{transaction.employee}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.type}</Badge>
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>
                    <Badge className={
                      transaction.status === 'Approved' || transaction.status === 'Completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }>
                      {transaction.status}
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
