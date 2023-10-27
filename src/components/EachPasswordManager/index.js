import './index.css'

const EachPasswordManager = props => {
  const {each} = props
  const {id, website, username, password} = each
  return (
    <li className="list-con">
      <div className="website-con-text">{website[0]}</div>
      <div className="list-text-con">
        <p>{website}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>
    </li>
  )
}

export default EachPasswordManager
