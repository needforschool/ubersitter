import btnStyles from '@styles/modules/Button.module.scss';

const Button = ({ color, children, type, className }: { color?: string, children: any; type?: any, className?: string }) => {
    return <button className={[btnStyles.btn, color ? btnStyles[color] : null, className].join(' ')} type={(type) ? type : null}>{children}</button>
}

export default Button