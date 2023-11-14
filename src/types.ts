export interface ThridayApi {
  status: number;
  successful: boolean;
  errorMessage: string;
  navigateTo: string;
  data: Data;
}
export interface Data {
  transactions?: TransactionsEntity[] | null;
}
export interface TransactionsEntity {
  id: number;
  accountUuid: string;
  accountId: string;
  transEnrichmentState: string;
  transactionId: string;
  transactionType: string;
  date: string;
  transactionTitle: string;
  status: string;
  bkStatus: string;
  description: string;
  referenceClean: string;
  cashflow: string;
  amount: string;
  balanceAmount?: null;
  postedDate?: string | null;
  logoUrl: string;
  receiptName?: null;
  receiptUrl?: null;
  receiptID?: null;
  attachedFileName?: null;
  gst: string;
  merchantPresence?: string | null;
  category: string;
  shortCategory: string;
  categoryId: string;
  merchantName?: string | null;
  merchantNameAlias?: string | null;
  addressShort?: null;
  addressLong?: string | null;
  suburb: string;
  longitude?: number | null;
  latitude?: number | null;
  phone?: string | null;
  email?: string | null;
  webSite?: string | null;
  acn?: string | null;
  abn?: string | null;
  originalCofACode: number;
  currentCofACode: number;
  chartOfAccount?: null;
  salesTaxSource: string;
  notes?: null;
  businessUsePercentage: number;
  tags?: (string | null)[] | null;
  attachment?: null[] | null;
}

export enum TransactionTypeEnum {
  Payment = 'PAYMENT',
  TransferIncoming = 'TRANSFER_INCOMING',
  TransferOutgoing = 'TRANSFER_OUTGOING',
}
