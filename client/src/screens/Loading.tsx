
import LoadingStyles from '@styles/modules/Loading.module.scss'
import { BarLoader } from "react-spinners";

const Loading = () => (
    <div className={LoadingStyles.wrapper}>
        <img className={LoadingStyles.logo} src="/assets/img/logo/logo-bg-transparent.png" />
        <BarLoader
            height={4}
            width={200}
            color={"#e66767"}
            loading={true}
        />
    </div>
)

export default Loading