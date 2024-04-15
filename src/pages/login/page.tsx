export default function LoginPage() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row mx-auto bg-white p-5 rounded  border-2 border-danger login-form">
        <div className="col">
          <div className="text-center">
            <img src="images/Logo.svg" alt="" />
          </div>

          <form className="py-5" id="loginForm">
            <div className="mb-5">
              <label htmlFor="username" className="form-label fw-semibold">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Adresă e-mail"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="form-label fw-semibold">
                Parola
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Parolă"
                required
              />
            </div>

            <div className="text-center">
              <button
                className="btn btn-success rounded-4 button-login fw-semibold"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
