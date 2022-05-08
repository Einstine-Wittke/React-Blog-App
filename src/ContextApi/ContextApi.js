import { useState, createContext } from "react";

export const ContextApi = createContext()

export const DataBase = props => {
    const [data] = useState([
        {
            id: "1",
            category: "tourism",
            imageUrl: `https://s3.amazonaws.com/gttwl/attachments/global/1407264522_xlarge.jpeg`,
            title: `Rio De Janerio : River of January`,
            description: `Rio de Janeiro is a huge city with several district articles containing sightseeing, restaurant, nightlife and accommodation listings — have a look at each of them. For other places with the same name, see Rio de Janeiro (disambiguation). Rio de Janeiro is the second largest city in Brazil, on the South Atlantic coast.`,
            date: `July 13 2022`,
            short: `Rio de Janeiro is a huge city with several district articles containing sightseeing, restaurant, nightlife...`
        },
        {
            id: "2",
            category: "tourism",
            imageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg`,
            title: `Paris : City of Love`,
            date: `13 August 2022`,
            description: `Paris is a picturesque dream destination. Spread over the banks of Seine River in Northern France, it stands out for being one of those glitzy metropolises of the world. Its cityscape sparkles with iconic architecture of historical monuments and vintage palaces, art museums, cathedrals, expansive landscaped gardens, and stylish shopping hubs.`,
            short:`Paris is a picturesque dream destination. Spread over the banks of Seine River in Northern France, it stands out for being one of those glitzy...`

        },
        {
            id: "3",
            category: "tourism",
            imageUrl: `https://cdn.pixabay.com/photo/2021/04/25/23/17/rome-6207755_1280.jpg`,
            title: `Rome : City of Seven Hills`,
            date: `13 September 2022`,
            description: `Rome is regarded as one of the world's most beautiful ancient cities, and contains vast amounts of priceless works of art, palaces, museums, parks, churches, gardens, basilicas, temples, villas, piazzas, theatres, and other venues in general. As one of the world's most important and visited cities, there are numerous popular tourist attractions.`,
            short:`Rome is regarded as one of the world's most beautiful ancient cities, and contains vast amounts of priceless works of art, palaces, museums, ...`
        },
        {
            id: "4",
            category: "tourism",
            imageUrl: `https://images.pexels.com/photos/3772630/pexels-photo-3772630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
            title: `Giza : Al-Jīzah`,
            date: `13 October 2022`,
            description: `The Giza plateau was more or less neglected - except by tourists, those dismantling the structures for their own uses, and grave robbers - until Napolean's Egyptian Campaign of 1798-1801 CE. Napolean had brought along a team of scientists, artists, and engineers who he set to work investigating and recording facts about the Giza monuments and others throughout Egypt.`,
            short:`The Giza plateau was more or less neglected - except by tourists, those dismantling the structures for their own uses, and grave robbers - until...`
        },
        {
            id: "5",
            category: "tourism",
            imageUrl: `https://images.pexels.com/photos/1450359/pexels-photo-1450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
            title: `Maldives : Dheeva Mahal`,
            date: `13 November 2022`,
            description: `The Maldives is a beautiful small island country in South Asia located in the Arabian Sea. Not only does the place have sparkling clear and blue waters, soothing beaches, adventurous water sports and romantic vibes to offer, it also has many incredible monuments to its name.`,
            short:`The Maldives is a beautiful small island country in South Asia located in the Arabian Sea. Not only does the place have sparkling clear...`
        },

        {
            id: "1",
            category: "fitness",
            imageUrl: `https://cdn.pixabay.com/photo/2021/06/13/01/47/man-6331987_1280.jpg`,
            title: `Gymnastics`,
            date: `12 April 2022`,
            description: `Gymnastics, the performance of systematic exercises—often with the use of rings, bars, and other apparatus—either as a competitive sport or to improve strength, agility, coordination, and physical conditioning.`,
            short:`Gymnastics, the performance of systematic exercises—often with the use of rings, bars, and other apparatus—either as ...`
        },
        {
            id: "2",
            category: "fitness",
            imageUrl: `https://images8.alphacoders.com/597/thumb-1920-597941.jpg`,
            title: `Cycling`,
            date: `24 April 2022`,
            description: `Cycling is widely regarded as a very effective and efficient mode of transportation optimal for short to moderate distances. Bicycles provide numerous benefits in comparison with motor vehicles, including the sustained physical exercise involved in cycling, easier parking, increased maneuverability, and access to roads, bike paths and rural trails.`,
            short:``
        },
        {
            id: "3",
            category: "fitness",
            imageUrl: `https://cdn.pixabay.com/photo/2021/05/14/08/44/running-6252827_1280.jpg`,
            title: `Running`,
            date: `04 may 2022`,
            description: `Running is an essential component of many sports, from football to cricket. It’s no surprise, then, that regular running workouts, which help improve your stamina, speed, and cardiovascular endurance, can make you a stronger, more adaptable athlete. 10. Running can improve your mental well-being.`,
            short:``
        },
        {
            id: "4",
            category: "fitness",
            imageUrl: `https://cdn.pixabay.com/photo/2020/06/10/07/05/yoga-5281457_1280.jpg`,
            title: `Yoga`,
            date: `15 March 2023`,
            description: `Yoga is one of the six orthodox schools of Hindu philosophical traditions. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism. Among the best-known types of yoga are Hatha yoga and Rāja yoga.`,
            short:``
        },
        {
            id: "5",
            category: "fitness",
            imageUrl: `https://cdn.pixabay.com/photo/2016/11/23/14/42/action-1853289_1280.jpg`,
            title: `Skateboarding`,
            date: `12 December 2022`,
            description: `Skateboarding is an action sport which involves riding and performing tricks using a skateboard, as well as a recreational activity, an art form, a entertainment industry job, and a method of transportation.`,
            short:``
        },
        {
            id: "1",
            category: "technology",
            imageUrl: `https://cdn.pixabay.com/photo/2021/07/12/09/42/robot-6405858_1280.jpg`,
            title: `Robotics`,
            date: `18 March 2023`,
            description: `Robotics. Robotics is an interdisciplinary branch of engineering and science that includes mechanical engineering, electronic engineering, information engineering, computer science, and others. Robotics deals with the design, construction, operation, and use of robots, as well as computer systems for their control, sensory`,
            short:`Robotics. Robotics is an interdisciplinary branch of engineering and science that includes mechanical engineering...`
        },
        {
            id: "2",
            category: "technology",
            imageUrl: `https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
            title: `Cybersecurity`,
            date: `14 February 2023`,
            description: `Computer security, cybersecurity or information technology security ( IT security) is the protection of computer systems and networks from information disclosure, theft of or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.`,
            short:``
        },
        {
            id: "3",
            category: "technology",
            imageUrl: `https://images.pexels.com/photos/3175983/pexels-photo-3175983.jpeg?cs=srgb&dl=pexels-areous-ahmad-3175983.jpg&fm=jpg`,
            title: `Virtual reality`,
            date: `31 March 2022`,
            description: `Virtual reality ( VR) is an interactive computer-generated experience taking place within a simulated environment. It incorporates mainly auditory and visual feedback, but may also allow other types of sensory feedback. This immersive environment can be similar to the real world or it can be fantastical`,
            short:``
        },
        {
            id: "4",
            category: "technology",
            imageUrl: `https://images.pexels.com/photos/5980862/pexels-photo-5980862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
            title: `Blockchain`,
            date: `28 April 2022`,
            description: `The blockchain database is disturbed amongst multiple peers and is not centralized. Block chain technology is Resilience, Decentralize, Time reducing, reliable and its offers unalterable transitions Three versions of Blockchain are Blockchain 1.0: Currency, Blockchain 2.0: Smart Contracts and Blockchain 3.0: DApps`,
            short:``
        },
        {
            id: "5",
            category: "technology",
            imageUrl: `https://images.pexels.com/photos/6200343/pexels-photo-6200343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
            title: `5g`,
            date: `21 January 2023`,
            description: `The 5G technology is primarily meant for delivering multi-Gbps data speed along with ultra-low latency, reliability, and massive network capabilities are some of its hidden perks. `,
            short:``
        },
        {
            id: `1`,
            category: `hollywood`,
            imageUrl: `https://images3.alphacoders.com/121/thumb-1920-1213553.jpg`,
            title: `Doctor Strange `,
            date: `10 june 2022`,
            description: `After the events of Avengers: Endgame, Dr. Stephen Strange continues his research on the Time Stone. But an old friend turned enemy seeks to destroy every sorcerer on Earth, messing with Strange's plan, causing him to unleash an unspeakable evil`,
            short:`After the events of Avengers: Endgame, Dr. Stephen Strange continues his research on the Time Stone...`
        },
        {
            id: `2`,
            category: `hollywood`,
            imageUrl: `https://d.newsweek.com/en/full/2009700/will-smith-chris-rock.jpg`,
            title: `Will Smith punches Chris Rock `,
            date: `28 March 2022`,
            description: `Will Smith slapped Chris Rock in the face on stage at the Oscars after the comic made a joke about the actor's wife Jada Pinkett Smith.`,
            short:``
        },
        {
            id: `3`,
            category: `hollywood`,
            imageUrl: `https://images4.alphacoders.com/114/thumb-1920-1146700.jpg`,
            title: `The Rock plays Black Adam`,
            date: `09 September 2022`,
            description: `Black Adam is a super-villain and sometimes anti-hero originally written as the evil counterpart to Captain Marvel, an ancient Egyptian prince who was given incredible powers by the wizard Shazam and survived into the modern era.`,
            short:``
        },
        {
            id: `4`,
            category: `hollywood`,
            imageUrl: `https://images2.alphacoders.com/119/thumb-1920-1195551.jpg`,
            title: `Jared Leto in Morbius `,
            date: `07 June 2022`,
            description: `Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Morbius attempts a desperate gamble.  `,
            short:``
        },
        {
            id: `5`,
            category: `hollywood`,
            imageUrl: `https://images4.alphacoders.com/709/thumbbig-709451.webp`,
            title: `James Cameron's big Announcement `,
            date: `11 November 2022`,
            description: `Avatar 2 is known of the storyline of the second film, but it is known that the film will be set several years after the first and will explore the oceans of Pandora.`,
            short:``
        },
        {
            id: `1`,
            category: `food`,
            imageUrl: `https://images.alphacoders.com/107/thumb-1920-1079225.jpg`,
            title: `Steak`,
            date: `02 June 2022`,
            description: `Steak is a slice of meat, especially beef or fish. An example of a steak is a broiled thick slice of beef. A slice of beef, broiled or cut for broiling. By extension, a slice of meat of other large animals; as venison steak, bear steak, pork steak, turtle steak.`,
            short:`Steak is a slice of meat, especially beef or fish. An example of a steak is a broiled thick slice of beef. A slice of beef...`
        },
        {
            id: `2`,
            category: `food`,
            imageUrl: `https://cdn.pixabay.com/photo/2021/03/02/17/24/shawarma-6063224_1280.jpg`,
            title: `Shawarma`,
            date: `26 May 2022`,
            description: `Chicken Shawarma Recipe is a favourite dish that everyone loves to eat. Shawarma hails from the Middle Eastern region, which is considered as a meat preparation made with chicken, beef, lamb or turkey. The meat is usually placed on a spit which is nothing but a vertical grill and roasted until the meat is cooked.`,
            short:``
        },
        {
            id: `3`,
            category: `food`,
            imageUrl: `https://images4.alphacoders.com/103/thumbbig-1033367.webp`,
            title: `Kebab`,
            date: `18 April 2022`,
            description: `Kebab is a dish consisting of small pieces of meat, tomatoes, onions, etc, threaded onto skewers and grilled, generally over charcoal. Also called: shish kebab, kabob or cabob n. small pieces of meat or seafood seasoned`,
            short:``
        },
        {
            id: `4`,
            category: `food`,
            imageUrl: `https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
            title: `Fish Fry`,
            date: `20 June 2022`,
            description: `Fish Fry is a simple and delicious dish of fish fry that is often made in Bengali households. The fish slices are shallow fried to make it healthy and flavoured it with tomato ketchup for an extra taste. You can make this recipe as a side dish along with your meal.`,
            short:``
        },
        {
            id: `5`,
            category: `food`,
            imageUrl: `https://images.pexels.com/photos/4078183/pexels-photo-4078183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
            title: `Cannoli`,
            date: `19 July 2022`,
            description: ` A Cannoli is a cream-filled pastry that tastes like a slice of heaven. Basically, it’s a deep-fried pastry shell stuffed with a sweet cream filling. Some would say it is the ultimate finger food!`,
            short:``
        }
    ])
    return (
        <ContextApi.Provider value={[data]}>
            {props.children}
        </ContextApi.Provider>
    )
}