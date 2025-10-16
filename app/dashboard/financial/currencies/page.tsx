'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Plus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function CurrenciesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const currencies = [
    { id: 1, code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', exchangeRate: 1.00, isDefault: true, status: 'Active' },
    { id: 2, code: 'USD', name: 'US Dollar', symbol: '$', exchangeRate: 0.27, isDefault: false, status: 'Active' },
    { id: 3, code: 'EUR', name: 'Euro', symbol: '€', exchangeRate: 0.25, isDefault: false, status: 'Active' },
    { id: 4, code: 'GBP', name: 'British Pound', symbol: '£', exchangeRate: 0.21, isDefault: false, status: 'Active' },
    { id: 5, code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س', exchangeRate: 1.02, isDefault: false, status: 'Active' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Currencies</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage currency exchange rates</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Currency
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-emerald-600" />
              All Currencies
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search currencies..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead>Exchange Rate</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currencies.map((currency) => (
                <TableRow key={currency.id}>
                  <TableCell className="font-mono font-medium">{currency.code}</TableCell>
                  <TableCell className="font-medium">{currency.name}</TableCell>
                  <TableCell className="text-lg">{currency.symbol}</TableCell>
                  <TableCell className="font-semibold">{currency.exchangeRate.toFixed(2)}</TableCell>
                  <TableCell>{currency.isDefault ? <Badge className="bg-blue-100 text-blue-800">Yes</Badge> : <Badge variant="secondary">No</Badge>}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{currency.status}</Badge>
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
