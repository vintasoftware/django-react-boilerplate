import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import DjangoImgSrc from "../../assets/images/django-logo-negative.png";
import { AppDispatch, RootState } from "../store";
import { fetchRestCheck } from "../store/rest_check";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const restCheck = useSelector((state: RootState) => state.restCheck);
  useEffect(() => {
    const action = fetchRestCheck();
    dispatch(action);
  }, [dispatch]);

  const [showBugComponent, setShowBugComponent] = useState(false);

  return (
    <>
      <h2>Static assets</h2>
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
      <h2>Rest API</h2>
      <p>{restCheck?.data?.payload?.result}</p>
      <Button variant="outline-dark" onClick={() => setShowBugComponent(true)}>
        Click to test if Sentry is capturing frontend errors! (Should only work
        in Production)
      </Button>
      {/* NOTE: The next line intentionally contains an error for testing frontend errors in Sentry. */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {showBugComponent && (showBugComponent as any).field.notexist}
    </>
  );
};

export default Home;
