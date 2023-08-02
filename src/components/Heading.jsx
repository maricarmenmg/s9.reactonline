

const Heading = ({ title, subtitle }) => {

  return (

  <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-52 md:pb-5">
          {/* Section header */}
          <div className="pb-12 md:pb-14">
            <div className="relative text-center md:text-center">
            <h2 className="h2 font-medium font-spacegrotesk">{title}</h2>
            {subtitle && <h2>{subtitle}</h2>}
            </div>
          </div>
        </div>
      </div>

  );
}

export default Heading;