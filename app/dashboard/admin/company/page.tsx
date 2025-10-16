'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Building2, Phone, Mail, Globe, MapPin, Upload, RotateCcw, Save } from 'lucide-react';
import { toast } from 'sonner';

export default function CompanySetupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success('Company details saved successfully');
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    toast.info('Form reset');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Company Setup</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Configure your company information and banking details
          </p>
        </div>
      </div>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="details">DETAILS</TabsTrigger>
          <TabsTrigger value="additional">ADDITIONAL INFORMATION</TabsTrigger>
          <TabsTrigger value="signatures">SIGNATORIES</TabsTrigger>
          <TabsTrigger value="banks">OTHER BANKS</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6" />
              <div>
                <h2 className="text-lg font-semibold">Company Information</h2>
                <p className="text-sm text-white/90">Basic company details and contact information</p>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyNameEn" className="text-sm font-medium">
                    Company Name (English)
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="companyNameEn"
                      placeholder="Enter company name"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyNameAr" className="text-sm font-medium">
                    Company Name (Arabic)
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="companyNameAr"
                      placeholder="اسم الشركة"
                      className="pl-10"
                      dir="rtl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="addressEn" className="text-sm font-medium">
                    Address (English)
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id="addressEn"
                      placeholder="Enter company address"
                      className="pl-10 min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="addressAr" className="text-sm font-medium">
                    Address (Arabic)
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id="addressAr"
                      placeholder="عنوان الشركة"
                      className="pr-10 min-h-[100px]"
                      dir="rtl"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="country" className="text-sm font-medium">
                    Country
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uae">United Arab Emirates</SelectItem>
                      <SelectItem value="sa">Saudi Arabia</SelectItem>
                      <SelectItem value="qa">Qatar</SelectItem>
                      <SelectItem value="kw">Kuwait</SelectItem>
                      <SelectItem value="bh">Bahrain</SelectItem>
                      <SelectItem value="om">Oman</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              <div>
                <h2 className="text-lg font-semibold">Contact Information</h2>
                <p className="text-sm text-white/90">Phone numbers, email, and web presence</p>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="primaryPhone" className="text-sm font-medium">
                    Primary Phone
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="primaryPhone"
                      placeholder="e.g. 0097141234567"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="secondaryPhone" className="text-sm font-medium">
                    Secondary Phone
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="secondaryPhone"
                      placeholder="Optional"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="e.g. info@company.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="text-sm font-medium">
                    Website
                  </Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="website"
                      placeholder="Optional"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="poBox" className="text-sm font-medium">
                    P.O. Box
                  </Label>
                  <Input id="poBox" placeholder="P.O. Box number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-sm font-medium">
                    Zip Code
                  </Label>
                  <Input id="zipCode" placeholder="Postal code" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              onClick={handleReset}
              className="px-6"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              RESET FORM
            </Button>
            <Button
              onClick={handleSave}
              disabled={isLoading}
              className="px-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? 'SAVING...' : 'SAVE CHANGES'}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="additional">
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Additional company information will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="signatures">
          <Card>
            <CardHeader>
              <CardTitle>Digital Signatures</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Upload and manage authorized signatory signatures here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="banks">
          <Card>
            <CardHeader>
              <CardTitle>Other Bank Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Manage additional bank accounts for the company.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
