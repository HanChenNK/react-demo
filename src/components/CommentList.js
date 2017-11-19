import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { Table, TableBody, TableRow } from 'material-ui/Table';

class CommentList extends Component {
  static PropTypes = {
    comments: PropTypes.array,
    onCommentDelete: PropTypes.func
  }

  static defaultProps = {
    comments: []
  }

  handleCommentDelete(index) {
    if (this.props.onCommentDelete) {
      this.props.onCommentDelete(index);
    }
  }

  render() {
    return (
      <Table>
        <TableBody stripedRows={true}>
          {this.props.comments.map((comment, index) => {
            return <Comment comment={comment} key={index} index={index} onCommentDelete={this.handleCommentDelete.bind(this)} />
          })}
        </TableBody>
      </Table>
    );
  }
}

export default CommentList;
