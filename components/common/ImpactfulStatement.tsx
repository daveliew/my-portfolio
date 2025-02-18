'use client'

const ImpactfulStatement = () => {
  return (
    <div className="
      relative
      text-center 
      pb-8 md:pb-12  
      px-4 md:px-8
      bg-[var(--space-black-light)]
      border-b border-gray-800
      scroll-margin-top-[8rem]
    " id="top">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-burgundy via-primary-yellow to-light-burgundy opacity-20" />
      
      <h1 className="
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl  
        font-merriweather font-bold 
        leading-tight
        mb-4
        pt-8 md:pt-12
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
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary-yellow to-transparent opacity-30" />
    </div>
  );
};

export default ImpactfulStatement;
