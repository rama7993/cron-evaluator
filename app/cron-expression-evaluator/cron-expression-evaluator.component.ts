import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CRON_MONTHS,
  CRON_WEEKDAYS,
  CRON_VALIDATORS,
  CronFieldKey,
} from '../utils/cron.constants';

type CronFields = Record<
  'seconds' | 'minutes' | 'hours' | 'days' | 'month' | 'dayOfWeek',
  string
>;

@Component({
  selector: 'app-cron-expression-evaluator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cron-expression-evaluator.component.html',
  styleUrls: ['./cron-expression-evaluator.component.css'],
})
export class CronExpressionEvaluatorComponent {
  cronExpression = '';
  cronFields: CronFields = this.createEmptyFields();
  activeFields = this.createBooleanMap(false);
  fieldErrors = this.createBooleanMap(false);
  isValid = false;
  hasPartialErrors = false;

  cronFieldList = [
    { key: 'seconds' as const, label: 'Seconds' },
    { key: 'minutes' as const, label: 'Minutes' },
    { key: 'hours' as const, label: 'Hours' },
    { key: 'days' as const, label: 'Days' },
    { key: 'month' as const, label: 'Month' },
    { key: 'dayOfWeek' as const, label: 'Day of Week' },
  ];

  onCronChange(value: string) {
    this.cronExpression = value.trim();

    const parts = this.cronExpression.split(/\s+/).filter(Boolean);
    if (parts.length !== 6) {
      this.resetState();
      return;
    }

    const [seconds, minutes, hours, days, month, dayOfWeek] = parts;
    const fields: CronFields = {
      seconds,
      minutes,
      hours,
      days,
      month,
      dayOfWeek,
    };

    this.validateAndNormalize(fields);
  }

  private validateAndNormalize(fields: CronFields) {
    let allValid = true;
    let anyInvalid = false;

    (Object.keys(fields) as (keyof CronFields)[]).forEach((field) => {
      const validatorKey: CronFieldKey = field === 'dayOfWeek' ? 'dow' : field;
      const value = fields[field];

      const valid = CRON_VALIDATORS[validatorKey].test(value.toUpperCase());
      const normalized = this.normalizeValue(value, validatorKey);

      this.cronFields[field] = normalized;
      this.activeFields[field] = normalized !== '*';
      this.fieldErrors[field] = !valid;

      if (!valid) {
        allValid = false;
        anyInvalid = true;
      }
    });

    this.isValid = allValid;
    this.hasPartialErrors = anyInvalid;
  }

  private normalizeValue(value: string, kind: CronFieldKey): string {
    if (!value) return '*';
    const upper = value.toUpperCase();

    if (upper === '*') return '*';

    if (kind === 'month') {
      return upper.replace(/[A-Z]+/g, (m) =>
        CRON_MONTHS.includes(m.slice(0, 3)) ? m.slice(0, 3) : m
      );
    }

    if (kind === 'dow') {
      return upper.replace(/[A-Z]+/g, (m) =>
        CRON_WEEKDAYS.includes(m.slice(0, 3)) ? m.slice(0, 3) : m
      );
    }

    return value;
  }

  private resetState() {
    this.isValid = false;
    this.hasPartialErrors = false;
    this.cronFields = this.createEmptyFields();
    this.activeFields = this.createBooleanMap(false);
    this.fieldErrors = this.createBooleanMap(false);
  }

  private createEmptyFields(): CronFields {
    return {
      seconds: '*',
      minutes: '*',
      hours: '*',
      days: '*',
      month: '*',
      dayOfWeek: '*',
    };
  }

  private createBooleanMap(value: boolean) {
    return {
      seconds: value,
      minutes: value,
      hours: value,
      days: value,
      month: value,
      dayOfWeek: value,
    };
  }
}
