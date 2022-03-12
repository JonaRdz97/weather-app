function ErrorPage(){
	return(
  	<div>
      <p className="header-error">404 NOT FOUND</p>
      <div id="content">
        <img src="./img/Astronaut-01.svg" alt="error page" className="error-image"/>
        <div className="text">
					<p className="title">I have bad news for you</p>
					<p className="info">The page you are looking for might be removed or is temporarily unavailable</p>
					<button className="btn">Back To HomePage</button>
				</div>
      </div>
    </div>
	);
}

export default ErrorPage;