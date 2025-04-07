import { Friend, Dater, MatchRecommendation } from "@/types/data";

const femaleBios = [
    "Dancing queen with a passion for salsa and bachata. Looking for a partner who can keep up with my rhythm on and off the dance floor! 💃",
    "Yoga instructor by day, stargazer by night. Seeking someone who values mindfulness and isn't afraid to try new poses with me. 🧘‍♀️",
    "Foodie adventurer collecting Michelin stars and hole-in-the-wall gems. Want to split a dessert and share travel stories? 🍰",
    "Book lover and cat mom with a weakness for dad jokes. If you can make me laugh and discuss Jane Austen in the same conversation, we'll get along great! 📚",
    "Adventure photographer always chasing sunsets. Looking for someone to share golden hour moments and spontaneous road trips. 📸",
    "Coffee connoisseur and morning person. Seeking someone who appreciates a good brew and early bird adventures! ☕",
    "Art gallery curator with a love for vintage fashion. Let's explore museums together and debate about modern art over wine. 🎨",
    "Professional baker with a sweet tooth and sweeter personality. Want to be my taste-tester for life? 🧁",
    "Marine biologist obsessed with ocean conservation. Looking for someone to share beach walks and save the turtles with! 🐢",
    "Classical pianist who loves rock concerts. Seeking someone who appreciates both Mozart and Metallica - bonus points if you play an instrument! 🎹"
];

const maleBios = [
    "Former rugby player turned chef. I'll cook you dinner and tell you stories from the field. Looking for someone to share my kitchen adventures! 🏉",
    "Mountain climbing enthusiast with a fear of spiders. Seeking a partner for both outdoor adventures and indoor movie marathons. 🏔️",
    "Tech startup founder who still writes love letters by hand. Looking for someone to disrupt the dating scene with! 💻",
    "Veterinarian with a dad-joke addiction. Warning: Will stop to pet every dog we see. Want to be my partner in crime? 🐕",
    "Architect by day, amateur astronomer by night. Seeking someone to build dreams with under the stars. 🌟",
    "Professional surfer who loves rainy days and good books. Looking for someone to share waves and stories with. 🏄‍♂️",
    "Jazz musician with a collection of vintage records. Let's dance to vinyl and make our own kind of music. 🎷",
    "Formula 1 engineer with a passion for slow cooking. Life is all about balance - seeking someone who gets that! 🏎️",
    "Wildlife photographer who makes a mean espresso. Looking for an adventure partner who appreciates both nature and caffeine. 📷",
    "Firefighter who writes poetry in my spare time. Seeking someone who values both strength and sensitivity. 🚒"
];

// Helper function to assign unique profile images
const assignProfileImages = (items: Array<{ id: string }>): Record<string, number> => {
    const imageNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
    const shuffledImages = [...imageNumbers].sort(() => Math.random() - 0.5);
    return items.reduce((acc, item, index) => {
        acc[item.id] = shuffledImages[index % 20];
        return acc;
    }, {} as Record<string, number>);
};

// Generate 20 unique match recommendations
const generateMatchRecommendations = (): MatchRecommendation[] => {
    const funnyNames = [
        "Captain Cupid", "Love Guru", "Match Master", "Heart Hunter", "Soul Seeker",
        "Romance Ranger", "Date Doctor", "Love Linguist", "Match Maker", "Heart Healer",
        "Cupid's Assistant", "Love Locator", "Soul Searcher", "Date Detective", "Match Medic",
        "Heart Helper", "Romance Rescuer", "Love Librarian", "Soul Scout", "Date Director"
    ];

    return funnyNames.map((name, index) => ({
        id: (index + 1).toString(),
        daterId: (index + 1).toString(),
        rankScore: Math.floor(Math.random() * (100 - 80) + 80),
        name: name,
        bio: index < 10 ? femaleBios[index] : maleBios[index - 10],
        image: (index + 1).toString()
    }));
};

