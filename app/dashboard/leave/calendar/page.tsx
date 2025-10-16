'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Download } from 'lucide-react';

export default function LeaveCalendarPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Leave Calendar</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Visual calendar view of employee leaves</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
          <Download className="h-4 w-4 mr-2" />
          Export Calendar
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-600" />
            Leave Calendar View
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Calendar view functionality will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
