
import { useEffect, useState } from 'react';

interface Candidate {
  name: string;
  username: string;
  location: string;
  avatar: string;
  email: string;
  html_url: string;
  company: string;
}

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedCandidates');
    if (stored) {
      setSavedCandidates(JSON.parse(stored));
    }
  }, []);

  if (savedCandidates.length === 0) {
    return <p>No candidates have been accepted yet.</p>;
  }

  return (
    <div>
      <h2>Saved Candidates</h2>
      {savedCandidates.map((candidate, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '1em', marginBottom: '1em' }}>
          <img src={candidate.avatar} alt={candidate.name} width="100" />
          <p><strong>Name:</strong> {candidate.name}</p>
          <p><strong>Username:</strong> {candidate.username}</p>
          <p><strong>Location:</strong> {candidate.location}</p>
          <p><strong>Email:</strong> {candidate.email}</p>
          <p><strong>Company:</strong> {candidate.company}</p>
          <p><a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidates;
