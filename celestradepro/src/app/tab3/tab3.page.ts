import { Component, OnInit } from '@angular/core';
import { ForexService } from '../services/forex.service';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction.service';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {

  forexs: any[] = [];
  currentForexIndex: number = 0; // Tracks the index of the current stock
  currentDataIndex: number = 0; // Tracks the index of the current data point within the current stock
  private destroy$ = new Subject(); 

  searchedForexs: any[] = [];
  selectedForexs: any[] = [];
  selectTabs = 'recent';
   sortOrder: string = ''; 
  searchTerm: string = '';
  selectedForex: any;
  clickedForex: string;
  buyQuantity: number;
  buyPrice: number;
  sellQuantity: number;
  sellPrice: number;
  currentIndex = 0;
isNaN: any;

  constructor(private forexService: ForexService, private router: Router,
    private transactionService: TransactionService) {}


    /*ngOnInit(): void {
      this.loadSelectedForexs();
    }*/

    ngOnInit(): void  {
      // Fetch initial stock data
      this.fetchForexData();
      
      // Load all selected stocks from the database
      this.loadSelectedForexs();
      
      // Set up an interval to cycle through each data point every 5 seconds
      interval(5000)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => {
              // Update data points for all selected stocks
              this.updateDataPoints();
          });
  }
  
  updateDataPoints() {
    // Check if there are any selected forexs
    if (!this.selectedForexs || this.selectedForexs.length === 0) {
        console.warn('No selected forexs to update data points for.');
        return;
    }

    // Iterate through each selected forex
    for (const selectedForex of this.selectedForexs) {
        // Ensure forex data is available
        if (!selectedForex.values || selectedForex.values.length === 0) {
            console.warn('No forex data available for forex:', selectedForex);
            continue;
        }

        // Increment the current data index
        if (selectedForex.currentDataIndex === undefined) {
            selectedForex.currentDataIndex = 0;
        } else {
            selectedForex.currentDataIndex++;
        }

        // Check if we've reached the end of the data points
        if (selectedForex.currentDataIndex >= selectedForex.values.length) {
            // Reset the data index for this forex
            selectedForex.currentDataIndex = 0;
        }
    }
}

  
    fetchForexData() {
      this.forexService.getSelectedForexs().subscribe(
        ( selectedForexs) => {
          // Update the stocks array with the response data
          this. selectedForexs =  selectedForexs;
          console.log( this. selectedForexs );
          // Reset indices if necessary
          this.currentForexIndex = 0;
          this.currentDataIndex = 0;
        },
        
      )};
    
  
    ngOnDestroy() {
      // Signal the interval subscription to stop when the component is destroyed
      this.destroy$.next();
      this.destroy$.complete();
    }
    
  
   getDataBySymbol(searchTerm: string) {
  if (!searchTerm || searchTerm.trim().length === 0) {
    console.warn("Invalid search term.");
    this.searchedForexs = []; // Clear searchedForexs when searchTerm is empty
    return;
  }

  this.forexService.getDataBySymbol(searchTerm).subscribe(
    (forexs: any[]) => {
      if (forexs && forexs.length > 0) {
        this.searchedForexs = forexs;
        console.log(this.searchedForexs);
      } else {
        console.warn(`Forex not found for symbol: ${searchTerm}`);
        // Clear searchedForexs if no forex found for the symbol
        this.searchedForexs = [];
      }
    },
    (error) => {
      console.error('Error fetching forex data:', error);
    }
  );
}

  
    isSelected(values: any): boolean {
      // Assuming you have a variable to store selected stock
      return this.selectedForexs.some(selectedForex => selectedForex.id === values.id);
    }
  
    addSelectedForex(values: any) {
      this.forexService.addSelectedForex(values).subscribe(
        (response) => {
          console.log('Forex marked as selected:', response);
          this.selectedForexs.push(values); // Update selectedStocks array
          this.searchedForexs = this.searchedForexs.filter(s => s.id !== values.id); // Remove from searchedStocks
        },
        (error) => {
          console.error('Error marking Forex as selected:', error);
        }
      );
    }
  
