import btnStyles from '@styles/modules/Button.module.scss';

const Button = ({ color, children, type, className, style, onClick }: { color?: string, children: any; type?: any, className?: string, style?: any, onClick?: any }) => {
    return <button className={[btnStyles.btn, color ? btnStyles[color] : null, className].join(' ')} type={(type) ? type : null} style={style} onClick={onClick}>{children}</button>
}

export default Button