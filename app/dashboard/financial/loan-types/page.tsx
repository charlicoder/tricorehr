'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Banknote, Plus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function LoanTypesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const loanTypes = [
    { id: 1, code: 'PL', name: 'Personal Loan', maxAmount: 50000, interestRate: 0, maxTenure: 36, status: 'Active' },
    { id: 2, code: 'SAL', name: 'Salary Advance', maxAmount: 10000, interestRate: 0, maxTenure: 12, status: 'Active' },
    { id: 3, code: 'ED', name: 'Education Loan', maxAmount: 100000, interestRate: 3, maxTenure: 60, status: 'Active' },
    { id: 4, code: 'EMRG', name: 'Emergency Loan', maxAmount: 15000, interestRate: 0, maxTenure: 6, status: 'Active' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Loan Types</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage employee loan types and policies</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Loan Type
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Banknote className="h-5 w-5 text-emerald-600" />
              All Loan Types
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search loan types..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Max Amount</TableHead>
                <TableHead>Interest Rate</TableHead>
                <TableHead>Max Tenure</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loanTypes.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell className="font-mono font-medium">{loan.code}</TableCell>
                  <TableCell className="font-medium">{loan.name}</TableCell>
                  <TableCell className="font-semibold">AED {loan.maxAmount.toLocaleString()}</TableCell>
                  <TableCell>{loan.interestRate}%</TableCell>
                  <TableCell>{loan.maxTenure} months</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{loan.status}</Badge>
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
