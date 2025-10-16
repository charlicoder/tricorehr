'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Plus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function AllowancesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const allowances = [
    { id: 1, code: 'HRA', name: 'Housing Allowance', type: 'Fixed', taxable: false, amount: 3000, status: 'Active' },
    { id: 2, code: 'TRA', name: 'Transport Allowance', type: 'Fixed', taxable: false, amount: 1500, status: 'Active' },
    { id: 3, code: 'MOB', name: 'Mobile Allowance', type: 'Fixed', taxable: false, amount: 500, status: 'Active' },
    { id: 4, code: 'MED', name: 'Medical Allowance', type: 'Variable', taxable: false, amount: 2000, status: 'Active' },
    { id: 5, code: 'EDU', name: 'Education Allowance', type: 'Variable', taxable: false, amount: 5000, status: 'Active' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Allowances</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage employee allowance types</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Allowance
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-emerald-600" />
              All Allowances
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search allowances..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default Amount</TableHead>
                <TableHead>Taxable</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allowances.map((allowance) => (
                <TableRow key={allowance.id}>
                  <TableCell className="font-mono font-medium">{allowance.code}</TableCell>
                  <TableCell className="font-medium">{allowance.name}</TableCell>
                  <TableCell><Badge variant="outline">{allowance.type}</Badge></TableCell>
                  <TableCell className="font-semibold">AED {allowance.amount.toLocaleString()}</TableCell>
                  <TableCell>{allowance.taxable ? <Badge className="bg-red-100 text-red-800">Yes</Badge> : <Badge variant="secondary">No</Badge>}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{allowance.status}</Badge>
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
