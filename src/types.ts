export interface Item {
  id: string;
  code: string;
  name: string;
  stock: number;
  dateAdded: string;
  timeAdded: string;
}

export type IncomingSource = 'EXPEDITION' | 'RETURN';

export interface IncomingItem {
  id: string;
  itemId: string;
  quantity: number;
  source: IncomingSource;
  expeditionNumber?: string;
  returnReason?: string;
  date: string;
  time: string;
}

export interface OutgoingItem {
  id: string;
  itemId: string;
  quantity: number;
  date: string;
  time: string;
}

export interface ExcelRow {
  'Kode Barang': string;
  'Nama Barang': string;
  'Jumlah': number;
}

export type ReportPeriod = 'WEEKLY' | 'MONTHLY';

export interface SalesReport {
  itemId: string;
  totalSales: number;
  period: string;
}

export interface User {
  username: string;
  password?: string;
}