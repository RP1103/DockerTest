import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OptionsService } from '../services/options.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {
  options: any[];
  selectTabs = 'recent';
  index = 0;
  private intervalId: any;

  constructor(private optionsService: OptionsService, private http: HttpClient) {}

  ngOnInit() {
    this.loadOptions(); // Load options initially
    this.startAutoReload(); // Start auto reload
  }

  ngOnDestroy() {
    this.stopAutoReload(); // Clear auto reload when the component is destroyed
  }

  loadOptions() {
    this.optionsService.getOptions().subscribe((options: any[]) => {
      this.options = options;
      console.log(this.options);
      this.resetIndex(); // Reset index when new options are loaded
      this.updateLastUpdatedTime(); // Update the last updated time on the page
    });
  }

  startAutoReload() {
    this.intervalId = setInterval(() => {
      this.loadOptions(); // Reload options data
    }, 5000); // Reload options every 1 minute (adjust as needed)
  }

  stopAutoReload() {
    clearInterval(this.intervalId);
  }

  resetIndex() {
    this.index = 0;
  }

  updateLastUpdatedTime() {
    const currentTime = new Date();
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
      lastUpdatedElement.innerText = currentTime.toISOString(); // Update the last updated time on the page
    }
  }

  getStrikeColor(callStrike: number, putStrike: number, type: string): string {
    if (callStrike > putStrike) {
      return type === 'call' ? 'green' : 'red'; // Higher value, apply green for call and red for put
    } else if (callStrike < putStrike) {
      return type === 'call' ? 'red' : 'green'; // Lower value, apply red for call and green for put
    } else {
      return 'blue'; // Same value, apply blue
    }
  }

  getLastPriceColor(callLastPrice: number, putLastPrice: number, type: string): string {
    if (callLastPrice > putLastPrice) {
      return type === 'call' ? 'green' : 'red'; // Higher value, apply green for call and red for put
    } else if (callLastPrice < putLastPrice) {
      return type === 'call' ? 'red' : 'green'; // Lower value, apply red for call and green for put
    } else {
      return 'blue'; // Same value, apply blue
    }
  }
}
