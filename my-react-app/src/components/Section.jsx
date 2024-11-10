import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";

function Section() {
  return (
    <div className="section">
      <Title title={"IMAGINE A\nPLACE..."} className="colorText title" />
      <Paragraph
        text={
          "...where you can belong to a school club, a gaming group, or a\n worldwide art community. Where just you and a handful of\n friends can spend time  together. A place that makes it easy to\n talk everyday and hang out more often."
        }
        className="colorText paragraph"
      />
      <Button text="Download for Mac" className="buttonWhite button" />
      <Button
        text="Open Discord in your browser"
        className="buttonBlack button"
      />
    </div>
  );
}
export default Section;