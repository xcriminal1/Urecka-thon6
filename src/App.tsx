import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import PRIZES from "./pages/PRIZES";
import TRACKS from "./pages/TRACKS";
import TrackCard from "./pages/TrackCard";
import AboutUs from "./pages/AboutUs";
import Sponsors from "./pages/Sponsors";
import FAQ from "./pages/FAQ";
import Ureckathon from "./pages/Ureckathon";
import Vector from "./pages/Vector";
import TimelineCardVariant from "./pages/TimelineCardVariant";
import AboutUs1 from "./pages/AboutUs1";
import RULES1 from "./pages/RULES1";
import FAQ1 from "./pages/FAQ1";
import Prizes1 from "./pages/Prizes1";
import SPONSORS1 from "./pages/SPONSORS1";
import ContentText from "./pages/ContentText";
import MobileWebAppMenu from "./pages/MobileWebAppMenu";
import Frame from "./pages/Frame";
import TimelineCard from "./pages/TimelineCard";
import TimelineCard1 from "./pages/TimelineCard1";
import VenueOnlineLink from "./pages/VenueOnlineLink";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import DEVFOLIOBUTTON from "./pages/DEVFOLIOBUTTON";
import DISCORDBUTTON from "./pages/DISCORDBUTTON";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/rules":
        title = "";
        metaDescription = "";
        break;
      case "/prizes":
        title = "";
        metaDescription = "";
        break;
      case "/tracks":
        title = "";
        metaDescription = "";
        break;
      case "/track-card":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/sponsors":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
      case "/ureckathon":
        title = "";
        metaDescription = "";
        break;
      case "/vector":
        title = "";
        metaDescription = "";
        break;
      case "/timeline-cardvariant5":
        title = "";
        metaDescription = "";
        break;
      case "/about-us1":
        title = "";
        metaDescription = "";
        break;
      case "/rules1":
        title = "";
        metaDescription = "";
        break;
      case "/faq1":
        title = "";
        metaDescription = "";
        break;
      case "/prizes1":
        title = "";
        metaDescription = "";
        break;
      case "/sponsors1":
        title = "";
        metaDescription = "";
        break;
      case "/content":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-web-app-menu":
        title = "";
        metaDescription = "";
        break;
      case "/frame-691":
        title = "";
        metaDescription = "";
        break;
      case "/timeline-card":
        title = "";
        metaDescription = "";
        break;
      case "/timeline-card1":
        title = "";
        metaDescription = "";
        break;
      case "/venue-online-link-for-registration-time-duration":
        title = "";
        metaDescription = "";
        break;
      case "/frame":
        title = "";
        metaDescription = "";
        break;
      case "/frame1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-705":
        title = "";
        metaDescription = "";
        break;
      case "/devfolio-button":
        title = "";
        metaDescription = "";
        break;
      case "/discord-button":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/prizes" element={<PRIZES />} />
      <Route path="/tracks" element={<TRACKS />} />
      <Route path="/track-card" element={<TrackCard />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/ureckathon" element={<Ureckathon />} />
      <Route path="/vector" element={<Vector />} />
      <Route path="/timeline-cardvariant5" element={<TimelineCardVariant />} />
      <Route path="/about-us1" element={<AboutUs1 />} />
      <Route path="/rules1" element={<RULES1 />} />
      <Route path="/faq1" element={<FAQ1 />} />
      <Route path="/prizes1" element={<Prizes1 />} />
      <Route path="/sponsors1" element={<SPONSORS1 />} />
      <Route path="/content" element={<ContentText />} />
      <Route path="/mobile-web-app-menu" element={<MobileWebAppMenu />} />
      <Route path="/frame-691" element={<Frame />} />
      <Route path="/timeline-card" element={<TimelineCard />} />
      <Route path="/timeline-card1" element={<TimelineCard1 />} />
      <Route
        path="/venue-online-link-for-registration-time-duration"
        element={<VenueOnlineLink />}
      />
      <Route path="/frame" element={<Frame1 />} />
      <Route path="/frame1" element={<Frame2 />} />
      <Route path="/frame-705" element={<Frame3 />} />
      <Route path="/devfolio-button" element={<DEVFOLIOBUTTON />} />
      <Route path="/discord-button" element={<DISCORDBUTTON />} />
    </Routes>
  );
}
export default App;
