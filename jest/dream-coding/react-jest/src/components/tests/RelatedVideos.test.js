import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Route } from "react-router-dom";
import { withAllContexts, withRouter } from "../../tests/utils";
import { fakeVideos } from "../../tests/videos";
import RelatedVideos from "../RelatedVideos";

describe("RelatedVideos", () => {
  const fakeYoutube = {
    relatedVideos: jest.fn(),
  };

  afterEach(() => fakeYoutube.relatedVideos.mockReset());

  it("renders correctly", async () => {
    const { asFragment } = renderRelatedVideos(() => fakeVideos);

    await waitForElementToBeRemoved(screen.queryByText(/Loading/));

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders related videos correctly", async () => {
    renderRelatedVideos(() => fakeVideos);

    expect(fakeYoutube.relatedVideos).toHaveBeenCalledWith("id");

    await waitFor(() =>
      expect(screen.getAllByRole("listitem")).toHaveLength(fakeVideos.length)
    );
  });

  it("renders loading", () => {
    renderRelatedVideos(() => fakeVideos);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  function renderRelatedVideos(cb) {
    fakeYoutube.relatedVideos.mockImplementation(cb);

    return render(
      withAllContexts(
        withRouter(<Route path="/" element={<RelatedVideos id="id" />} />),
        fakeYoutube
      )
    );
  }
});
