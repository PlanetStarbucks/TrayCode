import { OperationHandlerSetup } from "@trayio/cdk-dsl/connector/operation/OperationHandlerSetup";
import { TestprojectAuth } from "../TestprojectAuth";
import { GetMovieDetailsInput } from "./input";
import { GetMovieDetailsOutput } from "./output";
import { globalConfigHttp } from "../GlobalConfig";

export const getMovieDetailsHandler = OperationHandlerSetup.configureHandler<TestprojectAuth, GetMovieDetailsInput, GetMovieDetailsOutput>((handler) =>
  handler.withGlobalConfiguration(globalConfigHttp).usingHttp((http) =>
    http
      .get("/3/movie/:movieID")
      .handleRequest((_ctx, input, request) => request.addPathParameter("movieID", input.movieID.toString()).withoutBody())
      .handleResponse((_ctx, _input, response) => response.parseWithBodyAsJson())
  )
);
