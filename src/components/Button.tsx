import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const icons: IconDefinition[] = [faVk, faTwitter, faInstagram];

export const Button: React.FC = () => {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const handleShowIcon = (): void => {
    setButtonDisabled(true);
    setShowIcon(false);
    setTimeout(() => {
      setButtonDisabled(false);
      setShowIcon(true);
    }, 3000);
  };

  return (
    <div className="w-[500px] flex flex-col justify-center items-center gap-5 border-lime-500 border-2 p-5 rounded-lg">
      <img
        width={200}
        src="https://ci3.googleusercontent.com/mail-sig/AIorK4yqQkPAqv_xW9eiMrhyZd5VeuUGVqJIBinZMF8nlhRYmbplfm556c7doSx9-euT3HwI3UszBDQ"
        alt="company"
      />
      <button
        onClick={handleShowIcon}
        disabled={buttonDisabled}
        className={`bg-lime-500 text-white text-2xl font-semibold w-52 h-16 rounded-xl transition duration-500 ease-in-out hover:bg-lime-700 transform hover:-translate-y-1 hover:scale-110 ${
          buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Show Icon
      </button>
      {showIcon ? (
        <FontAwesomeIcon
          icon={icons[Math.floor(Math.random() * icons.length)]}
          className="text-lime-500 w-10 h-10"
        />
      ) : (
        buttonDisabled && (
          <FontAwesomeIcon
            className="animate-spin text-lime-500 w-10 h-10"
            icon={faSpinner}
          />
        )
      )}
    </div>
  );
};
