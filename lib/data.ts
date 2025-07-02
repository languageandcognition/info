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
  phone: string
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
  phone: "+91 999999999",
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