'use client'

const ImpactfulStatement = () => {
  return (
    <div className="
      relative
      text-center 
      pb-10 md:pb-12
      px-4 md:px-8
      bg-[var(--background-secondary)]
      border-b border-[var(--dark-grey-secondary)]
      scroll-margin-top-[8rem]
    " id="top">
      
      {/* Simple gradient header divider */}
      <div className="flex items-center mb-6 pt-8 md:pt-12">
        
      </div>
      
      <h1 className="
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl  
        font-heading font-bold 
        leading-tight
        mb-6
      ">
        Co-creating{' '}
        <span className="text-[var(--accent-tertiary)]">Tomorrow</span>{' '}
        through{' '}
        <span className="text-[var(--accent-primary)]">
          Human Creativity
        </span>{' '}
        and{' '}
        <span className="text-[var(--accent-secondary)]">
          AI Precision
        </span>
      </h1>
      
      {/* Formula div */}
      <div className="max-w-2xl mx-auto p-5 bg-[var(--background-primary)]/30 rounded-lg border border-[var(--dark-grey-secondary)]/30 shadow-sm mb-4">
        <div className="flex flex-col md:flex-row items-center justify-center text-lg">
          <span className="text-[var(--accent-primary)] font-medium">Human Creativity</span>
          <span className="mx-2 md:mx-3 text-xl text-[var(--text-secondary)]">+</span>
          <span className="text-[var(--accent-secondary)] font-medium">AI Capabilities</span>
          <span className="mx-2 md:mx-3 text-xl text-[var(--text-secondary)]">=</span>
          <span className="text-[var(--accent-tertiary)] font-medium">Empowering Self & Others</span>
        </div>
      </div>
      
      
      {/* Summary in italics */}
      <p className="text-[var(--text-secondary)] italic text-sm mb-6 max-w-2xl mx-auto mt-6">
        This allows me to fulfil my purpose of building a legacy of kindness, growth, and balanced living.
      </p>
      {/* <div className="h-1 flex-grow bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] rounded-full"></div> */}
    </div>
  );
};

export default ImpactfulStatement;
