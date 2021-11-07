const MaterialIcon = ({className, children}) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className={`material-icons  ${className}`}>{children}</a>
);

export default MaterialIcon;