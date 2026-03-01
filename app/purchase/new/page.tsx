'use client';

import { redirect } from 'next/navigation';

export default function PurchaseNewRedirect() {
  redirect('/dashboard/purchase/new');
}
