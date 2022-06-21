import "./Styles.css";
import HeadContent from "./HeadContent.jsx";
import BodyContent from "./BodyContent.jsx";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <div className="body">
        <div className="content">
          <HeadContent />
          <BodyContent />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
