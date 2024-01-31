import express, {NextFunction, Request, Response} from 'express';

function loggerMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log(`${request.method} ${request.path}`);
    next();
  }

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.get("/", (request: Request, response: Response) => {
  response.send(request.body);
});

app.listen(5000);