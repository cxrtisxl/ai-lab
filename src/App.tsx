import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Layout } from "@/components/layout"
import { HomePage } from "@/pages/home"
import { ExperimentPage } from "@/pages/experiment"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="experiments/:slug" element={<ExperimentPage />} />
          <Route path="*" element={<ExperimentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
