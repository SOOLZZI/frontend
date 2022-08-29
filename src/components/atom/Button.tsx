import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from "react";
export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>
  (function Button(props, ref) {
  return (
    <button type="button" className='bg-[#74bb41] rounded-full m-4 w-50 py-2.5 px-7 text-white font-bold' ref={ref} {...props}>
      {props.children}
    </button>
  );
});

export default Button;