import vivah from "../assets/service-vivah.jpg";
import griha from "../assets/service-griha.jpg";
import ganesh from "../assets/service-ganesh.jpg";
import lakshmi from "../assets/service-lakshmi.jpg";
import rudra from "../assets/service-rudra.jpg";
import navgraha from "../assets/service-navgraha.jpg";
import naamkaran from "../assets/service-naamkaran.jpg";
import satyanarayan from "../assets/service-satyanarayan.jpg";
import bhoomi from "../assets/service-bhoomi.jpg";
import mundan from "../assets/service-mundan.jpg";

import kaalSarp from "../assets/pujas/kaal-sarp-dosh.jpg";
import mahaMrityunjay from "../assets/pujas/maha-mrityunjay-jaap.jpg";
import narayanBali from "../assets/pujas/narayan-bali-puja.jpg";
import pindDaan from "../assets/pujas/pind-daan-puja.jpg";
import tarpan from "../assets/pujas/tarpan-puja.jpg";
import ganeshGauri from "../assets/pujas/ganesh-gauri-puja.jpg";
import shradhPuja from "../assets/pujas/shradh-puja.jpg";
import pitruDoshNivaran from "../assets/pujas/pitru-dosh-nivaran-puja.jpg";
import gangaPuja from "../assets/pujas/ganga-puja.jpg";
import mangalDoshNivaran from "../assets/pujas/mangal-dosh-nivaran-puja.jpg";
import abhishekPuja from "../assets/pujas/abhishek-puja.jpg";
import dhwajaPuja from "../assets/pujas/dhwaja-puja.jpg";


