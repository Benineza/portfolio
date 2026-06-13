import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'Cisco Certified Network Associate - CCNA',
      issuer: 'CISCO',
      description: 'Enterprise',
      credentialUrl: 'https://cp.certmetrics.com/cisco/en/public/verify/credential/MSB2DMFGQDF4QCGW',
      logoColor: '#1BA0D7'
    },
    {
      id: 2,
      name: 'Cisco Certified Specialist - Enterprise Core',
      issuer: 'CISCO',
      description: 'Enterprise',
      credentialUrl: 'https://cp.certmetrics.com/cisco/en/public/verify/credential/027a87c2ea134317a12a08ba97633d88',
      logoColor: '#1BA0D7'
    },
    {
      id: 3,
      name: 'Introduction To Network Operations',
      issuer: 'Internet Society',
      description: 'Enterprise',
      credentialUrl: 'https://certificates.isoc.org/f908ff78-1b6a-41bd-8b59-1c47a498a68b#acc.yJSnaFuk',
    },
    {
      id: 4,
      name: 'International Computer Driving Licence - ICDL',
      issuer: 'ICDL',
      description: 'Enterprise',
      credentialUrl: 'https://icdl.org/',
    }
  ];

  return (
    <section id="certifications">
      <div className="section-title">
        <h2>Certifications</h2>
      </div>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="certification-card">
            <div className="certification-header">
              <i className={cert.logo} style={{ color: cert.logoColor, fontSize: '3rem' }}></i>
              <h3>{cert.name}</h3>
            </div>
            <div className="certification-body">
              <p className="issuer">
                <strong>Issuer:</strong> {cert.issuer}
              </p>
              <p className="description">
                <strong>Level:</strong> {cert.description}
              </p>
              <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="credential-link"
              >
                <i className="fas fa-external-link-alt"></i> View Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;