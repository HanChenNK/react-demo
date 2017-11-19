import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

class Comment extends Component {
  static PropTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number,
    onCommentDelete: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      formatedTime: ''
    };
  }

  componentWillMount() {
    this._formatTime();
  }

  _formatTime() {
    const createdAtDate = new Date(this.props.comment.createdAt);
    const formatedTime = `
      ${createdAtDate.getFullYear()}年
      ${createdAtDate.getMonth() + 1}月
      ${createdAtDate.getDate()}日
      ${createdAtDate.getHours()}时
      ${createdAtDate.getMinutes()}分
      ${createdAtDate.getSeconds()}秒
      `;
    this.setState({ formatedTime });
  }

  handleDelete() {
    if (this.props.onCommentDelete) {
      this.props.onCommentDelete(this.props.index);
    }
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.index}</TableRowColumn>
        <TableRowColumn>{this.props.comment.username}</TableRowColumn>
        <TableRowColumn>{this.props.comment.content}</TableRowColumn>
        <TableRowColumn>{this.state.formatedTime}</TableRowColumn>
        <TableRowColumn><FlatButton secondary={true} onClick={this.handleDelete.bind(this)}>删除</FlatButton></TableRowColumn>
      </TableRow>
    );
  }
}

export default Comment;
