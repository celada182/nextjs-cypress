import Footer from "@/app/components/Footer";

describe("<Footer />", () => {
  it("should render and display expected content", () => {
    // Mount the React component
    cy.mount(<Footer />);

    // Children
    cy.get("footer")
      .children()
      .should("have.length", 3);
  });
});