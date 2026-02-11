function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="logo">
          <img src="/logo.png" alt="Ilham Farobi" width={367} height={93} />
        </div>
        <h2>Hey there! I am a Software Engineer.</h2>
        <p>
          Currently working at{' '}
          <a href="https://kangaroohealth.com" target="_blank" rel="noreferrer">
            KangarooHealth
          </a>{' '}
          as a Frontend Lead. Building healthcare dashboards and remote patient
          monitoring solutions. Previously worked with Fortune 500s and startups
          across e-commerce, Web3, and various client projects. I write backend
          (Node.js, Express) and Frontend (React, Next.js). Interested to hire
          me? <a href="mailto:ilhamfarobi@gmail.com">Hit me!</a>
        </p>
        <div className="links">
          <a href="mailto:ilhamfarobi@gmail.com" className="icon" target="_blank" rel="noreferrer">
            <i className="si si-gmail"></i>
          </a>
          <a href="https://github.com/ifarobi" className="icon" target="_blank" rel="noreferrer">
            <i className="si si-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ifarobi/" className="icon" target="_blank" rel="noreferrer">
            <i className="si si-linkedin"></i>
          </a>
          <a href="https://twitter.com/IFarobi" className="icon" target="_blank" rel="noreferrer">
            <i className="si si-x"></i>
          </a>
          <a href="https://instagram.com/ifarobi" className="icon" target="_blank" rel="noreferrer">
            <i className="si si-instagram"></i>
          </a>
        </div>
        <div className="footer">
          <span>©2026 Ilham Farobi</span>
        </div>
      </div>
    </div>
  )
}

export default App
