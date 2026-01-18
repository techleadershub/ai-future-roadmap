import React, { useState } from 'react';
import InputForm from './components/InputForm';
import RoadmapDisplay from './components/RoadmapDisplay';
import { Sparkles, BrainCircuit } from 'lucide-react';

function App() {
  const [roadmapData, setRoadmapData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://lavish-art-production.up.railway.app';
      const response = await fetch(`${apiUrl}/generate-roadmap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate roadmap');
      }

      const data = await response.json();
      setRoadmapData(data);
    } catch (err) {
      console.error(err);
      setError('An error occurred while building your roadmap. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header style={{ padding: '2rem', textAlign: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <BrainCircuit size={40} color="var(--accent-primary)" />
          <h1 style={{ margin: 0, fontSize: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Future Proof India Agentic AI roadmap tool</h1>
        </div>
      </header>

      <main style={{ width: '100%', paddingBottom: '4rem' }}>
        {!roadmapData ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <InputForm onSubmit={handleFormSubmit} isLoading={isLoading} />
            {error && (
              <div style={{ color: '#ef4444', marginTop: '1rem', background: 'rgba(239,68,68,0.1)', padding: '1rem', borderRadius: '8px' }}>
                {error}
              </div>
            )}

            {/* Background elements */}
            <div style={{
              position: 'fixed', top: '20%', left: '10%',
              width: '300px', height: '300px',
              background: 'purple', filter: 'blur(150px)', opacity: 0.2, zIndex: -1
            }}></div>
            <div style={{
              position: 'fixed', bottom: '10%', right: '10%',
              width: '400px', height: '400px',
              background: 'blue', filter: 'blur(150px)', opacity: 0.2, zIndex: -1
            }}></div>
          </div>
        ) : (
          <RoadmapDisplay data={roadmapData} />
        )}
      </main>
    </div>
  );
}

export default App;
