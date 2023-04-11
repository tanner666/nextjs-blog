//simple api endpoint
export default function handler(req, res) {
    //req is an instance of http.IncomingMessage plus middlewares??
    //res is an instance of http.ServerResponse plus helper functions??
    res.status(200).json({ text: 'Hello' });
  }