import { Injectable } from '@angular/core';

export interface ServiceFeature {
  title: string;
  description: string;
  benefits: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  howItWorks: string;
  features: ServiceFeature[];
  bestFor: string[];
  whyChooseUs: string[];
}

@Injectable({
  providedIn: 'root'
})
export class FarmServiceService {
  private serviceDetails: Record<string, ServiceDetail> = {
    monitoring: {
      id: 'monitoring',
      title: 'Drone Crop Monitoring & Health Analysis',
      subtitle: 'Advanced Aerial Crop Monitoring Solutions',
      description: 'At GreenGuard Drone, we provide advanced aerial crop monitoring services using multispectral, thermal, and high-resolution imaging. Our drones capture real-time data to help farmers detect plant stress, monitor growth, and optimize farm management for higher yields and reduced losses.',
      icon: 'dashboard',
      howItWorks: 'Our drones fly over your fields and use specialized sensors to collect data on plant health, soil conditions, and crop growth. The data is then processed using AI-powered analytics, giving farmers detailed insights for better decision-making.',
      features: [
        {
          title: 'NDVI & Multispectral Imaging',
          description: 'Uses multispectral cameras to analyze plant health at different light wavelengths (visible, near-infrared). Generates NDVI maps to highlight healthy vs. stressed crops.',
          benefits: [
            'Detects nutrient deficiencies, disease, and water stress early',
            'Helps plan fertilization and irrigation more efficiently',
            'Reduces yield loss by identifying problem areas before they spread'
          ]
        },
        {
          title: 'Pest & Disease Detection',
          description: 'Uses high-resolution and thermal imaging to detect unusual heat patterns caused by diseases or pests. AI-based software identifies infected plants, so farmers can apply pesticides only where needed.',
          benefits: [
            'Early detection prevents widespread damage',
            'Reduces pesticide use, saving money and reducing environmental impact',
            'Protects crop quality and yield'
          ]
        },
        {
          title: 'Growth Monitoring & Yield Estimation',
          description: 'Creates time-lapse growth maps showing how crops develop throughout the season. Uses AI-powered analysis to estimate expected yield based on plant health data.',
          benefits: [
            'Optimizes harvest planning and logistics',
            'Helps forecast profitability and market supply',
            'Reduces losses by identifying underperforming zones'
          ]
        },
        {
          title: 'Thermal Imaging',
          description: 'Captures temperature variations in crops and soil, highlighting drought stress, water distribution problems, or disease outbreaks. Helps detect overheated or dehydrated plants before visible damage occurs.',
          benefits: [
            'Improves irrigation efficiency by identifying dry zones',
            'Detects root infections or fungal growth before they spread',
            'Enhances overall crop health and resilience'
          ]
        }
      ],
      bestFor: [
        'Large-scale farms, vineyards, orchards, and greenhouses',
        'Farmers looking to reduce chemical use and improve sustainability',
        'Crop managers who need data-driven insights for better decision-making'
      ],
      whyChooseUs: [
        'Precision Technology – Industry-leading multispectral and thermal drones',
        'AI-Powered Analytics – Smart data processing for actionable insights',
        'Cost-Effective – Reduces input waste and maximizes ROI',
        'Comprehensive Reports – Easy-to-read crop health reports for quick decision-making'
      ]
    },
    spraying: {
      id: 'spraying',
      title: 'Precision Spraying & Spreading',
      subtitle: 'High-Efficiency Drone Application Solutions',
      description: 'At GreenGuard Drone, we provide high-efficiency drone spraying and spreading services designed to reduce input waste, save time, and maximize crop yield. Using advanced agricultural drones, we ensure precise application of pesticides, fertilizers, herbicides, and seeds, minimizing environmental impact and optimizing farm productivity.',
      icon: 'experiment',
      howItWorks: '🚁 Our drones are equipped with smart spraying and spreading systems that automatically adjust flow rates, coverage areas, and droplet sizes based on real-time field conditions.\n🌱 AI-powered sensors detect crop density and plant health, ensuring accurate chemical or seed application.\n📍 GPS RTK technology ensures ultra-precise positioning for targeted application.',
      features: [
        {
          title: 'Automated Pesticide & Herbicide Spraying',
          description: 'Uses variable-rate technology (VRT) to apply only the required amount of chemicals. Covers large areas quickly, reducing labor costs. Smart obstacle avoidance ensures safe operations in complex terrains.',
          benefits: [
            'Reduces chemical costs by up to 30%',
            'Targets only affected areas, reducing environmental contamination',
            'Ensures uniform coverage with adjustable spray droplet size'
          ]
        },
        {
          title: 'Selective Spot Spraying',
          description: 'Uses AI-based image recognition to identify areas with weeds, pests, or disease. Sprays only the affected areas, preventing unnecessary chemical use.',
          benefits: [
            'Reduces herbicide and pesticide usage by up to 50%',
            'Protects beneficial crops and improves soil health',
            'Helps fight herbicide-resistant weeds by applying targeted treatments'
          ]
        },
        {
          title: 'Fertilizer & Liquid Nutrient Application',
          description: 'Applies liquid fertilizers evenly across the field. Uses real-time data from multispectral imaging to adjust application rates.',
          benefits: [
            'Prevents over-fertilization, reducing soil damage',
            'Maximizes nutrient absorption by applying at the right time',
            'Saves costs and time compared to traditional spraying methods'
          ]
        },
        {
          title: 'Seed Spreading & Granular Fertilizer Application',
          description: 'Spreads cover crop seeds, rice, and other small grains over large areas. Applies granular fertilizers or pest control granules with precision.',
          benefits: [
            'Enables no-till seeding, reducing soil erosion',
            'Covers up to 40 acres per hour, far faster than manual seeding',
            'Works in muddy, wet, or hard-to-reach areas where traditional machines cannot'
          ]
        }
      ],
      bestFor: [
        'Large farms that require efficient spraying and spreading solutions',
        'Vineyards, orchards, and specialty crops that need precise applications',
        'Farmers looking to reduce labor costs and chemical waste',
        'Hard-to-reach areas, such as hilly terrain or wetland fields'
      ],
      whyChooseUs: [
        'High-Precision Drone Technology – RTK GPS, AI detection, and variable-rate spraying',
        'Eco-Friendly & Cost-Effective – Reduces chemical use while maximizing crop protection',
        'Fast & Efficient – Covers up to 40 acres per hour, cutting labor costs',
        'Complete Service Package – Includes flight planning, spraying, spreading, and post-application analysis'
      ]
    },
    mapping: {
      id: 'mapping',
      title: 'Aerial Mapping & Surveying',
      subtitle: 'High-Precision Aerial Data Solutions',
      description: 'At GreenGuard Drone, we provide high-precision aerial mapping and surveying services using advanced drone technology. Our services help farmers, landowners, and agribusinesses optimize land use, analyze soil conditions, and make data-driven decisions to increase productivity.',
      icon: 'environment',
      howItWorks: '📍 Drone Flight Planning – Our drones follow a programmed flight path to capture images and data over your fields.\n🛰 High-Resolution Imaging – Using RGB, multispectral, and LiDAR sensors, our drones collect detailed topographic data.\n📊 Data Processing & Analysis – AI-powered software processes the data into actionable insights such as field maps, 3D models, and crop health reports.',
      features: [
        {
          title: 'High-Precision Field Mapping',
          description: 'Captures high-resolution orthomosaic images of fields. Generates 2D and 3D maps for farm planning and infrastructure development. Provides precise field boundaries for land measurement and planning.',
          benefits: [
            'Improves land use efficiency by identifying underutilized areas',
            'Helps plan irrigation systems, drainage, and farm infrastructure',
            'Saves time and cost compared to traditional land surveying'
          ]
        },
        {
          title: 'Soil Condition & Health Analysis',
          description: 'Uses multispectral and infrared imaging to analyze soil moisture, organic matter, and fertility levels. Detects areas with poor soil conditions that need treatment. Provides data for precision fertilization and crop rotation planning.',
          benefits: [
            'Reduces fertilizer waste by applying nutrients only where needed',
            'Identifies areas prone to erosion or compaction',
            'Improves crop productivity and sustainability'
          ]
        },
        {
          title: 'Elevation & Drainage Mapping',
          description: 'Generates Digital Elevation Models (DEM) and 3D terrain maps. Identifies low-lying areas prone to water accumulation. Helps design efficient irrigation and drainage systems.',
          benefits: [
            'Prevents crop loss due to waterlogging or drought',
            'Improves drainage planning for better water flow management',
            'Helps farmers decide where to plant specific crops based on elevation'
          ]
        },
        {
          title: 'Crop Health & Yield Estimation',
          description: 'Uses NDVI and multispectral imaging to analyze crop vigor and health. Estimates expected yield based on growth patterns and plant health. Tracks seasonal changes in crop performance.',
          benefits: [
            'Improves harvest planning and logistics',
            'Helps farmers predict and prevent yield loss',
            'Optimizes resource allocation for maximum profitability'
          ]
        }
      ],
      bestFor: [
        'Farmers & Agribusinesses needing precise field data for better decision-making',
        'Vineyards, orchards, and plantations requiring terrain and health monitoring',
        'Landowners & agricultural investors looking to assess land value and productivity',
        'Government agencies & researchers studying soil, crop health, and climate impact'
      ],
      whyChooseUs: [
        'High-Accuracy Data – Uses RTK GPS, LiDAR, and multispectral imaging for precision',
        'Cost-Effective & Fast – Maps large areas 10x faster than traditional surveys',
        'Data-Driven Insights – AI-powered analytics for smarter farm management',
        'Customizable Reports – Easy-to-read maps, 3D models, and crop analysis reports'
      ]
    }
  };

  getServiceDetail(category: string): ServiceDetail | undefined {
    return this.serviceDetails[category];
  }
} 