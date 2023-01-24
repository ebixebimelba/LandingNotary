export default function Shape(props: ShapeProps) {
  return (
    <div className="w-3.5 absolute h-[18px] top-[1359.83px] right-[410px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 0 1.832 C 0 1.041 0.875 0.563 1.541 0.99 L 12.692 8.159 C 13.304 8.552 13.304 9.448 12.692 9.841 L 1.541 17.01 C 0.875 17.437 0 16.96 0 16.168 V 1.832 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

Shape.defaultProps = {};

interface ShapeProps {}

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
