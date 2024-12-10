# Silent Crash on Network Request Failure in React Native

This repository demonstrates a common error in React Native applications where network requests fail silently, causing unexpected behavior or crashes instead of providing clear error feedback to the user.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file shows the corrected version with improved error handling. 

## Problem

The original code lacks proper error handling within the `useEffect` hook's `catch` block. When a network request fails, the error is logged to the console, but the component's state (`data`) isn't updated to reflect the failure. This can lead to a variety of problems, including silent crashes or unexpected rendering behavior. 

## Solution

The improved code updates the component's state to include an `error` property.  This allows the component to render an appropriate error message to the user, providing a better user experience and avoiding silent failures.  Additionally, using `finally` allows for cleanup even if an error occurs.