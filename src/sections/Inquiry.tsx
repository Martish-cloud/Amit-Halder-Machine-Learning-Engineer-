import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Globe,
  Cpu,
  BarChart3,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { LinkedinIcon } from '../components/icons';
import { personalInfo } from '../data/profile';

const inquiryTypes = [
  'Website Development',
  'Web App Development',
  'Mobile App Development',
  'Excel / Data Analysis',
  'Power BI Dashboard',
  'AI / GenAI Development',
  'Machine Learning',
  'AI Automation / n8n',
  'UI/UX Design',
  'Other',
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  budget: string;
  message: string;
  preferredContact: string;
  botcheck: string; // honeypot
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  inquiryType: '',
  budget: '',
  message: '',
  preferredContact: '',
  botcheck: '',
};

const serviceHighlights = [
  { icon: <Globe className="w-4 h-4" />, label: 'Website Development' },
  { icon: <Smartphone className="w-4 h-4" />, label: 'App Development' },
  { icon: <BarChart3 className="w-4 h-4" />, label: 'Excel & Power BI' },
  { icon: <Cpu className="w-4 h-4" />, label: 'AI / ML / Automation' },
];

export const Inquiry: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.inquiryType) newErrors.inquiryType = 'Please select a service / inquiry type.';
    if (!form.budget) newErrors.budget = 'Please select a budget range.';
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'Please provide project details (minimum 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.botcheck) return; // honeypot triggered
    if (!validate()) return;

    setFormState('loading');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.warn('VITE_WEB3FORMS_ACCESS_KEY is not configured in environment.');
      setFormState('error');
      return;
    }

    try {
      const emailBody = `
--------------------------------
NEW PORTFOLIO PROJECT INQUIRY
--------------------------------

Full Name:
${form.name.trim()}

Email:
${form.email.trim()}

Company / Organization:
${form.company.trim() || 'Not specified'}

Service:
${form.inquiryType}

Budget:
${form.budget}

Preferred Contact Method:
${form.preferredContact || 'Not specified'}

Project Details:
${form.message.trim()}

--------------------------------
Submitted via:
Amit Halder Portfolio
--------------------------------
`.trim();

      const payload = {
        access_key: accessKey,
        name: form.name.trim(),
        email: form.email.trim(),
        replyto: form.email.trim(),
        from_name: form.name.trim(),
        subject: `New Project Inquiry — ${form.inquiryType} — ${form.budget}`,
        message: emailBody,
        botcheck: form.botcheck,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setFormState('success');
        setForm(initialForm);
      } else {
        console.error('Web3Forms submission error:', result);
        setFormState('error');
      }
    } catch (err) {
      console.error('Submission request failed:', err);
      setFormState('error');
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl text-sm font-sans bg-white dark:bg-white/5 border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy text-slate-900 dark:text-brand-warm-gray placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
      errors[field]
        ? 'border-red-400 dark:border-red-400/60'
        : 'border-slate-200 dark:border-white/10 focus:border-brand-burgundy/50 dark:focus:border-brand-burgundy/50'
    }`;

  return (
    <section id="inquiry" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-brand-burgundy uppercase tracking-widest">
          07 // Project Inquiry
        </span>
        <div className="h-[1px] flex-1 max-w-[80px] bg-brand-burgundy/30" />
      </div>

      <div className="mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-brand-warm-gray tracking-tight">
          Project Inquiry
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl font-sans">
          Tell me what you&apos;re building, what you need, and how I can help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* ── LEFT SIDE ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-brand-warm-gray mb-3">
              Let&apos;s work together.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              I partner with businesses and founders to build AI-powered products, automate workflows, and
              unlock actionable insights from data. Every project starts with a clear understanding of your
              goals — let&apos;s define yours.
            </p>
          </div>

          {/* Service highlights */}
          <div className="grid grid-cols-2 gap-3">
            {serviceHighlights.map((s) => (
              <div
                key={s.label}
                className="glass-card p-4 rounded-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-burgundy/10 border border-brand-burgundy/20 flex items-center justify-center text-brand-burgundy shrink-0">
                  {s.icon}
                </div>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Response expectation */}
          <div className="glass-card p-5 rounded-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-burgundy animate-pulse" />
              <span className="text-xs font-mono text-brand-burgundy uppercase tracking-wider">
                Response Policy
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              I respond to all serious inquiries within <strong className="text-slate-900 dark:text-brand-warm-gray">24–48 hours</strong>.
              For urgent matters, email directly at:
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs font-mono text-brand-burgundy hover:underline break-all"
            >
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-brand-slate hover:text-brand-burgundy transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              {personalInfo.linkedinDisplay}
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT SIDE: FORM ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="glass-panel p-7 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10">
            {/* Success State */}
            {formState === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-4 py-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-burgundy/10 border border-brand-burgundy/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-brand-burgundy" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-brand-warm-gray">
                  Thank you! Your inquiry has been received successfully.
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed">
                  Your message has been sent to Amit Halder.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-2 px-5 py-2 rounded-xl bg-brand-burgundy text-white text-sm font-semibold hover:bg-brand-burgundy/90 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            )}

            {/* Form */}
            {formState !== 'success' && (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Error Banner */}
                {formState === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-400/30 text-red-500 dark:text-red-400 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Something went wrong while sending your inquiry.</p>
                      <p className="text-xs mt-0.5">Please try again or contact me directly at askfor.amithalder@gmail.com</p>
                    </div>
                  </motion.div>
                )}

                {/* Honeypot — hidden from real users */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                  checked={form.botcheck === 'on'}
                  onChange={handleChange}
                />

                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiry-name" className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Full Name <span className="text-brand-burgundy">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      className={inputClass('name')}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="text-xs text-red-500 font-mono" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiry-email" className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Email Address <span className="text-brand-burgundy">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      autoComplete="email"
                      className={inputClass('email')}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="text-xs text-red-500 font-mono" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Company + Inquiry Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiry-company" className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Company / Organization <span className="text-slate-400 text-[10px]">(optional)</span>
                    </label>
                    <input
                      id="inquiry-company"
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      autoComplete="organization"
                      className={inputClass('company')}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiry-type" className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Service / Inquiry Type <span className="text-brand-burgundy">*</span>
                    </label>
                    <select
                      id="inquiry-type"
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleChange}
                      className={`${inputClass('inquiryType')} cursor-pointer`}
                      aria-required="true"
                      aria-describedby={errors.inquiryType ? 'type-error' : undefined}
                    >
                      <option value="" disabled>Select a service...</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.inquiryType && (
                      <span id="type-error" className="text-xs text-red-500 font-mono" role="alert">
                        {errors.inquiryType}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3: Budget + Preferred Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiry-budget" className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Budget Range <span className="text-brand-burgundy">*</span>
                    </label>
                    <select
                      id="inquiry-budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`${inputClass('budget')} cursor-pointer`}
                      aria-required="true"
                      aria-describedby={errors.budget ? 'budget-error' : undefined}
                    >
                      <option value="" disabled>Select budget range...</option>
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000 – ₹75,000">₹50,000 – ₹75,000</option>
                      <option value="₹75,000 – ₹2,00,000">₹75,000 – ₹2,00,000</option>
                      <option value="₹2,00,000+">₹2,00,000+</option>
                      <option value="Hourly / Consulting">Hourly / Consulting</option>
                      <option value="Let's discuss">Let&apos;s discuss</option>
                    </select>
                    {errors.budget && (
                      <span id="budget-error" className="text-xs text-red-500 font-mono" role="alert">
                        {errors.budget}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiry-contact" className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Preferred Contact Method <span className="text-slate-400 text-[10px]">(optional)</span>
                    </label>
                    <select
                      id="inquiry-contact"
                      name="preferredContact"
                      value={form.preferredContact}
                      onChange={handleChange}
                      className={`${inputClass('preferredContact')} cursor-pointer`}
                    >
                      <option value="">No preference</option>
                      <option value="Email">Email</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Phone">Phone</option>
                      <option value="Video Call">Video Call</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inquiry-message" className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Project Details / Message <span className="text-brand-burgundy">*</span>
                  </label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    className={`${inputClass('message')} resize-none`}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="text-xs text-red-500 font-mono" role="alert">
                      {errors.message}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-slate-400 text-right">
                    {form.message.length} chars
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-burgundy text-white font-semibold text-sm shadow-lg shadow-brand-burgundy/20 hover:bg-brand-burgundy/90 hover:shadow-brand-burgundy/30 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy focus-visible:ring-offset-2"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] font-mono text-slate-400 text-center">
                  Your information is kept private and never shared. Response within 24–48 hours.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
