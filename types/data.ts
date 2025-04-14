export interface MatchRecommendation {
    id: string;
    daterId: string;
    rankScore: number;
    name: string;
    bio: string;
    image: string;
}

export interface Dater {
    id: string;
    name: string;
    image: string;
    bio: string;
    matchRecommendations: MatchRecommendation[];
    matchExpirationHrs: number;
    vestedScore: number;
    friends: Friend[];
    reviewingMatches: number;
    seriousness?: number;
}

export interface Friend {
    id: string;
    name: string;
    vestedScore: number;
    invitedBy: Dater[];
    daters: Dater[];
    image: string;
} 