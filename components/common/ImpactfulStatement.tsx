'use client'

const ImpactfulStatement = () => {
  return (
    <div className="
      text-center 
      pb-16 md:pb-24  /* Changed py- to pb- to remove top padding */
      px-4 md:px-8
      mb-12 md:mb-20
      border-b border-gray-800
      scroll-margin
    " id="top">
      <h1 className="
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl  /* Reduced font sizes */
        font-merriweather font-bold 
        leading-tight
        mb-6
      ">
        Co-creating{' '}
        <span className="text-[var(--burgundy)]">Tomorrow</span>{' '}
        through{' '}
        <span className="text-[var(--primary-yellow)]">
          Human Creativity
        </span>{' '}
        and{' '}
        <span className="text-[var(--light-burgundy)]">
          AI Precision
        </span>
      </h1>
      <p className="
        text-base md:text-lg 
        max-w-2xl 
        mx-auto 
        text-gray-300
        leading-relaxed
      ">
        Leveraging the power of human innovation and artificial intelligence 
        to create groundbreaking solutions for the challenges of today and tomorrow.
      </p>
    </div>
  );
};

export default ImpactfulStatement;
