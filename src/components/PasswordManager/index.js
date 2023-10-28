import {Component} from 'react'
import {v4} from 'uuid'
import EachPasswordManager from '../EachPasswordManager'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    isChecked: false,
    passwordManagerList: [],
  }

  websiteChange = event => {
    this.setState({website: event.target.value})
  }

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  checkBox = event => {
    console.log(event.target.checked)
    this.setState({isChecked: event.target.checked})
  }

  deletePasswordContainer = id => {
    const {passwordManagerList} = this.state
    /* const deletePassword = passwordManagerList.filter(each => each.id === id)
    console.log(passwordManagerList)
    console.log(deletePassword)
    this.setState({passwordManagerList}) */
    const newPasswordList = passwordManagerList.filter(each => each.id !== id)
    console.log(newPasswordList)
    this.setState({passwordManagerList: newPasswordList})
  }

  searchChange = event => {
    console.log(event.target.value)
    const {passwordManagerList} = this.state
    const searchResults = passwordManagerList.filter(each =>
      each.website.toLowerCase().includes(event.target.value.toLowerCase()),
    )
    this.setState({passwordManagerList: searchResults})
  }

  submitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const addPassword = {id: v4(), website, username, password}
    this.setState(pre => ({
      passwordManagerList: [...pre.passwordManagerList, addPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {
      website,
      username,
      password,
      isChecked,
      passwordManagerList,
    } = this.state

    return (
      <div className="con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="app-logo"
          alt="app logo"
        />
        <div className="fir-con">
          <form onSubmit={this.submitForm} className="child-fir-con">
            <h1 className="para">Add New Password</h1>
            <div className="input-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <hr className="hr" />
              <input
                className="input"
                type="text"
                placeholder="Enter Website"
                value={website}
                onChange={this.websiteChange}
              />
            </div>
            <div className="input-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <hr className="hr" />
              <input
                className="input"
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={this.usernameChange}
              />
            </div>
            <div className="input-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logo"
              />
              <hr className="hr" />
              <input
                className="input"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={this.passwordChange}
              />
            </div>
            <button data-testid="delete" className="button" type="submit">
              Add
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-logo"
            />
          </div>
        </div>
        <div className="sec-con">
          <div className="fir-con-head">
            <div>
              <h1 className="para">Your Passwords</h1>
              <p> {passwordManagerList.length}</p>
            </div>
            <div className="search-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                onChange={this.searchChange}
                className="input"
                type="search"
                placeholder="search"
              />
            </div>
          </div>
          <div className="hr-con">
            <hr className="search-hr-con" />
          </div>
          <div className="show-password-con">
            <input
              type="checkbox"
              onChange={this.checkBox}
              checked={isChecked}
              id="checkBox"
            />
            <label htmlFor="checkBox">Show Passwords</label>
          </div>
          <ul className="ul-con">
            {passwordManagerList.length > 0 ? (
              passwordManagerList.map(each => (
                <EachPasswordManager
                  isChecked={isChecked}
                  each={each}
                  key={each.id}
                  deletePasswordContainer={this.deletePasswordContainer}
                />
              ))
            ) : (
              <div className="no-passwords">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-logo"
                />
                <p>No Passwords</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
