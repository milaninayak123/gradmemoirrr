// const XSvg = (props) => (
// 	<svg aria-hidden='true' viewBox='0 0 24 24' {...props}>
// 		<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
// 	</svg>
// );
// export default XSvg;

// const XSvg = (props) => (
// 	<div style={{ fontSize: '24px', fontWeight: 'bold', ...props.style }}>
// 	  GradMemoir
// 	</div>
//   );
//   export default XSvg

const XSvg = (props) => (
  <div 
    style={{ 
      fontSize: '24px', 
      fontWeight: 'bold', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      ...props.style 
    }}
  >
    <span style={{ color: '#4CAF50' }}>Grad</span>
    <span style={{ color: '#2196F3' }}>Memoir</span>

    {/* Mobile-specific CSS */}
    <style>
      {`
        @media (max-width: 768px) {
          div {
            font-size: 20px;  // Reduce font size on mobile
            padding: 5px;     // Optional: Adjust padding to avoid overlap
          }

          span {
            font-size: 18px;  // Adjust text size for mobile
            margin-right: 5px; // Adjust spacing between the words for better fit
          }
        }
      `}
    </style>
  </div>
);

export default XSvg;


