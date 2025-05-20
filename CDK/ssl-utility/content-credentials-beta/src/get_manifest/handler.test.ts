import { OperationHandlerTestSetup } from "@trayio/cdk-dsl/connector/operation/OperationHandlerTest";
import { getManifestHandler } from "./handler";
import "@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner";

OperationHandlerTestSetup.configureHandlerTest(getManifestHandler, (handlerTest) =>
	handlerTest
		.usingHandlerContext("test")
		.nothingBeforeAll()
		.testCase("should do something", (testCase) =>
			testCase
				.givenNothing()
				.when(() => ({
					url: "https://workflow-file-uploads.s3.us-west-2.amazonaws.com/311f24d4-86e6-4303-ba4d-86c78e80031a?AWSAccessKeyId=ASIAWLUGWV6AJNYXRSB6&Expires=1747778832&Signature=3xhgZszi8HRM%2BWMIhgXZsbV5jtY%3D&X-Amzn-Trace-Id=Root%3D1-682ca8af-0000000098964b4646cc2e77%3BParent%3D5b6eea56c9a0e84b%3BSampled%3D1%3BLineage%3D1%3Ab5adf851%3A0&x-amz-security-token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWfiYDcCe%2F5b5QiCx5Qqx0RN2mjqMEsR03ezMDk7k4TAiEAvSs6TVgVrULa%2Bl9xHHtp3QUPgMLbvOgS0wvNUXRILBAqlAMIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0MzcyOTU0Mjc0NTYiDIJQmYhnEDaJMhtrxiroAtQW%2F2Qp8SJO%2BkyEn%2BYinViWMTqD9l8hnN92on1eSz850T3wXFx1q2P8xJasiLZf0NrUJym7k6iNfvwJ49zBlJskr8XOyJBqv%2BlxzLlOMRP37SCJHYL2d796CAAlqhSN5OnEYgoSVW1kQZirOCSaVHSdjW44pbOJgZ%2BpLMMGFtuHRCenKv5hoJRFGYKMkVB8OZjinMwPYS6jcIczxJKNSp%2FGUslwHXx1R4kyChtvA91k5H86%2FLjaA1pexRpdGn09q82TzuD96xNrO5u%2FO5HjH5ouxJVPhtExP4JC0hRQ%2Fn1C3vmuUVmGd8mCX%2B8DoLG4shKgqEhxQBm22CYgvXW4aTBkhnYF9eHHxbAo3g%2F%2B8VfGE6Eabophws8peg2reln4ZFB6%2BwfoyyZk7%2F9qU4%2FMVYk0c9gzteXqDGCpPq5ShJnNTCH0YlUit3FFNdiu6uLYHza4SjAlUZHGUu3po%2B10ii4%2FbMG6JUL3FjCtwLLBBjqdAXIqCO%2FhgcbOTc2WTL3uFm2bdlW6mVUznP%2F1SLNe%2B6gkRh9wCqGgUewPNW9pRtxDi78iMirsE2VPM37GPBqbjfD%2BBVIcVj3RQc0QJumf%2BFD%2FOt4vlzHT1IIL5q9B5h%2FL%2BjDxx8iYMRVb9CDmM%2FMfjTcuKnwDKc9jl6wxLyVY9%2FeHOQDUT4K12MPS23pr0bByg6fFAk0CPslWcdsUGvc%3D",
					mime_type: "image/jpeg",
				}))
				.then(({ output }) => {})
				.finallyDoNothing()
		)
		.nothingAfterAll()
);
