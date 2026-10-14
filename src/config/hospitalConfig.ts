/**
 * Anayah Children and Gynae Hospital - Central Configuration
 * All contact details, doctor data, and core settings are centralized here for easy updates.
 */

export const HOSPITAL_CONFIG = {
  name: "ANAYAH CHILDREN AND GYNAE HOSPITAL",
  nameShort: "ANAYAH HOSPITAL",
  nameUrdu: "عنایہ چلڈرن اینڈ گائنی ہسپتال",
  location: "Employees Colony, Layyah, Punjab, Pakistan",
  locationShort: "Employees Colony, Layyah",
  locationUrdu: "ایمپلائز کالونی، لیہ، پنجاب، پاکستان",
  phoneDisplay: "0303 5362767",
  phoneInternational: "+92 303 5362767",
  callUrl: "tel:+923035362767",
  whatsappUrl: "https://wa.me/923035362767?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Anayah%20Hospital.",
  whatsappUrduUrl: "https://wa.me/923035362767?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%DB%8C%DA%A9%D9%85%D8%8C%20%D9%85%D8%AC%DA%BE%DB%92%20%D8%B9%D9%86%D8%A7%DB%8C%DB%81%20%DB%81%D8%B3%D9%BE%D8%AA%D8%A7%D9%84%20%D9%85%DB%8C%DA%BA%20%DA%88%D8%A7%DA%A9%D9%B5%D8%B1%20%DA%A9%DB%92%20%D8%B3%D8%A7%D8%AA%DA%BE%20%D8%A7%D9%BE%D8%A7%D8%A6%D9%86%D9%B5%D9%85%D9%86%D9%B5%20%DA%A9%DB%8C%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%DA%86%D8%A7%DB%81%DB%8C%DB%81%DB%94",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Employees+Colony,+Layyah,+Punjab,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsExternalUrl: "https://www.google.com/maps/search/?api=1&query=Employees+Colony+Layyah+Punjab+Pakistan",
  gmbProfileUrl: "https://share.google/OMiE6ycPrH0k8zFK2",
  opdTimings: "2:00 PM – 10:00 PM",
  opdTimingsUrdu: "دوپہر ۲:۰۰ بجے سے رات ۱۰:۰۰ بجے تک",
  year: 2026,
};

export interface Doctor {
  id: string;
  nameEn: string;
  nameUr: string;
  specialtyEn: string;
  specialtyUr: string;
  roleType: 'pediatric' | 'gynae';
  bioEn: string;
  bioUr: string;
  qualifications: string[];
  qualificationsUr: string[];
  opdTimings: string;
  opdTimingsUr: string;
  whatsappMessage: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-muhammad-shareef-sumra",
    nameEn: "Dr. Muhammad Shareef Sumra",
    nameUr: "ڈاکٹر محمد شریف سمرا",
    specialtyEn: "Child Specialist (Pediatrician)",
    specialtyUr: "چائلڈ سپیشلسٹ (ماہر امراضِ اطفال)",
    roleType: "pediatric",
    bioEn: "Dedicated pediatrician focused on providing compassionate, gentle, and comprehensive healthcare for newborns, infants, and growing children in Layyah.",
    bioUr: "لیہ میں نوزائیدہ بچوں، شیر خوار اور بڑھتے ہوئے بچوں کے لیے مشفقانہ، پرسکون اور معیاری طبی نگہداشت فراہم کرنے والے ماہر اطفال۔",
    qualifications: [
      "M.B.B.S. (NMC)",
      "F.C.P.S. (Paediatrics)",
      "P.G.P.N. (USA)",
      "Certified International Diploma in Child Psychology (Germany)",
      "Diploma in Pediatric Emergencies (Pakistan)",
      "P.G.P.G.P.R.O. (U.S.A.)"
    ],
    qualificationsUr: [
      "M.B.B.S. (NMC)",
      "F.C.P.S. (Paediatrics)",
      "P.G.P.N. (USA)",
      "انٹرنیشنل ڈپلومہ ان چائلڈ سائیکالوجی (جرمنی)",
      "ڈپلومہ ان پیڈیاٹرک ایمرجنسیز (پاکستان)",
      "P.G.P.G.P.R.O. (U.S.A.)"
    ],
    opdTimings: "2:00 PM – 10:00 PM",
    opdTimingsUr: "دوپہر ۲:۰۰ تا رات ۱۰:۰۰ بجے",
    whatsappMessage: "Assalam o Alaikum, I would like to book an appointment with Dr. Muhammad Shareef Sumra (Child Specialist) at Anayah Hospital.",
  },
  {
    id: "dr-tahira-shareef",
    nameEn: "Dr. Tahira Shareef",
    nameUr: "ڈاکٹر طاہرہ شریف",
    specialtyEn: "Gynecologist",
    specialtyUr: "گائناکالوجسٹ (ماہر امراضِ نسواں و زچگی)",
    roleType: "gynae",
    bioEn: "Experienced gynecologist devoted to women's maternal health, antenatal care, safe motherhood, and specialized gynecological wellness in a private and caring setting.",
    bioUr: "خواتین کی صحت، دورانِ حمل نگہداشت، محفوظ زچگی اور امراض نسواں کے باوقار اور پرائیویٹ علاج کے لیے وقف تجربہ کار معالج۔",
    qualifications: [
      "M.B.B.S. (NMC)",
      "F.C.P.S. (Gynae & Obs)",
      "Certified Infertility Specialist"
    ],
    qualificationsUr: [
      "M.B.B.S. (NMC)",
      "F.C.P.S. (Gynae & Obs)",
      "سرٹیفائیڈ انفیرٹیلٹی سپیشلسٹ (علاجِ بانجھ پن)"
    ],
    opdTimings: "2:00 PM – 10:00 PM",
    opdTimingsUr: "دوپہر ۲:۰۰ تا رات ۱۰:۰۰ بجے",
    whatsappMessage: "Assalam o Alaikum, I would like to book an appointment with Dr. Tahira Shareef (Gynecologist) at Anayah Hospital.",
  },
];
