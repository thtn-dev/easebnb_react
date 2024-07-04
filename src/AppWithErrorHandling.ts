import { withErrorHandler } from "@/common/error/handlings";
import AppErrorBoundaryFallback from "./common/error/handlings/App";
import App from "./App";

const AppWithErrorHandling = withErrorHandler(App, AppErrorBoundaryFallback);

export default AppWithErrorHandling;
