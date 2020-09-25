export const ROLES = {
  NONE: 0,
  MANAGER: 1,
  FRANCHISE_MANAGER: 2,
  GROUP: 10,
};

export const ROLE_NAMES = {
  1: () => "Manager",
  2: () => "Franchise manager",
  10: (x) => `${x} members`,
};

export const MAX_DESCRIPTION_LENGTH = 500;
export const MAX_TITLE_LENGTH = 60;
export const MAX_NAME_LENGTH = 15;

export const ATTACHMENT_FORMAT = ['docx'];

export const COLORS = {
  primary: "#6200EE",
  border: '#C3C3C4',
  danger: 'red',
};

export const TEXT_COLORS = {
  darkest: '#212121',
  dark: '#343737',
  regular: '#7F7F7F',
  medium: '#989898',
  light: '#adadad',
  lightest: '#ffffff',
};

export const FONT_SIZE = {
  title: 26,
  subtitle: 18,
  heading: 16,
  subheading: 14,
  text: 12,
  legends: 10,
};

export const SPACINGS = {
  container: 15,
  headerPadding: 30,
};

export const BORDERS = {
  thin: 0.5,
  medium: 1,
  thick: 2,
  radius: 4,
};