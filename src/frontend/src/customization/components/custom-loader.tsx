import LoadingComponent from "@/components/common/loadingComponent";
import { ENABLE_PLENUM_AUTOMATION_BUILDER } from "../feature-flags";

type CustomLoaderProps = {
  remSize?: number;
};

const CustomLoader = ({ remSize = 30 }: CustomLoaderProps) => {
  return ENABLE_PLENUM_AUTOMATION_BUILDER ? (
    <></>
  ) : (
    <LoadingComponent remSize={remSize} />
  );
};

export default CustomLoader;
