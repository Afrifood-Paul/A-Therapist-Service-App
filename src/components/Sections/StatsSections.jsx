import React from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  return (
    <div className="bg-[#83cc61] w-full h-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 items-center py-14 max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-4xl font-semibold">
            <CountUp end={6250} duration={2.5} />+
          </h1>
          <p className="font-sans">Happy Customers</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-4xl font-semibold">
            <CountUp end={3200} duration={2.5} />+
          </h1>
          <p className="font-sans">Successful Therapy</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-4xl font-semibold">
            <CountUp end={20} duration={2.5} />+
          </h1>
          <p className="">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-white">
          <h1 className="text-4xl font-semibold">
            <CountUp end={15} duration={2.5} />+
          </h1>
          <p className="">Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
