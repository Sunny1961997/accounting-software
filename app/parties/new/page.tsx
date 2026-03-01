'use client';

import { redirect } from 'next/navigation';

export default function PartiesNewRedirect() {
  redirect('/dashboard/parties/new');
}
