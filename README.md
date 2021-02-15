# Slider
Скрипт для создания слайдера.
##Установка
1. Ваш HTML-файл должен иметь следующую структуру:
```HTML
 <div class="slider">
        <div class="slider__wrapper">
            <div class="slider__item">
                <img src="https://arte1.ru/images/detailed/4/23608.jpg" alt="img" class="slider__img">
            </div>
            <div class="slider__item">
                <img src="https://cs3.livemaster.ru/zhurnalfoto/6/2/7/16011402361662716f4f3b68cce49ec117607992e32218141x846773.jpg" alt="img" class="slider__img">
            </div>
            <div class="slider__item">
                <img src="https://avatars.mds.yandex.net/get-zen_doc/1780598/pub_5d98a33e86c4a900b01175a1_5d98a8b27cccba00af4536a2/scale_1200" alt="img" class="slider__img">
            </div>

            <div class="slider__prev">
                <img src="prev.png" alt="prev" class="slider__arr-Img">
            </div>
            <div class="slider__next">
                <img src="next.png" alt="next" class="slider__arr-Img">
            </div>
        </div>
        <div class="slider__dots">
            <div class="slider__dot slider__dot_active"></div>
            <div class="slider__dot"></div>
            <div class="slider__dot"></div>
        </div>
</div>
```
Следующие классы являются обязательными для корректной работы скрипта:
+ **slider** - обертка слайдера.
+ **slider__item** - блоки для размещения контента.
+ **slider__pr+ev** и **slider__next** - блоки для размещения контента.
+ **slider__dots** - обертка кнопок навигации.
+ **slider__dot** - непосредственно кнопки.

2. Перед вашим файлом-скрипта подключите прилагаемый файл-скрипта:
```HTML
<script src="slider.js"></script>
```
3. В вашем скрипте вызовите функцию и передайте в нее номер стартового слайда:
```JS
createSlider(2)
```
