import './index.css'

const EachPasswordManager = props => {
  const {each, isChecked, deletePasswordContainer} = props
  const {id, website, username, password} = each
  // const passwordText = isChecked ? password : '*******'

  const deletePassword = () => {
    deletePasswordContainer(id)
  }

  return (
    <li className="list-con">
      <div className="website-con-text">{website[0]}</div>
      <div className="list-text-con">
        <p>{website}</p>
        <p>{username}</p>
        <div>
          {isChecked ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="star-icon"
            />
          )}
        </div>
      </div>
      <button className="delete-button" type="button" onClick={deletePassword}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default EachPasswordManager
