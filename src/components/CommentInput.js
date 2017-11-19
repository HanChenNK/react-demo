import React, { Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class CommentInput extends Component {
  static PropTypes = {
    username: PropTypes.any,
    onUserNameInputBlur: PropTypes.func,
    onSubmit: PropTypes.func
  }

  static defaultProps = {
    username: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      content: ''
    };
  }

  componentDidMount() {
    this.input.focus();
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleUsernameBlur(event) {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(event.target.value);
    }
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username, 
        content: this.state.content,
        createdAt: new Date()
      });
    }
    this.setState({
      content: ''
    });
  }

  render() {
    return (
      <div className='comment-input-wrapper'>
        <div className='comment-input-item username'>
          {/* <span className='comment-input-item-name'>用户名：</span> */}
          <div className='comment-input-item-content'>
            <TextField
              hintText='用户名' 
              value={this.state.username}
              onBlur={this.handleUsernameBlur.bind(this)} 
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-input-item content'>
          {/* <span className='comment-input-item-name'>留言区：</span> */}
          <div className='comment-input-item-content'>
            <TextField
              hintText='留言'
              value={this.state.content}
              ref={(input) => this.input = input}
              onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-input-item submit'>
          <RaisedButton
            onClick={this.handleSubmit.bind(this)}>
            提交
          </RaisedButton>
        </div>
      </div>
    );
  }
}

export default CommentInput;
