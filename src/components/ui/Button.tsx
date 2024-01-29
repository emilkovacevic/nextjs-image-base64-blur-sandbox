"use client";

interface ButtonType {
  children: React.ReactNode;
  action: () => void;
}

const Button = ({ children, action }: ButtonType) => {
  return (
    <button
      className="hover:bg-slate-600 w-fit px-4 py-2 bg-slate-500 text-white"
      onClick={() => action()}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
