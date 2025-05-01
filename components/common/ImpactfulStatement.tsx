'use client'

const ImpactfulStatement = () => {
  return (
    <div className="
      relative
      text-center 
      pb-8 md:pb-12  
      px-4 md:px-8
      bg-[var(--background-secondary)]
      border-b border-[var(--dark-grey-secondary)]
      scroll-margin-top-[8rem]
    " id="top">

      
      <h1 className="
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl  
        font-heading font-bold 
        leading-tight
        mb-4
        pt-8 md:pt-12
      ">
        Co-creating{' '}
        <span className="text-[var(--accent-primary)]">Tomorrow</span>{' '}
        through{' '}
        <span className="text-[var(--accent-secondary)]">
          Human Creativity
        </span>{' '}
        and{' '}
        <span className="text-[var(--accent-primary)]">
          AI Precision
        </span>
      </h1>
      
      <p className="
        text-base md:text-lg 
        max-w-2xl 
        mx-auto 
        text-[var(--text-secondary)]
        leading-relaxed
      ">
        I leverage the power of human innovation and artificial intelligence 
        to co-create solutions for the challenges of today and tomorrow.
      </p>
      
      <div className="mt-8 w-full h-1 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)] opacity-20" />
    </div>
  );
};

export default ImpactfulStatement;
