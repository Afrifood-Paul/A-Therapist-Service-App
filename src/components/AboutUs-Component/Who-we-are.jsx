import AboutImg from '../../assets/about us.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

function WhoWeAre() {
    return (
        <div className="relative flex flex-col mt-8 md:flex-row items-center justify-center bg-white font-poppins py-12 px-28">

            <div className="relative md:w-1/2 mr-6 ">
                    <img src={AboutImg} alt="About Us" className=" rounded-3xl object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <a
                            href="https://youtu.be/RFTUZqXZN6M?si=yBcOdZnW0l3RLpZx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-white rounded-full'
                        >
                          <FontAwesomeIcon icon={faPlayCircle} className="text-6xl text-[#83cc61]" />
                        </a>
                    </div>
                </div>
            <div className="w-full md:w-1/2 mt-3 ml-5 flex flex-col justify-center">
                <div className="inline-flex items-center mb-2">
                    <span className="bg-[#e1ffd4] text-[#457a60] rounded-full px-4 py-2 text-xs font-bold">
                        Who We Are
                    </span>
                </div>
                <h2 className="md:text-4xl font-semibold text-gray-700 mb-4 leading-tight">
                    Introducing Our Expert Psychology Professionals
                </h2>
                <p className="text-gray-400 text-sm md:text-base  mb-6">
                   Empowering minds, enriching lives. At Open-Minded Service Center Inc, we are dedicated to delivering exceptional counseling services, mental health support, and referrals with kindness, compassion, and respect. Our mission is to create a supportive community where individuals feel heard, validated, and empowered to overcome life's challenges. We believe in the transformative power of open-mindedness, and we're committed to helping our clients achieve their full potential. 
                </p>
                <button className="bg-[#457a60] font-medium text-white px-4 py-2 rounded-full hover:bg-[#5a9e7c] focus:outline-none transition duration-300 self-start">
                    About Us
                </button>
            </div>
        </div>
    );
}
export default WhoWeAre;