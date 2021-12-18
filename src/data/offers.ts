export interface Offer {
  media: { type: 'video' | 'image'; url: string };
  title: string;
  text: string;
  id: number;
  description: string;
  images: string[];
  inclusions: string[]
}

export const offers: Offer[] = [
  {
    id: 1,
    media: { type: 'video', url: 'https://latour.s3.eu-north-1.amazonaws.com/video/diving.mp4' },
    title: 'Dive & Sea',
    text: 'An incredible world of rich marine life is waiting for you to dive in. Certified divers can take advantage of our Dive & Sea package including breakfast, dinner, and 20 boat dives. Complimentary PCR testing for 2 persons for stays of 5 nights or more.',
    description: `An incredible world of rich marine life is waiting for you to dive in.Certified divers can take advantage of our Dive & Sea package and explore the wonders of excellent dive sites like Kandooma Caves, Cocoa Corner, and Kandooma Thila. Divers can expect to witness and swim alongside a plethora of marine life including eagle rays, grey sharks, unicorn fish, turtles, and even more. More experienced divers will be sure to bask in the adrenaline of our dive sites’ challenging elements and battling the ocean’s current while enjoying the colourful scenery. There’s plenty to explore underwater with Kandooma Dive Centre, with dives catering to divers of all experiences so that there’s something exciting for everyone.`,
    images: ['/images/offers/dive-and-sea/image_1.jpg', '/images/offers/dive-and-sea/image_2.jpg'],
    inclusions: ['Accommodation for 2 adults', 'Daily buffet breakfast and dinner at Kandooma Café', 'Complimentary return speedboat transfer for 2 adults to and from the airport', '20 boat dives per stay', 'Complimentary PCR testing for 2 persons for 5 nights and above stays.', '2 children below the age of 12 stay and eat for free with our “Kids Stay & Eat Free” Programme', 'Complimentary Wi-Fi in the villas and public areas', 'Complimentary access to the Kandoo Kids Club and Fitness Centre', 'Complimentary non-motorised water sports (excluding Wind Surfing & Catamaran)']
  },
  {
    id: 2,
    media: { type: 'video', url: 'https://latour.s3.eu-north-1.amazonaws.com/video/book.mp4' },
    title: 'Stay Longer and Save',
    text: 'When you stay for a minimum of 4 nights at Holiday Inn Resort Kandooma Maldives, we’ll give you extra benefits, in addition to paying a lesser rate. Enjoy 20% discount on dining and laundry, with complimentary breakfast! Complimentary PCR testing for 2 persons for stays of 5 nights or more.',
    description: 'When you stay for a minimum of 4 nights at Holiday Inn Resort Kandooma Maldives, we’ll give you extra benefits, in addition to paying a lesser rate. Enjoy 20% discount on dining and laundry, with complimentary breakfast!',
    images: ['/images/offers/stay-long/image_1.jpg', '/images/offers/stay-long/image_2.jpg', '/images/offers/stay-long/image_3.jpg'],
    inclusions: ['Accommodation for 2 adults and 2 kids', '2 children below the age of 12 stay and eat free with our “Kids Stay & Eat FREE” programme', 'Daily buffet breakfast for 2 adults at Kandooma Café', '20% discount on all-day dining (excluding Themed Evenings) and Laundry', 'Complimentary Wi-Fi in the villas and public areas', 'Complimentary access to the Kandoo Kids Club and Fitness Centre', 'Minimum length of stay :  4 nights', 'Get additional 5% discount on room rates with minimum length of 7 nights', '1-night non-refundable deposit required', 'Complimentary PCR testing for 2 persons for stays of 5 nights or more']
  },
  {
    id: 3,
    media: { type: 'image', url: '/images/food.jpg' },
    title: 'Stay All Inclusive',
    text: 'Take advantage of our all-inclusive package when you stay at Holiday Inn Resort Kandooma Maldives. Enjoy all 3 meals at our resort and a range of unlimited alcoholic/non-alcoholic drinks with this deal. Complimentary PCR testing for 2 persons for stays of 5 nights or more.',
    description: 'Take advantage of our all-inclusive package when you stay at Holiday Inn Resort Kandooma Maldives. Enjoy all 3 meals at our resort and a range of unlimited alcoholic/non-alcoholic drinks with this offer. We’ve tailored this vacation just for you. So what are you waiting for?',
    images: ['/images/offers/all-inclusive/image_1.jpg', '/images/offers/all-inclusive/image_2.jpg', '/images/offers/all-inclusive/image_3.jpg'],
    inclusions: ['Accommodation up to 2 adults and 1 child below 12 years', 'Up to 2 children below the age of 12 stay and eat free with our “Kids Stay & Eat FREE” programme', 'Daily buffet breakfast, lunch, and dinner for 2 adults at Kandooma Café', '“Stay Spirited” package (select non-alcoholic and standard alcoholic beverages across all outlets)', '50% discount on shared return speedboat transfers from Velana International Airport', 'Complimentary Wi-Fi in the villas and public areas', 'Complimentary access to the Kandoo Kids Club and Fitness Centre', 'Complimentary access to non-motorized water sports (excluding Wind Surfing & Catamaran)', 'Minimum length of stay 3 nights']
  },
  {
    id: 4,
    media: { type: 'image', url: '/images/family.jfif' },
    title: 'Family Fun',
    text: 'Planning a family holiday in Maldives? Our Family Getaway package spells out fun for the whole family! As an added bonus, our little guests stay and eat for free.',
    description: 'Planning a family holiday in Maldives? Our Family Getaway package spells out fun for the whole family! As an added bonus, our little guests stay and eat for free.',
    images: ['/images/offers/family/image_1.jpg', '/images/offers/family/image_2.jpg', '/images/offers/family/image_3.jpg'],
    inclusions: ['Accommodation for 4 persons', 'Daily breakfast and dinner at Kandooma Café up to 4 persons', '2 children under 12 years stay and eat for free with our “Kids Stay & Eat Free” Programme', 'Complimentary return speedboat transfers from Velana International Airport up to 4 persons', 'Complimentary PCR Test up to 4 persons', 'Complimentary Wi-Fi in the villas and public areas', 'Complimentary access to the Kandoo Kids Club and Fitness Centre']
  },
];