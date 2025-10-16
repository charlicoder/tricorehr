'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Banknote, Plus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function BanksPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const banks = [
    { id: 1, code: 'ADCB', name: 'Abu Dhabi Commercial Bank', swiftCode: 'ADCBAEAA', country: 'UAE', status: 'Active' },
    { id: 2, code: 'ENBD', name: 'Emirates NBD', swiftCode: 'EBILAEAD', country: 'UAE', status: 'Active' },
    { id: 3, code: 'FAB', name: 'First Abu Dhabi Bank', swiftCode: 'NBADAEAA', country: 'UAE', status: 'Active' },
    { id: 4, code: 'MASHREQ', name: 'Mashreq Bank', swiftCode: 'BOMLAEAD', country: 'UAE', status: 'Active' },
    { id: 5, code: 'DIB', name: 'Dubai Islamic Bank', swiftCode: 'DUIBAEAD', country: 'UAE', status: 'Active' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Banks</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage bank master data</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Bank
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Banknote className="h-5 w-5 text-emerald-600" />
              All Banks
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search banks..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Bank Name</TableHead>
                <TableHead>SWIFT Code</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {banks.map((bank) => (
                <TableRow key={bank.id}>
                  <TableCell className="font-mono font-medium">{bank.code}</TableCell>
                  <TableCell className="font-medium">{bank.name}</TableCell>
                  <TableCell className="font-mono text-sm">{bank.swiftCode}</TableCell>
                  <TableCell>{bank.country}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{bank.status}</Badge>
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
