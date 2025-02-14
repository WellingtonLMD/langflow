import PlenumLogo from "@/assets/PlenumLogo.svg?react";
import ChainLogo from "@/assets/logo.svg?react";
import { ENABLE_NEW_LOGO } from "@/customization/feature-flags";

export default function LogoIcon() {
  return (
    <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-muted">
      <div className="flex h-8 w-8 items-center justify-center">
        {ENABLE_NEW_LOGO ? (
          <PlenumLogo
            title="Plenum Logo"
            className="absolute h-[18px] w-[18px]"
          />
        ) : (
          <ChainLogo
            title="Plenum Logo"
            className="absolute h-[18px] w-[18px]"
          />
        )}
      </div>
    </div>
  );
}
