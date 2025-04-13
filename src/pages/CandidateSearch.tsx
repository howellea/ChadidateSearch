
import { useEffect, useState } from 'react';
import { dummyCandidates } from '../data/candidates';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates] = useState<Candidate[]>(dummyCandidates);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
    const stored = localStorage.getItem('savedCandidates');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
  }, [savedCandidates]);

  const saveCandidate = () => {
    setSavedCandidates([...savedCandidates, candidates[currentIndex]]);
    nextCandidate();
  };

  const nextCandidate = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const currentCandidate = candidates[currentIndex];

  if (currentIndex >= candidates.length) {
    return <p>No more candidates available.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Candidate Search</h2>
      <img src={currentCandidate.avatar} alt={currentCandidate.name} width="100" />
      <p><strong>Name:</strong> {currentCandidate.name} (<em>{currentCandidate.username}</em>)</p>
      <p><strong>Location:</strong> {currentCandidate.location}</p>
      <p><strong>Email:</strong> <a href={`mailto:${currentCandidate.email}`}>{currentCandidate.email}</a></p>
      <p><strong>Company:</strong> {currentCandidate.company}</p>
      <p><strong>Bio:</strong> {currentCandidate.bio}</p>
      <p><a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      <button onClick={saveCandidate} style={{ marginRight: '1rem' }}>+</button>
      <button onClick={nextCandidate}>-</button>
    </div>
  );
};

export default CandidateSearch;
