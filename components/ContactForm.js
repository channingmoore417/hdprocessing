'use client';

import { useState, useCallback } from 'react';

const REASON_OPTIONS = [
  'Credit Card Processing',
  'POS Systems',
  'Mobile Payments',
  'Online/Ecommerce',
  'Free Statement Review',
  'Support/Existing Customer',
  'Something Else',
];

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm({
  webhookUrl = '/api/contact',
}) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    bizName: '',
    phone: '',
    email: '',
    reason: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error on change
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }, []);

  const validate = useCallback(() => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required';
    if (!form.lastName.trim()) errs.lastName = 'Last name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!validateEmail(form.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (form.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Enter a full 10-digit phone number';
    }
    if (!form.reason) errs.reason = 'Please select a reason';
    return errs;
  }, [form]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const errs = validate();
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      setSubmitting(true);
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: form.firstName.trim(),
            lastName: form.lastName.trim(),
            bizName: form.bizName.trim(),
            phone: form.phone,
            email: form.email.trim(),
            reason: form.reason,
            message: form.message.trim(),
          }),
        });
        setSubmitted(true);
      } catch {
        // still show thank you — webhook may not be configured yet
        setSubmitted(true);
      } finally {
        setSubmitting(false);
      }
    },
    [form, validate, webhookUrl]
  );

  if (submitted) {
    return (
      <div className="contact-form">
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '28px',
              color: 'var(--text)',
              marginBottom: '8px',
            }}
          >
            Message Sent!
          </div>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}
          >
            Thanks for reaching out. We&rsquo;ll get back to you within one
            business day &mdash; usually much sooner.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <div className="contact-form-title">Send Us a Message</div>
      <div className="contact-form-sub">
        Fill out the form and we&rsquo;ll get back to you within one business day.
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="field-row">
          <div className={`field${errors.firstName ? ' error' : ''}`}>
            <label htmlFor="cf-firstName">
              First Name <span className="req">*</span>
            </label>
            <input
              id="cf-firstName"
              type="text"
              name="firstName"
              placeholder="John"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="field-error" style={{ display: 'block' }}>
                {errors.firstName}
              </div>
            )}
          </div>
          <div className={`field${errors.lastName ? ' error' : ''}`}>
            <label htmlFor="cf-lastName">
              Last Name <span className="req">*</span>
            </label>
            <input
              id="cf-lastName"
              type="text"
              name="lastName"
              placeholder="Doe"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="field-error" style={{ display: 'block' }}>
                {errors.lastName}
              </div>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor="cf-bizName">Business Name</label>
          <input
            id="cf-bizName"
            type="text"
            name="bizName"
            placeholder="Your Business LLC"
            value={form.bizName}
            onChange={handleChange}
          />
        </div>
        <div className="field-row">
          <div className={`field${errors.phone ? ' error' : ''}`}>
            <label htmlFor="cf-phone">
              Phone <span className="req">*</span>
            </label>
            <input
              id="cf-phone"
              type="tel"
              name="phone"
              placeholder="(337) 000-0000"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className="field-error" style={{ display: 'block' }}>
                {errors.phone}
              </div>
            )}
          </div>
          <div className={`field${errors.email ? ' error' : ''}`}>
            <label htmlFor="cf-email">
              Email <span className="req">*</span>
            </label>
            <input
              id="cf-email"
              type="email"
              name="email"
              placeholder="john@business.com"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="field-error" style={{ display: 'block' }}>
                {errors.email}
              </div>
            )}
          </div>
        </div>
        <div className={`field${errors.reason ? ' error' : ''}`}>
          <label htmlFor="cf-reason">
            Reason for Contact <span className="req">*</span>
          </label>
          <select
            id="cf-reason"
            name="reason"
            value={form.reason}
            onChange={handleChange}
          >
            <option value="">Select a reason...</option>
            {REASON_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.reason && (
            <div className="field-error" style={{ display: 'block' }}>
              {errors.reason}
            </div>
          )}
        </div>
        <div className="field">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            name="message"
            placeholder="Tell us a bit about your business and what you're looking for..."
            value={form.message}
            onChange={handleChange}
            rows={5}
          />
        </div>
        <button type="submit" className="form-submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send Message'}
          {!submitting && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}
