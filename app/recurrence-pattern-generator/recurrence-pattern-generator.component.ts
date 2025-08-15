import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RECURRENCE_PATTERNS, WEEKDAYS } from '../utils/reccurense.constants';
import { to12Hour, ordinal } from '../utils/helpers';

type RecurrencePattern = (typeof RECURRENCE_PATTERNS)[number];

@Component({
  selector: 'app-recurrence-pattern-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recurrence-pattern-generator.component.html',
  styleUrls: ['./recurrence-pattern-generator.component.css'],
})
export class RecurrencePatternGeneratorComponent {
  Object = Object;
  pattern: RecurrencePattern = 'Daily';
  patterns = RECURRENCE_PATTERNS;

  // Daily
  dailyTime = '08:00';

  // Weekly
  weekdays = WEEKDAYS;
  selectedWeekdays = Object.fromEntries(WEEKDAYS.map((d) => [d, false]));
  weeklyTime = '09:30';

  // Monthly
  monthDate = 1;
  monthlyTime = '10:00';

  onPatternChange(p: RecurrencePattern) {
    this.pattern = p;
  }

  get description(): string {
    switch (this.pattern) {
      case 'Daily':
        return `Runs every day at ${to12Hour(this.dailyTime)}.`;
      case 'Weekly':
        const days = this.weekdays.filter((d) => this.selectedWeekdays[d]);
        return days.length === 0
          ? 'Select at least one weekday.'
          : `Runs every week on ${days.join(' and ')} at ${to12Hour(
              this.weeklyTime
            )}.`;
      case 'Monthly':
        const d = Math.min(31, Math.max(1, Number(this.monthDate)));
        return `Runs every month on the ${ordinal(d)} at ${to12Hour(
          this.monthlyTime
        )}.`;
    }
  }
}