export const PUJAS = [
      {
    slug: "satyanarayan",
    name: "Satyanarayan Puja",
    sanskrit: "श्री सत्यनारायण पूजा",
    category: "Vedic Ceremony",
    popular: true,
    image: satyanarayan,
    tagline: "Invoke truth, abundance & divine blessings of Lord Vishnu.",
    intro:
      "The Satyanarayan Puja is one of the most beloved Vedic rituals, performed to seek the blessings of Lord Vishnu in his form as the embodiment of eternal truth. It brings prosperity, peace, and harmony to the household.",
    benefits: [
      "Removes obstacles and ushers prosperity",
      "Strengthens family bonds and harmony",
      "Fulfils sincere wishes and vows (Sankalp)",
      "Brings peace of mind and spiritual upliftment",
    ],
    importance:
      "Performed on Purnima or any auspicious day, this puja is a heartfelt offering of gratitude and devotion. The reading of the Satyanarayan Katha is the soul of the ceremony.",
    procedure: [
      { title: "Ganesh Sthapana", description: "Invocation of Lord Ganesha to remove obstacles." },
      { title: "Kalash & Navagraha Pujan", description: "Sanctification of sacred waters and planetary deities." },
      { title: "Satyanarayan Pujan", description: "Main worship of Lord Vishnu with shodashopachara." },
      { title: "Katha Recitation", description: "Narration of the five chapters of Satyanarayan Katha." },
      { title: "Aarti & Prasad", description: "Concluding aarti and distribution of sanctified prasad." },
    ],
    samagri: [
      "Roli, Akshat, Chandan",
      "Banana leaves & stems",
      "Panchamrit (milk, curd, ghee, honey, sugar)",
      "Tulsi leaves, Flowers, Dhoop",
      "Wheat flour, Sugar, Ghee for Panjiri prasad",
      "Coconut, Betel leaves & nuts",
    ],
    muhurat: "Purnima Tithi · Sunrise to 11:30 AM",
    faqs: [
      { q: "Can Satyanarayan Puja be performed any day?", a: "Yes, though Purnima and Sankashti days are considered most auspicious." },
      { q: "How many family members should be present?", a: "Ideally the householder couple, but any sincere devotee may sit for sankalp." },
      { q: "Is samagri provided by VHI Pandit?", a: "Yes — a complete premium samagri kit is included in the package." },
    ],
  },
  {
    slug: "griha-pravesh",
    name: "Griha Pravesh",
    sanskrit: "गृह प्रवेश पूजा",
    category: "Housewarming",
    popular: true,
    image: griha,
    tagline: "Sanctify your new home with Vedic blessings for prosperity & peace.",
    intro:
      "Griha Pravesh is the sacred housewarming ritual performed before entering a new home. It purifies the space, removes negative energies, and invites divine grace into every corner.",
    benefits: [
      "Purifies the home of Vastu doshas",
      "Invites prosperity, health & positivity",
      "Protects family from negative energies",
      "Establishes harmony in living spaces",
    ],
    importance:
      "Performed at an auspicious muhurat, this ritual aligns your home with cosmic energies as per Vastu Shastra and Vedic tradition.",
    procedure: [
      { title: "Kalash Sthapana at threshold", description: "Sanctifying the entrance with sacred water." },
      { title: "Ganesh & Navagraha Puja", description: "Invocation of obstacle-remover and planetary deities." },
      { title: "Vastu Shanti Havan", description: "Sacred fire ritual to purify the home." },
      { title: "Lakshmi Sthapana", description: "Establishment of the goddess of wealth." },
      { title: "Bhojan & Aashirwad", description: "Brahmin bhojan and blessings." },
    ],
    samagri: [
      "Copper Kalash with mango leaves",
      "Whole coconut, rice, turmeric",
      "Havan samagri & dry wood",
      "Camphor, ghee, sacred threads",
      "Idols of Ganesh & Lakshmi",
    ],
    muhurat: "Magha, Phalguna, Vaishakha months · Morning muhurat preferred",
    faqs: [
      { q: "Should Griha Pravesh be done before moving in?", a: "Yes, always perform before bringing in furniture or sleeping in the new home." },
      { q: "Do you provide Vastu consultation?", a: "Yes, our pandits offer complimentary Vastu advice during the ceremony." },
      { q: "How much space is required?", a: "A clean area near the entrance and a small puja space inside is sufficient." },
    ],
  },
  {
    slug: "ganesh",
    name: "Ganesh Puja",
    sanskrit: "श्री गणेश पूजा",
    category: "Deity Worship",
    popular: true,
        image: ganesh,
    tagline: "Remove obstacles and invoke wisdom of the elephant-headed Lord.",
    intro:
      "Lord Ganesha is worshipped first in every Hindu ritual. This dedicated puja invokes his blessings for new beginnings, success, and the removal of obstacles.",
    benefits: [
      "Removes obstacles in personal & professional life",
      "Brings wisdom, intelligence & success",
      "Ideal before any new venture or beginning",
      "Confers spiritual and material prosperity",
    ],
    importance: "Performed on Chaturthi or before any major life event or business launch.",
    procedure: [
      { title: "Sankalp", description: "Statement of intent and devotion." },
      { title: "Ganesh Avahan", description: "Invocation of the deity into the idol." },
      { title: "Shodashopachara Pujan", description: "Sixteen-step worship with offerings." },
      { title: "Modak Bhog", description: "Offering of Lord Ganesha's favourite sweet." },
      { title: "Aarti", description: "Concluding aarti with deepak." },
    ],
    samagri: ["Ganesh idol", "Modak & laddoo", "Durva grass", "Red flowers", "Sindoor", "Dhoop & deep"],
    muhurat: "Ganesh Chaturthi · Tuesday & Wednesday mornings",
    faqs: [
      { q: "Is Ganesh idol provided?", a: "Yes, a premium clay Ganesh idol is included." },
      { q: "Can it be done at office?", a: "Absolutely — Ganesh Puja is ideal for office & business inaugurations." },
      { q: "Duration of the puja?", a: "1.5 to 2 hours including katha and aarti." },
    ],
  },
  {
    slug: "lakshmi",
    name: "Lakshmi Puja",
    sanskrit: "श्री लक्ष्मी पूजा",
    category: "Wealth & Prosperity",
    popular: true,
    image: lakshmi,
    tagline: "Invite Goddess Lakshmi for abundance, wealth & prosperity.",
    intro:
      "Lakshmi Puja invokes the divine mother of wealth and prosperity. Especially performed on Diwali, Akshaya Tritiya, and Fridays.",
    benefits: ["Attracts wealth & financial abundance", "Brings prosperity to business", "Blessings of good fortune", "Removes financial obstacles"],
    importance: "Diwali night, Akshaya Tritiya, and Sharad Purnima are the most powerful days.",
    procedure: [
      { title: "Kalash Sthapana", description: "Sanctification of sacred vessel." },
      { title: "Lakshmi Avahan", description: "Invocation of the goddess." },
      { title: "Shri Sukta Path", description: "Recitation of the Vedic hymn to Lakshmi." },
      { title: "Kuber Pujan", description: "Worship of the treasurer of the gods." },
      { title: "Aarti & Bhog", description: "Concluding aarti and prasad." },
    ],
    samagri: ["Silver coins", "Lotus flowers", "Kheer & sweets", "Akhand jyoti diya", "Kumkum & haldi"],
    muhurat: "Pradosh Kaal on Diwali · Friday evenings",
    faqs: [
      { q: "Best time on Diwali?", a: "Pradosh Kaal with Sthir Lagna — pandit will share the exact muhurat for your location." },
      { q: "Is Kuber Pujan included?", a: "Yes, it is part of the complete Lakshmi-Kuber Pujan package." },
      { q: "Should we keep a diya overnight?", a: "Yes, the Akhand Jyoti should be kept lit through the night." },
    ],
  },
  {
    slug: "rudrabhishek",
    name: "Rudrabhishek",
    sanskrit: "रुद्राभिषेक",
    category: "Shiva Worship",
    popular: true,
    image: rudra,
    tagline: "Sacred abhishek of Lord Shiva with Vedic Rudra mantras.",
    intro:
      "Rudrabhishek is the divine bathing ritual of Lord Shiva accompanied by the chanting of Rudri Path. It is one of the most powerful Vedic ceremonies.",
    benefits: ["Removes ill effects of planets", "Cures chronic ailments", "Brings peace and spiritual elevation", "Fulfils sincere wishes"],
    importance: "Most powerful during Shravan month, Mahashivratri, and Mondays.",
    procedure: [
      { title: "Sankalp & Ganesh Pujan", description: "Beginning invocation." },
      { title: "Kalash Pujan", description: "Sanctification of abhishek waters." },
      { title: "Rudri Path", description: "Chanting of 11 chapters of Rudri." },
      { title: "Panchamrit Abhishek", description: "Bathing the lingam with five nectars." },
      { title: "Bilva Patra Arpan", description: "Offering of sacred bel leaves." },
    ],
    samagri: ["Shiva Lingam", "Bilva patra", "Panchamrit", "Gangajal", "Bhasma & Chandan", "White flowers"],
    muhurat: "Shravan Mondays · Pradosh Kaal · Mahashivratri",
    faqs: [
      { q: "How many pandits?", a: "Single Rudri by one pandit; Laghurudra requires 11 pandits." },
      { q: "Can it be done at home?", a: "Yes, a small sanctified space is enough." },
      { q: "Best day in the week?", a: "Monday and Pradosh Tithi are the most auspicious." },
    ],
  },
  {
    slug: "navgraha",
    name: "Navgraha Shanti",
    sanskrit: "नवग्रह शान्ति",
    category: "Astrology",
    popular: true,
    image: navgraha,
    tagline: "Pacify the nine planetary deities for harmony in life.",
    intro:
      "Navgraha Shanti is performed to balance the influence of the nine planets in your horoscope, removing doshas and bringing peace.",
    benefits: ["Reduces planetary doshas", "Improves career & relationships", "Removes Sade Sati effects", "Strengthens benefic planets"],
    importance: "Recommended after kundali analysis or during major life transitions.",
    procedure: [
      { title: "Kundali Analysis", description: "Brief reading of birth chart." },
      { title: "Navgraha Sthapana", description: "Establishing the nine planets." },
      { title: "Graha Mantra Japa", description: "Chanting of planetary mantras." },
      { title: "Havan", description: "Fire offerings for each planet." },
      { title: "Daan & Aashirwad", description: "Charity items and blessings." },
    ],
    samagri: ["9 colored cloths", "9 grains", "Navratna mala", "Havan samagri", "Ghee & samidha"],
    muhurat: "As per kundali · Sunrise muhurat preferred",
    faqs: [
      { q: "Do I need a kundali?", a: "Yes, please share birth details in advance." },
      { q: "How often should it be done?", a: "Once a year or during major dasha changes." },
      { q: "Is daan included?", a: "Pandit will guide you on appropriate charity items." },
    ],
  },
  {
    slug: "naamkaran",
    name: "Naamkaran Sanskar",
    sanskrit: "नामकरण संस्कार",
    category: "Child Ritual",
    popular: true,
    image: naamkaran,
    tagline: "The sacred naming ceremony of your new-born blessing.",
    intro:
      "Naamkaran is the fifth of the 16 Hindu sanskars, performed to bestow a name on the child as per the rashi from the birth nakshatra.",
    benefits: ["Bestows auspicious name as per nakshatra", "Invokes blessings of deities for child", "Welcomes child into Vedic tradition", "Family blessings & gathering"],
    importance: "Traditionally performed on the 11th or 12th day after birth.",
    procedure: [
      { title: "Sutak Nivritti", description: "Purification rituals." },
      { title: "Ganesh & Kalash Pujan", description: "Auspicious beginnings." },
      { title: "Nakshatra Pujan", description: "Worship of the child's birth star." },
      { title: "Naam Sanskar", description: "Whispering of the name in the child's ear." },
      { title: "Aashirwad", description: "Blessings from elders." },
    ],
    samagri: ["Honey & gold", "Silver thali", "Flowers & sweets", "Sacred threads"],
    muhurat: "11th, 12th, 16th or 32nd day · Shukla Paksha preferred",
    faqs: [
      { q: "Do you suggest names?", a: "Yes, we provide name suggestions based on the rashi-nakshatra." },
      { q: "Can grandparents perform parts?", a: "Yes, family participation is warmly encouraged." },
      { q: "Where is it performed?", a: "At home, in the room where the child sleeps." },
    ],
  },
  {
    slug: "mundan",
    name: "Mundan Sanskar",
    sanskrit: "मुण्डन संस्कार",
    category: "Child Ritual",
    popular: true,
    image: mundan,
    tagline: "First haircut ceremony — purification & long life for the child.",
    intro:
      "Mundan is the sacred ritual of the child's first haircut, believed to remove negativity from past lives and promote healthy hair growth and intellect.",
    benefits: ["Spiritual purification of the child", "Promotes healthy hair growth", "Boosts intellect & memory", "Family tradition continuation"],
    importance: "Performed in the 1st, 3rd, 5th, or 7th year of the child.",
    procedure: [
      { title: "Sankalp & Pujan", description: "Family takes the sankalp." },
      { title: "Havan", description: "Sacred fire is lit." },
      { title: "Mundan Kriya", description: "The first hair is removed ritually." },
      { title: "Snan", description: "Holy bath of the child." },
      { title: "Bhojan & Daan", description: "Bhojan and charity." },
    ],
    samagri: ["Havan samagri", "Sacred razor", "Gangajal", "Sweets & gifts"],
    muhurat: "Odd years · Shukla Paksha · Tuesdays avoided",
    faqs: [
      { q: "Do you arrange the barber?", a: "Family arranges the barber; pandit guides the ritual." },
      { q: "Can it be done at a temple?", a: "Yes — Tirupati, Haridwar, and local temples are popular." },
      { q: "Is havan mandatory?", a: "Recommended for the complete sanskar." },
    ],
  },
  {
    slug: "vivah",
    name: "Vivah Sanskar",
    sanskrit: "विवाह संस्कार",
    category: "Marriage",
    popular: true,
    image: vivah,
    tagline: "Complete Vedic wedding ceremony with traditional rituals.",
    intro:
      "The Vivah Sanskar is the sacred Vedic marriage ceremony binding two souls in a lifelong commitment witnessed by Agni and the cosmos.",
    benefits: ["Sacred Vedic union of two souls", "Blessings for harmonious married life", "Complete traditional rituals", "Family blessings & lineage continuation"],
    importance: "One of the most sacred of the 16 sanskars — the union performed under cosmic witness.",
    procedure: [
      { title: "Var Mala", description: "Garland exchange." },
      { title: "Madhuparka & Kanyadaan", description: "Sacred welcoming and giving of the bride." },
      { title: "Vivah Havan", description: "Sacred fire ceremony." },
      { title: "Panigrahan & Saptapadi", description: "Holding of hands and seven sacred steps." },
      { title: "Sindoor Daan & Aashirwad", description: "Application of sindoor and blessings." },
    ],
    samagri: ["Mandap setup guidance", "Complete havan samagri", "Mangalsutra & sindoor", "Sacred fire wood", "Garlands & flowers"],
    muhurat: "As per kundali matching · Shubh Lagna",
    faqs: [
      { q: "Is kundali matching included?", a: "Yes, complimentary kundali matching is provided." },
      { q: "Can you arrange mandap?", a: "Mandap setup is a separate premium add-on." },
      { q: "How many pandits?", a: "Senior pandit with two assistants for a complete ceremony." },
    ],
  },
  {
    
    slug: "bhoomi-pujan",
    name: "Bhoomi Pujan",
    sanskrit: "भूमि पूजन",
    category: "Foundation",
    popular: true,
    image: bhoomi,
    tagline: "Sanctify the earth before construction begins.",
    intro:
      "Bhoomi Pujan is the ground-breaking ceremony performed to seek permission from Bhumi Devi before constructing a building, home, or office.",
    benefits: ["Blessings of Bhumi Devi", "Removes Vastu doshas before construction", "Ensures smooth construction", "Prosperity in future of the structure"],
    importance: "Performed at the start of construction at an auspicious muhurat as per Vastu.",
    procedure: [
      { title: "Site Cleansing", description: "Purification of the chosen ground." },
      { title: "Kalash Sthapana", description: "Sacred vessel established at site." },
      { title: "Bhumi Devi Pujan", description: "Worship of mother earth." },
      { title: "Naag Devta Pujan", description: "Offerings to subterranean deities." },
      { title: "Foundation Stone", description: "Laying of the first stone with mantras." },
    ],
    samagri: ["Silver naag-naagin", "Copper kalash", "Coconut & whole grains", "Construction tools (symbolic)"],
    muhurat: "Shukla Paksha · Vastu approved days",
    faqs: [
      { q: "Vastu compliance?", a: "Pandit checks plot direction and gives Vastu guidance." },
      { q: "Can it be done for renovation?", a: "Yes, a small Bhoomi Pujan is recommended." },
      { q: "Best months?", a: "Magha, Phalguna, Vaishakha, Shravan are preferred." },
    ],
  },
  {
  slug: "kaal-sarp-dosh-puja",
  name: "Kaal Sarp Dosh Puja",
  sanskrit: "काल सर्प दोष पूजा",
  category: "Astrology",
  popular: true,
  image: kaalSarp,
  tagline: "Remove the ill effects of Kaal Sarp Dosh through authentic Vedic rituals.",

  intro:
    "Kaal Sarp Dosh Puja is performed to reduce the negative effects of Kaal Sarp Yoga in one's horoscope. The puja helps remove obstacles, brings peace, success, prosperity, and spiritual growth.",

  benefits: [
    "Removes Kaal Sarp Dosh effects",
    "Improves career and financial growth",
    "Brings peace and mental stability",
    "Removes obstacles in marriage and family life",
  ],

  importance:
    "This puja is highly recommended for people suffering from repeated failures, health issues, financial problems or unexplained obstacles due to Kaal Sarp Yoga.",

  procedure: [
    {
      title: "Ganesh Pujan",
      description: "Invocation of Lord Ganesha before beginning the ritual.",
    },
    {
      title: "Kalash Sthapana",
      description: "Installation of the sacred Kalash with Vedic mantras.",
    },
    {
      title: "Kaal Sarp Dosh Nivaran Puja",
      description: "Special worship and mantra chanting for Rahu and Ketu.",
    },
    {
      title: "Havan",
      description: "Sacred fire ritual for complete purification.",
    },
    {
      title: "Aarti & Blessings",
      description: "Final aarti followed by blessings from the Pandit Ji.",
    },
  ],

  samagri: [
    "Kalash",
    "Coconut",
    "Flowers",
    "Bilva Leaves",
    "Havan Samagri",
    "Gangajal",
    "Fruits",
    "Ghee",
  ],

  muhurat:
    "Performed according to Kundli and on auspicious days like Nag Panchami or suitable Rahu-Ketu Muhurat.",

  faqs: [
    {
      q: "Who should perform this puja?",
      a: "Anyone having Kaal Sarp Dosh in their horoscope or facing continuous obstacles.",
    },
    {
      q: "How long does the puja take?",
      a: "Usually between 2 to 3 hours depending on the rituals.",
    },
    {
      q: "Can it be performed at home?",
      a: "Yes, our experienced Pandit Ji can perform it at your home.",
    },
  ],
},
{
  slug: "maha-mrityunjay-jaap",
  name: "Maha Mrityunjay Jaap",
  sanskrit: "महामृत्युंजय जाप",
  category: "Shiva Worship",
  popular: true,
  image: mahaMrityunjay,
  tagline: "Seek Lord Shiva's divine blessings for health, protection and long life.",

  intro:
    "Maha Mrityunjay Jaap is one of the most powerful Vedic chants dedicated to Lord Shiva. It is performed for good health, protection from untimely death, peace of mind and spiritual growth.",

  benefits: [
    "Protection from negative energies",
    "Improves health and well-being",
    "Brings peace and positivity",
    "Removes fear and obstacles",
  ],

  importance:
    "The Maha Mrityunjay Mantra is known as the life-giving mantra and is highly recommended during difficult times.",

  procedure: [
    { title: "Ganesh Pujan", description: "Invocation of Lord Ganesha." },
    { title: "Kalash Sthapana", description: "Installation of the sacred Kalash." },
    { title: "Maha Mrityunjay Jaap", description: "Chanting of the sacred mantra." },
    { title: "Havan", description: "Sacred fire ritual." },
    { title: "Aarti", description: "Final prayers and blessings." },
  ],

  samagri: [
    "Bilva Leaves",
    "Gangajal",
    "Flowers",
    "Fruits",
    "Havan Samagri",
    "Ghee",
  ],

  muhurat: "Monday, Pradosh or Mahashivratri are considered highly auspicious.",

  faqs: [
    {
      q: "Who should perform this Jaap?",
      a: "Anyone seeking health, protection and spiritual strength.",
    },
    {
      q: "How long does the Jaap take?",
      a: "Usually around 2–3 hours.",
    },
    {
      q: "Can it be performed at home?",
      a: "Yes, our experienced Pandit Ji can perform it at your home.",
    },
  ],
},
{
  slug: "narayan-bali-puja",
  name: "Narayan Bali Puja",
  sanskrit: "नारायण बली पूजा",
  category: "Pitru Ritual",
  popular: false,
  image: narayanBali,
  tagline: "A sacred ritual for ancestral peace and Pitru Dosha removal.",

  intro:
    "Narayan Bali Puja is performed to provide peace to departed souls and remove Pitru Dosha according to Vedic traditions.",

  benefits: [
    "Peace for ancestors",
    "Removes Pitru Dosha",
    "Brings family harmony",
    "Removes obstacles in life",
  ],

  importance:
    "This ritual is highly recommended for families experiencing repeated difficulties due to ancestral karmic issues.",

  procedure: [
    { title: "Sankalp", description: "Sacred intention." },
    { title: "Ganesh Pujan", description: "Beginning with Lord Ganesha." },
    { title: "Narayan Bali Ritual", description: "Main Vedic ritual." },
    { title: "Havan", description: "Sacred fire ceremony." },
    { title: "Aashirwad", description: "Final blessings." },
  ],

  samagri: [
    "Kalash",
    "Flowers",
    "Til",
    "Rice",
    "Gangajal",
    "Havan Samagri",
  ],

  muhurat:
    "Performed according to family tradition and suitable tithi.",

  faqs: [
    {
      q: "Who should perform this puja?",
      a: "Families affected by Pitru Dosha.",
    },
    {
      q: "How much time does it take?",
      a: "Approximately 3–4 hours.",
    },
    {
      q: "Can it be performed at home?",
      a: "Yes.",
    },
  ],
},
{
  slug: "pind-daan-puja",
  name: "Pind Daan Puja",
  sanskrit: "पिंड दान पूजा",
  category: "Pitru Ritual",
  popular: false,
  image: pindDaan,
  tagline: "Offer prayers and respect to your ancestors through Vedic rituals.",

  intro:
    "Pind Daan is one of the most sacred rituals performed for the peace and salvation of departed ancestors.",

  benefits: [
    "Peace to departed souls",
    "Blessings of ancestors",
    "Family prosperity",
    "Spiritual satisfaction",
  ],

  importance:
    "Pind Daan is traditionally performed at sacred places or at home under the guidance of a qualified Pandit.",

  procedure: [
    { title: "Sankalp", description: "Beginning of the ritual." },
    { title: "Pind Preparation", description: "Preparation of sacred offerings." },
    { title: "Pind Daan", description: "Offering to ancestors." },
    { title: "Tarpan", description: "Water offerings." },
    { title: "Blessings", description: "Completion of ritual." },
  ],

  samagri: [
    "Rice",
    "Black Sesame",
    "Flowers",
    "Gangajal",
    "Kusha Grass",
  ],

  muhurat:
    "Pitru Paksha and Amavasya are considered highly auspicious.",

  faqs: [
    {
      q: "When should Pind Daan be performed?",
      a: "During Pitru Paksha or on Amavasya.",
    },
    {
      q: "Can it be performed at home?",
      a: "Yes.",
    },
    {
      q: "How long does it take?",
      a: "Usually 2–3 hours.",
    },
  ],
},
{
  slug: "tarpan-puja",
  name: "Tarpan Puja",
  sanskrit: "तर्पण पूजा",
  category: "Pitru Ritual",
  popular: false,
  image: tarpan,
  tagline: "Offer sacred water to ancestors and seek their blessings.",

  intro:
    "Tarpan Puja is performed to express gratitude towards ancestors and seek their divine blessings through sacred water offerings.",

  benefits: [
    "Peace to ancestors",
    "Family happiness",
    "Removal of Pitru Dosha",
    "Spiritual harmony",
  ],

  importance:
    "Regular Tarpan is considered highly beneficial according to Hindu scriptures.",

  procedure: [
    { title: "Sankalp", description: "Sacred intention." },
    { title: "Ganesh Pujan", description: "Beginning worship." },
    { title: "Tarpan Ritual", description: "Offering of water with mantras." },
    { title: "Prayer", description: "Seeking blessings." },
    { title: "Aarti", description: "Completion of the ritual." },
  ],

  samagri: [
    "Gangajal",
    "Black Sesame",
    "Rice",
    "Flowers",
    "Kusha Grass",
  ],

  muhurat:
    "Amavasya and Pitru Paksha are considered the most auspicious.",

  faqs: [
    {
      q: "Why is Tarpan performed?",
      a: "To honor and satisfy ancestors.",
    },
    {
      q: "Can it be done every year?",
      a: "Yes.",
    },
    {
      q: "Can it be performed at home?",
      a: "Yes, by a qualified Pandit Ji.",
    },
  ],

},
{
  slug: "ganesh-gauri-puja",
  name: "Ganesh Gauri Puja",
  sanskrit: "गणेश गौरी पूजा",
  category: "Deity Worship",
  popular: false,
  image: ganeshGauri,
  tagline: "Seek the divine blessings of Lord Ganesha and Goddess Gauri for prosperity, happiness and family well-being.",

  intro:
    "Ganesh Gauri Puja is a sacred Vedic ritual dedicated to Lord Ganesha and Goddess Gauri. It is performed for prosperity, marital harmony, family happiness and the removal of obstacles from life.",

  benefits: [
    "Removes obstacles from life",
    "Brings prosperity and success",
    "Strengthens family relationships",
    "Blessings for marriage and children",
  ],

  importance:
    "This puja is considered highly auspicious during Ganesh Chaturthi, Hartalika Teej and other sacred occasions for invoking the blessings of Lord Ganesha and Maa Gauri.",

  procedure: [
    {
      title: "Ganesh Avahan",
      description: "Invocation of Lord Ganesha and Goddess Gauri.",
    },
    {
      title: "Kalash Sthapana",
      description: "Installation of the sacred Kalash.",
    },
    {
      title: "Main Puja",
      description: "Offerings of flowers, fruits, sweets and sacred mantras.",
    },
    {
      title: "Aarti",
      description: "Sacred aarti and devotional prayers.",
    },
    {
      title: "Prasad Distribution",
      description: "Distribution of blessed prasad among family members.",
    },
  ],

  samagri: [
    "Ganesh Idol",
    "Gauri Idol",
    "Kalash",
    "Flowers",
    "Coconut",
    "Fruits",
    "Modak",
    "Durva Grass",
    "Incense",
    "Ghee Lamp",
  ],

  muhurat:
    "Best performed during Ganesh Chaturthi, Hartalika Teej or any auspicious muhurat suggested by the Pandit.",

  faqs: [
    {
      q: "Who should perform Ganesh Gauri Puja?",
      a: "Anyone seeking prosperity, family happiness and removal of obstacles.",
    },
    {
      q: "Can this puja be performed at home?",
      a: "Yes, our experienced Pandit Ji can perform it at your home.",
    },
    {
      q: "How long does the puja take?",
      a: "Usually between 2 to 3 hours.",
    },
  ],
},
{
  slug: "shradh-puja",
  name: "Shradh Puja",
  sanskrit: "श्राद्ध पूजा",
  category: "Pitru Ritual",
  popular: false,
  image: shradhPuja,
  tagline: "Honor your ancestors with sacred Shradh rituals for peace, blessings and family prosperity.",

  intro:
    "Shradh Puja is a sacred Hindu ritual performed to pay respect to departed ancestors. It is believed to bring peace to the souls of forefathers while blessing the family with happiness, prosperity and spiritual harmony.",

  benefits: [
    "Peace and salvation for ancestors",
    "Removes Pitru Dosha",
    "Brings family harmony",
    "Attracts ancestral blessings",
  ],

  importance:
    "Shradh Puja is traditionally performed during Pitru Paksha, Amavasya or the annual death anniversary of ancestors according to Vedic traditions.",

  procedure: [
    {
      title: "Sankalp",
      description: "Resolve to perform the sacred Shradh ritual.",
    },
    {
      title: "Ganesh Pujan",
      description: "Invocation of Lord Ganesha for an obstacle-free ceremony.",
    },
    {
      title: "Pind Daan & Tarpan",
      description: "Offerings made for the peace of departed souls.",
    },
    {
      title: "Brahmin Bhojan",
      description: "Offering food and donations to Brahmins.",
    },
    {
      title: "Aashirwad",
      description: "Completion of the ritual with blessings.",
    },
  ],

  samagri: [
    "Kusha Grass",
    "Black Sesame",
    "Rice",
    "Flowers",
    "Gangajal",
    "Pind Samagri",
    "Fruits",
    "Dakshina",
  ],

  muhurat:
    "Best performed during Pitru Paksha, Amavasya or on the ancestor's annual Shradh date.",

  faqs: [
    {
      q: "When should Shradh Puja be performed?",
      a: "During Pitru Paksha or on the annual death anniversary of ancestors.",
    },
    {
      q: "Can Shradh Puja be performed at home?",
      a: "Yes, our experienced Pandit Ji can perform it at your home.",
    },
    {
      q: "How long does the puja take?",
      a: "Usually 2 to 4 hours depending on the rituals.",
    },
  ],
},
{
  slug: "pitru-dosh-nivaran-puja",
  name: "Pitru Dosh Nivaran Puja",
  sanskrit: "पितृ दोष निवारण पूजा",
  category: "Pitru Ritual",
  popular: false,
  image: pitruDoshNivaran,
  tagline: "Remove Pitru Dosha and receive the divine blessings of your ancestors for peace and prosperity.",

  intro:
    "Pitru Dosh Nivaran Puja is a sacred Vedic ritual performed to pacify ancestral karmic debts and remove Pitru Dosha. It helps bring peace to departed souls while blessing the family with happiness, health and success.",

  benefits: [
    "Removes Pitru Dosha",
    "Brings ancestral blessings",
    "Improves family harmony",
    "Removes obstacles in career and marriage",
  ],

  importance:
    "According to Vedic astrology, this puja is highly recommended for people facing repeated obstacles, family disputes or ancestral karmic issues.",

  procedure: [
    {
      title: "Sankalp",
      description: "Sacred resolve for the ritual.",
    },
    {
      title: "Ganesh Pujan",
      description: "Invocation of Lord Ganesha.",
    },
    {
      title: "Pitru Tarpan",
      description: "Offerings made to departed ancestors.",
    },
    {
      title: "Pitru Dosh Nivaran Havan",
      description: "Sacred fire ritual with Vedic mantras.",
    },
    {
      title: "Aashirwad",
      description: "Completion of the puja with blessings.",
    },
  ],

  samagri: [
    "Gangajal",
    "Black Sesame",
    "Kusha Grass",
    "Rice",
    "Flowers",
    "Fruits",
    "Havan Samagri",
    "Ghee",
  ],

  muhurat:
    "Best performed during Pitru Paksha, Amavasya or on an astrologically recommended date.",

  faqs: [
    {
      q: "Who should perform Pitru Dosh Nivaran Puja?",
      a: "Anyone suffering from Pitru Dosha or recurring family and life obstacles.",
    },
    {
      q: "Can this puja be performed at home?",
      a: "Yes, our experienced Pandit Ji can perform it at your home.",
    },
    {
      q: "How long does the puja take?",
      a: "Usually between 3 to 4 hours.",
    },
  ],
},
{
  slug: "ganga-puja",
  name: "Ganga Puja",
  sanskrit: "गंगा पूजा",
  category: "Deity Worship",
  popular: false,
  image: gangaPuja,
  tagline:
    "Seek the divine blessings of Maa Ganga for purity, prosperity and spiritual peace.",

  intro:
    "Ganga Puja is a sacred Vedic ritual dedicated to Maa Ganga. It is performed for purification of mind, body and soul, removal of sins and to receive divine blessings for health, prosperity and family happiness.",

  benefits: [
    "Purifies mind and soul",
    "Removes negative energies",
    "Brings peace and prosperity",
    "Blessings of Maa Ganga",
  ],

  importance:
    "According to Hindu scriptures, worshipping Maa Ganga removes past karmic impurities and blesses devotees with happiness, success and spiritual upliftment.",

  procedure: [
    {
      title: "Ganesh Pujan",
      description: "Invocation of Lord Ganesha.",
    },
    {
      title: "Kalash Sthapana",
      description: "Establishment of the sacred Kalash.",
    },
    {
      title: "Ganga Avahan",
      description: "Invocation of Maa Ganga through Vedic mantras.",
    },
    {
      title: "Pushpa & Deep Arpan",
      description: "Offering flowers, lamp and sacred prayers.",
    },
    {
      title: "Aarti",
      description: "Final worship followed by blessings.",
    },
  ],

  samagri: [
    "Gangajal",
    "Kalash",
    "Flowers",
    "Coconut",
    "Incense",
    "Ghee Lamp",
    "Fruits",
    "Prasad",
  ],

  muhurat:
    "Best performed on Ganga Dussehra, Kartik Purnima, Makar Sankranti or any auspicious muhurat suggested by the Pandit.",

  faqs: [
    {
      q: "Who should perform Ganga Puja?",
      a: "Anyone seeking purity, peace and divine blessings of Maa Ganga.",
    },
    {
      q: "Can Ganga Puja be performed at home?",
      a: "Yes, our experienced Pandit Ji can perform it at your home.",
    },
    {
      q: "How long does the puja take?",
      a: "Usually 2 to 3 hours.",
    },
  ],
},
{
  slug: "mangal-dosh-nivaran-puja",
  name: "Mangal Dosh Nivaran Puja",
  sanskrit: "मंगल दोष निवारण पूजा",
  category: "Astrology",
  popular: false,
  image: mangalDoshNivaran,
  tagline:
    "Remove Mangal Dosha and invite harmony, prosperity and a successful married life.",

  intro:
    "Mangal Dosh Nivaran Puja is performed to reduce the malefic effects of Mars (Mangal Graha). This sacred Vedic ritual helps remove obstacles related to marriage, relationships, career and family life while bringing peace and prosperity.",

  benefits: [
    "Reduces Mangal Dosha effects",
    "Removes marriage obstacles",
    "Brings harmony in relationships",
    "Improves health and prosperity",
  ],

  importance:
    "According to Vedic Astrology, this puja is highly beneficial for individuals suffering from Manglik Dosha and those facing repeated delays in marriage or family problems.",

  procedure: [
    {
      title: "Ganesh Pujan",
      description: "Invocation of Lord Ganesha.",
    },
    {
      title: "Navagraha Pujan",
      description: "Worship of all nine planets.",
    },
    {
      title: "Mangal Graha Shanti",
      description: "Special prayers for Mars.",
    },
    {
      title: "Havan",
      description: "Sacred fire ritual with Vedic mantras.",
    },
    {
      title: "Aarti",
      description: "Final prayers and blessings.",
    },
  ],

  samagri: [
    "Red Flowers",
    "Red Cloth",
    "Kalash",
    "Coconut",
    "Navagraha Samagri",
    "Havan Samagri",
    "Ghee",
    "Fruits",
  ],

  muhurat:
    "Best performed on Tuesday or on an astrologically recommended auspicious muhurat.",

  faqs: [
    {
      q: "Who should perform this puja?",
      a: "Anyone suffering from Mangal Dosha or facing marriage-related obstacles.",
    },
    {
      q: "Can it be performed at home?",
      a: "Yes, our experienced Pandit Ji can perform it at your home.",
    },
    {
      q: "How long does the puja take?",
      a: "Usually between 2 to 3 hours.",
    },
  ],
},
{
  slug: "abhishek-puja",
  name: "Abhishek Puja",
  sanskrit: "अभिषेक पूजा",
  category: "Deity Worship",
  popular: false,
  image: abhishekPuja,
  tagline:
    "Receive divine blessings through the sacred Abhishek ritual for peace, prosperity and spiritual growth.",

  intro:
    "Abhishek Puja is a sacred Vedic ritual in which holy substances such as milk, curd, honey, ghee, Gangajal and Panchamrit are offered to the deity while chanting powerful Vedic mantras. It brings divine grace, positivity and spiritual purification.",

  benefits: [
    "Removes negative energies",
    "Brings peace and prosperity",
    "Fulfills wishes and desires",
    "Blessings of the presiding deity",
  ],

  importance:
    "Abhishek is one of the most auspicious forms of worship in Sanatan Dharma and is performed for health, success, happiness and spiritual progress.",

  procedure: [
    {
      title: "Ganesh Pujan",
      description: "Invocation of Lord Ganesha.",
    },
    {
      title: "Kalash Sthapana",
      description: "Installation of the sacred Kalash.",
    },
    {
      title: "Abhishek Ritual",
      description: "Holy bathing of the deity with Panchamrit and sacred offerings.",
    },
    {
      title: "Mantra Jaap",
      description: "Recitation of Vedic mantras and prayers.",
    },
    {
      title: "Aarti",
      description: "Final worship and distribution of Prasad.",
    },
  ],

  samagri: [
    "Gangajal",
    "Milk",
    "Curd",
    "Honey",
    "Ghee",
    "Sugar",
    "Flowers",
    "Fruits",
    "Incense",
    "Coconut",
  ],

  muhurat:
    "Can be performed on Mondays, festivals or any auspicious muhurat suggested by the Pandit.",

  faqs: [
    {
      q: "Which deity can Abhishek Puja be performed for?",
      a: "It can be performed for Lord Shiva, Vishnu, Ganesha, Durga and other deities.",
    },
    {
      q: "Can Abhishek Puja be performed at home?",
      a: "Yes, our experienced Pandit Ji can perform it at your home.",
    },
    {
      q: "How long does the puja take?",
      a: "Usually between 2 to 3 hours.",
    },
  ],
},
{
  slug: "dhwaja-puja",
  name: "Dhwaja Puja",
  sanskrit: "ध्वजा पूजा",
  category: "Temple Ritual",
  popular: false,
  image: dhwajaPuja,
  tagline:
    "Seek divine blessings through the sacred Dhwaja Puja for protection, success and spiritual prosperity.",

  intro:
    "Dhwaja Puja is a sacred Vedic ritual performed to worship the holy flag (Dhwaja), symbolizing victory, divine protection and devotion. It is commonly performed in temples, homes and during religious ceremonies to invoke positive energy and the blessings of the Almighty.",

  benefits: [
    "Brings divine protection",
    "Removes negative energies",
    "Ensures success and prosperity",
    "Promotes spiritual growth and peace",
  ],

  importance:
    "According to Hindu tradition, the sacred Dhwaja represents the presence of divine energy. Performing Dhwaja Puja strengthens faith, removes obstacles and attracts positive vibrations.",

  procedure: [
    {
      title: "Ganesh Pujan",
      description: "Invocation of Lord Ganesha.",
    },
    {
      title: "Kalash Sthapana",
      description: "Establishment of the sacred Kalash.",
    },
    {
      title: "Dhwaja Sthapana",
      description: "Installation and worship of the sacred flag.",
    },
    {
      title: "Mantra Jaap",
      description: "Recitation of Vedic hymns and prayers.",
    },
    {
      title: "Aarti",
      description: "Final worship followed by blessings and Prasad distribution.",
    },
  ],

  samagri: [
    "Sacred Dhwaja",
    "Kalash",
    "Flowers",
    "Coconut",
    "Fruits",
    "Incense",
    "Camphor",
    "Ghee Lamp",
    "Akshat",
    "Kumkum",
  ],

  muhurat:
    "Best performed during temple festivals, religious ceremonies or on an auspicious muhurat suggested by the Pandit.",

  faqs: [
    {
      q: "Why is Dhwaja Puja performed?",
      a: "It is performed to seek divine protection, victory and prosperity.",
    },
    {
      q: "Can Dhwaja Puja be performed at home?",
      a: "Yes, our experienced Pandit Ji can perform it at your home or temple.",
    },
    {
      q: "How long does the puja take?",
      a: "Usually between 1.5 to 2.5 hours.",
    },
  ],
},
];

export const getPuja = (slug) =>
  PUJAS.find((p) => p.slug === slug);