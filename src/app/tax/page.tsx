'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui';

interface TaxRecord {
  date: string;
  shares: number;
  distribution: number;
  exchangeRate: number;
  withholdingTax: number;
  netIncome: number;
}

export default function TaxPage() {
  const [records, setRecords] = useState<TaxRecord[]>([]);
  const [formData, setFormData] = useState({
    date: '',
    shares: '',
    distribution: '',
    exchangeRate: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateTax = () => {
    const shares = parseFloat(formData.shares);
    const distribution = parseFloat(formData.distribution);
    const exchangeRate = parseFloat(formData.exchangeRate);

    if (isNaN(shares) || isNaN(distribution) || isNaN(exchangeRate)) {
      alert('Please enter valid numbers for all fields');
      return;
    }

    const grossIncome = shares * distribution;
    const withholdingTax = grossIncome * 0.15; // 15% withholding tax
    const netIncome = grossIncome - withholdingTax;

    const newRecord: TaxRecord = {
      date: formData.date,
      shares,
      distribution,
      exchangeRate,
      withholdingTax,
      netIncome,
    };

    setRecords(prev => [...prev, newRecord]);
    setFormData({
      date: '',
      shares: '',
      distribution: '',
      exchangeRate: '',
    });
  };

  const exportToCSV = () => {
    if (records.length === 0) {
      alert('No records to export');
      return;
    }

    const headers = ['Date', 'Shares', 'Distribution (USD)', 'Exchange Rate', 'Withholding Tax (USD)', 'Net Income (USD)'];
    const csvContent = [
      headers.join(','),
      ...records.map(record => [
        record.date,
        record.shares,
        record.distribution.toFixed(2),
        record.exchangeRate.toFixed(4),
        record.withholdingTax.toFixed(2),
        record.netIncome.toFixed(2)
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `tax-records-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Tax Tracking</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Tax Record</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="shares">Number of Shares</Label>
              <Input
                type="number"
                id="shares"
                name="shares"
                value={formData.shares}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="distribution">Monthly Distribution (USD)</Label>
              <Input
                type="number"
                id="distribution"
                name="distribution"
                value={formData.distribution}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="exchangeRate">EUR/USD Exchange Rate</Label>
              <Input
                type="number"
                id="exchangeRate"
                name="exchangeRate"
                value={formData.exchangeRate}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <Button className="mt-4" onClick={calculateTax}>
            Calculate Tax
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Tax Records</CardTitle>
          <Button onClick={exportToCSV} variant="outline">
            Export to CSV
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Shares</TableHead>
                <TableHead>Distribution (USD)</TableHead>
                <TableHead>Exchange Rate</TableHead>
                <TableHead>Withholding Tax (USD)</TableHead>
                <TableHead>Net Income (USD)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {records.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.shares}</TableCell>
                  <TableCell>{record.distribution.toFixed(2)}</TableCell>
                  <TableCell>{record.exchangeRate.toFixed(4)}</TableCell>
                  <TableCell>{record.withholdingTax.toFixed(2)}</TableCell>
                  <TableCell>{record.netIncome.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 