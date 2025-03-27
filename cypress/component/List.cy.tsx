import List from "@/app/components/List";

describe("<List />", () => {
  it("should render and display expected content", () => {
    // Mount the React component
    cy.mount(<List />);

    // List
    cy.get("ol").should("be.visible").children().should("have.length", 2);

    cy.get("li").should("be.visible");

    cy.get("code").should("be.visible");
  });
});
