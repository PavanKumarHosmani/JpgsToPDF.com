'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GoogleAnalytics({ measurementId }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) return;

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', measurementId, { page_path: pathname });
  }, [pathname, measurementId]);

  return null;
}
