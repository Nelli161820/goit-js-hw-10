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

document.addEventListener('DOMContentLoaded', (event) => {
  // Вибір елемента для використання з Flatpickr
  const datetimePicker = document.querySelector('#datetime-picker');

  // Опції для Flatpickr

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      // Запуск таймера при виборі дати
      startCountdown(selectedDates[0]);
    },
  };
  
  // Ініціалізація Flatpickr
  if (datetimePicker && options) {
    flatpickr(datetimePicker, options);
  } else {
    console.log('datetimePicker або options не визначені або дорівнюють null');
  }

  flatpickr(datetimePicker, options);




})