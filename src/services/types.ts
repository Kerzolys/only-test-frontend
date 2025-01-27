export type TYears = {
    beginning: number;
    ending: number;
    section: TSection;
    id: number;
  };
  
  export type TSection = {
    title: string;
    events: TEvent[];
    id: number;
  };
  
  export type TEvent = {
    year: number;
    description: string;
    id: number;
  };
  