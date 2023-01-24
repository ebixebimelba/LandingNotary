export default function Footer(props: FooterProps) {
  return (
    <div
      className={`inset-x-0 h-16 absolute bottom-0 text-left font-normal font-['Poppins']`}
    >
      <div className="inset-0 absolute bg-white drop-shadow-lg" />
      <p
        className="h-4 right-10 bottom-6 absolute text-xs inline m-0 w-[261px] leading-[normal] text-[rgba(126,130,152,1)]"
      >
        © EverythingLegal 2022. All Right Reserved.
      </p>
      <p
        className="h-4 bottom-6 absolute text-xs text-black inline m-0 w-[215px] right-[325px] leading-[normal]"
      >
        {"Terms & Conditions "}
        <br />
        {" Privacy Policy"}
      </p>
      <div
        className="h-4 absolute left-10 top-6 leading-none inline-block w-[402px]"
      >
        <p className="text-xs text-black inline m-0 leading-[normal]">
          {"FAQ "}
        </p>
        <p
          className="text-xs inline m-0 leading-[normal] text-[rgba(126,130,152,1)]"
        >
          •
        </p>
        <p className="text-xs text-black inline m-0 leading-[normal]">
          {" Contact "}
        </p>
        <p
          className="text-xs inline m-0 leading-[normal] text-[rgba(126,130,152,1)]"
        >
          •
        </p>
        <p className="text-xs text-black inline m-0 leading-[normal]">
          {" Customer Support"}
        </p>
      </div>
    </div>
  );
}

Footer.defaultProps = {};

interface FooterProps {}

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
