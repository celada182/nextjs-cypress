import Info from "@/app/components/Info";

describe("<Info />", () => {
  it("should render and display expected content", () => {
    // Mount the React component
    cy.mount(<Info text="TEST" image="/TEST_IMAGE.svg" />);

    // Image
    cy.get("a")
      .should("have.text", "TEST")
      .children("img")
      .should("have.attr", "src", "/TEST_IMAGE.svg");
  });
});
