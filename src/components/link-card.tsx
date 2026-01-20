"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Globe, Clipboard, Check, Link as LinkIcon } from 'lucide-react';

type LinkProps = {
  link: {
    id: number;
    title: string;
    url: string;
    description: string;
  };
};

export function LinkCard({ link }: LinkProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link.url).then(
      () => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2500);
      },
      (err) => {
        console.error('Failed to copy: ', err);
      }
    );
  };

  return (
    <Card className="flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
       <CardHeader>
        <div className='flex flex-row items-center gap-4'>
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <LinkIcon className="h-6 w-6" />
            </div>
            <div className='flex-1'>
                <CardTitle className="font-headline text-lg font-bold">{link.title}</CardTitle>
                <CardDescription className="pt-1 text-sm">{link.description}</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardFooter className="flex gap-3 bg-muted/50 p-4">
        <Button asChild className="flex-1">
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <Globe className="ml-2" />
            افتح الرابط
          </a>
        </Button>
        <Button
          onClick={handleCopy}
          variant="outline"
          size="icon"
          aria-label="انسخ الرابط"
          disabled={isCopied}
        >
          {isCopied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
}
