import { TeamMember as TeamMemberType } from "@/data/team";

interface TeamMemberProps {
  member: TeamMemberType;
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="text-center">
      <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-3 overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400">
            <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
        )}
      </div>
      <p className="text-sm font-medium text-gray-900">{member.name}</p>
      <p className="text-xs text-gray-500">{member.role}</p>
    </div>
  );
}
