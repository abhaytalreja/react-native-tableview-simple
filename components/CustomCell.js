import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

const CustomCell = (props) => {
  const {
    cellHeight,
    cellTintColor,
    children,
    highlightActiveOpacity,
    highlightUnderlayColor,
    isDisabled,
    onPress,
  } = props;

   // eslint-disable-next-line no-unneeded-ternary
  const isPressable = onPress ? true : false;

  /* Declare and merge styles with props */
  const styleCell = [...{}, styles.cell, { backgroundColor: cellTintColor, height: cellHeight }];

  if (isPressable && !isDisabled) {
    return (
      <TouchableHighlight
        activeOpacity={highlightActiveOpacity}
        onPress={onPress}
        underlayColor={highlightUnderlayColor}
      >
        <View style={styleCell}>{children}</View>
      </TouchableHighlight>
    );
  }
  return (<View style={styleCell}>{children}</View>);
};

const styles = StyleSheet.create({
  cell: {
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

CustomCell.propTypes = {
  cellHeight: PropTypes.number,
  cellTintColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  highlightActiveOpacity: PropTypes.number,
  highlightUnderlayColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
};

CustomCell.defaultProps = {
  cellHeight: 44,
  cellTintColor: '#fff',
  highlightActiveOpacity: 0.8,
  highlightUnderlayColor: 'black',
  isDisabled: false,
};

export default CustomCell;
