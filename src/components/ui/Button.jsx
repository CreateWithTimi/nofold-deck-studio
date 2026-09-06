import { Link } from 'react-router-dom'

function Button({ children, to, variant = 'primary', ...props }) {
  const className = variant === 'secondary' ? 'button button--secondary' : 'button'

  if (to) {
    return (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  )
}

export default Button
