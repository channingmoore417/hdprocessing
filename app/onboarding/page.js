import OnboardingForm from '@/components/OnboardingForm';
import './onboarding.css';

export const metadata = {
  title: 'Pre-Application — New Client',
  description:
    "Complete your merchant services pre-application with HD Processing. Lafayette, Louisiana's locally owned payment processing company.",
  alternates: { canonical: '/onboarding' },
  robots: { index: false, follow: false },
};

export default function OnboardingPage() {
  return (
    <div className="onboarding-page">
      <section className="ob-hero">
        <div className="ob-hero-inner">
          <div className="ob-hero-eyebrow">Merchant Services Application</div>
          <h1>Pre-Application &mdash; New Client</h1>
          <p>
            Complete the sections below to begin your merchant account setup.
            This information is used to prepare your DocuSign merchant
            application, which will be sent to you for review.
          </p>
        </div>
      </section>

      <OnboardingForm />

      <div className="ob-disclaimer">
        Your information is encrypted and used solely for preparing your
        merchant application. HD Processing &bull; 1027 Johnston St, Lafayette,
        LA 70501 &bull; <a href="mailto:info@hdprocessing.com">info@hdprocessing.com</a>
      </div>
    </div>
  );
}
