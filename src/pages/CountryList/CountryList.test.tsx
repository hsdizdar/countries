import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import CountryList from "./CountryList";

import { GET_COUNTRIES } from "../../services/queries";
import { Country } from "../../types";

const mockCountries = [
  { code: "CA", name: "Canada" },
  { code: "US", name: "United States" },
  { code: "MX", name: "Mexico" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "PT", name: "Portugal" },
  { code: "NL", name: "Netherlands" },
  { code: "BE", name: "Belgium" },
  { code: "SE", name: "Sweden" },
  { code: "NO", name: "Norway" },
  { code: "FI", name: "Finland" },
  { code: "DK", name: "Denmark" },
  { code: "CH", name: "Switzerland" },
  { code: "AT", name: "Austria" },
  { code: "JP", name: "Japan" },
  { code: "CN", name: "China" },
  { code: "IN", name: "India" },
  { code: "TR", name: "Turkey" },
] as Country[];

const mocksForPagination = [
  {
    request: {
      query: GET_COUNTRIES,
    },
    result: {
      data: {
        countries: mockCountries,
      },
    },
  },
];

describe("CountryList Page Component", () => {
  it("should render loading spinner while fetching data", async () => {
    render(
      <MockedProvider mocks={mocksForPagination} addTypename={false}>
        <CountryList />
      </MockedProvider>
    );

    expect(screen.getByTestId("spinner-wrapper")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByTestId("spinner-wrapper")).toBeNull();
    });
  });

  it("should render error message on fetch error", async () => {
    const errorMock = {
      request: {
        query: GET_COUNTRIES,
      },
      error: new Error("Failed to fetch data"),
    };

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <CountryList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(
        screen.getByText("Error: Failed to fetch data")
      ).toBeInTheDocument();
    });
  });

  it("should render filtered country table", async () => {
    render(
      <MockedProvider mocks={mocksForPagination} addTypename={false}>
        <CountryList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Countries")).toBeInTheDocument();
    });

    const filterInput = screen.getByPlaceholderText("Filter by country code");
    fireEvent.change(filterInput, { target: { value: "CA" } });

    expect(screen.getByText("CA")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();

    expect(screen.queryByLabelText("Previous Page")).toBeNull();
    expect(screen.queryByLabelText("Next Page")).toBeNull();
  });

  it("should render pagination controls", async () => {
    render(
      <MockedProvider mocks={mocksForPagination} addTypename={false}>
        <CountryList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Countries")).toBeInTheDocument();
    });

    expect(screen.getByText("<")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();

    expect(screen.getByText("CA")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();

    fireEvent.click(screen.getByText(">"));

    await waitFor(() => {
      expect(screen.getByText("2")).toBeInTheDocument();
    });
  });

  it("should render pagination controls with correct disabled states", async () => {
    render(
      <MockedProvider mocks={mocksForPagination} addTypename={false}>
        <CountryList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Countries")).toBeInTheDocument();
    });

    const previousButton = screen.getByText("<");
    const nextButton = screen.getByText(">");

    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeEnabled();

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText("2")).toBeInTheDocument();
    });

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).toBeEnabled();

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    expect(previousButton).toBeEnabled();
    expect(nextButton).toBeDisabled();
  });

  it('should render "Country is not found." when no countries match filter', async () => {
    render(
      <MockedProvider mocks={mocksForPagination} addTypename={false}>
        <CountryList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Countries")).toBeInTheDocument();
    });

    const filterInput = screen.getByPlaceholderText("Filter by country code");
    fireEvent.change(filterInput, { target: { value: "ZZ" } });

    expect(screen.getByText("Country is not found.")).toBeInTheDocument();
  });
});
