import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
const prisma = require('prisma')
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

interface User {
    id: number
    name: string
    username: string
    email: string
}

const testGetUser = async (req : Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/1`);
    let user: [User] = result.data;
    return res.status(200).json({
        message: user
    });
}

const authenticateUser =  async (req : Request, res : Response, next : NextFunction) => {
    const { email, password } = req.body;

    try {
      let user = prisma.user.findUnique({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      // Check documentation for jwt to see arguments for this function
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err : any, token : string) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err : any) {
      console.error(err.msg);
      res.status(500).send('Server Error');
    }
}


export default { testGetUser, authenticateUser }