import {loader_container, sun_loader, crown, face, eyes, cheeks, mouth} from "assets/styles/Loader.module.scss";

function Loader(){
  return (
  <div className={loader_container}>  
    <svg className={sun_loader} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 137.4 142.1" xmlSpace="preserve">
      <g id={crown}>
        <path d="M50 21.2 63.4 2.7c2.6-3.6 6.7-3.5 9.2.1l12.5 18.1"/>
        <path d="m80.9 21.7 21.1-9c4-1.7 7.6.5 7.8 4.9l1.3 22M24.1 41.4l-.5-22.9c-.1-4.4 3.2-6.9 7.4-5.5l20.9 7"/>
        <path d="M16.4 72.6 1.7 55.1c-2.8-3.4-1.8-7.4 2.4-8.9l20.7-7.6"/>
        <path d="M25.8 102.6 4.1 95.4C-.1 94-1.3 90 1.5 86.5L15 69.2"/>
        <path d="m49.1 119.9-21.9 6.5c-4.2 1.3-7.5-1.3-7.2-5.7l1.2-22"/>
        <path d="m79.2 122.1-14.6 17.6c-2.8 3.4-6.9 3-9.2-.7l-11.2-19"/>
        <path d="m106.9 109.5-6 22.1c-1.2 4.2-5.1 5.7-8.7 3.1l-18.1-12.6"/>
        <path d="m114 87.2 10.7 20.2c2.1 3.9.2 7.6-4.2 8.2l-21.8 3.1M108.5 32.9l21.8 7c4.2 1.4 5.4 5.3 2.7 8.8l-13.4 17.5"/>
        <path d="m119.3 62.7 16.2 16.2c3.1 3.1 2.4 7.2-1.6 9.1L114 97.4"/>
      </g>
      <circle cx="68" cy="71.2" r="53" id={face}/>
      <path className={eyes} d="M39.2 61.5C38.7 54.8 44 49 50.1 48.9c7.9-.2 11.7 6 11.8 12.6"/>
      <path className={eyes} d="M74.2 61.5C73.7 54.8 79 49 85.1 48.9c7.9-.2 11.7 6 11.8 12.6"/>
      <path id={mouth} d="M72.6 77.3c.2 3.1-2.2 5.7-5 5.8-3.6.1-5.4-2.8-5.4-5.8"/>
      <ellipse className={cheeks} cx="37.7" cy="72.4" rx="6.5" ry="1.5"/>
      <ellipse className={cheeks} cx="95.7" cy="72.4" rx="6.5" ry="1.5"/>
    </svg>
  </div>
  );
}

export default Loader;