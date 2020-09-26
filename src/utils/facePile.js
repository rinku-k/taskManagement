import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet, Animated } from 'react-native'
import { COLORS } from '../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  circleImage: {
    borderWidth: 2,
    borderColor: 'white'
  },
  overflow: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18
  },
  overflowLabel: {
    color: '#fff',
    fontSize: 14,
    letterSpacing: -1,
  }
})

class Circle extends PureComponent {
  render () {
    const { circleSize, face, offset } = this.props
    const innerCircleSize = circleSize * 2
    const marginRight = circleSize * offset

    return (
      <Animated.View
        style={{ marginRight: -marginRight }}
      >
        <Image
          style={[
            styles.circleImage,
            {
              width: innerCircleSize,
              height: innerCircleSize,
              borderRadius: circleSize
            },
          ]}
          source={{ uri: face.photo }}
        />
      </Animated.View>
    )
  }
}

export function renderFacePile (faces = [], numFaces) {
  const entities = [...faces.reverse()]
  if (!entities.length) return {
    facesToRender: [],
    overflow: 0
  }

  const facesWithPhoto = entities.filter(e => e.photo)
  if (!facesWithPhoto.length) return {
    facesToRender: [],
    overflow: 0
  }

  const facesToRender = facesWithPhoto.slice(0, numFaces)
  const overflow = entities.length - facesToRender.length

  return {
    facesToRender,
    overflow
  }
}

export class FacePile extends PureComponent {
  static propTypes = {
    faces: PropTypes.arrayOf(
      PropTypes.shape({
        photo: PropTypes.string
      })
    ).isRequired,
    circleSize: PropTypes.number,
    hideOverflow: PropTypes.bool,
    render: PropTypes.func,
    numFaces: PropTypes.number
  }

  static defaultProps = {
    circleSize: 20,
    numFaces: 4,
    offset: 0.8,
    hideOverflow: false,
  }

  _renderOverflowCircle = overflow => {
    const {
      circleSize,
      offset
    } = this.props;
    
    const innerCircleSize = circleSize * 2;
    const marginLeft = (circleSize * offset) - circleSize / 1.6;

    return (
      <View style={styles.circle}>
        <View
          style={[
            styles.overflow,
            {
              width: innerCircleSize,
              height: innerCircleSize,
              borderRadius: circleSize,
              marginLeft: marginLeft
            },
          ]}
        >
          <Text
            style={[
              styles.overflowLabel,
              {
                fontSize: circleSize * 0.7
              },
            ]}
          >
            +{overflow}
          </Text>
        </View>
      </View>
    )
  }

  _renderFace = (face, index) => {
    const { circleSize, offset } = this.props
    if (face && !face.photo) return null

    return (
      <Circle
        key={face.id || index}
        face={face}
        circleSize={circleSize}
        offset={offset}
      />
    )
  }

  render () {
    const { render, faces, numFaces, hideOverflow } = this.props
    if (render) return render({ faces, numFaces })

    const { facesToRender, overflow } = renderFacePile(faces, numFaces)

    return (
      <View style={[styles.container]}>
        {Array.isArray(facesToRender) && facesToRender.map(this._renderFace)}
        {overflow > 0 && !hideOverflow && this._renderOverflowCircle(overflow)}
      </View>
    )
  }
}