import Image from "next/image";
import { ChangeEvent, FC } from "react";

interface InputProps {
  /** type of input, e.g., "text", "email", "password" */
  type?: string;
  /** placeholder for the input */
  placeholder?: string;
  /** controlled value */
  value?: string;
  /** callback onChange */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** path to the icon displayed on the right (optional) */
  iconSrc?: string;
  /** alt text for the icon */
  iconAlt?: string;
  /** callback when clicking on the icon (optional) */
  onIconClick?: () => void;
  /** extra classes for the wrapper */
  className?: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  iconSrc,
  iconAlt = "",
  onIconClick,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full 
          bg-white 
          text-gray-900 
          placeholder-gray-400 
          px-4 py-2 
          rounded-lg 
          border border-gray-200 
          focus:outline-none focus:ring-2 focus:ring-indigo-500
        `}
      />

      {iconSrc && (
        <button
          type={onIconClick ? "button" : "submit"}
          onClick={onIconClick}
          className="
            absolute 
            right-3 top-1/2 
            transform -translate-y-1/2 
            p-1
          "
        >
          <Image src={iconSrc} alt={iconAlt} width={16} height={16} />
        </button>
      )}
    </div>
  );
};

export default Input;
