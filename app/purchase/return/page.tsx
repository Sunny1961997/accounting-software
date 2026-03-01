'use client';

import { redirect } from 'next/navigation';

export default function PurchaseReturnRedirect() {
  redirect('/dashboard/purchase/returns');
}
