export default function Buttons(props: ButtonsProps) {
  return (
    <>
      <div
        className={`absolute text-center font-medium font-['Poppins'] transition-all ${
          props.type === "BLUE_TYPE"
            ? "w-24 h-8 top-8 right-10 text-[rgba(0,158,247,1)]"
            : ""
        } ${
          props.type === "BLUE_TYPE2"
            ? "h-12 w-[370px] top-[4320px] right-[935px] text-[rgba(245,248,250,1)]"
            : ""
        } ${
          props.type === "BLUE_TYPE1"
            ? "h-12 text-white w-[170px] top-[516px] right-[1133px]"
            : ""
        } ${
          props.type === "BLUE_TYPE3"
            ? "h-12 text-white w-[170px] top-[5084px] right-[1033px]"
            : ""
        }`}
      >
        <div
          className={`inset-0 absolute rounded transition-all ${
            props.type === "BLUE_TYPE" ? "bg-white" : ""
          } ${props.type === "BLUE_TYPE3" ? "bg-[rgba(0,158,247,1)]" : ""} ${
            props.type === "BLUE_TYPE2" ? "bg-[rgba(0,158,247,1)]" : ""
          } ${props.type === "BLUE_TYPE1" ? "bg-[rgba(0,158,247,1)]" : ""}`}
         />
        <p
          className={`inset-x-2 h-6 absolute text-sm inline m-0 top-[calc(50%_-_12px_+_0px)] leading-[normal] transition-all ${
            props.type === "BLUE_TYPE1" ? "w-[154px]" : ""
          } ${props.type === "BLUE_TYPE3" ? "w-[154px]" : ""} ${
            props.type === "BLUE_TYPE" ? "w-20" : ""
          } ${props.type === "BLUE_TYPE2" ? "w-[354px]" : ""}`}
        >
          {props.text}
        </p>
      </div>
    </>
  );
}

Buttons.defaultProps = {
  type: "BLUE_TYPE",
  text: "Register",
};

interface ButtonsProps {
  type: "BLUE_TYPE" | "BLUE_TYPE1" | "BLUE_TYPE2" | "BLUE_TYPE3";
  text: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
