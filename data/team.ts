export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  { id: "1", name: "Connor", role: "Co-founder" },
  { id: "2", name: "Tay", role: "Co-founder" },
  { id: "3", name: "Anthol", role: "Team" },
];

export const collaborators = {
  videographers: ["Videographer 1", "Videographer 2"],
  photographers: ["Photographer 1", "Photographer 2"],
};
