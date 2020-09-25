import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { FONT_SIZE } from '../constants';

export const Title = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{ fontSize: FONT_SIZE.title, ...style }}
  >
    {text}
  </Text>
);

export const SubTitle = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: FONT_SIZE.subtitle,
      ...style,
    }}
  >
    {text}
  </Text>
);

export const Heading = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: FONT_SIZE.heading,
      fontWeight: 'bold',
      ...style,
    }}
  >
    {text}
  </Text>
);

export const SubHeading = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: FONT_SIZE.subheading,
      ...style,
    }}
  >
    {text}
  </Text>
);

export const Content = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: FONT_SIZE.text,
      ...style,
    }}
  >
    {text}
  </Text>
);

export const Legend = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: FONT_SIZE.legends,
      ...style,
    }}
  >
    {text}
  </Text>
);

Title.propTypes = {
  text: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Title.defaultProps = {
  style: {},
  text: ""
};

Heading.propTypes = {
  ...Title.propTypes,
};

Heading.defaultProps = {
  ...Title.defaultProps,
};

SubHeading.propTypes = {
  ...Heading.propTypes,
};

SubHeading.defaultProps = {
  ...Heading.defaultProps,
};

Text.propTypes = {
  ...Heading.propTypes,
};

Text.defaultProps = {
  ...Heading.defaultProps,
};

SubTitle.propTypes = {
  ...Heading.propTypes,
};

SubTitle.defaultProps = {
  ...Heading.defaultProps,
};

Legend.propTypes = {
  ...Heading.propTypes,
};

Legend.defaultProps = {
  ...Heading.defaultProps,
};
