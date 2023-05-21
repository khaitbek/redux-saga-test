import Alert from "react-bootstrap/Alert";
interface ErrorProps {
  error: {
    message: string;
  };
  resetErrorBoundary: VoidFunction
}
export function Error({ error }: ErrorProps) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <Alert variant="danger">
      Something wrong happened. {error.message}
    </Alert>
  );
}