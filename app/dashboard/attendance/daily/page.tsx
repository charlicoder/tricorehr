'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Clock, Download, Calendar } from 'lucide-react';

export default function DailyAttendancePage() {
  const attendance = [
    { id: 1, empId: 'EMP001', name: 'Ahmed Al Mansoori', checkIn: '08:55', checkOut: '17:30', hours: 8.5, status: 'Present' },
    { id: 2, empId: 'EMP002', name: 'Sara Abdullah', checkIn: '09:00', checkOut: '18:00', hours: 9, status: 'Present' },
    { id: 3, empId: 'EMP003', name: 'Mohammed Ali', checkIn: '09:15', checkOut: '17:45', hours: 8.5, status: 'Late' },
    { id: 4, empId: 'EMP004', name: 'Fatima Hassan', checkIn: '-', checkOut: '-', hours: 0, status: 'Absent' },
    { id: 5, empId: 'EMP005', name: 'Khalid Ibrahim', checkIn: '-', checkOut: '-', hours: 0, status: 'On Leave' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Daily Attendance</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Track employee attendance for today</p>
        </div>
        <div className="flex gap-3">
          <Input type="date" className="w-48" defaultValue={new Date().toISOString().split('T')[0]} />
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-emerald-600" />
            Today's Attendance - {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendance.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-mono">{record.empId}</TableCell>
                  <TableCell className="font-medium">{record.name}</TableCell>
                  <TableCell className="font-mono">{record.checkIn}</TableCell>
                  <TableCell className="font-mono">{record.checkOut}</TableCell>
                  <TableCell className="font-semibold">{record.hours}h</TableCell>
                  <TableCell>
                    <Badge className={
                      record.status === 'Present' ? 'bg-green-100 text-green-800' :
                      record.status === 'Late' ? 'bg-yellow-100 text-yellow-800' :
                      record.status === 'Absent' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }>
                      {record.status}
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
