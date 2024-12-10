import css from './Loader.module.css';
import { RotatingSquare } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <RotatingSquare
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="rotating-square-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
