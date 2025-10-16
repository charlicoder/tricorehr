'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Banknote, Play, Download, Calendar } from 'lucide-react';
import { toast } from 'sonner';

export default function ProcessPayrollPage() {
  const [isProcessing, setIsProcessing] = useState(false);

  const employees = [
    { id: 1, empId: 'EMP001', name: 'Ahmed Al Mansoori', basicSalary: 15000, allowances: 5000, deductions: 500, netSalary: 19500 },
    { id: 2, empId: 'EMP002', name: 'Sara Abdullah', basicSalary: 12000, allowances: 4000, deductions: 300, netSalary: 15700 },
    { id: 3, empId: 'EMP003', name: 'Mohammed Ali', basicSalary: 10000, allowances: 3500, deductions: 400, netSalary: 13100 },
    { id: 4, empId: 'EMP004', name: 'Fatima Hassan', basicSalary: 18000, allowances: 6000, deductions: 800, netSalary: 23200 },
    { id: 5, empId: 'EMP005', name: 'Khalid Ibrahim', basicSalary: 14000, allowances: 4500, deductions: 350, netSalary: 18150 },
  ];

  const handleProcessPayroll = () => {
    setIsProcessing(true);
    setTimeout(() => {
      toast.success('Payroll processed successfully!');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Process Payroll</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Calculate and process monthly payroll</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-600" />
            Payroll Period
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label>Month</Label>
              <Select defaultValue="10">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">January</SelectItem>
                  <SelectItem value="2">February</SelectItem>
                  <SelectItem value="3">March</SelectItem>
                  <SelectItem value="4">April</SelectItem>
                  <SelectItem value="5">May</SelectItem>
                  <SelectItem value="6">June</SelectItem>
                  <SelectItem value="7">July</SelectItem>
                  <SelectItem value="8">August</SelectItem>
                  <SelectItem value="9">September</SelectItem>
                  <SelectItem value="10">October</SelectItem>
                  <SelectItem value="11">November</SelectItem>
                  <SelectItem value="12">December</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Year</Label>
              <Select defaultValue="2024">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Payment Date</Label>
              <Input type="date" defaultValue="2024-10-30" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Banknote className="h-5 w-5 text-emerald-600" />
              Payroll Summary
            </CardTitle>
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button
                onClick={handleProcessPayroll}
                disabled={isProcessing}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              >
                <Play className="h-4 w-4 mr-2" />
                {isProcessing ? 'Processing...' : 'Process Payroll'}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Basic Salary</TableHead>
                <TableHead>Allowances</TableHead>
                <TableHead>Deductions</TableHead>
                <TableHead>Net Salary</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-mono">{employee.empId}</TableCell>
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell className="font-semibold">AED {employee.basicSalary.toLocaleString()}</TableCell>
                  <TableCell className="text-green-600">+{employee.allowances.toLocaleString()}</TableCell>
                  <TableCell className="text-red-600">-{employee.deductions.toLocaleString()}</TableCell>
                  <TableCell className="font-bold">AED {employee.netSalary.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Employees</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{employees.length}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Basic Salary</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  AED {employees.reduce((sum, emp) => sum + emp.basicSalary, 0).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Allowances</p>
                <p className="text-2xl font-bold text-green-600">
                  +{employees.reduce((sum, emp) => sum + emp.allowances, 0).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Net Payroll</p>
                <p className="text-2xl font-bold text-emerald-600">
                  AED {employees.reduce((sum, emp) => sum + emp.netSalary, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
