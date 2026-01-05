export interface AviationStackResponse {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    count: number;
  };
  data: any[];
}

export interface FlightSearchParams {
  from: string;        
  to: string;        
  departure: string; 
  return?: string;   
  page?: number;
  limit?: number;
}