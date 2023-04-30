import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export function Loader() {
  return (
    <LoaderWrapper>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderWrapper>
  );
}
