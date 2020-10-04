import {col, css, row} from "../utils";

export class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод не реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {tag, styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {imageStyles: is, alt = '', styles} = this.options
    return row(`<img style="${css(is)}" src="${this.value}" alt="${alt}">`, css(styles))
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const html = this.value.map(col).join('')
    return row(html, css(this.options.styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}
