import { useEffect, useId, useState } from 'react';
import Button from 'react-bootstrap/Button';

import DjangoImgSrc from '../../assets/images/django-logo-negative.png';
import { RestService } from '../api';

const Home = () => {
  const djangoBackgroundId = useId();
  const djangoLogoWrapperId = useId();
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
      <h2>Static assets</h2>
      <div id={djangoBackgroundId}>
        If you are seeing the green Django logo on a white background and this text color is
        #092e20, frontend static files serving is working:
      </div>
      <div id={djangoLogoWrapperId}>
        <div>
          Below this text, you should see an img tag with the white Django logo on a green
          background:
        </div>
        <img alt="Django Negative Logo" src={DjangoImgSrc} />
      </div>
      <h2>Rest API</h2>
      <p>{restCheck?.message}</p>
      <Button variant="outline-dark" onClick={() => setShowBugComponent(true)}>
        Click to test if Sentry is capturing frontend errors! (Should only work in Production)
      </Button>
      {/* NOTE: The next line intentionally contains an error for testing frontend errors in Sentry. */}
      {showBugComponent && (showBugComponent as any).field.notexist}
    </>
  );
};

export default Home;
