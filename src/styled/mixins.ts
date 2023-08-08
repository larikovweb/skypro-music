// mixins
export const rem = (pixels: number, context = 16): string => {
  if (pixels) {
    pixels * 1;
  }
  if (context) {
    context * 1;
  }

  return `${(pixels / context) * 1}rem`;
};

export const calcFluidFontSize = (
  f_min: number,
  f_max: number,
  v_min: number,
  v_max: number,
): string => {
  const k = (f_max - f_min) / (v_max - v_min);
  let b = f_min - k * v_min;

  b = b * 1;

  return `calc(${`${k * 100}vw + ${b}px`})`;
};

export const fontFace = (
  $font_family: string,
  $file_path: { ttf: string; woff: string; woff2: string; eot: string; svg: string },
  $weight: number | string = 'normal',
  $style = 'normal',
) => {
  const name = $file_path.ttf.split('/').pop();
  const nameLocal = name?.split('-').join(' ');

  return `@font-face {
    font-family: ${$font_family};
    src: url('${$file_path.eot}');
    src: local('${name}'), local('${nameLocal}'),
      url('${$file_path.eot}?#iefix') format('embedded-opentype'),
      url('${$file_path.woff}') format('woff'), url('${$file_path.woff2}') format('woff2'),
      url('${$file_path.svg}') format('svg'), url('${$file_path.ttf}') format('ttf'),
      url('${$file_path.ttf}') format('truetype');
    font-weight: ${$weight};
    font-style: ${$style};
    font-display: swap;
  }`;
};
