import { render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";
import { withAllContexts, withRouter } from "../../tests/utils";
import ChannelInfo from "../ChannelInfo";

describe("ChannelInfo", () => {
  const fakeYoutube = {
    channelImageURL: jest.fn(),
  };

  afterEach(() => fakeYoutube.channelImageURL.mockReset());

  it("renders correctly", async () => {
    const { asFragment } = renderChannelInfo(() => "url");

    await screen.findByRole("img");

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders without URL", () => {
    renderChannelInfo();

    expect(screen.queryByRole("img")).toBeNull();
  });

  it("renders with URL", async () => {
    renderChannelInfo(() => "url");

    await screen.findByRole("img");
  });

  function renderChannelInfo(cb) {
    fakeYoutube.channelImageURL.mockImplementation(cb);

    return render(
      withAllContexts(
        withRouter(<Route path="/" element={<ChannelInfo id="id" name="channel" />} />),
        fakeYoutube
      )
    );
  }
});
