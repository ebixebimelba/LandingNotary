import SmallArrowDown from "assets/SmallArrowDown";

export default function IconsSmallArrowDown(props: IconsSmallArrowDownProps) {
  return (
    <div className="w-4 h-4 absolute top-3 right-4">
      <div className="inset-0 absolute" />
      <SmallArrowDown />
    </div>
  );
}

IconsSmallArrowDown.defaultProps = {};

interface IconsSmallArrowDownProps {}

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
