import { ErrorRequestHandler } from 'express';

const errors: Record<string, number> = {
  notFound: 404
};

const errorMidlleware: ErrorRequestHandler = (err, _res, res, _next) => {
  const { name, message } = err;

  const code = errors[name];
  console.log(code);

  if (!code) return res.sendStatus(500);
  return res.status(code).json({ message });
};

export default errorMidlleware;