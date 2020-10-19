class LikeIcon extends React.Component {
  render() {
    return (
      <div>
        <span className="fa-stack fa-sm">
          <i className="fa fa-circle fa-stack-2x blue-icon" />
          <i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
        </span>
      </div>
    )
  }
}

class Like extends React.Component {
  render() {
    return (
      <div>
        {/* Include the LikeIcon subcomponent within the Like component*/}
        <LikeIcon />
        <hr />
        <div>
          <button type="button">
            <i
              className="fa fa-thumbs-o-up fa-4 align-middle"
              aria-hidden="true"
            />
            &nbsp;
            <span className="align-middle">Like</span>
          </button>
        </div>
      </div>
    )
  }
}
class Comment extends React.Component {
  constructor () {
    super()
    this.state = {
      characterCount: 0
    }
  }
  render() {
    return (
      <div>
        <textarea className="form-control" placeholder="Write a comment..." />
        <small>{this.props.maxLetters - this.state.characterCount} Remaining</small>
      </div>
    )
  }
}
class Status extends React.Component {
  render() {
    return (
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-2">
                <img src="https://avatars0.githubusercontent.com/u/15850514?s=460&v=4" className="profile-pic"></img>
              </div>
              <div className="col-10 profile-row">
                <div className="row">
                  <a href="#">Imilla loves React</a>
                </div>
                <div className="row">
                  <small className="post-time">10 mins</small>
                </div>
              </div>
              <p>Hello world!</p>
            </div>
            <Like />
          </div>

          <div className="card-footer text-muted">
            <Comment maxLetters={280} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Status />, document.getElementById("root"))