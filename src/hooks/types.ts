export interface IFlightInformation {
  carBrand: string;
  carNumber: string;
  startFlight: string;
  endFlight: string;
  dispatchPoint: string;
  destination: string;
  coordinates: string;
  recordedTime: string;
  distanceTraveled: string;
}

export interface IWeeklyStatus {
  day: string;
  status: number;
}

export interface IItems {
  name: string;
  id?: string;
  date?: string;
  place: string;
  generalState: string;
  image?: string;
  licenseNumber?: string;
  categories?: string;
  dateBirth?: string;
  flightInformation: IFlightInformation;
  weeklyStatus: IWeeklyStatus[];
}
