'use client';

import { useEffect, useRef, useState } from 'react';

const STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

const BUSINESS_STRUCTURES = [
  'Corporation',
  'LLC / LLP',
  'Sole Proprietor',
  'Partnership',
  'Non-Profit',
];

const TOTAL_STEPS = 5;

const STEP_LABELS = ['Personal', 'Business', 'Banking', 'Processing', 'Review'];

const INITIAL_FORM = {
  firstName: '', lastName: '', email: '', cellPhone: '', dob: '', ssn: '',
  homeStreet: '', homeCity: '', homeState: 'LA', homeZip: '',
  legalBusinessName: '', website: '', businessPhone: '', ein: '',
  businessStart: '', businessStructure: '',
  bizStreet: '', bizCity: '', bizState: 'LA', bizZip: '',
  dbaName: '', dbaStreet: '', dbaCity: '', dbaState: '', dbaZip: '',
  bankName: '', routingNumber: '', accountNumber: '',
  businessDescription: '', avgTicket: '', highTicket: '', monthlyVolume: '',
  additionalInfo: '',
  signature: '',
};

function formatPhone(v) {
  const d = v.replace(/\D/g, '').slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function formatSSN(v) {
  const d = v.replace(/\D/g, '').slice(0, 9);
  if (d.length < 4) return d;
  if (d.length < 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 5)}-${d.slice(5)}`;
}

function formatEIN(v) {
  const d = v.replace(/\D/g, '').slice(0, 9);
  if (d.length < 3) return d;
  return `${d.slice(0, 2)}-${d.slice(2)}`;
}

function digitsOnly(v, max) {
  return v.replace(/\D/g, '').slice(0, max);
}

function zipDigits(v) {
  return v.replace(/[^\d-]/g, '').slice(0, 10);
}

const REQUIRED_BY_STEP = {
  1: ['firstName', 'lastName', 'email', 'cellPhone', 'dob', 'ssn',
      'homeStreet', 'homeCity', 'homeState', 'homeZip'],
  2: ['legalBusinessName', 'businessPhone', 'ein', 'businessStart',
      'businessStructure', 'bizStreet', 'bizCity', 'bizState', 'bizZip'],
  3: ['bankName', 'routingNumber', 'accountNumber'],
  4: ['businessDescription', 'avgTicket', 'highTicket', 'monthlyVolume'],
  5: [],
};

function validateField(name, value) {
  if (!value || !String(value).trim()) return false;
  if (name === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (name === 'routingNumber') return /^\d{9}$/.test(value.replace(/\D/g, ''));
  if (name === 'ssn') return /^\d{3}-?\d{2}-?\d{4}$/.test(value);
  return true;
}

export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const shellRef = useRef(null);

  const update = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[name];
        return next;
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === 'cellPhone' || name === 'businessPhone') v = formatPhone(value);
    else if (name === 'ssn') v = formatSSN(value);
    else if (name === 'ein') v = formatEIN(value);
    else if (name === 'routingNumber') v = digitsOnly(value, 9);
    else if (name === 'accountNumber') v = digitsOnly(value, 20);
    else if (name === 'homeZip' || name === 'bizZip' || name === 'dbaZip') v = zipDigits(value);
    update(name, v);
  };

  const validateStep = (n) => {
    const required = REQUIRED_BY_STEP[n] || [];
    const next = {};
    required.forEach((name) => {
      if (!validateField(name, form[name])) next[name] = true;
    });
    if (n === 5 && !form.signature) next.signature = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const scrollToShell = () => {
    if (shellRef.current) {
      window.scrollTo({
        top: shellRef.current.offsetTop - 20,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
      scrollToShell();
    } else {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      scrollToShell();
    }
  };

  const progressPct = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  if (submitted) {
    return (
      <div className="form-shell" ref={shellRef}>
        <div className="form-card">
          <div className="success-screen">
            <div className="success-icon">&#10003;</div>
            <h2>Application Received</h2>
            <p>
              Thank you. Your pre-application has been submitted. A member of
              the HD Processing team will reach out shortly to verify your
              details and send your DocuSign merchant application for review.
            </p>
            <p style={{ marginTop: 24 }}>
              <strong>Questions?</strong> Call us at{' '}
              <a href="tel:3373668550">337-366-8550</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-shell" ref={shellRef}>
      <div className="form-card">
        <div className="progress-bar">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
            {STEP_LABELS.map((label, i) => {
              const n = i + 1;
              const cls =
                n === step ? 'progress-step active'
                : n < step ? 'progress-step complete'
                : 'progress-step';
              return (
                <div className={cls} key={label}>
                  <div className="progress-dot"><span>{n}</span></div>
                  <div className="progress-label">{label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} noValidate>
          <div className="form-body">
            {step === 1 && (
              <Step1 form={form} errors={errors} onChange={handleChange} />
            )}
            {step === 2 && (
              <Step2 form={form} errors={errors} onChange={handleChange} />
            )}
            {step === 3 && (
              <Step3 form={form} errors={errors} onChange={handleChange} />
            )}
            {step === 4 && (
              <Step4 form={form} errors={errors} onChange={handleChange} />
            )}
            {step === 5 && (
              <Step5
                signatureError={!!errors.signature}
                onSignatureChange={(data) => update('signature', data)}
                active
              />
            )}
          </div>

          <div className="ob-actions">
            <button
              type="button"
              className="ob-btn ob-btn-secondary"
              onClick={handleBack}
              style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
            >
              &larr; Back
            </button>
            <div className="step-indicator">Step {step} of {TOTAL_STEPS}</div>
            <button type="submit" className="ob-btn ob-btn-primary">
              {step === TOTAL_STEPS ? 'Submit Application' : 'Next →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------- FIELD HELPERS ---------- */

function Field({ id, label, required, optional, helper, error, errorMsg, children }) {
  return (
    <div className="ob-field">
      <label htmlFor={id}>
        {label}
        {required && <span className="req">*</span>}
        {optional && <span className="optional">{optional}</span>}
      </label>
      {children}
      {helper && <div className="helper">{helper}</div>}
      {error && <div className="error-msg">{errorMsg || 'Required'}</div>}
    </div>
  );
}

function StateSelect({ id, name, value, onChange, required, error }) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={error ? 'is-error' : ''}
    >
      <option value="">Select</option>
      {STATES.map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  );
}

/* ---------- STEPS ---------- */

function Step1({ form, errors, onChange }) {
  const cls = (name) => (errors[name] ? 'is-error' : '');
  return (
    <div className="ob-step">
      <div className="step-header">
        <h2 className="step-title">Personal Information</h2>
        <p className="step-subtitle">Tell us about yourself as the account signer.</p>
      </div>

      <div className="ob-row row-2">
        <Field id="firstName" label="First Name" required error={errors.firstName} errorMsg="Please enter your first name.">
          <input type="text" id="firstName" name="firstName" autoComplete="given-name" value={form.firstName} onChange={onChange} className={cls('firstName')} required />
        </Field>
        <Field id="lastName" label="Last Name" required error={errors.lastName} errorMsg="Please enter your last name.">
          <input type="text" id="lastName" name="lastName" autoComplete="family-name" value={form.lastName} onChange={onChange} className={cls('lastName')} required />
        </Field>
      </div>

      <div className="ob-row">
        <Field id="email" label="Email Address" required helper="This email will be used for your merchant account." error={errors.email} errorMsg="Please enter a valid email address.">
          <input type="email" id="email" name="email" placeholder="example@example.com" autoComplete="email" value={form.email} onChange={onChange} className={cls('email')} required />
        </Field>
      </div>

      <div className="ob-row row-2">
        <Field id="cellPhone" label="Cell Phone" required error={errors.cellPhone} errorMsg="Please enter your cell phone number.">
          <input type="tel" id="cellPhone" name="cellPhone" placeholder="(337) 555-0100" autoComplete="tel" value={form.cellPhone} onChange={onChange} className={cls('cellPhone')} required />
        </Field>
        <Field id="dob" label="Date of Birth" required error={errors.dob} errorMsg="Please enter your date of birth.">
          <input type="date" id="dob" name="dob" value={form.dob} onChange={onChange} className={cls('dob')} required />
        </Field>
      </div>

      <div className="ob-row">
        <Field id="ssn" label="Social Security Number" required helper="Required for underwriting and federal compliance." error={errors.ssn} errorMsg="Please enter a valid SSN.">
          <input type="text" id="ssn" name="ssn" placeholder="XXX-XX-XXXX" inputMode="numeric" maxLength={11} value={form.ssn} onChange={onChange} className={cls('ssn')} required />
        </Field>
      </div>

      <div className="ob-divider">
        <h3 className="divider-title">Home Address</h3>
        <p className="divider-sub">Your personal residence address.</p>
      </div>

      <div className="ob-row">
        <Field id="homeStreet" label="Street Address" required error={errors.homeStreet} errorMsg="Please enter your street address.">
          <input type="text" id="homeStreet" name="homeStreet" autoComplete="address-line1" value={form.homeStreet} onChange={onChange} className={cls('homeStreet')} required />
        </Field>
      </div>

      <div className="ob-row row-address">
        <Field id="homeCity" label="City" required error={errors.homeCity}>
          <input type="text" id="homeCity" name="homeCity" autoComplete="address-level2" value={form.homeCity} onChange={onChange} className={cls('homeCity')} required />
        </Field>
        <Field id="homeState" label="State" required error={errors.homeState}>
          <StateSelect id="homeState" name="homeState" value={form.homeState} onChange={onChange} required error={errors.homeState} />
        </Field>
        <Field id="homeZip" label="Zip Code" required error={errors.homeZip}>
          <input type="text" id="homeZip" name="homeZip" inputMode="numeric" maxLength={10} autoComplete="postal-code" value={form.homeZip} onChange={onChange} className={cls('homeZip')} required />
        </Field>
      </div>
    </div>
  );
}

function Step2({ form, errors, onChange }) {
  const cls = (name) => (errors[name] ? 'is-error' : '');
  return (
    <div className="ob-step">
      <div className="step-header">
        <h2 className="step-title">Business Information</h2>
        <p className="step-subtitle">Details about the business that will accept payments.</p>
      </div>

      <div className="ob-row">
        <Field id="legalBusinessName" label="Legal Name of Business" required helper="As registered with the IRS." error={errors.legalBusinessName} errorMsg="Please enter your legal business name.">
          <input type="text" id="legalBusinessName" name="legalBusinessName" value={form.legalBusinessName} onChange={onChange} className={cls('legalBusinessName')} required />
        </Field>
      </div>

      <div className="ob-row row-2">
        <Field id="website" label="Website URL" optional="(optional)">
          <input type="text" id="website" name="website" placeholder="https://" value={form.website} onChange={onChange} />
        </Field>
        <Field id="businessPhone" label="Business Phone Number" required error={errors.businessPhone} errorMsg="Please enter your business phone.">
          <input type="tel" id="businessPhone" name="businessPhone" placeholder="(337) 555-0100" value={form.businessPhone} onChange={onChange} className={cls('businessPhone')} required />
        </Field>
      </div>

      <div className="ob-row row-2">
        <Field id="ein" label="EIN / Tax ID Number" required helper="If Sole Proprietor, your SSN is acceptable." error={errors.ein} errorMsg="Please enter your EIN or Tax ID.">
          <input type="text" id="ein" name="ein" placeholder="XX-XXXXXXX" value={form.ein} onChange={onChange} className={cls('ein')} required />
        </Field>
        <Field id="businessStart" label="Business Start Date" required error={errors.businessStart} errorMsg="Please enter your business start date.">
          <input type="date" id="businessStart" name="businessStart" value={form.businessStart} onChange={onChange} className={cls('businessStart')} required />
        </Field>
      </div>

      <div className="ob-row">
        <Field id="businessStructure" label="Type of Business Structure" required error={errors.businessStructure} errorMsg="Please select a business structure.">
          <select id="businessStructure" name="businessStructure" value={form.businessStructure} onChange={onChange} className={cls('businessStructure')} required>
            <option value="">Select business structure</option>
            {BUSINESS_STRUCTURES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
      </div>

      <div className="ob-divider">
        <h3 className="divider-title">Business Legal Address</h3>
        <p className="divider-sub">The registered address on file with the IRS.</p>
      </div>

      <div className="ob-row">
        <Field id="bizStreet" label="Street Address" required error={errors.bizStreet} errorMsg="Please enter your business street address.">
          <input type="text" id="bizStreet" name="bizStreet" value={form.bizStreet} onChange={onChange} className={cls('bizStreet')} required />
        </Field>
      </div>

      <div className="ob-row row-address">
        <Field id="bizCity" label="City" required error={errors.bizCity}>
          <input type="text" id="bizCity" name="bizCity" value={form.bizCity} onChange={onChange} className={cls('bizCity')} required />
        </Field>
        <Field id="bizState" label="State" required error={errors.bizState}>
          <StateSelect id="bizState" name="bizState" value={form.bizState} onChange={onChange} required error={errors.bizState} />
        </Field>
        <Field id="bizZip" label="Zip Code" required error={errors.bizZip}>
          <input type="text" id="bizZip" name="bizZip" inputMode="numeric" maxLength={10} value={form.bizZip} onChange={onChange} className={cls('bizZip')} required />
        </Field>
      </div>

      <div className="ob-divider">
        <h3 className="divider-title">DBA Information</h3>
        <p className="divider-sub">Complete only if different from your legal business name and address.</p>
      </div>

      <div className="ob-row">
        <Field id="dbaName" label="DBA Name" optional="(if different from legal)">
          <input type="text" id="dbaName" name="dbaName" value={form.dbaName} onChange={onChange} />
        </Field>
      </div>

      <div className="ob-row">
        <Field id="dbaStreet" label="DBA Street Address" optional="(if different)">
          <input type="text" id="dbaStreet" name="dbaStreet" value={form.dbaStreet} onChange={onChange} />
        </Field>
      </div>

      <div className="ob-row row-address">
        <Field id="dbaCity" label="City">
          <input type="text" id="dbaCity" name="dbaCity" value={form.dbaCity} onChange={onChange} />
        </Field>
        <Field id="dbaState" label="State">
          <StateSelect id="dbaState" name="dbaState" value={form.dbaState} onChange={onChange} />
        </Field>
        <Field id="dbaZip" label="Zip Code">
          <input type="text" id="dbaZip" name="dbaZip" inputMode="numeric" maxLength={10} value={form.dbaZip} onChange={onChange} />
        </Field>
      </div>
    </div>
  );
}

function Step3({ form, errors, onChange }) {
  const cls = (name) => (errors[name] ? 'is-error' : '');
  return (
    <div className="ob-step">
      <div className="step-header">
        <h2 className="step-title">Banking Information</h2>
        <p className="step-subtitle">Where your processing deposits will be sent.</p>
      </div>

      <div className="ob-row">
        <Field id="bankName" label="Bank Name" required error={errors.bankName} errorMsg="Please enter your bank name.">
          <input type="text" id="bankName" name="bankName" value={form.bankName} onChange={onChange} className={cls('bankName')} required />
        </Field>
      </div>

      <div className="ob-row row-2">
        <Field id="routingNumber" label="Bank Account Routing Number" required helper="9-digit number on the bottom-left of your check." error={errors.routingNumber} errorMsg="Please enter a valid 9-digit routing number.">
          <input type="text" id="routingNumber" name="routingNumber" inputMode="numeric" maxLength={9} value={form.routingNumber} onChange={onChange} className={cls('routingNumber')} required />
        </Field>
        <Field id="accountNumber" label="Bank Account Number" required error={errors.accountNumber} errorMsg="Please enter your account number.">
          <input type="text" id="accountNumber" name="accountNumber" inputMode="numeric" value={form.accountNumber} onChange={onChange} className={cls('accountNumber')} required />
        </Field>
      </div>
    </div>
  );
}

function Step4({ form, errors, onChange }) {
  const cls = (name) => (errors[name] ? 'is-error' : '');
  return (
    <div className="ob-step">
      <div className="step-header">
        <h2 className="step-title">Processing Details</h2>
        <p className="step-subtitle">Help us understand your transaction patterns.</p>
      </div>

      <div className="ob-row">
        <Field id="businessDescription" label="Type / Description of Business and Items Sold" required error={errors.businessDescription} errorMsg="Please describe your business.">
          <textarea id="businessDescription" name="businessDescription" rows={4} placeholder="Describe what your business does and what products or services you sell..." value={form.businessDescription} onChange={onChange} className={cls('businessDescription')} required />
        </Field>
      </div>

      <div className="ob-row row-3">
        <Field id="avgTicket" label="Average Transaction" required helper="Dollar amount per individual sale." error={errors.avgTicket}>
          <input type="number" id="avgTicket" name="avgTicket" placeholder="$" min="0" step="0.01" value={form.avgTicket} onChange={onChange} className={cls('avgTicket')} required />
        </Field>
        <Field id="highTicket" label="High Transaction" required helper="Largest individual sale amount." error={errors.highTicket}>
          <input type="number" id="highTicket" name="highTicket" placeholder="$" min="0" step="0.01" value={form.highTicket} onChange={onChange} className={cls('highTicket')} required />
        </Field>
        <Field id="monthlyVolume" label="Monthly Volume" required helper="Total monthly credit card charges." error={errors.monthlyVolume}>
          <input type="number" id="monthlyVolume" name="monthlyVolume" placeholder="$" min="0" step="0.01" value={form.monthlyVolume} onChange={onChange} className={cls('monthlyVolume')} required />
        </Field>
      </div>

      <div className="ob-row">
        <Field id="additionalInfo" label="Additional Information" optional="(optional)">
          <textarea id="additionalInfo" name="additionalInfo" rows={4} placeholder="Anything else we should know about your business?" value={form.additionalInfo} onChange={onChange} />
        </Field>
      </div>
    </div>
  );
}

function Step5({ signatureError, onSignatureChange, active }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const drawingRef = useRef(false);
  const hasDrawnRef = useRef(false);
  const onChangeRef = useRef(onSignatureChange);
  const [hint, setHint] = useState('Sign above using your mouse or finger');

  useEffect(() => {
    onChangeRef.current = onSignatureChange;
  }, [onSignatureChange]);

  useEffect(() => {
    if (!active) return undefined;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const prev = hasDrawnRef.current ? canvas.toDataURL() : null;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      ctx.strokeStyle = '#030404';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctxRef.current = ctx;
      if (prev) {
        const img = new Image();
        img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height);
        img.src = prev;
      }
    };

    setupCanvas();

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.touches && e.touches[0]) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const start = (e) => {
      e.preventDefault();
      drawingRef.current = true;
      hasDrawnRef.current = true;
      setHint('Signed ✓');
      const p = getPos(e);
      const ctx = ctxRef.current;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    };

    const move = (e) => {
      if (!drawingRef.current) return;
      e.preventDefault();
      const p = getPos(e);
      const ctx = ctxRef.current;
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    };

    const end = () => {
      if (!drawingRef.current) return;
      drawingRef.current = false;
      onChangeRef.current(canvas.toDataURL('image/png'));
    };

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', move);
    canvas.addEventListener('mouseup', end);
    canvas.addEventListener('mouseleave', end);
    canvas.addEventListener('touchstart', start, { passive: false });
    canvas.addEventListener('touchmove', move, { passive: false });
    canvas.addEventListener('touchend', end);

    const onResize = () => setupCanvas();
    window.addEventListener('resize', onResize);

    return () => {
      canvas.removeEventListener('mousedown', start);
      canvas.removeEventListener('mousemove', move);
      canvas.removeEventListener('mouseup', end);
      canvas.removeEventListener('mouseleave', end);
      canvas.removeEventListener('touchstart', start);
      canvas.removeEventListener('touchmove', move);
      canvas.removeEventListener('touchend', end);
      window.removeEventListener('resize', onResize);
    };
  }, [active]);

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    hasDrawnRef.current = false;
    setHint('Sign above using your mouse or finger');
    onSignatureChange('');
  };

  return (
    <div className="ob-step">
      <div className="step-header">
        <h2 className="step-title">Review &amp; Sign</h2>
        <p className="step-subtitle">Acknowledge and sign to submit your pre-application.</p>
      </div>

      <div className="consent-box">
        <p>The information provided will be used to create your DocuSign merchant application, which will be sent to you for review.</p>
        <p>A member of the HD Processing team may reach out to verify any information or answer questions.</p>
        <p><strong>Thank you for trusting HD Processing for your electronic payments needs.</strong></p>
      </div>

      <div className="ob-row">
        <div className="ob-field">
          <label>Signature <span className="req">*</span></label>
          <div className="sig-wrap">
            <canvas ref={canvasRef} className="sig-canvas" />
            <div className="sig-controls">
              <span>{hint}</span>
              <button type="button" className="sig-clear" onClick={handleClear}>Clear</button>
            </div>
          </div>
          {signatureError && <div className="error-msg">Please provide your signature.</div>}
        </div>
      </div>
    </div>
  );
}
