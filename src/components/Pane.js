import React, {Component} from 'react';

class Pane extends Component {
  props: {
    vertical: bool,
    primary: bool,
    size: number,
    percentage: bool
  }

  static defaultProps = {
    vertical: false,
    primary: false,
    size: 0,
    percentage: false
  }

  render() {
    const {children, percentage, primary, size, vertical} = this.props
    const unit = percentage ? '%' : 'px';
    const sizeStr = `${size ? size : 0}${unit}`
    let classes = 'layout-pane';
    const style = {};
    if (!primary) {
      if (vertical) {
        style.height = sizeStr;
      } else {
        style.width = sizeStr;
      }
    } else {
      classes += ' layout-pane-primary';
    }
    return (
      <div className={classes} style={style}>{children}</div>
    );
  }
}

export default Pane;
