export interface PersonalDocumentItem {
  id: string;
  title: string;
  image: string;
}

export const personalDocuments: PersonalDocumentItem[] = [
  {
    id: 'aadhaar',
    title: 'Aadhaar Card',
    image: '/documents/Aadhar Card.jpg',
  },
  {
    id: 'pan',
    title: 'PAN Card',
    image: '/documents/PAN-AXMPH3246G.jpg',
  },
  {
    id: 'voter',
    title: 'Election / Voter Card',
    image: '/documents/Election Card (Votar).jpg',
  },
  {
    id: 'passport',
    title: 'Passport',
    image: '/documents/Passport.jpg',
  },
];
