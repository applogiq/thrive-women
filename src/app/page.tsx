import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import Causes from '@/components/Causes';
import Fundraising from '@/components/Fundraising';
import FinalEmpowerment from '@/components/FinalEmpowerment';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Statistics />
      <Testimonials />
      <Causes />
      <Fundraising />
      <FinalEmpowerment />
      <Footer />
    </div>
  );
}
