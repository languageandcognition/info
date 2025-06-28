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
    title: "Navigating Grammatical Voice to Explore Communication Strategies",
    description:
      "A cross-linguistic study of select Indo-Aryan and Dravidian languages examining how grammatical voice systems facilitate different communication strategies across diverse linguistic communities.",
    sponsor: "Indian Council of Social Science Research (ICSSR), New Delhi",
    status: "Active",
    year: "2023-2026",
  },
  {
    title: "Skilling the Unskilled and the Less Skilled",
    description:
      "A comprehensive need analysis study focusing on skill development requirements in the context of Odisha, examining linguistic and cognitive barriers to effective training programs.",
    sponsor: "Aspire Infolabs, Hyderabad",
    status: "Active",
    year: "2024-2025",
  },
  {
    title: "Detection & Quantification of Gender Bias in Official Text",
    description:
      "An innovative study examining gender bias in academic and official communications within the Indian academic setting using computational linguistics and corpus analysis methods.",
    sponsor: "American Express",
    status: "Completed",
    year: "2023",
  },
  {
    title: "Copula Constructions in Indo-Aryan Languages",
    description:
      "A detailed investigation of copula constructions from typological and discourse pragmatic perspectives, focusing on variation patterns across Indo-Aryan language families.",
    sponsor: "Indian Institute of Technology Madras, Chennai",
    status: "Active",
    year: "2022-2025",
  },
  {
    title: "Climate Change, Language Vulnerability, and Culture Death",
    description:
      "A critical case study examining the impact of climate change on linguistic diversity and cultural preservation in the Eastern coastal region of India under warming scenarios.",
    sponsor: "Indian Institute of Technology Madras, Chennai",
    status: "Active",
    year: "2024-2027",
  },
  {
    title: "Morphosyntax and Discourse Pragmatics",
    description:
      "An extensive study of linguistic constructions in South Asian languages, examining the interface between morphosyntactic structures and discourse-pragmatic functions.",
    sponsor: "Indian Institute of Technology Madras, Chennai",
    status: "Ongoing",
    year: "2021-2024",
  },
]

// Publications
export const publications = [
  {
    title: "Pragmatic Functions of Copula in Swahili: A Cross-Linguistic Perspective",
    authors: "Sahoo, A., & Hussain, A. S.",
    journal: "Journal of African Languages and Linguistics",
    year: "2024",
  },
  {
    title: "Ergativity Patterns in Assamese: A Typological and Variationist Study",
    authors: "Medhi, S., & Sahoo, A.",
    journal: "Linguistic Inquiry",
    year: "2023",
  },
  {
    title: "Non-Verbal Predication in Dravidian Languages: Syntactic Patterns and Semantic Functions",
    authors: "Sagar, G. P., & Sahoo, A.",
    journal: "Syntax: A Journal of Theoretical, Experimental and Interdisciplinary Research",
    year: "2024",
  },
  {
    title: "Eye-Tracking Insights into Spatial Preposition Processing",
    authors: "Krishna Raj, S. R., & Sahoo, A.",
    journal: "Cognitive Science",
    year: "2023",
  },
  {
    title: "Code Alternation in Multilingual Communities: Evidence from Parsi Gujarati",
    authors: "Dastur, S., & Sahoo, A.",
    journal: "International Journal of Bilingualism",
    year: "2024",
  },
]

// Conferences
export const conferences = [
  {
    title: "International Conference on Linguistics 2024",
    presenter: "Dr. Anindita Sahoo",
    location: "Singapore",
    year: "2024",
    type: "keynote",
  },
  {
    title: "Annual Meeting of Cognitive Science Society 2023",
    presenter: "Aziza Said Hussain",
    location: "Sydney, Australia",
    year: "2023",
    type: "poster",
  },
  {
    title: "South Asian Languages Analysis Roundtable 2024",
    presenter: "Gunti Prem Sagar",
    location: "New Delhi, India",
    year: "2024",
    type: "presentation",
  },
  {
    title: "International Conference on Eye-Tracking Research 2023",
    presenter: "Krishna Raj SR",
    location: "Vienna, Austria",
    year: "2023",
    type: "presentation",
  },
  {
    title: "World Congress of Applied Linguistics 2024",
    presenter: "Scherezade Dastur",
    location: "Lyon, France",
    year: "2024",
    type: "presentation",
  },
]

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