// Generate 20 daters
const generateDaters = (): Dater[] => {
    const creativeNames = [
        "Alex Adventure", "Taylor Trailblazer", "Jordan Journey", "Casey Compass", "Riley Roamer",
        "Morgan Maverick", "Quinn Quest", "Skyler Scout", "Drew Discoverer", "Emerson Explorer",
        "Finley Frontier", "Harper Horizon", "Indigo Itinerant", "Jamie Journey", "Kai Keeper",
        "Logan Lighthouse", "Morgan Mountain", "Nova Navigator", "Ocean Odyssey", "Phoenix Pathfinder"
    ];

    const matchRecommendations = generateMatchRecommendations();
    const daters = creativeNames.map((name, index) => ({
        id: (index + 1).toString(),
        name,
        bio: index < 10 ? femaleBios[index] : maleBios[index - 10],
        matchRecommendations: matchRecommendations.slice(index * 2, (index + 1) * 2),
        matchExpirationHrs: Math.floor(Math.random() * 12) + 1,
        image: (index + 1).toString(),
        vestedScore: Math.floor(Math.random() * (100 - 70) + 70),
        friends: [], // Will be populated after friends are generated
        reviewingMatches: Math.floor(Math.random() * 5)
    }));

    return daters;
};

// Generate 5 friends
const generateFriends = (daters: Dater[]): Friend[] => {
    const friendNames = [
        "Bambi Beau", "Zoe Zenith", "Max Matchmaker", "Luna Lovegood", "Stella Star"
    ];

    const friends = friendNames.map((name, index) => {
        // Randomly select 0-2 invitations
        const numInvitations = Math.floor(Math.random() * 3); // 0, 1, or 2
        const invitedBy = daters.slice(0, numInvitations);
        
        // Randomly select 1-6 daters, excluding those who are invited
        const invitedDaterIds = new Set(invitedBy.map(d => d.id));
        const availableDaters = daters.filter(d => !invitedDaterIds.has(d.id));
        const numDaters = Math.floor(Math.random() * 6) + 1; // 1-6
        const assignedDaters = [...availableDaters]
            .sort(() => Math.random() - 0.5) // Shuffle the daters
            .slice(0, numDaters); // Take the first numDaters
        
        return {
            id: (index + 1).toString(),
            name,
            vestedScore: Math.floor(Math.random() * (100 - 70) + 70),
            invitedBy,
            daters: assignedDaters,
            image: (index + 21).toString() // Use images 21-25 for friends
        };
    });

    // Connect friends to daters
    friends.forEach(friend => {
        friend.daters.forEach(dater => {
            dater.friends.push(friend);
        });
    });

    return friends;
};

// Generate all data
const daters = generateDaters();
const friends = generateFriends(daters);

export const mockData = {
    daters,
    friends,
};

// Helper function to get a dater by ID
export const getDaterById = (id: string): Dater | undefined => {
    return mockData.daters.find(dater => dater.id === id);
};

// Helper function to get a friend by ID
export const getFriendById = (id: string): Friend | undefined => {
    return mockData.friends.find(friend => friend.id === id);
};

// Helper function to get image source
export const getProfileImage = (imageNumber: string) => {
    const images = {
        "1": require('@/assets/images/profiles/1.png'),
        "2": require('@/assets/images/profiles/2.png'),
        "3": require('@/assets/images/profiles/3.png'),
        "4": require('@/assets/images/profiles/4.png'),
        "5": require('@/assets/images/profiles/5.png'),
        "6": require('@/assets/images/profiles/6.png'),
        "7": require('@/assets/images/profiles/7.png'),
        "8": require('@/assets/images/profiles/8.png'),
        "9": require('@/assets/images/profiles/9.png'),
        "10": require('@/assets/images/profiles/10.png'),
        "11": require('@/assets/images/profiles/11.png'),
        "12": require('@/assets/images/profiles/12.png'),
        "13": require('@/assets/images/profiles/13.png'),
        "14": require('@/assets/images/profiles/14.png'),
        "15": require('@/assets/images/profiles/15.png'),
        "16": require('@/assets/images/profiles/16.png'),
        "17": require('@/assets/images/profiles/17.png'),
        "18": require('@/assets/images/profiles/18.png'),
        "19": require('@/assets/images/profiles/19.png'),
        "20": require('@/assets/images/profiles/20.png')
    };
    return images[imageNumber as keyof typeof images] || require('@/assets/images/profiles/1.png');
}; 