import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantVideoComponent } from './restaurant-video.component';

describe('RestaurantVideoComponent', () => {
  let component: RestaurantVideoComponent;
  let fixture: ComponentFixture<RestaurantVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
