'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, Plus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function NationalitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const nationalities = [
    { id: 1, code: 'UAE', nameEn: 'Emirati', nameAr: 'إماراتي', country: 'United Arab Emirates' },
    { id: 2, code: 'IND', nameEn: 'Indian', nameAr: 'هندي', country: 'India' },
    { id: 3, code: 'PAK', nameEn: 'Pakistani', nameAr: 'باكستاني', country: 'Pakistan' },
    { id: 4, code: 'EGY', nameEn: 'Egyptian', nameAr: 'مصري', country: 'Egypt' },
    { id: 5, code: 'PHL', nameEn: 'Filipino', nameAr: 'فلبيني', country: 'Philippines' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Nationalities</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage nationality master data</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Nationality
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-600" />
              All Nationalities
            </CardTitle>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search nationalities..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Name (English)</TableHead>
                <TableHead>Name (Arabic)</TableHead>
                <TableHead>Country</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nationalities.map((nationality) => (
                <TableRow key={nationality.id}>
                  <TableCell className="font-mono font-medium">{nationality.code}</TableCell>
                  <TableCell className="font-medium">{nationality.nameEn}</TableCell>
                  <TableCell dir="rtl" className="font-medium">{nationality.nameAr}</TableCell>
                  <TableCell>{nationality.country}</TableCell>
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
