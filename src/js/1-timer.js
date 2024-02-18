// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';


// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Показуємо повідомлення
iziToast.show({
  title: 'Привіт',
  message: 'Ласкаво просимо до вашого проекту!',
});


  // Вибір елемента для використання з Flatpickr
  const datetimePicker = document.querySelector('#datetime-picker');
  const startButton = document.querySelector('[data-start]');
  let userSelectedDate;

  

  /// Опції для Flatpickr
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: function (selectedDates) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate <= new Date()) {
        window.alert('Please choose a date in the future');
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
    },
  };


  // Ініціалізація Flatpickr
  if (datetimePicker && options) {
    flatpickr(datetimePicker, options);
  } else {
    console.log('datetimePicker або options не визначені або дорівнюють null');
  }

  flatpickr(datetimePicker, options);

  // Функція для перетворення мілісекунд
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  // Функція для додавання ведучих нулів
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }


  // Функція для запуску зворотного відліку
  function startCountdown() {
    const intervalId = setInterval(function () {
      const now = new Date();
      const distance = userSelectedDate - now;
      
      if (distance <= 0) {
        clearInterval(intervalId);
        document.querySelector('.timer').textContent = '00:00:00:00';
        return;
      }

      const time = convertMs(distance);

      document.querySelector('[data-days]').textContent = addLeadingZero(
        time.days
      );
      document.querySelector('[data-hours]').textContent = addLeadingZero(
        time.hours
      );
      document.querySelector('[data-minutes]').textContent = addLeadingZero(
        time.minutes
      );
      document.querySelector('[data-seconds]').textContent = addLeadingZero(
        time.seconds
      );
    }, 1000);
  }

  // Додавання обробника подій до кнопки "Start"
  startButton.addEventListener('click', function () {
    datetimePicker.disabled = true;
    startButton.disabled = true;
    startCountdown();
  });
