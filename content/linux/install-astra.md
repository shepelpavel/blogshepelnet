---
title: 'Еще один гайд, как установить Linux, Astra Linux'
description: 'В сегодняшней статье расскажу, как установить Astra Linux на твой ПеКа.
И да, я знаю, что подобных гайдов уже навалом в энтернетах, но с чего то нужно начинать писать этот бложек... Так что почитай.'
cover: '/img/content/linux/install-astra/cover.jpg'
---

В сегодняшней статье расскажу, как установить Astra Linux на твой ПеКа.
И да, я знаю, что подобных гайдов уже навалом в энтернетах, но с чего то нужно начинать писать этот бложек... Так что почитай.

> Внимательным будь!
>
> Ели ты не знаешь, как запускать комплюхтер с USB флешки - позови внука, пусть он почитает.

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/1.jpg', alt: 'Astra Linux - обои рабочего стола Red'},{src: '/img/content/linux/install-astra/2.jpg', alt: 'Astra Linux - обои рабочего стола Blue'},{src: '/img/content/linux/install-astra/3.jpg', alt: 'Astra Linux - обои рабочего стола Gray'}]"></ArticleSlider>

## Поедемте...

> Почему же Astra?
>
> В сложившейся ситуации, думаю, стоит внимательно присмотреться к отечественным сборкам операционок. И вкусно и полезно. Если будет желание (мое, естественно), напишу про установку и нормальную настройку Debian, т.к. это мой основной дистр.

Скачать образ можно с официального сайта:

[astralinux.ru](https://astralinux.ru/products/)

Имеется бесплатная версия, под названием "Astra Linux Common Edition".

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/4.png', alt: 'Astra Linux Common Edition'},{src: '/img/content/linux/install-astra/5.png', alt: 'Astra Linux Common Edition - скачать'}]"></ArticleSlider>

Скачанный образ нужно зашить на USB флешку (ну или записать на двухслойный DVD, если у тебя нокия с толстой зарядкой).

Зашивать можно чем угодно, хоть терминалом, но я буду использовать balenaEtcher, как самый простой способ. BalenaEtcher еще и кроссплатформенный, так что сможешь залить флешку со своего пожилого шиндовс.

Качай, опять же, с официального сайта (вообще всегда все качай с официальных сайтов):

[balenaEtcher - Flash OS images to SD cards & USB drives](https://www.balena.io/etcher/)

Выбери нужную версию:

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/6.png', alt: 'balenaEtcher - скачать'}]"></ArticleSlider>

После запуска balenaEtcher выбирай скачанный образ Astra, впихнутую в комп флешку и жми Flash!

> Внимательным будь!
>
> Все, что было на флешке, будет беспощадно уничтожено!

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/7.png', alt: 'balenaEtcher - загрузка на USB'}]"></ArticleSlider>

Ну и чаво?
Флешка готова, стартуй с нее свой копудахтер.

Внимательным будь!
Все, что было на твердых дисках, будет беспощадно уничтожено!
Поэтому, заранее перенеси все свои невероятно важные файлы на дискеты или перфокарты.
Есть варианты с сохранением данных на дисках, но раз ты это читаешь, то они тебе не подойдут. Только хардкор.
Установка по шагам:

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/8.png', alt: 'Astra Linux - boot'},{src: '/img/content/linux/install-astra/9.png', alt: 'Astra Linux - лицензия'},{src: '/img/content/linux/install-astra/10.png', alt: 'Astra Linux - настройка клавиатуры'},{src: '/img/content/linux/install-astra/11.png', alt: 'Astra Linux - настройка сети'},{src: '/img/content/linux/install-astra/12.png', alt: 'Astra Linux - настройка учетных записей'},{src: '/img/content/linux/install-astra/13.png', alt: 'Astra Linux - пароль учетной записи'},{src: '/img/content/linux/install-astra/14.png', alt: 'Astra Linux - настройка времени'},{src: '/img/content/linux/install-astra/15.png', alt: 'Astra Linux - настройка дисков'},{src: '/img/content/linux/install-astra/16.png', alt: 'Astra Linux - разметка дисков 1'},{src: '/img/content/linux/install-astra/17.png', alt: 'Astra Linux - разметка дисков 2'},]"></ArticleSlider>

> Внимательным будь!
>
> Вот до этого момента (скрин ниже) твоя старушка виндовс еще не уничтожена. Есть шанс одуматься...
>
> Как только ты нажмешь "Записать изменения на диск" - ты запишешь изменения на диск. Кто бы мог подумать...

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/18.png', alt: 'Astra Linux - Записать изменения на диск'}]"></ArticleSlider>

Теперь долго ли, коротко ли... ...жди...

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/19.gif', alt: 'Astra Linux - Установка базовой системы'}]"></ArticleSlider>

Ого, что то происходит!

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/20.png', alt: 'Astra Linux - выбор ядра'}]"></ArticleSlider>

Это выбор ядра Linux. Если ты понял из этого объяснения только слово "Это", оставь выбранное ядро по умолчанию и просто жми "Продолжить".

Установщик астры пока сыроват, и, иногда могут возникать вот такие ошибки:

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/21.png', alt: 'Astra Linux - ошибка установки'}]"></ArticleSlider>

Не паникуй. Просто ставь все заново 😬

А точнее, возвращайся на разметку дисков и форматируй базовый раздел. Очень удобно.

Кстати, скорее всего этот косяк связан с тем, что я ставлю систему в Virtualbox и ты с ним не столкнешься... Пойду ка я на QEMU...
Ну наконец то!
Дальше всякие настройки после установки (если не знаешь, что все это значит, оставляй как есть, кроме пункта про установку загрузчика GRUB; там нужно выбрать твой основной твердый диск):

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/22.png', alt: 'Astra Linux - установка ПО'},{src: '/img/content/linux/install-astra/23.png', alt: 'Astra Linux - дополнительные настройки'},{src: '/img/content/linux/install-astra/24.png', alt: 'Astra Linux - GRUB'},{src: '/img/content/linux/install-astra/25.png', alt: 'Astra Linux - GRUB выбор диска (скрин не мой, свой скрин я про*терял)'}]"></ArticleSlider>

Финиш! Финита! Финале!

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/26.png', alt: 'Astra Linux - установка завершена'}]"></ArticleSlider>

Ну вот и все. После нажатия "Продолжить", твой комплюхтер перезагрузится в новенькую, чистенькую, замечательненькую астру.

<ArticleSlider :images="[{src: '/img/content/linux/install-astra/27.png', alt: 'Astra Linux - рабочий стол'}]"></ArticleSlider>

Добавляй ентот гайд в закладки, а в следующем расскажу, как всю эту цифровую вкуснятину настроить, чтоб не было нехватки программ и волосы были мягкие и шелковистые.

Всем спасибо, все свободны.
