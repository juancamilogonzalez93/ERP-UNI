// Crea TeamContext.js
import { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

export function TeamProvider({ children }) {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshData = async () => {
    setLoading(true);
    const data = await TeamService.getAll();
    setTeamMembers(data);
    setLoading(false);
  };

  return (
    <TeamContext.Provider value={{ teamMembers, loading, refreshData }}>
      {children}
    </TeamContext.Provider>
  );
}

export const useTeam = () => useContext(TeamContext);