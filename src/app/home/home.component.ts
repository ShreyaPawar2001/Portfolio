import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  // Lifecycle hook that is called after the view is initialized
  ngAfterViewInit(): void {
    this.scatterHearts();
    setInterval(() => this.scatterHearts(), 3000); // Repeats the scattering every 3 seconds
  }

  private createHeart(): void {
    const imageContainer = document.querySelector('.image-container') as HTMLElement;
    
    if (!imageContainer) {
      return;
    }

    const heart = document.createElement('div');
    heart.classList.add('heart');
    const size = Math.random() * 2 + 1 + 'vw'; // Adjust size in vw
    
    // Softer rainbow colors with reduced brightness and opacity
    const colors = [
      'rgba(255, 0, 0, 0.5)',    // Soft Red
      'rgba(255, 127, 0, 0.5)',  // Soft Orange
      'rgba(255, 255, 0, 0.5)',  // Soft Yellow
      'rgba(0, 255, 0, 0.5)',    // Soft Green
      'rgba(0, 0, 255, 0.5)',    // Soft Blue
      'rgba(75, 0, 130, 0.5)',   // Soft Indigo
      'rgba(143, 0, 255, 0.5)'   // Soft Violet
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Random angle for 360-degree movement
    const angle = Math.random() * 360;
    const distance = Math.random() * 30 + 20; // Random distance in vw
    const x = distance * Math.cos(angle * (Math.PI / 180)) + 'vw';
    const y = distance * Math.sin(angle * (Math.PI / 180)) + 'vw';

    heart.style.width = size;
    heart.style.height = size;
    heart.style.backgroundColor = color;
    heart.style.setProperty('--x', x);
    heart.style.setProperty('--y', y);

    // Append the heart to the image container
    imageContainer.appendChild(heart);

    // Remove the heart after the animation is done
    setTimeout(() => {
      heart.remove();
    }, 7000); // Match the removal time with the animation duration
  }

  private scatterHearts(): void {
    for (let i = 0; i < 70; i++) {
      setTimeout(() => this.createHeart(), i * 10); // Stagger heart creation for smooth appearance
    }
  }
}
