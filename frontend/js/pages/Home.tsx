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
      <h2 className="heading-2">Static assets</h2>
      <div id="django-background">
        If you are seeing the green Django logo on a white background and this
        text color is #092e20, frontend static files serving is working:
      </div>
      <div id="django-logo-wrapper">
        <div>
          Below this text, you should see an img tag with the white Django logo
          on a green background:
        </div>
        <img alt="Django Negative Logo" src={DjangoImgSrc} />
      </div>
      <h2 className="heading-2">Rest API</h2>
      <p className="paragraph">{restCheck?.message}</p>
      <button
        className="btn"
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
