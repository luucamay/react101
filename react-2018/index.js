class Comment extends React.Component {
  render() {
    return (
      <div>
        <textarea className="form-control" placeholder="Write a comment..." />
        <small>140 Remaining</small>
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
              <div class="col-2">
                <img src="https://avatars0.githubusercontent.com/u/15850514?s=460&v=4" class="profile-pic"></img>
              </div>
              <div className="col-10 profile-row">
                <div className="row">
                  <a href="#">Imilla loves React</a>
                </div>
                <div class="row">
                  <small className="post-time">10 mins</small>
                </div>
              </div>
            </div>
          </div>
          <p>Hello world!</p>
          <div className="card-footer text-muted">
            <Comment />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Status />, document.getElementById("root"))