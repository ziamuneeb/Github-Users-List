import './user.css';

const Users = (props) => {
    const user = props.people;
    return(
    <div>
    <section className = 'section'>
      <h1>Github Users</h1>
      <div className = 'users'>
        {user.map((user) => {
          const {id, login, avatar_url,html_url} = user;
          return (
            <div>
              <div className = 'user'>
                <img src = {avatar_url}></img>
                <div>
                  <h3>{login}</h3>
                  <a href = {html_url}>profile</a>
                </div>
              </div>
             
            </div>
          )
        })}
      </div>
    </section> 
  </div>
    )
}

export default Users;