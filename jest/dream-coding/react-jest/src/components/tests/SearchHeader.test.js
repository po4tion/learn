import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route, useParams } from "react-router-dom";
import renderer from "react-test-renderer";
import { withRouter } from "../../tests/utils";
import SearchHeader from "../SearchHeader";

describe("SearchHeader", () => {
  it("renders snapshot", () => {
    const tree = renderer.create(
      withRouter(<Route path=":keyword" element={<SearchHeader />} />, "/orange")
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders parameters", () => {
    const testKeyword = "avengers";

    render(
      withRouter(<Route path=":keyword" element={<SearchHeader />} />, `/${testKeyword}`)
    );

    const textInput = screen.getByDisplayValue(testKeyword);
    expect(textInput).toBeInTheDocument();
  });

  it("navigates to detail video page with search text", () => {
    function LocationStateDisplay() {
      const { text } = useParams();

      return <pre>{text}</pre>;
    }

    render(
      withRouter(
        <>
          <Route path="/" element={<SearchHeader />} />
          <Route path={`/videos/:text`} element={<LocationStateDisplay />} />
        </>
      )
    );

    const text = screen.getByRole("textbox");
    const search = screen.getByRole("button");

    userEvent.type(text, "apple");
    userEvent.click(search);
    expect(screen.getByText("apple")).toBeInTheDocument();
  });
});
