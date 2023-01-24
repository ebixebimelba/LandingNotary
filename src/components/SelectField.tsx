import IconsSmallArrowDown from "components/IconsSmallArrowDown";

export default function SelectField(props: SelectFieldProps) {
  return (
    <div
      className={`h-10 absolute text-black text-left font-normal w-[370px] left-[135px] top-[4248px] font-['Poppins']`}
    >
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(228,_230,_239,_1)_inset] [box-shadow-width:1px] inset-x-0 h-10 top-0 absolute bg-white rounded"
       />
      <p
        className="h-6 left-4 top-2 right-8 absolute text-sm inline m-0 w-[322px] leading-[normal]"
      >
        WA, Washington
      </p>
      <IconsSmallArrowDown />
    </div>
  );
}

SelectField.defaultProps = {};

interface SelectFieldProps {}

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
