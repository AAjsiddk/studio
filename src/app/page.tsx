import { LinkCard } from '@/components/link-card';
import { ShareButton } from '@/components/share-button';

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
    <main className="container relative">
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-4 py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-12">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          دفتر رمضان
        </h1>
        <p className="max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
          أهلاً بك، اختر الرابط المناسب لك 👋
        </p>
        <div className="flex items-center space-x-4 space-x-reverse">
          <ShareButton />
        </div>
      </section>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
      <footer className="pb-8 text-center text-sm text-muted-foreground">
        <p>الرجاء الدعاء لكل من قائم على هذا العمل.</p>
      </footer>
    </main>
  );
}
