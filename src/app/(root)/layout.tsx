import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <Navbar />
      <main className='relative-overflow-hidden'>{children}</main>
      <Footer />
    </div>
  );
}
