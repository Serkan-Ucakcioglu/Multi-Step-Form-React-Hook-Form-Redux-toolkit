import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Step1 from "../features/step/Step1";
import Step2 from "../features/step/Step2";
import Step3 from "../features/step/Step3";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Step1 />} />
      <Route path="step2" element={<Step2 />} />
      <Route path="step3" element={<Step3 />} />
    </Route>
  )
);
