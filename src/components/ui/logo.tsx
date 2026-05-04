import { Package } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)} aria-label="Back to homepage">
      <Package className="h-7 w-7 text-primary" />
      <span className="font-extrabold text-2xl tracking-tight text-primary">
        bundlab.org
      </span>
    </Link>
  );
}
