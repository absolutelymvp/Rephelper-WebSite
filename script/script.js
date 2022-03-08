var modal = $modal({
    title: 'Вход',
    content: 'Этот сайт не имеет бэкенда<br>Данная функция не работает',
    footerButtons: [
        { class: 'btn btn__cancel', text: 'Отмена', handler: 'modalHandlerCancel' },
        { class: 'btn btn__ok', text: 'ОК', handler: 'modalHandlerOk' }
      ]
  });