import './style.css'
export const Header = ({ text, pic, showPic }) => {
  return (
    <>
  <h1 className="header-text">{text}</h1>
  <div> 
  {showPic && <img className='header' src={pic} alt="header" />} 
  </div>
  </>
)};
