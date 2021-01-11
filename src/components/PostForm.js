import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createPost} from "../redux/action";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault()

    const { title } = this.state

    if(!title.trim()) {
      return
    }

    const newPost = {
      title, id: Date.now().toString()
    }

    this.props.createPost(newPost)

    this.setState({ title: '' })
  }

  changeInputHandler = event => {
    this.setState(prev => ({
      ...prev, ...{
        [event.target.name]: event.target.value
      }
    }))
  }


  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
          <button className="btn btn-success mt-4 mb-3" type="submit">Создать</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm);