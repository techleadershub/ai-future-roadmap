import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FolderGit2, TrendingUp, BookOpen, Calculator, ExternalLink } from 'lucide-react';

const RoadmapDisplay = ({ data }) => {
    // Process data for Chart
    const chartData = data.five_year_roadmap.map(item => {
        // Extract numeric value from salary range "30-40" -> 35
        const match = item.salary_range.match(/(\d+)/g);
        let avgSalary = 0;
        if (match) {
            const nums = match.map(Number);
            avgSalary = nums.reduce((a, b) => a + b, 0) / nums.length;
        }
        return {
            year: item.year,
            salary: avgSalary,
            title: item.role_title
        };
    });

    return (
        <div className="container animate-fade-in">
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
                <h1 className="gradient-text" style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>Your Agentic Career Path (2026-2031)</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                    {data.career_summary}
                </p>
            </div>

            {/* Salary Growth Chart */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <TrendingUp color="var(--accent-glow)" /> Salary & Value Projection
                </h3>
                <div style={{ height: '300px', width: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                            <XAxis dataKey="year" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#13131f', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area type="monotone" dataKey="salary" stroke="#8884d8" fillOpacity={1} fill="url(#colorSalary)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Timeline Roadmap */}
            <div className="timeline-container">
                <div className="timeline-line"></div>
                {data.five_year_roadmap.map((yearItem, index) => (
                    <div key={index} className="timeline-item glass-panel animate-fade-in" style={{ padding: '2rem', animationDelay: `${index * 0.2}s` }}>
                        <div className="timeline-dot"></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <h2 style={{ margin: 0, color: 'var(--accent-primary)' }}>{yearItem.year}</h2>
                            <span style={{
                                background: 'rgba(255,255,255,0.1)',
                                padding: '0.2rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                border: '1px solid var(--accent-glow)'
                            }}>
                                Avg. Salary: {yearItem.salary_range} LPA
                            </span>
                        </div>

                        <h3 style={{ color: 'white', marginTop: '0.5rem' }}>{yearItem.role_title}</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
                            <div>
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                                    <BookOpen size={18} /> Skills to Master
                                </h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {yearItem.skills_to_acquire.map(skill => (
                                        <span key={skill} style={{
                                            background: 'var(--bg-secondary)',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '8px',
                                            fontSize: '0.85rem',
                                            color: '#e2e8f0'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                                    <Calculator size={18} /> Agentic Transformation
                                </h4>
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#cbd5e1' }}>
                                    {yearItem.agentic_transformation}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sources */}
            <div className="glass-panel" style={{ padding: '1.5rem', marginTop: '2rem' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ExternalLink size={18} /> Authenticated Research Sources
                </h4>
                <ul style={{ color: 'var(--text-secondary)' }}>
                    {data.authoritative_sources.map((source, idx) => (
                        <li key={idx}>{source}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default RoadmapDisplay;
