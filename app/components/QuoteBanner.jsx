import React from 'react'

const QuoteBanner = () => {
  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[81vh] flex flex-col justify-end px-8 md:pl-[9vw] lg:pl-[9vw] pr-8 pb-16 lg:pb-24">
      {/* Background Image */}
      <img 
        src="https://m.media-amazon.com/images/I/61+PDr4OrFL.jpg" 
        alt="Quote background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(44, 53, 49, 0.70)" }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-[95%] md:max-w-[85%] lg:max-w-[76.2%]">
        <h2 className="font-serif font-light leading-[1.3] md:leading-[1.2]"
            style={{ 
              fontSize: "clamp(2rem, 3.8vw, 4rem)",
              color: "var(--bg-primary)"
            }}>
          You deserve a space to slow down, reconnect, and heal. Nothing you carry is too complex to process together.
        </h2>
      </div>
    </section>
  )
}

export default QuoteBanner