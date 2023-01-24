export default function SmallArrowDown(props: SmallArrowDownProps) {
  return (
    <div
      className="absolute flex top-[31.25%] bottom-[31.25%] left-[21.33%] right-[16.17%]"
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 1.414 -8.38e-07 C 0.523 -9.159e-07 0.077 1.077 0.707 1.707 L 4.293 5.293 C 4.683 5.683 5.317 5.683 5.707 5.293 L 9.293 1.707 C 9.923 1.077 9.477 -1.332e-07 8.586 -2.111e-07 L 1.414 -8.38e-07 Z"
          fill="#7E8298"
         />
      </svg>
    </div>
  );
}

SmallArrowDown.defaultProps = {};

interface SmallArrowDownProps {}

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
