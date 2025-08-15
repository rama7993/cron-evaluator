export const CRON_MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

export const CRON_WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const CRON_VALIDATORS = {
  seconds:
    /^(\*|([0-5]?\d)(-[0-5]?\d)?(\/\d+)?(,([0-5]?\d)(-[0-5]?\d)?(\/\d+)?)*)$/i,
  minutes:
    /^(\*|([0-5]?\d)(-[0-5]?\d)?(\/\d+)?(,([0-5]?\d)(-[0-5]?\d)?(\/\d+)?)*)$/i,
  hours:
    /^(\*|([01]?\d|2[0-3])(-([01]?\d|2[0-3]))?(\/\d+)?(,([01]?\d|2[0-3])(-([01]?\d|2[0-3]))?(\/\d+)?)*)$/i,
  days: /^(\*|([1-9]|[12]\d|3[01])(-([1-9]|[12]\d|3[01]))?(\/\d+)?(,([1-9]|[12]\d|3[01])(-([1-9]|[12]\d|3[01]))?(\/\d+)?)*)$/i,
  month:
    /^(\*|((JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)|([1-9]|1[0-2]))(-((JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)|([1-9]|1[0-2])))?(\/\d+)?(,((JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)|([1-9]|1[0-2]))(-((JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)|([1-9]|1[0-2])))?(\/\d+)?)*)$/i,
  dow: /^(\*|((SUN|MON|TUE|WED|THU|FRI|SAT)|[0-6])(-((SUN|MON|TUE|WED|THU|FRI|SAT)|[0-6]))?(\/\d+)?(,((SUN|MON|TUE|WED|THU|FRI|SAT)|[0-6])(-((SUN|MON|TUE|WED|THU|FRI|SAT)|[0-6]))?(\/\d+)?)*)$/i,
} as const;

export type CronFieldKey = keyof typeof CRON_VALIDATORS;
