export interface Subskill {
    name: string;
    score: number;
  }
  
  export interface Skill {
    name: string;
    score: number;
    subskills: Subskill[];
  }