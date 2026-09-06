function PageIntro({ kicker, title, children }) {
  return (
    <div className="page-intro">
      {kicker ? <span className="page-kicker">{kicker}</span> : null}
      <h1>{title}</h1>
      {children ? <p>{children}</p> : null}
    </div>
  )
}

export default PageIntro
