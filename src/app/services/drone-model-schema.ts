export interface DroneModel {
    name:string;
    main_video_src:string;
    model_detail_video_src:string;
    // speed: number; // in km/h
    // range: number; // in km
    // weight: number; // in kg
    description: string;
    dark:boolean;
    features:Feature[] 
  }

export interface Feature {
    title:string;
    detail:string;
}