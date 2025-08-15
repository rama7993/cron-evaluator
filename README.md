# Cron Expression & Recurrence Pattern Visualizer
An Angular application for parsing **cron expressions** and building **human-readable recurrence schedules**.  
The tool has two main modules:

1. **Cron Expression Visualizer** – Parses a 6-field cron expression and displays each component in real-time.
2. **Recurrence Pattern Generator** – Lets users configure daily, weekly, or monthly schedules through a simple form.

---

## 🚀 Features

### **Task 1: Cron Expression Visualizer**
- Enter a complete cron expression:  
- Real-time parsing into **seconds**, **minutes**, **hours**, **days**, **month**, and **day of week**.
- Recognizes both numeric and text values (e.g., `JAN`, `MON`).
- Highlights active fields and marks invalid inputs.
- Handles extra spaces gracefully.
- Resets to defaults (`*`) for incomplete or invalid expressions.

### **Task 2: Recurrence Pattern Generator**
- Select **Daily**, **Weekly**, or **Monthly** schedule types.
- Choose times, days, or dates dynamically.
- Generates natural language descriptions:
- Daily → `Runs every day at 08:00 AM`
- Weekly → `Runs every week on Monday and Wednesday at 09:30 AM`
- Monthly → `Runs every month on the 15th at 10:00 AM`
- Supports multiple weekly days and proper ordinal date formatting.

---

## 🛠 Tech Stack
- **Frontend Framework:** Angular
- **Language:** TypeScript
- **UI:** HTML, CSS
- **Extras:** Cron parsing, recurrence helpers, form-based UI

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/cron_angular.git
cd cron_angular

# 2. Install dependencies
npm install

# 3. Start the development server
ng serve

# 4. Open the app in your browser
http://localhost:4200/


# CronAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
