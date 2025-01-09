# Express.js: Handling Large JSON POST Requests

This repository demonstrates a common issue in Express.js applications: failure to handle large JSON POST requests due to exceeding the default body-parser limit.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a solution.

## Problem

When receiving large JSON payloads in POST requests, Express.js might fail silently or throw errors if the request body exceeds the default size limit set by the `body-parser` middleware.  This can lead to unexpected behavior and make debugging difficult.

## Solution

The solution involves explicitly setting a larger limit for the body-parser middleware using `express.json({ limit: '10mb' })` or a suitable size that matches your application requirements. This allows Express.js to handle larger JSON payloads without errors.
