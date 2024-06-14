import React, { ReactNode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
});

interface ApolloProviderWrapperProps {
    children: ReactNode;
}

const ApolloProviderWrapper: React.FC<ApolloProviderWrapperProps> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
