import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  currentDate: Date = new Date(); 
  daysInMonth: (number | null)[] = [];
  currentMonth!: string; 
  currentYear!: number;
  arrivalDate: Date | null = null;
  departureDate: Date | null = null;
  currentMonthIndex!: number; 

  extraServices: string[] = ['Palestra', 'Restoranti', 'Pishina', 'SPA'];


  constructor() { }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    this.currentMonth = this.getMonthName(this.currentDate.getMonth()); 
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonthIndex = this.currentDate.getMonth(); 
    
  
    const firstDayOfMonth = new Date(this.currentYear, this.currentDate.getMonth(), 1);
    const startingDay = firstDayOfMonth.getDay(); 
    const lastDayOfMonth = new Date(this.currentYear, this.currentDate.getMonth() + 1, 0);
    const totalDaysInMonth = lastDayOfMonth.getDate();
    

    const daysInMonth = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);
    

    const startIndex = startingDay === 0 ? 7 : startingDay; 
    
    const daysFromPrevMonth = Array.from({ length: startIndex - 1 }, (_, i) => null);
    
    this.daysInMonth = [...daysFromPrevMonth, ...daysInMonth];
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  previousMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }


  getMonthName(monthIndex: number): string {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
  }

  isDateInPast(year: number, monthIndex: number, day: number): boolean {
    const today = new Date();
    const selectedDate = new Date(year, monthIndex, day);
    return selectedDate < today;
}
  selectDate(day: number | null): void {
    if (day !== null && !this.isDateInPast(this.currentYear, this.currentMonthIndex, day)) {
      const selectedDate = new Date(this.currentYear, this.currentMonthIndex, day);
      if (!this.arrivalDate) {
        this.arrivalDate = selectedDate;
      } else if (!this.departureDate) {
        if (selectedDate > this.arrivalDate) {
          this.departureDate = selectedDate;
        } else {
          this.arrivalDate = selectedDate;
          this.departureDate = null;
        }
      } else {
        this.arrivalDate = selectedDate;
        this.departureDate = null;
      }
    }
  }
}