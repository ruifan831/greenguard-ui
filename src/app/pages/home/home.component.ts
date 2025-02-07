import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  styles: [
    `

      h3 {
        color: #fff;
        margin-bottom: 0;
        user-select: none;
      }
    `
  ]
})
export class HomeComponent {
  array = [1, 2, 3, 4];
  services = [
    {
      icon: 'dashboard',
      title: 'Drone Crop Monitoring',
      description: 'Advanced multispectral imaging for real-time crop health analysis'
    },
    {
      icon: 'experiment',
      title: 'Precision Spraying & Spreading',
      description: 'Efficient pesticide, fertilizer, and seed application with minimal waste'
    },
    {
      icon: 'environment',
      title: 'Aerial Mapping & Surveying',
      description: 'High-accuracy mapping for optimized farm planning and soil analysis'
    }
  ];
}
