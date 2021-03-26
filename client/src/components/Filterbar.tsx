import filterBarStyles from '@styles/modules/Filterbar.module.scss';

const Filterbar = ({ children, className }: { children: any; className?: string }) => <div className={[filterBarStyles.filterBar, className].join(' ')}>{children}</div>

Filterbar.Button = ({ children, onClick }: { children: any; onClick?: any }) => <div className={filterBarStyles.button} onClick={onClick}>{children}</div>


export default Filterbar