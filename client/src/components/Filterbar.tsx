import filterBarStyles from '@styles/modules/Filterbar.module.scss';

const Filterbar = ({ children }) => <div className={filterBarStyles.filterBar}>{children}</div>

Filterbar.Button = ({ children }) => <div className={filterBarStyles.button}>{ children }</div>


export default Filterbar