const API_KEY = '1a822521-d7e0-46ff-98d3-3e51020863f3';
const BASE_URL = 'https://api.cricapi.com/v1';

export interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo?: TeamInfo[];
  score?: Score[];
  series_id?: string;
  fantasyEnabled?: boolean;
  bbbEnabled?: boolean;
  hasSquad?: boolean;
  matchStarted?: boolean;
  matchEnded?: boolean;
}

export interface TeamInfo {
  name: string;
  shortname: string;
  img: string;
}

export interface Score {
  r: number;
  w: number;
  o: number;
  inning: string;
}

export interface Player {
  id: string;
  name: string;
  role: string;
  battingStyle?: string;
  bowlingStyle?: string;
  country?: string;
}

export interface FantasyPoints {
  id: string;
  name: string;
  points: number;
}

// Get current matches
export async function getCurrentMatches(): Promise<Match[]> {
  try {
    const response = await fetch(`${BASE_URL}/currentMatches?apikey=${API_KEY}&offset=0`);
    const data = await response.json();
    
    if (data.status !== 'success') {
      console.error('API Error:', data);
      return [];
    }
    
    return data.data || [];
  } catch (error) {
    console.error('Error fetching current matches:', error);
    return [];
  }
}

// Get match info
export async function getMatchInfo(matchId: string): Promise<Match | null> {
  try {
    const response = await fetch(`${BASE_URL}/match_info?apikey=${API_KEY}&id=${matchId}`);
    const data = await response.json();
    
    if (data.status !== 'success') {
      console.error('API Error:', data);
      return null;
    }
    
    return data.data || null;
  } catch (error) {
    console.error('Error fetching match info:', error);
    return null;
  }
}

// Get match scorecard
export async function getMatchScorecard(matchId: string) {
  try {
    const response = await fetch(`${BASE_URL}/match_scorecard?apikey=${API_KEY}&id=${matchId}`);
    const data = await response.json();
    
    if (data.status !== 'success') {
      console.error('API Error:', data);
      return null;
    }
    
    return data.data || null;
  } catch (error) {
    console.error('Error fetching scorecard:', error);
    return null;
  }
}

// Get fantasy squad for a match
export async function getFantasySquad(matchId: string): Promise<Player[]> {
  try {
    const response = await fetch(`${BASE_URL}/match_squad?apikey=${API_KEY}&id=${matchId}`);
    const data = await response.json();
    
    if (data.status !== 'success') {
      console.error('API Error:', data);
      return [];
    }
    
    // Flatten players from both teams
    const players: Player[] = [];
    if (data.data) {
      data.data.forEach((team: { players: Player[] }) => {
        if (team.players) {
          players.push(...team.players);
        }
      });
    }
    
    return players;
  } catch (error) {
    console.error('Error fetching fantasy squad:', error);
    return [];
  }
}

// Get fantasy points
export async function getFantasyPoints(matchId: string): Promise<FantasyPoints[]> {
  try {
    const response = await fetch(`${BASE_URL}/match_points?apikey=${API_KEY}&id=${matchId}`);
    const data = await response.json();
    
    if (data.status !== 'success') {
      console.error('API Error:', data);
      return [];
    }
    
    return data.data || [];
  } catch (error) {
    console.error('Error fetching fantasy points:', error);
    return [];
  }
}

// Filter matches - only today and future, exclude completed
export function filterUpcomingMatches(matches: Match[]): Match[] {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  return matches.filter(match => {
    // Exclude completed matches
    if (match.matchEnded) return false;
    if (match.status?.toLowerCase().includes('won')) return false;
    if (match.status?.toLowerCase().includes('draw')) return false;
    if (match.status?.toLowerCase().includes('tied')) return false;
    
    // Include live matches
    if (match.matchStarted && !match.matchEnded) return true;
    
    // Include upcoming matches (today and future)
    const matchDate = new Date(match.dateTimeGMT || match.date);
    return matchDate >= today;
  });
}

// Get match status
export function getMatchStatus(match: Match): 'upcoming' | 'live' | 'completed' {
  if (match.matchEnded) return 'completed';
  if (match.matchStarted) return 'live';
  return 'upcoming';
}

// Format match date
export function formatMatchDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}
