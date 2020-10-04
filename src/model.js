import image from './assets/image.png'
import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from "./classes/blocks";

export const model = [
  new TitleBlock( 'Конструктор сайтов на JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: 'black',
      padding: '1.5rem',
      'text-align': 'center',
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    alt: 'Это картинка',
    imageStyles: {
      width: '500px',
      height: 'auto',
    }
  }),
  new TextBlock('Введите текст и стили слева в форму и добавьте новый элемент на сайт', {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }),
  new ColumnsBlock( [
    'Приложение на чистом JavaScript, без использования библиотек',
    'Нажатие одной кнопки отделяет тебя от нового элемента!',
    'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
]
