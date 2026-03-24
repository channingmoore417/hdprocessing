'use client';

import { useState } from 'react';

const ISSUE_TYPES = [
  'Terminal / POS Not Working',
  'Batching / Settlement Issue',
  'Charge Dispute / Chargeback',
  'Account / Login Help',
  'Billing Question',
  'Rate Review Request',
  'Equipment Request',
  'Other',
];

const PRIORITIES = [
  { value: 'Urgent', className: 'high' },
  { value: 'High', className: 'high' },
  { value: 'Normal', className: '' },
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

export default function SupportForm({ webhookUrl = 'YOUR_GHL_WEBHOOK_URL' }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    bizName: '',
    phone: '',
    email: '',
    issueType: '',
    priority: 'Normal',
    message: '',
  });

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required';
    if (!form.lastName.trim()) e.lastName = 'Last name is required';
    if (!form.bizName.trim()) e.bizName = 'Business name is required';
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) e.phone = 'Enter a valid 10-digit phone number';
    if (!isValidEmail(form.email)) e.email = 'Enter a valid email address';
    if (!form.issueType) e.issueType = 'Please select an issue type';
    if (!form.message.trim()) e.message = 'Please describe your issue';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          phone: form.phone.replace(/\D/g, ''),
        }),
      });
    } catch {
      // fail silently
    }

    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="ty-state visible">
        <div className="ty-wrap">
          <div className="ty-icon">&#10003;</div>
          <h3 className="ty-title" style={{ color: 'var(--white)' }}>Ticket Submitted!</h3>
          <p className="ty-sub" style={{ color: 'rgba(255,255,255,.45)' }}>
            Our support team will review your request and get back to you
            within one business day. For urgent issues, call us directly at{' '}
            <a href="tel:+13373668550" style={{ color: 'var(--gold)', fontWeight: 600 }}>
              337.366.8550
            </a>.
          </p>
          <a href="/" className="btn-gold">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <form className="form-dark" onSubmit={handleSubmit} noValidate>
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
        <label>Business Name <span className="req">*</span></label>
        <input
          type="text"
          placeholder="Acme Restaurant"
          value={form.bizName}
          onChange={(e) => update('bizName', e.target.value)}
        />
        {errors.bizName && <div className="field-error" style={{ display: 'block' }}>{errors.bizName}</div>}
      </div>

      <div className="field-row">
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
      </div>

      <div className="field">
        <label>Issue Type <span className="req">*</span></label>
        <select value={form.issueType} onChange={(e) => update('issueType', e.target.value)}>
          <option value="">Select issue type</option>
          {ISSUE_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.issueType && <div className="field-error" style={{ display: 'block' }}>{errors.issueType}</div>}
      </div>

      <div className="field">
        <label>Priority</label>
        <div className="priority-select">
          {PRIORITIES.map((p) => (
            <button
              key={p.value}
              type="button"
              className={`priority-option${p.className ? ` ${p.className}` : ''}${form.priority === p.value ? ' selected' : ''}`}
              onClick={() => update('priority', p.value)}
            >
              {p.value}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Describe Your Issue <span className="req">*</span></label>
        <textarea
          placeholder="Please describe the issue you're experiencing..."
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          rows={5}
        />
        {errors.message && <div className="field-error" style={{ display: 'block' }}>{errors.message}</div>}
      </div>

      <button type="submit" className="form-submit" disabled={sending}>
        {sending ? 'Submitting...' : 'Submit Ticket'} &rarr;
      </button>

      <p className="trust-note" style={{ color: 'rgba(255,255,255,.3)' }}>
        We typically respond within one business day. For urgent terminal issues, call us directly.
      </p>
    </form>
  );
}
