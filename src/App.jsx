import React from "react";
import { Provider, useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./redux/store";
import Header from "./components/Header";
import Skills from "./components/Skills";
import HireMe from "./components/HireMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import "./css/App.css";

const queryClient = new QueryClient();

const AppContent = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <Header />
      <main>
        <section id="hire-me">
          <HireMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="profile">
          <Profile />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
