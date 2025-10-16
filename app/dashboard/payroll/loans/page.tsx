'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Plus, Search, MoreVertical, Eye, CheckCircle, XCircle } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function LoansPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const loans = [
    { id: 1, empId: 'EMP001', name: 'Ahmed Al Mansoori', type: 'Personal Loan', amount: 50000, outstanding: 35000, installment: 2500, status: 'Active' },
    { id: 2, empId: 'EMP003', name: 'Mohammed Ali', type: 'Salary Advance', amount: 8000, outstanding: 4000, installment: 1000, status: 'Active' },
    { id: 3, empId: 'EMP004', name: 'Fatima Hassan', type: 'Education Loan', amount: 75000, outstanding: 75000, installment: 2500, status: 'Pending' },
    { id: 4, empId: 'EMP002', name: 'Sara Abdullah', type: 'Personal Loan', amount: 30000, outstanding: 0, installment: 0, status: 'Completed' },
    { id: 5, empId: 'EMP005', name: 'Khalid Ibrahim', type: 'Emergency Loan', amount: 10000, outstanding: 5000, installment: 1000, status: 'Active' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Employee Loans</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage employee loan requests and repayments</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          New Loan Request
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Loans</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{loans.length}</p>
              </div>
              <DollarSign className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Loans</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {loans.filter(l => l.status === 'Active').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Outstanding</p>
                <p className="text-2xl font-bold text-orange-600">
                  AED {loans.reduce((sum, loan) => sum + loan.outstanding, 0).toLocaleString()}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Recovery</p>
                <p className="text-2xl font-bold text-blue-600">
                  AED {loans.filter(l => l.status === 'Active').reduce((sum, loan) => sum + loan.installment, 0).toLocaleString()}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-emerald-600" />
              All Loan Records
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search loans..."
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
                <TableHead>Loan Type</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Outstanding</TableHead>
                <TableHead>Monthly Installment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell className="font-mono">{loan.empId}</TableCell>
                  <TableCell className="font-medium">{loan.name}</TableCell>
                  <TableCell><Badge variant="outline">{loan.type}</Badge></TableCell>
                  <TableCell className="font-semibold">AED {loan.amount.toLocaleString()}</TableCell>
                  <TableCell className="font-semibold text-orange-600">AED {loan.outstanding.toLocaleString()}</TableCell>
                  <TableCell className="font-semibold">AED {loan.installment.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={
                      loan.status === 'Active' ? 'bg-green-100 text-green-800' :
                      loan.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }>
                      {loan.status}
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
                        {loan.status === 'Pending' && (
                          <>
                            <DropdownMenuItem className="text-green-600">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Approve
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <XCircle className="h-4 w-4 mr-2" />
                              Reject
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
