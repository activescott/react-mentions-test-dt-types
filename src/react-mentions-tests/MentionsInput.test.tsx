// basically I'm copying some relevant tests from react-mentions at https://github.com/signavio/react-mentions/tree/master/src

import React from "react";
import { Mention, MentionsInput, SuggestionDataItem } from "react-mentions";
import { mount, ReactWrapper } from "enzyme";

const data: SuggestionDataItem[] = [
  { id: "first", display: "First entry" },
  { id: "second", display: "Second entry" },
  { id: "third", display: "Third" },
];

describe("MentionsInput", () => {
  let wrapper: ReactWrapper, host;

  beforeEach(() => {
    // I don't know where enzmye mounts this, but apparently it is somewhere
    // where our input cannot have a `scollHeight`/`offsetHeight`. Therefore, some tests would fail.
    // By manually creating a wrapper in the DOM, we can work around that
    host = document.createElement("div");
    document.body.appendChild(host);

    wrapper = mount(
      <MentionsInput value="">
        <Mention trigger="@" data={data} />
      </MentionsInput>
    );
  });

  it('should render a textarea by default.', () => {
    expect(wrapper.find('textarea').length).toEqual(1)
    expect(wrapper.find('input').length).toEqual(0)
  })

  it("should place suggestions in suggestionsPortalHost", () => {
    let portalNode;
    const rootWrapper = mount(
      <div id="root">
        <div
          id="portalDiv"
          ref={(el) => {
            portalNode = el;
          }}
        >
          <p>menu goes here</p>
        </div>
      </div>
    );
    const wrapper = mount(
      <MentionsInput
        className={"testClass"}
        value={"@"}
        suggestionsPortalHost={portalNode}
      >
        <Mention trigger="@" data={data} />
      </MentionsInput>
    );
    // focus & select to show suggestions
    wrapper.find("textarea").simulate("focus");
    wrapper.find("textarea").simulate("select", {
      target: { selectionStart: 1, selectionEnd: 1 },
    });

    let portalDiv = rootWrapper.find("#portalDiv").getDOMNode();
    const suggestionsNode = portalDiv.querySelector(".testClass__suggestions");
    expect(suggestionsNode).toBeTruthy();
  });

  it("should accept a custom regex attribute", () => {
    const data = [
      { id: "aaaa", display: "@A" },
      { id: "bbbb", display: "@B" },
    ];
    const wrapper = mount(
      <MentionsInput value=":aaaa and :bbbb and :invalidId">
        <Mention
          trigger="@"
          data={data}
          markup=":__id__"
          regex={/:(\S+)/}
          displayTransform={(id) => {
            let mention = data.find((item) => item.id === id);
            return mention ? mention.display : `:${id}`;
          }}
        />
      </MentionsInput>
    );
    wrapper.find("textarea").simulate("focus");
    expect(
      wrapper.find("textarea").getDOMNode<HTMLTextAreaElement>().value
    ).toEqual("@A and @B and :invalidId");
  });

  it("should forward the `inputRef` prop to become the `ref` of the input", () => {
    const inputRef = React.createRef<HTMLTextAreaElement>();
    const wrapper = mount(
      <MentionsInput value="test" inputRef={inputRef}>
        <Mention trigger="@" data={data} />
      </MentionsInput>
    );
    const el = wrapper.find("textarea").getDOMNode();
    expect(inputRef.current).toBeTruthy();
    expect(inputRef.current).toEqual(el);
  });

  it('should forward the `inputRef` prop to become the `ref` of the input (callback ref)', () => {
    const inputRef = jest.fn()
    const wrapper = mount(
      <MentionsInput value="test" inputRef={inputRef}>
        <Mention trigger="@" data={data} />
      </MentionsInput>
    )
    const el = wrapper.find('textarea').getDOMNode()
    expect(inputRef).toHaveBeenCalledWith(el)
  })

});
