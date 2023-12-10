// * Норма

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// - Для виведення часу на екран.
// - Зміни часу на передану кількість секунд.
// - Зміни часу на передану кількість хвилин.
// - Зміни часу на передану кількість годин.
// - Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const clock = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  showTime() {
    // перевірка для того щоб відображалося 00:00:00 замість 0:0:0
    this.hours =
      this.hours.toString().length < 2 ? '0' + this.hours : this.hours;
    this.minutes =
      this.minutes.toString().length < 2 ? '0' + this.minutes : this.minutes;
    this.seconds =
      this.seconds.toString().length < 2 ? '0' + this.seconds : this.seconds;

    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  },

  showCurrentTime() {
    this.hours =
      new Date().getHours() < 10
        ? '0' + new Date().getHours()
        : new Date().getHours();
    this.minutes =
      new Date().getMinutes() < 10
        ? '0' + new Date().getMinutes()
        : new Date().getMinutes();
    this.seconds =
      new Date().getSeconds() < 10
        ? '0' + new Date().getSeconds()
        : new Date().getSeconds();

    console.log(
      `${this.hours}:${this.minutes}:${this.seconds} - this is the current time!`
    );
  },

  setTime(hours, minutes, seconds) {
    this.hours = +this.hours + hours;
    this.minutes = +this.minutes + minutes;
    this.seconds = +this.seconds + seconds;

    if (this.seconds > 59 || this.minutes > 59 || this.hours > 24) {
      this.minutes = this.minutes + Math.floor(this.seconds / 60);
      this.seconds = this.seconds % 60;
      this.hours = this.hours + Math.floor(this.minutes / 60);
      this.minutes = this.minutes % 60;
      this.hours = this.hours % 24;
    }
  },
};

export default clock;
