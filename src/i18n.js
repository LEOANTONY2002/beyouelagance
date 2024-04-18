import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "COMPANY": "COMPANY",
      "Home":'Home',
      "GALLERY": "Gallery",
      "SERVICES": "Services",
      "ABOUT": "About",
      "CONTACT": "Contact",
      "WE": "we make you feel",
      "ELEGANT": "ELEGANT",
      "FALL": "Fall in Love with Your Reflection",
      "CONTACT_US": "Contact Us",
      "YOUR": "Your Heaven of Peace and Beauty",
      "ONE_PLACE": "One Place.",
      "SANCTUARY": "Sanctuary for Beauty and Serenity.",
      "BEAUTY_BLOOM": "Beauty in Full Bloom",
      "BOOK_NOW": "Book Now",
      "20+": "20+",
      "EXP": "years of experience",
      "EXP_DESC": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
      "ABOUT_US": "About Us",
      "QUICK_LINKS": "QUICK LINKS",
      "OUR_SERVICES": "OUR SERVICES",
      "STORE_LOCATOR": "Store Locator",
      "BRIDAL": "Bridal",
      "FACE": "Face",
      "HAIR": "Hair",
      "NAIL": "Nail",
      "SPA": "Spa",
      "BEAUTY": "Beauty",
      "ALBUM": "Album",
      "EXC": "Elegance in Excellence",
      "BRIDAL_CARE": "Bridal Care",
      "FACE_CARE": "Face care",
      "HAIR_CARE": "Hair Care",
      "NAIL_CARE": "Nail Care",
      "SPA_CARE": "Spa Care",
      "BRIDAL_DESC": "The glow a bride gives off after receiving bridal treatments is simply dazzling. This allows you to obtain radiant skin, relieves stress, enhances beauty, builds self-confidence, encourages self-love and offers a moment of personal reflection.",
      "FACE_DESC": "A gentle touch for your face, which will make your skin glow while Preventing signs of aging and acne marks. I allowing it to bloom like a beautiful flower",
      "HAIR_DESC": "Hair care is important for several reasons. Take care of your hair helps prevent damage and breakage. By using the vouchers products and techniques You can Achieve texture, shine and style desired. Hair care can improve the appearance of your hair and increase your self-confidence. Invest in your Hair They are the crown that you never remove.",
      "NAIL_DESC": "Proper nail care can help prevent problems like such as brittle nails, hung skin and fungal infections. In doing a manicure, it gives an improved appearance and better nail health a little self for. Your nails are made sparkling. Your Nails are jewelry not tools.",
      "SPA_DESC": "Spa treatments can help reduce stress, improve circulation Sanguine and promote muscle relaxation. It's a real moment of pleasure to recharge your batteries and feel good about yourself.",
    }
  },
  fr: {
    translation: {
      "COMPANY": "ENTREPRISE",
      "Home":'Maison',
      "GALLERY": "Galerie",
      "SERVICES": "D'accueil",
      "ABOUT": "À propos",
      "CONTACT": "Contact",
      "WE": "Nous vous donnons une sensation",
      "ELEGANT": "d'élégance",
      "FALL": "Tomber amoureux de votre image",
      "CONTACT_US": "Contactez Nous",
      "YOUR": "votre havre de paix et de beauté en un ",
      "ONE_PLACE": "seul endroit",
      "BEAUTY_BLOOM": "La beauté à son plein épanouissement",
      "BOOK_NOW": "Réservez Maintenan",
      "20+": "20+",
      "EXP": "french",
      "EXP_DESC": "french",
      "ABOUT_US": "About Us",
      "QUICK_LINKS": "QUICK LINKS",
      "OUR_SERVICES": "Nos Services",
      "STORE_LOCATOR": "french",
      "BRIDAL": "La Nuptial",
      "FACE": "Le Visage",
      "HAIR": "Les Cheveux",
      "NAIL": "Les Ongles",
      "SPA": "Le Spa",
      "BEAUTY": "Album",
      "ALBUM": "Beauté.",
      "EXC": "Élégance in Excellence",
      "BRIDAL_CARE": "Soins de la mariée",
      "FACE_CARE": "Soins du visage",
      "HAIR_CARE": "Soins Capillaires",
      "NAIL_CARE": "Soins des ongles ",
      "SPA_CARE": "Soins en spa",
      "BRIDAL_DESC": "L'éclat que dégage une mariée après avoir reçu des soins de mariée est simplement éblouissante. Cela permet d'obtenir un peau éclatante, soulage la stress, améliore la beauté, renforce la confiance en soi, encourage l'amour de soi et offre un moment de réflexion personnelle.",
      "FACE_DESC": "Un doux effleurement pour ton visage, qui à faire rayonner ta peau tout en prévenant signes de les signes de vieillissement et les marques d'acné. Je permettant ainsi d'écolore telle une belle fleur",
      "HAIR_DESC": "Les soins capillaires sont importants pour plusieurs raisons. Prendre soin de ses cheveux permet de prévenir les dommages et la casse. En utilisant les bons produits et techniques Vous pouvez Obtenir la texture, la brillance et le style désirés. Le soins capillaires peuvent ameliorer 1'apparence de vos cheveux et accroître votre Confiance en vous. Investissez dans vos Cheveux Ils sont la couronne que vous ne retirez jamais.",
      "NAIL_DESC": "Les soins adéquats des ongles peuvent aider à prévenir des problémes tels que les ongles cassants, les peaux accrochées et les infections fongiques. En faisant une manucure, cela donne une apparence améliorée et une meilleure santé des ongles un peu des sois pour. Vos ongles sont les rend étencilants. Vos ongles sont bijoux pas des outils.",
      "SPA_DESC": "Les soins en spa peuvent aider à réduire le stress, ameliorer la circulation Sanguine et favoriser la relaxation musculaire. C'est un véritable moment de plaisir рour se resourcer et se sentir bien dans sa peau.",
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: process.env.REACT_APP_DEV === 'true' ? "en": 'fr',
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;