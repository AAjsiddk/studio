"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Globe, Clipboard, Check } from 'lucide-react';

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
    <Card className="flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{link.title}</CardTitle>
        <CardDescription className="pt-2">{link.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col sm:flex-row gap-3">
        <Button asChild className="w-full sm:w-auto flex-grow">
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <Globe className="ml-2 h-4 w-4" />
            افتح الرابط
          </a>
        </Button>
        <Button
          onClick={handleCopy}
          variant="secondary"
          className="w-full sm:w-auto flex-grow"
          disabled={isCopied}
        >
          {isCopied ? (
            <>
              <Check className="ml-2 h-4 w-4" />
              تم النسخ
            </>
          ) : (
            <>
              <Clipboard className="ml-2 h-4 w-4" />
              انسخ الرابط
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
