export interface Event {
  id: string;
  name: string;
  date: string;
  image?: string;
  borderColor: string;
}

export const pastEvents: Event[] = [
  { id: "1", name: "Halloween Party", date: "Oct 26", borderColor: "border-pink-400" },
  { id: "2", name: "Pool party", date: "Nov 25", borderColor: "border-blue-400" },
  { id: "3", name: "1st Birthday", date: "Nov 25", borderColor: "border-orange-400" },
  { id: "4", name: "Coffee and DJs", date: "Nov 25", borderColor: "border-yellow-400" },
  { id: "5", name: "Florence Road", date: "Oct 26", borderColor: "border-green-400" },
  { id: "6", name: "Coffee & DJ's", date: "Oct 25", borderColor: "border-purple-400" },
  { id: "7", name: "House Party", date: "Oct 25", borderColor: "border-pink-400" },
  { id: "8", name: "Coffee & DJ's", date: "Nov 25", borderColor: "border-blue-400" },
  { id: "9", name: "Halloween Party", date: "Nov 25", borderColor: "border-orange-400" },
];

export const upcomingEvent = {
  title: "BONDI DAY PARTY",
  subtitle: "SUNDAZEDDD",
  date: "Coming Soon",
  location: "Bondi Beach",
  description: "Join us for a day of sun, music, and good vibes at Bondi Beach.",
  image: "/event-poster.jpg",
};
