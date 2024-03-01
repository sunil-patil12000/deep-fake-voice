

const Login = () => {
  return (
    <>

        <div className="container">
            <div className="login">
                <h2>Login</h2>
                <form>
                    <div className="input">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="input">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login