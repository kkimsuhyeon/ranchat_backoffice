import React from "react";

import BaseLayout from "components/base/BaseLayout";

import Core from "containers/Core";

import Root from "pages/Root";

function App() {
  return (
    <>
      <Core />
      <BaseLayout>
        <Root />
      </BaseLayout>
    </>
  );
}

export default App;
