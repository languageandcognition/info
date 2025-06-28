export const multilingualChars = [
  // Devanagari
  "अ",
  "आ",
  "इ",
  "ई",
  "उ",
  "ऊ",
  "ए",
  "ऐ",
  "ओ",
  "औ",
  "क",
  "ख",
  "ग",
  "घ",
  "ङ",
  "च",
  "छ",
  "ज",
  "झ",
  "ञ",
  "ट",
  "ठ",
  "ड",
  "ढ",
  "ण",
  "त",
  "थ",
  "द",
  "ध",
  "न",
  "प",
  "फ",
  "ब",
  "भ",
  "म",
  "य",
  "र",
  "ल",
  "व",
  "श",
  "ष",
  "स",
  "ह",
  "क्ष",
  "त्र",
  "ज्ञ",

  // Tamil
  "அ",
  "ஆ",
  "இ",
  "ஈ",
  "உ",
  "ஊ",
  "எ",
  "ஏ",
  "ஐ",
  "ஒ",
  "ஓ",
  "ஔ",
  "க",
  "ங",
  "ச",
  "ஞ",
  "ட",
  "ண",
  "த",
  "ன",
  "ப",
  "ம",
  "ய",
  "ர",
  "ல",
  "வ",
  "ழ",
  "ள",
  "ற",
  "ன",

  // Telugu
  "అ",
  "ఆ",
  "ఇ",
  "ఈ",
  "ఉ",
  "ఊ",
  "ఋ",
  "ౠ",
  "ఌ",
  "ౡ",
  "ఎ",
  "ఏ",
  "ఐ",
  "ఒ",
  "ఓ",
  "ఔ",
  "క",
  "ఖ",
  "గ",
  "ఘ",
  "ఙ",
  "చ",
  "ছ",
  "జ",
  "ఝ",
  "ఞ",
  "ట",
  "ఠ",
  "డ",
  "ఢ",

  // Bengali
  "অ",
  "আ",
  "ই",
  "ঈ",
  "উ",
  "ঊ",
  "ঋ",
  "ৠ",
  "ঌ",
  "ৡ",
  "এ",
  "ঐ",
  "ও",
  "ঔ",
  "ক",
  "খ",
  "গ",
  "ঘ",
  "ঙ",
  "চ",
  "ছ",
  "জ",
  "ঝ",
  "ঞ",
  "ট",
  "ঠ",
  "ড",
  "ঢ",
  "ণ",
  "ত",

  // Malayalam
  "അ",
  "ആ",
  "ഇ",
  "ഈ",
  "ഉ",
  "ഊ",
  "ഋ",
  "ൠ",
  "ഌ",
  "ൡ",
  "എ",
  "ഏ",
  "ഐ",
  "ഒ",
  "ഓ",
  "ഔ",
  "ക",
  "ഖ",
  "ഗ",
  "ഘ",
  "ങ",
  "ച",
  "ഛ",
  "ജ",
  "ഝ",
  "ഞ",
  "ട",
  "ഠ",
  "ഡ",
  "ഢ",

  // Gujarati
  "અ",
  "આ",
  "ઇ",
  "ઈ",
  "ઉ",
  "ઊ",
  "ઋ",
  "ૠ",
  "ઌ",
  "ૡ",
  "એ",
  "ઐ",
  "ઓ",
  "ઔ",
  "ક",
  "ખ",
  "ગ",
  "ઘ",
  "ઙ",
  "ચ",
  "છ",
  "જ",
  "ઝ",
  "ઞ",
  "ટ",
  "ઠ",
  "ડ",
  "ઢ",
  "ણ",
  "ત",

  // Arabic/Urdu
  "ا",
  "ب",
  "پ",
  "ت",
  "ٹ",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ڈ",
  "ذ",
  "ر",
  "ڑ",
  "ز",
  "ژ",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ک",
  "گ",
  "ل",

  // Latin characters for comparison
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

// Team data interfaces
export interface TeamMember {
  name: string
  role: string
  research: string
  image: string
  email?: string
}

export interface PrincipalInvestigator extends TeamMember {
  title: string
  interests: string
}

// Principal Investigator
export const principalInvestigator: PrincipalInvestigator = {
  name: "Dr. Anindita Sahoo",
  role: "Principal Investigator",
  title: "Assistant Professor, Department of Humanities and Social Sciences, IIT Madras",
  interests: "Syntax, Pragmatics, Language Processing, Eye-tracking, Cognition Studies",
  research: "Leading research in cross-linguistic syntax and cognitive processing",
  image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749377865/ani_llz6al.jpg",
  email: "anindita@iitm.ac.in",
}

// Team members
export const teamMembers: TeamMember[] = [
  {
    name: "Aziza Said Hussain",
    role: "PhD Scholar",
    research: "Copula in Swahili: Pragmatic Functions and Grammaticalization Process",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749993811/aziza_abph42.png",
  },
  {
    name: "Snigdha Medhi",
    role: "PhD Scholar",
    research: "Patterns of Ergativity in Assamese, and Its Varieties",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/c_crop,ar_1:1/v1749980338/snigdha_l7hcie.png",
  },
  {
    name: "Gunti Prem Sagar",
    role: "PhD Scholar",
    research: "Syntactic Patterns of Non-Verbal Predication in Select Dravidian Languages",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749980336/prem_bzpanw.png",
  },
  {
    name: "Krishna Raj SR",
    role: "PhD Scholar",
    research: "From pixels to prepositions: Linking Vision and Spatial Prepositions",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQGZ7J-NDl5ZzA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1656983904228?e=1755129600&v=beta&t=e-mEsTKDvdS9Ba0LzZdqxFDtSGgHYUC_gzXBfC4bmkM",
  },
  {
    name: "Scherezade Dastur",
    role: "PhD Scholar",
    research: "Code Alternation in Parsi Gujarati and English: An Interactional Linguistics Approach",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/c_crop,ar_1:1/v1749980337/scheri_x6vo2x.png",
  },
  {
    name: "Pratiti Palit",
    role: "PhD Scholar",
    research: "On the Interaction of Honorification, Copula and Definiteness: A Variationist Approach",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749980336/pratiti_amhwlv.jpg",
  },
  {
    name: "Ruby George",
    role: "PhD Scholar",
    research:
      "Persuasion in Public Service Advertising: Creating Changes Through Creative Strategies in the Print Media",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749980336/ruby_l2mqos.jpg",
  },
]

// Research projects
export const researchProjects = [
  {
    title: "Morphosyntax and Discourse Pragmatics",
    description:
        "An extensive study of linguistic constructions in South Asian languages, examining the interface between morphosyntactic structures and discourse-pragmatic functions.",
    sponsor: "Indian Institute of Technology Madras, Chennai",
    year: "2021-2024"
  },
  {
    title: "Copula Constructions in Indo-Aryan Languages",
    description:
        "A detailed investigation of copula constructions from typological and discourse pragmatic perspectives, focusing on variation patterns across Indo-Aryan language families.",
    sponsor: "Indian Institute of Technology Madras, Chennai",
    year: "2022-2025"
  },
  {
    title: "Detection & Quantification of Gender Bias in Official Text",
    description:
        "An innovative study examining gender bias in academic and official communications within the Indian academic setting using computational linguistics and corpus analysis methods.",
    sponsor: "American Express",
    year: "2023"
  },
  {
    title: "Navigating Grammatical Voice to Explore Communication Strategies",
    description:
        "A cross-linguistic study of select Indo-Aryan and Dravidian languages examining how grammatical voice systems facilitate different communication strategies across diverse linguistic communities.",
    sponsor: "Indian Council of Social Science Research (ICSSR), New Delhi",
    year: "2023-2026"
  },
  {
    title: "Skilling the Unskilled and the Less Skilled",
    description:
        "A comprehensive need analysis study focusing on skill development requirements in the context of Odisha, examining linguistic and cognitive barriers to effective training programs.",
    sponsor: "Aspire Infolabs, Hyderabad",
    year: "2024-2025"
  },
  {
    title: "Climate Change, Language Vulnerability, and Culture Death",
    description:
        "A critical case study examining the impact of climate change on linguistic diversity and cultural preservation in the Eastern coastal region of India under warming scenarios.",
    sponsor: "Indian Institute of Technology Madras, Chennai",
    year: "2024-2027"
  }
];

// Publications
export const publications = [
  {
    title: "Yes-no Questions: Probing the Structures of Indian English",
    authors: ["Sahoo A.", "Chandra P."],
    journal: "31st All India Conference of Linguistics",
    year: "2009",
    publisher: "Hyderabad Central University"
  },
  {
    title: "Gradience In ditransitives and morphological specifities: The case Of Oriya",
    authors: ["Chandra P.", "Sahoo A."],
    journal: "AICL-32 Conference Proceedings",
    year: "2010",
    publisher: "Linguistic Society of India"
  },
  {
    title: "Odia passives with ditransitives",
    authors: ["Sahoo A."],
    journal: "LAEL-5 PG Conference Proceedings",
    year: "2010",
    publisher: "Lancaster University, Lancaster, UK"
  },
  {
    title: "Passives in South Asian Languages: Some Typological Puzzles",
    authors: ["Chandra P.", "Sahoo A."],
    journal: "Acta Linguistica Asiatica",
    volume: "3(1)",
    year: "2013",
    publisher: "University of Ljubljana, Slovenia"
  },
  {
    title: "Learning Puzzles with Indian English Tags",
    authors: ["Chandra P.", "Sahoo A."],
    journal: "Language and Language Teaching",
    volume: "3(2)",
    year: "2014",
    publisher: "Azim Premji University and Vidya Bhavan Society"
  },
  {
    title: "Ditransitive Active-passives in Malayalam: A brief note",
    authors: ["Chandra P.", "Sahoo A."],
    journal: "International Journal of Dravidian Linguistics",
    volume: "44(1)",
    year: "2015",
    publisher: "Dravidian Linguistics Association"
  },
  {
    title: "Non-Active Voices in South Asian Languages",
    authors: ["Chandra P.", "Kaur G.", "Sahoo A."],
    journal: "Passives Cross-Linguistically",
    publisher: "Leiden: Brill",
    year: "2021"
  },
  {
    title: "Evoking Emotions and Eliciting Heart-Felt Responses through Exclamatives: Unravelling the Potential of 'aiyyoo' in the English Language",
    authors: ["George R.", "Sahoo A."],
    journal: "English Linguistics Research",
    volume: "13(1)",
    year: "2024"
  },
  {
    title: "From Pixels to Prepositions: Linking Visual Perception with Spatial Prepositions Far and Near",
    authors: ["Raj S. R. K.", "Chakravarthy V. S.", "Sahoo A."],
    journal: "Cognitive Computation",
    year: "2024",
    doi: "10.1007/s12559-024-10329-6"
  },
  {
    title: "Versatile copulas and their stance-marking uses in conversational Odia, an Indo-Aryan language",
    authors: ["Yap F. H.", "Sahoo A."],
    journal: "Lingua",
    volume: "297",
    year: "2024",
    link: "https://tech-talk.iitm.ac.in/treading-the-territories-of-copulas/"
  }
];

// Conferences
export const conferences = [
  {
    title: "Yes-no Questions: Probing the Structures of Indian English",
    authors: ["Anindita Sahoo", "Pritha Chandra"],
    conference: "31st All India Conference of Linguistics",
    organizer: "Hyderabad Central University",
    location: "Hyderabad, India",
    date: "15th to 17th Dec 2009"
  },
  {
    title: "Oriya Passives with Ditransitives",
    authors: ["Anindita Sahoo"],
    conference: "Lancaster Post Graduate Conference",
    organizer: "Lancaster University",
    location: "Lancaster, UK",
    date: "5th Jul 2010"
  },
  {
    title: "Gradience In Ditransitives and Morphological Specifities: The Case Of Oriya",
    authors: ["Anindita Sahoo", "Pritha Chandra"],
    conference: "All India Conference of Linguists",
    organizer: "Lucknow University",
    location: "Lucknow, India",
    date: "21st Dec 2010"
  },
  {
    title: "Scope Patterns in Oriya",
    authors: ["Anindita Sahoo", "Pritha Chandra"],
    conference: "South Asian Languages Analysis Roundtable 29",
    organizer: "CIIL",
    location: "Mysore, India",
    date: "6th to 9th Jan 2011"
  },
  {
    title: "Re-visiting the Principles of Reflexivization: A Study of Reflexives in Khasi",
    authors: ["Anindita Sahoo"],
    conference: "23rd Annual Meeting of the South East Asian Linguistics Society (SEALS 2013)",
    organizer: "Chulalongkorn University",
    location: "Bangkok, Thailand",
    date: "29th to 31st May 2013"
  },
  {
    title: "Error, or no error: An analysis",
    authors: ["Anindita Sahoo"],
    conference: "8th Students Conference of Linguistics in India (SCONLI 8)",
    organizer: "Kashmir University",
    location: "Srinagar, India",
    date: "24th to 26th Mar 2014"
  },
  {
    title: "The development of copulas and their functions: A typological perspective",
    authors: ["Foong Ha Yap", "Abhishek Kumar Kashyap", "Mizuho Tamaji", "Anindita Sahoo"],
    conference: "20th Himalayan Languages Symposium (HLS 20)",
    organizer: "Nanyang Technical University",
    location: "Singapore",
    date: "16th to 18th Jul 2014"
  },
  {
    title: "Headlines: Same Lines",
    authors: ["Anindita Sahoo"],
    conference: "Free Linguistics Conference 2015",
    organizer: "De La Salle University",
    location: "Manila, Philippines",
    date: "24th to 26th Sep 2015"
  },
  {
    title: "Conceptualizing Linguistic and Cultural Identities",
    authors: ["Anindita Sahoo"],
    conference: "National Conference on Language, Identity and Society: Centrality of Language in Contemporary Society",
    organizer: "Gautam Buddha University",
    location: "Greater Noida, India",
    date: "30th to 31st Oct 2015"
  },
  {
    title: "Discourse and Typological Approaches to the Analysis of Attitudinal Copulas",
    authors: ["Anindita Sahoo"],
    conference: "Workshop on 'Discourse and Typological Approaches of Attitudinal Markers: Implications for Intercultural Communication'",
    organizer: "Hong Kong Baptist University",
    location: "Hong Kong",
    date: "15th Jun 2019"
  },
  {
    title: "On the de-h honorification function of copula 'achhi' in Odia: A stance Triangle Analysis",
    authors: ["Anindita Sahoo"],
    conference: "17th International Pragmatics Conference",
    organizer: "Zurich University of Applied Sciences",
    location: "Winterthur, Switzerland",
    date: "27th Jun to 2nd Jul 2021"
  },
  {
    title: "Dyslexia: An Analysis of Syntactic Errors",
    authors: ["Anindita Sahoo", "Priyanka Mowlali"],
    conference: "2nd Malaysian Association of Applied Linguistics Conference",
    organizer: null,
    location: "Malaysia",
    date: "8th to 10th Sep 2021"
  },
  {
    title: "Beyond the dichotomy of Standard vs Non-Standard: A Sociolinguistic Study on the features 'Standard Language' formation in Malayalam",
    authors: ["Vishnu Suresh", "Anindita Sahoo"],
    conference: "6th Asian Junior Linguists Conference",
    organizer: "Sogang University",
    location: "Seoul, Korea",
    date: "10th to 11th Dec 2021"
  },
  {
    title: "De-honorification strategies in Odia: an interactional linguistics perspective",
    authors: ["Anindita Sahoo", "Foong Ha Yap"],
    conference: "56th Annual Meeting of the Societas Linguistica Europaea",
    organizer: "National and Kapodistrian University of Athens",
    location: "Athens, Greece",
    date: "29th Aug to 1st Sep 2023"
  },
  {
    title: "Effects of degree of permanence on inversion: Some insights from copula constructions in eastern Indo-Aryan languages",
    authors: ["Anindita Sahoo", "Foong Ha Yap", "Snigdha Medhi", "Pratiti Palit"],
    conference: "56th Annual Meeting of the Societas Linguistica Europaea",
    organizer: "National and Kapodistrian University of Athens",
    location: "Athens, Greece",
    date: "29th Aug to 1st Sep 2023"
  },
  {
    title: "Light verbs and their role in grammatical voice constructions in eastern Indo-Aryan languages",
    authors: ["Snigdha Medhi", "Anindita Sahoo", "Foong Ha Yap"],
    conference: "57th Annual Meeting of Societas Linguistica Europaea",
    organizer: "University of Helsinki",
    location: "Helsinki, Finland",
    date: "21st to 25th Aug 2024"
  },
  {
    title: "On the extended uses of paD ‘fall’ and its cognates as voice markers in Dravidian languages",
    authors: ["Anindita Sahoo", "Foong Ha Yap", "Gunti Prem Sagar"],
    conference: "57th Annual Meeting of Societas Linguistica Europaea",
    organizer: "University of Helsinki",
    location: "Helsinki, Finland",
    date: "21st to 25th Aug 2024"
  },
  {
    title: "On the intransitivizing uses of kon/kol in Dravidian languages",
    authors: ["Gunti Prem Sagar", "Anindita Sahoo", "Foong Ha Yap"],
    conference: "15th International Conference of Association for Linguistic Typology",
    organizer: "NTU Singapore",
    location: "Singapore",
    date: "4th to 6th Dec 2024"
  },
  {
    title: "From linking verb to auxiliation and focus marking: On the versatile uses of copulas in Malayalam, a Dravidian language",
    authors: ["Anindita Sahoo", "Foong Ha Yap", "Akshay Raj"],
    conference: "15th International Conference of Association for Linguistic Typology",
    organizer: "NTU Singapore",
    location: "Singapore",
    date: "4th to 6th Dec 2024"
  },
  {
    title: "Definiteness marking and de-honorification in Odia, an eastern Indo-Aryan language",
    authors: ["Foong Ha Yap", "Anindita Sahoo"],
    conference: "Annual Research Forum",
    organizer: null,
    location: "Hong Kong",
    date: "8th Dec 2024"
  }
];

// Collaborators
export const collaborators = [
  {
    name: "Prof. Dagmar Divjak",
    institution: "University of Birmingham",
    country: "United Kingdom",
    image: "https://loop.frontiersin.org/images/profile/248604/203",
  },
  {
    name: "Prof. Foong Ha Yap",
    institution: "Chinese University of Hong Kong, Shenzhen",
    country: "China",
    image: "https://i1.rgstatic.net/ii/profile.image/272694683893781-1442026887536_Q512/Foong-Ha-Yap.jpg",
  },
  {
    name: "Prof. Marcel den Dikken",
    institution: "Hungarian Research Centre for Linguistics",
    country: "Hungary",
    image: "https://linguistics.blcu.edu.cn/__local/1/2C/72/CC8C92DE545727AF2C84D109DCB_B65AE196_A911.gif",
  },
  {
    name: "Prof. Seppo Kittilä",
    institution: "University of Helsinki",
    country: "Finland",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJ4pS9ktse5Q8p8zx832IXTBEQppXm7TnnHrRTyqbnYHNSwN9a_wJsQ8&s=10",
  },
  {
    name: "Prof. Srinivasa Chakravarthy",
    institution: "Indian Institute of Technology Madras",
    country: "India",
    image: "https://biotech.iitm.ac.in/img/outerfaculty/Srinivasa%20chakravarthy.png",
  },
  {
    name: "Prof. Sweta Sinha",
    institution: "Indian Institute of Technology Patna",
    country: "India",
    image: "https://www.iitp.ac.in/images/faculty_profile/human/Sweta_sinha.jpg",
  },
]

// Facility images
export const facilityImages = [
  "https://res.cloudinary.com/dt8amwctw/image/upload/v1749380046/WhatsApp_Image_2025-03-06_at_07.18.54_c27204f6_krc0tl.jpg",
  "https://res.cloudinary.com/dt8amwctw/image/upload/v1749380045/WhatsApp_Image_2025-03-06_at_07.20.37_021a4179_tndnpw.jpg",
  "https://res.cloudinary.com/dt8amwctw/image/upload/v1749380045/WhatsApp_Image_2025-03-06_at_07.25.41_6a09db76_badyni.jpg",
  "https://res.cloudinary.com/dt8amwctw/image/upload/v1749380045/WhatsApp_Image_2025-03-06_at_07.23.48_7912f5cd_wivr9i.jpg",
  "https://res.cloudinary.com/dt8amwctw/image/upload/v1749380045/WhatsApp_Image_2025-03-06_at_07.20.37_069fcc79_ofdtsi.jpg",
  "https://res.cloudinary.com/dt8amwctw/image/upload/v1750747942/facility_6_egv4ki.jpg",
]

// Friends data (legacy compatibility)
export const friends = [
  {
    name: "Madhav Mittal",
    contribution: "Co-scripted the nomenclature",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1750746877/madhav_stlidj.jpg",
  },
  {
    name: "Shobhith Vadlamudi",
    contribution: "Co-created the logo",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1750746877/shobhit_e8zraw.jpg",
  },
  {
    name: "Gadarla Rohit Reddy",
    contribution: "Co-designed the website",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1750746876/rohit_o1zjut.jpg",
  },
]

// Legacy alphabets export for compatibility
export const alphabets = [
  { char: "अ", font: "Noto Serif Devanagari" },
  { char: "ध", font: "Noto Serif Devanagari" },
  { char: "ऊ", font: "Noto Serif Devanagari" },
  { char: "ञ", font: "Noto Serif Devanagari" },
  { char: "इ", font: "Noto Serif Devanagari" },
  { char: "क", font: "Noto Serif Devanagari" },
  { char: "ट", font: "Noto Serif Devanagari" },
  { char: "ण", font: "Noto Serif Devanagari" },
  { char: "श", font: "Noto Serif Devanagari" },
  { char: "भ", font: "Noto Serif Devanagari" },
  // Tamil
  { char: "க", font: "Noto Serif Tamil" },
  { char: "ஷ", font: "Noto Serif Tamil" },
  { char: "ழ", font: "Noto Serif Tamil" },
  { char: "ஞ", font: "Noto Serif Tamil" },
  { char: "அ", font: "Noto Serif Tamil" },
  { char: "ந", font: "Noto Serif Tamil" },
  { char: "ற", font: "Noto Serif Tamil" },
  { char: "ப", font: "Noto Serif Tamil" },
  { char: "ல", font: "Noto Serif Tamil" },
  { char: "ம", font: "Noto Serif Tamil" },
]

// Legacy research data export for compatibility
export const researchData = {
  projects: researchProjects,
  publications: publications,
  conferences: conferences,
}
