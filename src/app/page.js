export default function ManaliEnglishLandingPage() {
  const features = [
    {
      title: 'Interactive Learning',
      desc: 'Games, stories, and speaking activities that keep kids excited to learn every day.',
      icon: '✨',
      tint: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Personalized Feedback',
      desc: 'Your child gets clear corrections and encouragement after every session.',
      icon: '💬',
      tint: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Flexible Timing',
      desc: 'Convenient online slots that work around school hours and routines.',
      icon: '🕒',
      tint: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Confidence Building',
      desc: 'Kids practice speaking with confidence, pronunciation, and better vocabulary.',
      icon: '🏆',
      tint: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Live Online Sessions',
      desc: 'One-hour classes with structured speaking practice and real-time interaction.',
      icon: '🖥️',
      tint: 'bg-sky-50 text-sky-600',
    },
    {
      title: 'Small Group Attention',
      desc: 'Focused support so every child gets enough speaking time and personal guidance.',
      icon: '👥',
      tint: 'bg-sky-50 text-sky-600',
    },
    {
      title: 'Learning with Care',
      desc: 'A warm and positive style that helps shy learners become expressive speakers.',
      icon: '💙',
      tint: 'bg-sky-50 text-sky-600',
    },
    {
      title: 'Structured Curriculum',
      desc: 'Vocabulary, grammar, and conversation skills arranged in child-friendly levels.',
      icon: '📘',
      tint: 'bg-sky-50 text-sky-600',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      subtitle: 'Parent of Aarav (Age 9)',
      quote:
        'My son now speaks English much more confidently. He waits for Manali ma\'am\'s classes every week.',
    },
    {
      name: 'Rohit Verma',
      subtitle: 'Parent of Anaya (Age 11)',
      quote:
        'Clear teaching, patient support, and amazing improvement in vocabulary and sentence formation.',
    },
    {
      name: 'Neha Kapoor',
      subtitle: 'Parent of Vivaan (Age 8)',
      quote:
        'The classes are fun and structured. My child has become much more expressive in school too.',
    },
  ];

  const faqs = [
    {
      q: 'How do online classes work?',
      a: 'Classes are conducted live on Google Meet or Zoom. Parents receive the session link and timing in advance.',
    },
    {
      q: 'What age group can join?',
      a: 'These classes are ideal for kids roughly between ages 5 and 14, depending on current English level and speaking confidence.',
    },
    {
      q: 'How can we pay the class fee?',
      a: 'You can accept payments through UPI, bank transfer, Razorpay, or any payment link you prefer to set up.',
    },
    {
      q: 'Can we request a trial or assessment?',
      a: 'Yes. A short first assessment or trial can be offered to understand the child\'s current level and learning needs.',
    },
  ];
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Manali Dixit English Classes",
  description: "Online English speaking classes for kids",
  email: "dixitmanali1@gmail.com",
  telephone: "+918299205968",
  areaServed: "India",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressCountry: "India"
  }
};
  return (
    <div className="min-h-screen bg-[#f8f4e7] text-slate-800">

 <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />

      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <header className="rounded-[2rem] border border-[#efe8cc] bg-white/80 px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
              Manali Dixit English Classes
            </h1>
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-[#f6a400] px-7 py-4 text-lg font-semibold text-white shadow-[0_8px_18px_rgba(246,164,0,0.28)] transition hover:-translate-y-0.5"
            >
              Book Online Class
            </a>
          </div>
        </header>

        <section className="grid gap-10 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#e9d79d] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#b36a19] shadow-sm sm:text-sm">
              Online English Coaching for Kids
            </div>
            <h2 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-tight text-slate-800 sm:text-6xl lg:text-7xl">
              Make Your Child{' '}
              <span className="bg-gradient-to-r from-[#ff8d00] via-[#ff5f6d] to-[#f65fbc] bg-clip-text text-transparent">
                Fluent in English
              </span>{' '}
              with Fun & Confidence
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Expert-led online classes by Manali Dixit designed for kids. Build speaking
              confidence, vocabulary, and clear communication in a joyful learning environment.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-full bg-[#f6a400] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(246,164,0,0.28)] transition hover:-translate-y-0.5"
              >
                Book a Class – ₹250 Only
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-full border-[3px] border-sky-500 bg-white px-8 py-4 text-lg font-semibold text-sky-600 transition hover:bg-sky-50"
              >
                View Curriculum →
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['Trusted By', '50+ Parents'],
                ['Class Format', '100% Online'],
                ['Special Offer', '₹300 / class'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[1.8rem] border border-[#efe8cc] bg-white px-6 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                    {label}
                  </div>
                  <div className="mt-3 text-3xl font-medium tracking-tight text-slate-800">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
              <img
              src="/images/manali_dp.png"
              alt="Manali Dixit English Teacher"
              className="h-[640px] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 rounded-[1.8rem] bg-white/95 px-6 py-4 shadow-xl backdrop-blur">
              <div className="text-2xl font-medium text-slate-800">Manali Dixit</div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                English Teacher
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="border-y border-[#efe8cc] bg-[linear-gradient(rgba(230,221,188,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(230,221,188,0.22)_1px,transparent_1px)] bg-[size:32px_32px]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600 sm:text-base">
              Why parents choose these classes
            </div>
            <h3 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-slate-800 sm:text-6xl">
              A joyful way for kids to learn real English
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-600 sm:text-xl">
              Every class blends speaking, listening, and practical communication to build
              confidence from day one.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${feature.tint}`}
                >
                  {feature.icon}
                </div>
                <h4 className="mt-7 text-3xl font-medium tracking-tight text-slate-800">
                  {feature.title}
                </h4>
                <p className="mt-4 text-lg leading-8 text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                      <img
              src="/images/manali_bag.png"
              alt="Manali Dixit English Teacher"
              className="h-[640px] w-full object-cover"
              />
          </div>
          <div>
            <div className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-pink-600 shadow-sm sm:text-sm">
              Meet your mentor
            </div>
            <h3 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-slate-800 sm:text-6xl">
              Learning should be a joy, not a chore.
            </h3>
           <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
Manali Dixit is an experienced English educator with more than 5+ years of
teaching experience and a strong background in both online and classroom
learning environments. She has conducted hundreds of one-to-one online English
sessions and has also worked with education startups focused on live video
learning for children.
</p>

<p className="mt-4 text-lg leading-8 text-slate-600 sm:text-xl">
Alongside online teaching, she has taught students from several well-known
schools in Lucknow and has helped many children improve their spoken English,
confidence, and classroom communication skills.
</p>
            <ul className="mt-8 space-y-4 text-lg text-slate-700">
              <li>• Warm, patient, child-friendly teaching style</li>
              <li>• Focus on speaking confidence and real conversation</li>
              <li>• Suitable for shy learners and beginners</li>
            </ul>
          </div>
        </div>
      </section>

<section id="curriculum" className="bg-[#f8f4e7]">
  <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600 sm:text-base">
        Simple pricing
      </div>
      <h3 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-slate-800 sm:text-6xl">
        Choose the class format that suits your child
      </h3>
    </div>

    <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
      <div className="rounded-[2.5rem] border border-[#efe8cc] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-10">
        <div className="inline-flex rounded-full bg-amber-50 px-5 py-2 text-sm font-semibold text-amber-700 shadow">
          Personal Attention
        </div>

        <div className="mt-7 text-4xl font-medium">1-to-1 Class</div>
        <div className="mt-6 text-7xl font-medium tracking-tight">₹500</div>
        <div className="mt-2 text-xl text-slate-500">per class</div>

        <ul className="mt-8 space-y-4 text-lg text-slate-700">
          <li>• 1 Hour Session</li>
          <li>• One-to-one learning</li>
          <li>• Personalized feedback</li>
          <li>• Flexible timing</li>
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href="https://wa.me/918299205968?text=Hi%20Manali%2C%20I%20want%20to%20continue%20with%20the%201-to-1%20English%20class%20for%20my%20child."
            className="inline-flex items-center justify-center rounded-full bg-[#f6a400] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Continue on WhatsApp
          </a>

          <a
            href="mailto:dixitmanali1@gmail.com?subject=1-to-1%20English%20Class%20Enquiry&body=Hi%20Manali%2C%0D%0A%0D%0AI%20want%20to%20continue%20with%20the%201-to-1%20English%20class%20for%20my%20child."
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-8 py-4 text-lg font-semibold text-slate-700 transition hover:-translate-y-0.5"
          >
            Continue on Email
          </a>
        </div>
      </div>

      <div className="rounded-[2.5rem] bg-[#f4a261] p-8 text-white shadow-[0_18px_50px_rgba(244,162,97,0.28)] sm:p-10">
        <div className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#b86a2f] shadow">
          Best Value
        </div>

        <div className="mt-7 text-4xl font-medium">Group Class (4 Students)</div>
        <div className="mt-6 text-7xl font-medium tracking-tight">₹250</div>
        <div className="mt-2 text-xl text-white/90">per class</div>

        <ul className="mt-8 space-y-4 text-lg text-white/95">
          <li>• 1 Hour Session</li>
          <li>• Small group of 4 students</li>
          <li>• Interactive speaking practice</li>
          <li>• Study material included</li>
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href="https://wa.me/918299205968?text=Hi%20Manali%2C%20I%20want%20to%20continue%20with%20the%20group%20English%20class%20for%20my%20child."
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#b86a2f] shadow-lg transition hover:-translate-y-0.5"
          >
            Continue on WhatsApp
          </a>

          <a
            href="mailto:dixitmanali1@gmail.com?subject=Group%20English%20Class%20Enquiry&body=Hi%20Manali%2C%0D%0A%0D%0AI%20want%20to%20continue%20with%20the%20group%20English%20class%20for%20my%20child."
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-0.5"
          >
            Continue on Email
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-[#f7fbfe]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600 sm:text-base">
              Parent feedback
            </div>
            <h3 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-slate-800 sm:text-6xl">
              Loved by parents, enjoyed by kids
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-600 sm:text-xl">
              Real growth in confidence, communication, and classroom participation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-200 to-pink-200 text-lg font-semibold text-slate-700">
                    {item.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="text-3xl font-medium tracking-tight text-slate-800">
                      {item.name}
                    </div>
                    <div className="text-lg text-slate-500">{item.subtitle}</div>
                  </div>
                </div>
                <p className="mt-6 text-xl leading-9 text-slate-600">“{item.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#efe8cc] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] sm:p-10">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600 sm:text-base">
              Frequently asked questions
            </div>
            <h3 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-slate-800 sm:text-5xl">
              Everything parents usually ask
            </h3>
          </div>

          <div className="mt-8 divide-y divide-[#efe8cc]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-slate-800 marker:hidden sm:text-2xl">
                  {faq.q}
                  <span className="text-slate-400 transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="pt-4 text-lg leading-8 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="bg-[#06163c] text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f6d15f] sm:text-base">
              Let&apos;s begin your child&apos;s English journey
            </div>
            <h3 className="mt-5 text-5xl font-medium leading-tight tracking-tight sm:text-7xl">
              Book an online class with Manali Dixit today
            </h3>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Share your child&apos;s details and preferred timing. You can connect this button to
              WhatsApp, Google Form, Calendly, Razorpay, or your own contact form.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/918299205968"
                className="inline-flex items-center justify-center rounded-full bg-[#f6a400] px-8 py-5 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Book via WhatsApp
              </a>
              <a
                href="mailto:hello@manalidixit.com"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-5 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Contact on Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
