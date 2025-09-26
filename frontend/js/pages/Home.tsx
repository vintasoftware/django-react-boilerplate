import { useState, useEffect } from "react";

import DjangoImgSrc from "../../assets/images/django-logo-negative.png";
import { RestService } from "../api";
import { TopNav } from "../components";

const Home = () => {
  const [showBugComponent, setShowBugComponent] = useState(false);
  const [restCheck, setRestCheck] =
    useState<Awaited<ReturnType<typeof RestService.restRestCheckRetrieve>>>();

  useEffect(() => {
    async function onFetchRestCheck() {
      setRestCheck(await RestService.restRestCheckRetrieve());
    }
    onFetchRestCheck();
  }, []);

  return (
    <>
      <TopNav />
      <h2 className="text-4xl mb-2">Static assets</h2>
      <div className="text-[#092e20] text-[11pt] bg-no-repeat bg-[auto_200px] bg-center h-[300px] bg-[url('../assets/images/django-logo-positive.png')]">
        If you are seeing the green Django logo on a white background and this
        text color is #092e20, frontend static files serving is working:
      </div>
      <div className="text-[#092e20] mb-4">
        <div>
          Below this text, you should see an img tag with the white Django logo
          on a green background:
        </div>
        <img
          alt="Django Negative Logo"
          className="w-[100px]"
          src={DjangoImgSrc}
        />
      </div>
      <h2 className="text-4xl mb-2">Rest API</h2>
      <p className="mb-2">{restCheck?.message}</p>
      <button
        className="px-2 py-1 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200 cursor-pointer"
        type="button"
        onClick={() => setShowBugComponent(true)}
      >
        Click to test if Sentry is capturing frontend errors! (Should only work
        in Production)
      </button>
      {/* NOTE: The next line intentionally contains an error for testing frontend errors in Sentry. */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {showBugComponent && (showBugComponent as any).field.notexist}
    </>
  );
};

export default Home;
