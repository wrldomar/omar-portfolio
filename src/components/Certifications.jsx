import { ArrowIcon, AwardIcon } from './icons';

const certifications = [
    {
        title: 'Building Agentic AI Applications with LLMs',
        issuer: 'NVIDIA',
        issued: 'October 2026',
        credentialId: '-Uwh-soxRPe9oH_2AG3oIQ',
        url: 'https://learn.nvidia.com/certificates?id=-Uwh-soxRPe9oH_2AG3oIQ',
        skills: 'Designing LLM-powered agents, tool use, and multi-step agentic workflows.',
    },
    {
        title: 'Hedera Certified Developer Associate (HCDA)',
        issuer: 'The Hashgraph Association',
        issued: 'October 2026',
        credentialId: 'd776fff4-e475-4b34-b05e-6de5802b3bd0',
        skills: 'Building on Hedera: accounts, tokens, consensus service, and smart contracts.',
    },
    {
        title: 'Hedera Certified Foundation (HCF)',
        issuer: 'The Hashgraph Association',
        issued: 'October 2026',
        credentialId: 'bdf1c8f4-6315-4943-a3ba-c462d3bbb0a0',
        skills: 'Hashgraph consensus, Hedera network services, and DLT fundamentals.',
    },
    {
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco Networking Academy',
        issued: 'April 2025',
        skills: 'Cybersecurity fundamentals, common threats, and protection strategies.',
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="kicker">Continued learning</span>
                    <h2>Certifications & <span className="highlight">learning.</span></h2>
                </div>
                <div className="cert-list reveal">
                    {certifications.map((cert) => {
                        const CardTag = cert.url ? 'a' : 'div';
                        const linkProps = cert.url ? { href: cert.url, target: '_blank', rel: 'noopener noreferrer' } : {};
                        return (
                            <CardTag className="cert-card card" key={cert.title} {...linkProps}>
                                <span className="cert-icon"><AwardIcon /></span>
                                <div className="cert-info">
                                    <h3>{cert.title}</h3>
                                    <p>{cert.issuer} · Issued {cert.issued}</p>
                                    <p className="cert-skills">{cert.skills}</p>
                                    {cert.credentialId && <p className="cert-id">Credential ID {cert.credentialId}</p>}
                                    {cert.url && <span className="text-link">Show credential <ArrowIcon /></span>}
                                </div>
                            </CardTag>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
