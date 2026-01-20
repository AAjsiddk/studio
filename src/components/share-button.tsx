"use client";

import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Share2, Copy, Check, Send } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );

export function ShareButton() {
  const [isCopied, setIsCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    // This hook ensures the code runs only on the client, avoiding hydration errors.
    setPageUrl(window.location.href);
  }, []);

  const shareText = "اكتشف هذه الروابط المفيدة! ونسألكم الدعاء لكل من ساهم في هذا العمل.";
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(shareText);

  const handleCopy = () => {
    if (!pageUrl) return;
    navigator.clipboard.writeText(pageUrl).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };
  
  if (!pageUrl) {
    return null;
  }

  const whatsappUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
  const telegramUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Share2 className="ml-2 h-4 w-4" />
          مشاركة الصفحة
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
            <WhatsAppIcon className="h-4 w-4" />
            واتساب
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
            <Send className="h-4 w-4" />
            تليجرام
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopy} className="flex items-center gap-2 cursor-pointer">
          {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span>{isCopied ? 'تم النسخ!' : 'نسخ الرابط'}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
