import astronaut from "assets/img/astronaut-space.svg";
import { principal_container, error_image, content, info_container, desc_styles, title_styles, btn_styles } from "assets/styles/ErrorPage.module.scss"

function ErrorPage(){

	const handleRefresh = () => document.location.reload();

	return(
  	<div className={principal_container}>
      <div className={content}>
        <img className={error_image} src={astronaut} alt="error page"/>
        <div className={info_container}>
					<p className={title_styles}>Something went wrong.</p>
					<p className={desc_styles}>We're having some technical issues, try to refresh the page</p>
					<button className={btn_styles} onClick={handleRefresh}>Refresh page</button>
				</div>
      </div>
    </div>
	);
}

export default ErrorPage;