loadSelectedForexs() {
  this.forexService.getSelectedForexs().subscribe(
    (allSelectedForexs) => {
      // Filter only the selected stocks where the 'selected' field is true
      this.selectedForexs = allSelectedForexs.filter(values => values.selected === true);
      console.log(this.selectedForexs);
    },
    (error) => {
      console.error('Error fetching selected forexs:', error);
    }
  );
}
removeSelectedForex(values: any) {
  this.forexService.removeSelectedForex(values).subscribe(
    (response) => {
      console.log('Forex removed from selected:', response);
      this.selectedForexs = this.selectedForexs.filter(s => s.id !== values.id); // Remove only the clicked stock
      this.loadSelectedForexs(); // Reload selected stocks
    },
    (error) => {
      console.error('Error removing forex from selected:', error);
    }
  );
}


  setClickedForex(symbol: string) {
    this.clickedForex = symbol;
    console.log('Clicked Forex:', this.clickedForex);
    this.selectTabs = 'missed';
    this.router.navigate(['/tabs/tab3'], { queryParams: { symbol } });
  }


  getChangeColor(change: number): string {
    if (change > 0) {
      return 'green'; // Return green color for positive change
    } else if (change < 0) {
      return 'red'; // Return red color for negative change
    } else {
      return 'black'; // Return black color for zero change
    }
  }

  toggleBuyOptions(forex, price: number) {
    forex.showBuyOptions = !forex.showBuyOptions;
    forex.buyPrice = price; // Store the price of the forex
  }

  toggleSellOptions(forex, price: number) {
    forex.showSellOptions = !forex.showSellOptions;
    forex.sellPrice = price;
  } 

  buyforex(forex) {
    const transactionData = {
      forex: forex.symbol,
      quantity: forex.buyQuantity,
      price: forex.buyPrice,
      totalAmount: forex.buyQuantity * forex.buyPrice,
      option:'buy'
    };

    this.transactionService.storeTransaction(transactionData).subscribe(
      (response) => {
        console.log('Buy Transaction stored successfully:', response);
        // Additional actions after storing buy transaction
      },
      (error) => {
        console.error('Error storing Buy Transaction:', error);
        // Handle error cases for buy transaction
      }
    );
  }

  sellforex(forex) {
    const transactionData = {
      forex: forex.symbol,
      quantity: forex.sellQuantity,
      price: forex.sellPrice,
      totalAmount: forex.sellQuantity * forex.sellPrice,
      option:'sell'
    };

    this.transactionService.storeTransaction(transactionData).subscribe(
      (response) => {
        console.log('Sell Transaction stored successfully:', response);
        // Additional actions after storing sell transaction
      },
      (error) => {
        console.error('Error storing Sell Transaction:', error);
        // Handle error cases for sell transaction
      }
    );
  }

  doneButtonClicked(forex) {
    if (forex.showBuyOptions) {
      this.buyforex(forex);
    } else if (forex.showSellOptions) {
      this.sellforex(forex);
    }
    forex.showBuyOptions = false; // Hide buy options after transaction
    forex.showSellOptions = false; // Hide sell options after transaction
  }

  calculateTotal(quantity: number, price: number): number {
    if (!quantity || !price) {
      return 0;
    }
    return quantity * price;
  }

  sortSymbols() {
  // Toggle sorting order between ascending, descending, and normal
  if (this.sortOrder === '') {
    // Default sorting order (ascending)
    this.selectedForexs.sort((a, b) => a.symbol.localeCompare(b.symbol));
    this.sortOrder = 'asc';
  } else if (this.sortOrder === 'asc') {
    // Change to descending order
    this.selectedForexs.sort((a, b) => b.symbol.localeCompare(a.symbol));
    this.sortOrder = 'desc';
  } else {
    // Change to normal order (original order)
    this.loadSelectedForexs(); // Reload selected stocks to restore the original order
    this.sortOrder = ''; // Reset sorting order
  }
}

}
