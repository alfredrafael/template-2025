const HeroBanner = () => {
  return (
    <section>
      <div className="w-screen ml-[calc(-50vw+50%)] bg-red box-border -mt-8 -md:mt-10">
        <div
          style={{ background: "black" }}
          className=""
          dangerouslySetInnerHTML={{
            __html: `
  
          <video
            style="opacity: .5; width: 100%; margin-bottom: -.5%; height: 40vh; object-fit: fill;"
            playsinline 
            loop 
            autoPlay 
            muted 
            autobuffer
            preload="auto"
            poster="https://www.alfredorafael.com/wp-content/uploads/2024/02/Screenshot-2023-10-18-at-2.50.08-PM.png"
          >
  
          <source 
            src="https://www.alfredorafael.com/wp-content/uploads/2024/11/Test-for-blog.mp4" type="video/mp4" />
          
          <source 
            src="https://www.alfredorafael.com/wp-content/uploads/2024/11/Test-for-blog.mp4" type="video/ogg" />
          Your browser does not support the video tag. I suggest you upgrade your browser.
  
          </video>     
  `,
          }}
        ></div>
      </div>
    </section>
  );
};

export default HeroBanner;
