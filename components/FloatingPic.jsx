export default function FloatingPic({
  imgSrc,
  altText,
  creditText,
  imgDescription,
}) {
  return (
    <>
      {/* Mobile view */}
      <section className="c">
        <div className="flex justify-center items-center my-4 md:hidden">
          <div
            className="rounded-lg shadow overflow-hidden"
            style={{
              maxWidth: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",

              background: "linear-gradient(to bottom right, #f8fafc, #e2e8f0)",
            }}
          >
            <img
              src={imgSrc || "https://placecats.com/300/200"}
              className="rounded-t-lg"
              alt={altText}
            />
            <span className="text-xs text-gray-500 flex justify-end mt-1.5 mb-2 pr-2">
              {creditText}
            </span>
            <span
              className="text-gray-800 text-base flex justify-start pb-3 px-2 -mt-2 font-serif"
              style={{ fontWeight: "300" }}
            >
              {imgDescription}
            </span>
          </div>
        </div>
      </section>
      {/* Desktop view */}
      <section className="floatingPicDesktop hidden md:block">
        <div
          className="rounded-lg shadow overflow-hidden"
          style={{
            maxWidth: "100%",
            margin: "0 0 .5rem 1rem ",
            float: "right",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            padding: ".2rem",
            background: "linear-gradient(to bottom right, #f8fafc, #e2e8f0)",
          }}
        >
          <img
            src={imgSrc || "https://placecats.com/300/200"}
            className="rounded-lg"
            alt={altText || "Featured image"}
          />
          <span className="text-xs text-gray-500 flex justify-end mt-2 mb-3 pr-1.5">
            {creditText || "Image credit goes here"}
          </span>
          <span className="md:text-base text-gray-800 flex justify-start pb-3 px-2 -mt-2 font-serif">
            {imgDescription || "This is a description of the image."}
          </span>
        </div>
      </section>
    </>
  );
}
