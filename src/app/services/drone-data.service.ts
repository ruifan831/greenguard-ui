import { Injectable } from '@angular/core';
import { DroneModel } from './drone-model-schema';

@Injectable({
  providedIn: 'root',
})
export class DroneDataService {
  private droneData: { [name: string]: DroneModel } = {
    t50: {
      name: 'DJI AGRAS T50',
      main_video_src:
        'https://www-cdn.djiits.com/reactor/assets/_next/static/videos/e5910f48-ea2b-44e6-b77c-f130813a4e51.webm',
      model_detail_video_src:
        'https://www-cdn.djiits.com/reactor/assets/_next/static/videos/ef2967cd-77c6-4038-a11a-9ec79e8385e5.webm',
      description:
        'DJI AGRAS T50 elevates drone agricultural operations to new heights. It inherits a powerful coaxial twin-rotor propulsion system and a split-type torque resistant structure for next level stability when carrying 40 kg spraying<sup>[1]</sup> or 50 kg spreading<sup>[1]</sup> payloads. <br /> DJI AGRAS T50 leverages a Dual Atomizing Spraying System, Front and Rear Phased Array Radars, and a Binocular Vision System. DJI AGRAS T50 excels across multiple scenarios, from surveying<sup>[2]</sup> to spraying and spreading, guaranteeing stable operations and steady performance.',
      dark: true,
      features: [
        {
          title: 'Light and Nimble',
          detail:
            'Foldable and simple for solo operation <br> Small for easy takeoff and landing',
        },
        { title: 'Spray or Spread', detail: '4 × 5MP<br>G/R/RE/NIR' },
        { title: 'Signal Stability', detail: 'Foldable for easy storage' },
        { title: 'All Scenario Adaptability', detail: '4 × 5MP<br>G/R/RE/NIR' },
        {
          title: 'Multidirectional Obstacle Sensing',
          detail: 'Foldable for easy storage',
        },
        {
          title: 'Four Sprinkler Kit (Optional)',
          detail: '4 × 5MP<br>G/R/RE/NIR',
        },
      ],
    },
    t25: {
      name: 'DJI AGRAS T25',
      main_video_src:
        'https://www-cdn.djiits.com/reactor/assets/_next/static/videos/e1270deb-457e-4440-ad6d-f029cf0a4cb4.webm',
      model_detail_video_src:
        'https://www-cdn.djiits.com/reactor/assets/_next/static/videos/eea03a54-3a0d-4cf8-8354-bc21f88946d8.webm',
      description:
        'DJI AGRAS T25 redefines standards for compact agricultural drones. Light and nimble, DJI AGRAS T25 can easily be handled by one person. It can carry a spraying payload up to 20 kg<sup>[1]</sup> or a spreading payload up to 25 kg<sup>[1]</sup>. DJI AGRAS T25 is equipped with Front and Rear Phased Array Radars, a Binocular Vision System, and a high resolution FPV gimbal camera. DJI AGRAS T25 supports multiple missions, from surveying<sup>[2]</sup> to spraying and spreading and excels across a variety of terrains.',
      dark: false,
      features: [
        {
          title: 'Light and Nimble',
          detail:
            'Foldable and simple for solo operation <br> Small for easy takeoff and landing',
        },
        {
          title: 'Spray or Spread',
          detail:
            '20 kg spraying tank<sup>[1]</sup>, 16 L/min flow rate<sup>[3]</sup><br />25 kg spreading tank<sup>[1]</sup>, 72 kg/min flow rate<sup>[4]</sup>',
        },
        {
          title: 'Signal Stability',
          detail:
            'Offline operations<br />2 km O3 Transmission<sup>[8]</sup><br />Optional DJI Relay',
        },
        {
          title: 'All Scenario Adaptability',
          detail:
            'Fully automatic and manual operation<br />Orchard Mode<br />Variable Rate Application',
        },
        {
          title: 'Multidirectional Obstacle Sensing',
          detail: 'Multidirectional Obstacle Avoidance<br />Terrain Following up to 50°',
        },
        {
          title: 'Four Sprinkler Kit (Optional)',
          detail:
            'Reverse Directional Spray During Flight <br />4-sprinkler spraying, flow rate 24 L/min<sup>[3]</sup>',
        },
      ],
    },
    mavic_3_m: {
      name: 'DJI Mavic 3M',
      main_video_src:
        'https://www-cdn.djiits.com/reactor/assets/_next/static/videos/c75a5a56-9455-4783-9ea5-eff9835beee5.mp4',
      model_detail_video_src:
        'https://www-cdn.djiits.com/reactor/assets/_next/static/videos/eea03a54-3a0d-4cf8-8354-bc21f88946d8.webm',
      description:
        "Effective aerial surveying needs to see the invisible. That's why Mavic 3 Multispectral has two forms of sight. It combines an RGB camera with a multispectral camera to scan and analyze crop growth with total clarity. Agricultural production management requires precision and data, and Mavic 3M delivers both.",
      dark: true,
      features: [
        { title: 'Compact and portable', detail: 'Foldable for easy storage' },
        { title: 'Multispectral Camera', detail: '4 × 5MP<br>G/R/RE/NIR' },
        {
          title: 'RGB camera',
          detail: '20 MP<br>4/3 CMOS, mechanical shutter',
        },
        { title: 'Multispectral Camera', detail: '4 × 5MP<br>G/R/RE/NIR' },
        { title: 'Multispectral Camera', detail: '4 × 5MP<br>G/R/RE/NIR' },
        { title: 'Multispectral Camera', detail: '4 × 5MP<br>G/R/RE/NIR' },
      ],
    },
  };
  constructor() {}

  getDroneDetailsByName(name: string): DroneModel | undefined {
    return this.droneData[name];
  }
}
