import React from 'react';
import { useTranslation } from 'react-i18next';

const LearnMore = () => {
    const { t } = useTranslation();

    return (
        <div className="learn-more-container">
            {/* Add your extended content here */}
            <p className="extended-content">
                {/* Add your extended content here */}
                Nestled amidst the enchanting landscapes of Thailand, Bangkok emerges as a bustling metropolis brimming with
                an electrifying blend of tradition and modernity. As the capital city, Bangkok pulsates with an energy that
                is uniquely its own, captivating visitors from across the globe. What sets Bangkok apart is its seamless fusion
                of ancient heritage and contemporary charm. Amidst the gleaming skyscrapers that pierce the skyline, one discovers
                hidden gems of history in the form of majestic temples and palaces. From the iconic Grand Palace, with its intricate
                architecture and ornate detailing, to the serene Wat Arun temple, where history whispers through its ancient walls,
                Bangkok offers a glimpse into Thailand's rich cultural tapestry. But Bangkok isn't just a city of the past; it's a
                thriving hub of innovation and progress. The bustling streets are a testament to its dynamism, where bustling markets
                coexist with upscale shopping malls, and traditional street vendors vie for attention alongside gourmet restaurants.
                The city's culinary scene is a sensory delight, where the tantalizing aroma of street food mingles with the fragrant
                spices of authentic Thai cuisine. Beyond its vibrant streets, Bangkok is a city of contrasts. Tranquil parks provide
                a respite from the urban chaos, while the tranquil waters of the Chao Phraya River offer a serene escape amidst the
                bustling cityscape. As night falls, Bangkok comes alive with a kaleidoscope of lights and sounds, beckoning visitors
                to explore its vibrant nightlife and pulsating entertainment scene. But perhaps what truly defines Bangkok is its people–
                warm, welcoming, and always ready with a smile. It's their hospitality and zest for life that infuse the city with its
                infectious energy, making every visit to Bangkok an unforgettable experience. In essence, Bangkok is more than just a city;
                it's a journey – a journey of discovery, of exploration, and of endless possibilities. From its ancient temples to its
                bustling markets, from its tranquil parks to its vibrant nightlife, Bangkok invites you to immerse yourself in its rich
                tapestry of sights, sounds, and sensations, promising an adventure like no other.
            </p>
        </div>
    );
};

export default LearnMore;
