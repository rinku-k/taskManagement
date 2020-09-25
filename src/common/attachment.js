import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-native-elements';
import DocumentPicker from 'react-native-document-picker';
import { Heading, Content } from './texts';
import { BORDERS, COLORS, TEXT_COLORS } from '../constants';

export const Attachment = ({ file, setFile, avoidDelete }) => {
  
  const singleFilePicker = async() => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFile(res);
    } catch (err) {
      console.log('Unknown Error: ' + JSON.stringify(err));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <Heading text="Attachment" />
        { (!file || !file.name) &&
          <Button
            title="Add"
            icon={
              <Icon
                name="attachment"
                size={15}
                color={COLORS.primary}
                transform={[{ rotate: '90deg' }]}
              />
            }
            type="clear"
            titleStyle={{ color: COLORS.primary }}
            onPress={singleFilePicker}
          />
        }
      </View>
      { (!!file && !!file.name) &&
        <View style={[styles.inline, styles.bordered]}>
          <View style={styles.compact}>
            <Icon size={20} name="attachment" transform={[{ rotate: '90deg' }]} />
            <Content style={{ color: TEXT_COLORS.dark }} text={file.name} />
          </View>
          { !avoidDelete &&
            <Icon size={20} name="delete" color="red" onPress={() => setFile(null)}/>
          }
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bordered: {
    borderWidth: BORDERS.thin,
    borderColor: COLORS.border,
    borderRadius: BORDERS.radius,
    padding: 10,
    alignItems: 'center',
  },
  compact: {
    flexDirection: 'row',
  },
});

Attachment.propTypes = {
  setFile: PropTypes.func,
  file: PropTypes.object,
  avoidDelete: PropTypes.bool,
};

Attachment.defaultProps = {
  setFile: null,
  file: null,
  avoidDelete: false,
};
