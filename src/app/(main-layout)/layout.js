import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';

export default function RootLayout({ children }) {
   return (
      <>
         <Navbar />
         <main className='h-screen'>{children}</main>
         <Footer />
      </>
   );
}
