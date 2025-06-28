export function FacilitySection() {
  return (
    <section id="facility" className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#254D70] text-center mb-16 border-b-4 border-[#954C2E] inline-block w-full pb-4">
          Experimental Facility
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              We use the EyeLink Portable Duo system from SR Research for our eye-tracking studies. This high-precision
              device allows us to capture real-time eye movement data with millisecond accuracy, making it ideal for
              research in language processing, reading comprehension, and visual attention.
            </p>
            <p className="text-lg leading-relaxed">
              Its portability and flexibility support a wide range of experimental designs across diverse participant
              populations, enabling us to conduct cutting-edge research in cognitive linguistics and psycholinguistics.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/dt8amwctw/image/upload/v1749485687/image-removebg-preview_1_qar2n7.png"
              alt="EyeLink Portable Duo System"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
