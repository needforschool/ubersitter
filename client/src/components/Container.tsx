import containerStyles from '@styles/modules/Container.module.scss';

const Container = ({ className, children }: { className?: string, children: any }) => <div className={[className, containerStyles.container].join(' ')}>{children}</div>

export default Container