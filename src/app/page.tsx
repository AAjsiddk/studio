import { LinkCard } from '@/components/link-card';

const links = [
  {
    id: 1,
    title: 'رابط تحميل الملف',
    url: 'https://drive.google.com/file/d/1Cs63Cze5ApCqNfeWRZ_pyM_xIZoB87zC/view?usp=drivesdk',
    description: 'ملف PDF يحتوي على معلومات هامة.',
  },
  {
    id: 2,
    title: 'رابط تحميل التطبيق',
    url: 'https://play.google.com/store/apps/details?id=com.topstack.kilonotes.pad',
    description: 'تطبيق Kilonotes لتدوين الملاحظات.',
  },
  {
    id: 3,
    title: 'موقع نَجَاتُكَ بِيَدِكَ',
    url: 'https://remembrances-1.vercel.app/',
    description: 'موقع للأذكار والمواظبة على الطاعات.',
  },
  {
    id: 4,
    title: 'رابط بوت التواصل',
    url: 'https://t.me/Ramadan000_bot',
    description: 'بوت للتواصل عبر تيليجرام.',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 lg:p-24">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-foreground">
          Link Hub
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          جميع روابطك الهامة في مكان واحد
        </p>
      </header>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </main>
  );
}
