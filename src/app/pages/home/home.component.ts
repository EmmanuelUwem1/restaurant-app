import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { NewsletterSectionComponent } from "./components/newsletter-section/newsletter-section.component";
import { AboutChefComponent } from "./components/about-chef/about-chef.component";
import { RestaurantVideoComponent } from "./components/restaurant-video/restaurant-video.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [HeroComponent, FeaturedComponent, AboutSectionComponent, NewsletterSectionComponent, AboutChefComponent, RestaurantVideoComponent],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
