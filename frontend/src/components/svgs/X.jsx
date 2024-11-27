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

const XSvg = (props) => {
  return (
    <div
      style={{
        fontSize: '24px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        ...props.style,
      }}
      className="gradMemoirLogo"
    >
      <span style={{ color: '#4CAF50', paddingRight: '4px' }}>Grad</span>
      <span style={{ color: '#2196F3' }}>Memoir</span>

      <style jsx>{`
        @media (max-width: 480px) {
          .gradMemoirLogo {
            font-size: 4px; /* Adjust the font size for mobile */
            flex-direction: row; /* Stack the text vertically */
            text-align: center; /* Center-align the text */
          }

          .gradMemoirLogo span {
            padding-right: 0; /* Remove the right padding on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default XSvg;
