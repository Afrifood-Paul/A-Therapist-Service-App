import React from 'react'

const AppointmentHeader = () => {
  return (
    <div className="relative mt-[68px] bg-gradient-to-r from-[#5a9e7c] to-[#83cc61] text-white  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Appointment</h1>
        <div className="text-sm font-semibold">
          <span className="mr-2">Home</span>
          <span>&gt;</span>
          <span className="ml-2">Appointment</span>
        </div>
      </div>
    </div>
  )
}

export default AppointmentHeader