import { Chat } from "./chat";
import { renderWithRedux } from "../../../utils/render-with-redux";

let state = null;

beforeEach(() => {
  state = {
    messages: {
      messages: { room1: [{ author: "User", message: "Test" }] },
    },
  };
});

describe("Chat component", () => {
  it("should render Chat without props", () => {
    const { container } = renderWithRedux(<Chat title="room1" />, {
      initialState: state,
    });

    const nodes = [...container.querySelectorAll(".text")];
  });
});
