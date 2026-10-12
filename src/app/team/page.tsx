import { SITE_URL } from '../data/site';
import JsonLd from '../component/JsonLd';
import PageHero from '../component/PageHero';
import TeamGrid, { type TeamMember } from '../component/TeamGrid';
import teamData from '../data/team.json';

const teamMembers: TeamMember[] = teamData;

const teamJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'CurePlus Hospitals',
  url: `${SITE_URL}/team`,
  description:
    'Meet the leadership and healthcare professionals of CurePlus Hospitals delivering quality healthcare services across Karnataka.',
  employee: teamMembers.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: m.role })),
};

const TeamPage = () => (
  <>
    <JsonLd data={teamJsonLd} />
    <PageHero
      eyebrow="Our people"
      title="Meet Our Team"
      lead="Meet the expert leadership and healthcare professionals driving quality patient care at CurePlus Hospitals across Karnataka."
      crumbs={[{ name: 'Team' }]}
    />

    <section className="section" aria-label="Leadership team">
      <div className="container-page">
        <TeamGrid members={teamMembers} />
      </div>
    </section>
  </>
);

export default TeamPage;
