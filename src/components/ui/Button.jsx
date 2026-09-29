import { Link } from 'react-router-dom'

function Button({
  children,
  className = '',
  href,
  to,
  variant = 'primary',
  ...props
}) {
  const variantClass =
    variant === 'secondary' ? 'button button--secondary' : 'button'
  const buttonClassName = [variantClass, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a className={buttonClassName} href={href} {...props}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link className={buttonClassName} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClassName} type="button" {...props}>
      {children}
    </button>
  )
}

export default Button
