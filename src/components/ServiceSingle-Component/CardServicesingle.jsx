import { cardData } from '../../constants/Services-Constant';
import backgroundImage from '../../assets/3.webp'


function CardContent({ title, content }) {
    return (
        <div className="relative font-poppins bg-black bg-opacity-50 text-white p-6 rounded-lg max-w-xs mx-auto">
            <h2 className="text-green-500 text-xl font-semibold mb-4">{title}</h2>
            <p className="text-sm  leading-relaxed">{content}</p>
        </div>
    );
}

        function Card() {
             return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Content Cards */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                {cardData.map((card, index) => (
                    <CardContent key={index} title={card.title} content={card.content} />
                ))}
            </div>
        </div>
    );
}
        
 export default Card;       