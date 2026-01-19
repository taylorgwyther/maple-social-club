import TeamMember from "@/components/TeamMember";
import { teamMembers, collaborators } from "@/data/team";

export default function TeamPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-24 lg:px-8">
        {/* The Crew Section */}
        <section className="mb-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">THE CREW</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Collaborators Section */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">VIDEOGRAPHERS</h2>
            <ul className="space-y-2">
              {collaborators.videographers.map((name) => (
                <li key={name} className="text-sm text-gray-600">{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">PHOTOGRAPHERS</h2>
            <ul className="space-y-2">
              {collaborators.photographers.map((name) => (
                <li key={name} className="text-sm text-gray-600">{name}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
