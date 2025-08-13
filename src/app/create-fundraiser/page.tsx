import CreateFundraiserForm from '@/components/CreateFundraiserForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CreateFundraiserPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <CreateFundraiserForm />
      </main>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Create a Fundraiser | Thrive Women',
  description: 'Start your fundraising campaign to support women empowerment initiatives',
};