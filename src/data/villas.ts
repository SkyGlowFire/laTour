export interface Villa {
  img: string;
  title: string;
  text: string;
  description: string;
  id: number;
  images: string[];
  amenities: string[]
}

export const villas: Villa[] = [
  {
    id: 1,
    img: '/images/villas/beach-house-thumb.jpg',
    title: 'Beach House',
    text: ' Enjoy direct access to the beach from the Two Bedroom Family Beach House. Our family beach house features a king size bed, twin beds, living room, private terrace and outdoor dining area.',
    images: ['/images/villas/beach-house/image_1.jpg', '/images/villas/beach-house/image_2.jpg', '/images/villas/beach-house/image_3.jpg', '/images/villas/beach-house/image_4.jpg'],
    amenities: ['First floor bedroom with one king sized bed and a private terrace', 'Ground floor living space with an outdoor terrace', 'Complimentary Wi-Fi access', 'Bluetooth docking station', '32-inch flat screen TV', 'Outdoor rain shower', 'Signature bathroom amenities', 'Pillow menu', 'Ceiling fan', 'Mini bar', 'Coffee/tea making facility', 'In-room safe', 'Hair dryer', 'Environmentally friendly bed and bath linen programme'],
    description: 'Offering sea views from the master bedroom and direct access to the beach from the ground floor, the Beach House at Holiday Inn Resort Kandooma Maldives is spread across two levels with spacious rooms, well-equipped bathrooms and living and dining areas. The villa is fully furnished with modern facilities and amenities from a pillow menu to an outdoor terrace to provide you privacy and comfort.'
  },
  {
    id: 2,
    img: '/images/villas/beach-villa-thumb.jpg',
    title: 'Beach Villa',
    text: ' The Beach Villa provides an ideal escape a few steps from the beach. Cocoon yourself in the comforts of the master bedroom, enjoy the sea breeze from your private terrace or hammock.',
    images: ['/images/villas/beach-villa/image_1.jpg'],
    amenities: ['Hammock', 'Complimentary Wi-Fi access', 'Bluetooth docking station', '32-inch flat screen TV', 'Outdoor rain shower', 'Signature bathroom amenities', 'Pillow menu', 'Mini bar', 'Coffee/tea making facility', 'In-room safe', 'Hair dryer', 'Environmentally friendly bed and bath linen programme'],
    description: 'Step into your island hideaway, surrounded by nature and only a few steps away from the white beach sands and the alluring azure sea. With ample private space to relax in, relish in the comforts of the bedroom of your Beach Villa at Holiday Inn Resort Kandooma Maldives. The villa is equipped with modern facilities and amenities, from an outdoor terrace and hammock to an outdoor rain shower.'
  },
  {
    id: 3,
    img: '/images/villas/garden-villa-thumb.jpg',
    title: 'Garden Villa',
    text: ' The Garden Villa is hidden under the protective shade of Maldives’ lush vegetation. Ideal for couples or small families, you can lounge on the private outdoor terrace or hammock.',
    images: ['/images/villas/garden-villa/image_1.jpg'],
    amenities: ['Hammock', 'Complimentary Wi-Fi access', 'Bluetooth docking station', '32-inch flat screen TV', 'Outdoor rain shower', 'Signature bathroom amenities', 'Pillow menu', 'Mini bar', 'Coffee/tea making facility', 'In-room safe', 'Hair dryer', 'Environmentally friendly bed and bath linen programme'],
    description: 'Wrapped in the shade of swaying island palms and enclosed by lush vegetation, our Garden Villa also offers a view of the beach, assuring that you’re never too far from the enticing waters. Suitable for couples and small families, our modern villa is your island retreat fitted with an outdoor terrace, hammock and outdoor rain shower to enhance your experience of a unique Maldivian vacation.'
  },
  {
    id: 4,
    img: '/images/villas/two-bedroom-thumb.jpg',
    title: 'Two Bedroom Family Beach House',
    text: ' Enjoy direct access to the beach from the Two Bedroom Family Beach House. Our family beach house features a king size bed, twin beds, living room, private terrace and outdoor dining area.',
    images: ['/images/villas/two-bedroom-house/image_1.jpg', '/images/villas/two-bedroom-house/image_2.jpg', '/images/villas/two-bedroom-house/image_3.jpg'],
    amenities: ['First floor master bedroom with one king sized bed + second bedroom with two twin beds; both with a private terrace', 'Ground floor living space with an outdoor terrace', 'Complimentary Wi-Fi access', 'Bluetooth docking station', '32-inch flat screen TV', 'Outdoor rain shower', 'Signature bathroom amenities', 'Pillow menu', 'Mini bar', 'Ceiling fan', 'Environmentally friendly bed and bath linen programme'],
    description: 'Our Two Bedroom Family Beach House at Holiday Inn Kandooma Maldives is a spacious family villa designed with the comfort of every individual in mind. The first floor features a master bedroom and a second bedroom with king and twin beds, each equipped with its own terrace. The ground floor, with a living area and outdoor terrace which provides direct access to the beach, is perfect for family bonding.'
  },
  {
    id: 5,
    img: '/images/villas/two-bedroom-overwater-thumb.jpg',
    title: 'Two Bedroom Overwater Pavilion',
    text: ' Floating above the ocean waters, the Two Bedroom Overwater Pavilion is fitted with a king bed, twin beds, indoor and outdoor living spaces and a rain shower.',
    images: ['/images/villas/two-bedroom-overwater/image_1.jpg', '/images/villas/two-bedroom-overwater/image_2.jpg', '/images/villas/two-bedroom-overwater/image_3.jpg', '/images/villas/two-bedroom-overwater/image_4.jpg'],
    amenities: ['Private sundeck with sunbeds and one daybed', 'Overwater hammock', 'Complimentary Wi-Fi access', 'Bluetooth docking station', '42-inch flat screen TV', 'Outdoor rain shower', 'Large bathtub with floor to ceiling windows', 'Signature bathroom amenities', 'Pillow menu', 'Ceiling fan', 'Mini bar', 'Coffee/tea making facility', 'In-room safe', 'Hair dryer', 'Environmentally friendly bed and bath linen programme'],
    description: 'Wake up in paradise at the Two Bedroom Overwater Pavilion, set to provide you with unhindered views of a Maldivian sunrise. Enjoy direct access to the Indian Ocean, lounge in an overwater hammock or perfect your summer glow on the sunbeds. Our spacious water villa is ideal for families, fitted with two bedrooms, two bathrooms, indoor living area and an outdoor space complete with an open-air rain shower and sundeck.Wake up in paradise at the Two Bedroom Overwater Pavilion, set to provide you with unhindered views of a Maldivian sunrise. Enjoy direct access to the Indian Ocean, lounge in an overwater hammock or perfect your summer glow on the sunbeds. Our spacious water villa is ideal for families, fitted with two bedrooms, two bathrooms, indoor living area and an outdoor space complete with an open-air rain shower and sundeck.'
  },
];