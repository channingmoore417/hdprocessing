'use client';

import { useState } from 'react';

const INDUSTRIES = [
  'Restaurant / Food Service',
  'Retail / Boutique',
  'Health & Wellness',
  'Professional Services',
  'Home Services / Contractors',
  'Automotive',
  'Beauty / Salon / Barber',
  'Nonprofit / Church',
  'E-commerce / Online',
  'Other',
];

const BUSINESS_TYPES = [
  'Sole Proprietor',
  'LLC',
  'Corporation',
  'Partnership',
  'Nonprofit',
  'Other',
];

const VOLUME_OPTIONS = [
  { value: 'Under $5K', label: 'Getting started' },
  { value: '$5K – $15K', label: 'Growing business' },
  { value: '$15K – $50K', label: 'Established' },
  { value: '$50K+', label: 'High volume' },
];

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function QuoteForm({ webhookUrl = 'YOUR_GHL_WEBHOOK_URL' }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    businessName: '',
    industry: '',
    businessType: '',
    monthlyVolume: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    smsConsent: false,
  });

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  function validateStep1() {
    const e = {};
    if (!form.businessName.trim()) e.businessName = 'Business name is required';
    if (!form.industry) e.industry = 'Please select an industry';
    if (!form.businessType) e.businessType = 'Please select a business type';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2() {
    const e = {};
    if (!form.monthlyVolume) e.monthlyVolume = 'Please select your monthly volume';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep3() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required';
    if (!form.lastName.trim()) e.lastName = 'Last name is required';
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) e.phone = 'Enter a valid 10-digit phone number';
    if (!isValidEmail(form.email)) e.email = 'Enter a valid email address';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  }

  function back() {
    if (step > 1) setStep(step - 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateStep3()) return;
    setSending(true);

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: form.businessName,
          industry: form.industry,
          businessType: form.businessType,
          monthlyVolume: form.monthlyVolume,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone.replace(/\D/g, ''),
          email: form.email,
          smsConsent: form.smsConsent,
        }),
      });
    } catch {
      // fail silently — still show thank you
    }

    setSending(false);
    setSubmitted(true);
  }

  /* ---- Thank You ---- */
  if (submitted) {
    return (
      <div className="ty-state visible">
        <div className="ty-wrap">
          <div className="ty-icon">&#10003;</div>
          <h3 className="ty-title">We Got Your Quote Request!</h3>
          <p className="ty-sub">
            A payments specialist will reach out within one business day with a
            custom rate comparison. Check your inbox (and spam folder, just in
            case).
          </p>
          <a href="/" className="btn-gold">Back to Home</a>
        </div>
      </div>
    );
  }

  /* ---- Step labels ---- */
  const stepLabels = ['Business', 'Volume', 'Contact'];

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Progress */}
      <div className="progress-wrap">
        <div className="progress-steps">
          {stepLabels.map((label, i) => {
            const num = i + 1;
            let cls = 'progress-step';
            if (num < step) cls += ' done';
            else if (num === step) cls += ' active';
            return (
              <div key={num} className={cls}>
                <div className="step-circle">{num < step ? '\u2713' : num}</div>
                <span className="progress-step-label">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step 1 — Business Info */}
      {step === 1 && (
        <div>
          <div className="field">
            <label>Business Name <span className="req">*</span></label>
            <input
              type="text"
              placeholder="e.g. Acme Restaurant"
              value={form.businessName}
              onChange={(e) => update('businessName', e.target.value)}
            />
            {errors.businessName && <div className="field-error" style={{ display: 'block' }}>{errors.businessName}</div>}
          </div>

          <div className="field">
            <label>Industry <span className="req">*</span></label>
            <select value={form.industry} onChange={(e) => update('industry', e.target.value)}>
              <option value="">Select your industry</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
            {errors.industry && <div className="field-error" style={{ display: 'block' }}>{errors.industry}</div>}
          </div>

          <div className="field">
            <label>Business Type <span className="req">*</span></label>
            <select value={form.businessType} onChange={(e) => update('businessType', e.target.value)}>
              <option value="">Select business type</option>
              {BUSINESS_TYPES.map((bt) => (
                <option key={bt} value={bt}>{bt}</option>
              ))}
            </select>
            {errors.businessType && <div className="field-error" style={{ display: 'block' }}>{errors.businessType}</div>}
          </div>

          <div className="form-nav">
            <span />
            <button type="button" className="form-nav-next" onClick={next}>
              Continue &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Step 2 — Monthly Volume */}
      {step === 2 && (
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: 4, color: 'var(--text)' }}>
            Estimated Monthly Card Volume
          </h3>
          <p style={{ fontSize: '13.5px', fontWeight: 300, color: 'var(--muted)', marginBottom: 20 }}>
            Select the range that best describes your business.
          </p>

          <div className="volume-grid">
            {VOLUME_OPTIONS.map((opt) => (
              <div
                key={opt.value}
                className={`volume-tile${form.monthlyVolume === opt.value ? ' selected' : ''}`}
                onClick={() => update('monthlyVolume', opt.value)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') update('monthlyVolume', opt.value); }}
              >
                <div className="volume-tile-range">{opt.value}</div>
                <div className="volume-tile-label">{opt.label}</div>
              </div>
            ))}
          </div>
          {errors.monthlyVolume && (
            <div className="field-error" style={{ display: 'block', marginTop: 8 }}>{errors.monthlyVolume}</div>
          )}

          <div className="form-nav">
            <button type="button" className="form-nav-back" onClick={back}>
              &larr; Back
            </button>
            <button type="button" className="form-nav-next" onClick={next}>
              Continue &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Contact Info */}
      {step === 3 && (
        <div>
          <div className="field-row">
            <div className="field">
              <label>First Name <span className="req">*</span></label>
              <input
                type="text"
                placeholder="John"
                value={form.firstName}
                onChange={(e) => update('firstName', e.target.value)}
              />
              {errors.firstName && <div className="field-error" style={{ display: 'block' }}>{errors.firstName}</div>}
            </div>
            <div className="field">
              <label>Last Name <span className="req">*</span></label>
              <input
                type="text"
                placeholder="Doe"
                value={form.lastName}
                onChange={(e) => update('lastName', e.target.value)}
              />
              {errors.lastName && <div className="field-error" style={{ display: 'block' }}>{errors.lastName}</div>}
            </div>
          </div>

          <div className="field">
            <label>Phone <span className="req">*</span></label>
            <input
              type="tel"
              placeholder="(337) 555-1234"
              value={form.phone}
              onChange={(e) => update('phone', formatPhone(e.target.value))}
            />
            {errors.phone && <div className="field-error" style={{ display: 'block' }}>{errors.phone}</div>}
          </div>

          <div className="field">
            <label>Email <span className="req">*</span></label>
            <input
              type="email"
              placeholder="john@business.com"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
            />
            {errors.email && <div className="field-error" style={{ display: 'block' }}>{errors.email}</div>}
          </div>

          {/* SMS / A2P Consent */}
          <div className="a2p-block">
            <div className="a2p-block-title">SMS Communication</div>
            <div className="a2p-check-row">
              <input
                type="checkbox"
                id="smsConsent"
                checked={form.smsConsent}
                onChange={(e) => update('smsConsent', e.target.checked)}
              />
              <label htmlFor="smsConsent">
                I agree to receive SMS messages from HD Processing regarding my quote request and account updates.
              </label>
            </div>
            <p className="a2p-legal">
              By checking the box above you consent to receive automated text messages from HD Processing at the phone number provided.
              Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for help.
              View our <a href="/privacy" style={{ color: 'var(--gold)' }}>Privacy Policy</a> and <a href="/terms" style={{ color: 'var(--gold)' }}>Terms of Service</a>.
            </p>
          </div>

          <div className="form-nav">
            <button type="button" className="form-nav-back" onClick={back}>
              &larr; Back
            </button>
            <button type="submit" className="form-nav-next" disabled={sending}>
              {sending ? 'Submitting...' : 'Get My Free Quote'}
            </button>
          </div>
        </div>
      )}

      {/* Trust Strip */}
      <div className="trust-strip">
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
          No obligation
        </div>
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          Free rate comparison
        </div>
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          Your data is secure
        </div>
      </div>
    </form>
  );
}
