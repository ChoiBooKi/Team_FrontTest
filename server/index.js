const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/key')
const cookieParser = require('cookie-parser')
const { auth } = require('./middleware/auth')
const { User } = require("./models/User")
const { SoccerUser } = require("./models/Soccer")
const { Positions } = require("./models/Position")
const { Info } = require("./models/info")
const { formation } = require("./models/formation")
const { alarm } = require("./models/alarm")
const { teaminfo } = require('./models/teaminfo')
const { Register } = require('./models/Register')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.connect(config.mongoURI)
.then( () => console.log('MongoDB Connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! BooKi')
})

// app.post('/api/token', (req, res) => {
//   //회원 가입 할 때 작성한 정보들을 가져와 DB에 넣어준다
//   const user = new User(req.body)

//   user.save((err, userInfo) => {
//     if (err) return res.json({ success: false, err})
//     return res.status(200).json({
//       success: true,
//       token: user.token,
//       registrationId: user.registrationId
//     })
//   })
// })

app.get('/api/login/oauth2/google', (req, res) => {
  //회원 가입 할 때 작성한 정보들을 가져와 DB에 넣어준다
  let token = req.query

  //res.send(token)
  return res.status(200).json({
    notUser: true,
    Authorization: token
  })
})

app.get('/api/login/oauth2/kakao', (req, res) => {
  //회원 가입 할 때 작성한 정보들을 가져와 DB에 넣어준다
  let token = req.query

  //res.send(token)
  return res.status(200).json({
    notUser: true,
    Authorization: token
  })
})

app.post('/api/extraInfo', (req, res) => {
  //회원 가입 할 때 작성한 정보들을 가져와 DB에 넣어준다
  const user = new User(req.body)
  // console.log(req.body)

  // user.save((err, userInfo) => {
  //   if (err) return res.json({ success: false, err})
  //   return res.status(200).json({
  //     success: true,
  //     nickName: user.nickName,
  //     image: req.body.image
  //   })
  // })
  res.status(200).json({
    success: true
  })
})

app.post('/api/users/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "해당 이메일에 해당하는 유저가 없습니다."
      })
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch){
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다."
        })
      }
      user.generateToken((err, user) => {
        if(err) {
          return res.status(400).send(err)
        }
                
        res.cookie("x_auth", user.token)
        .status(200)
        .json({
          loginSuccess: true,
          userId: user._id
        })
      })
    })
  })
})

app.get('/api/users/auth', auth, (req, res) => {
  //미들웨어를 통과해 여기까지 왔다는 것은 Auth가 true 라는 의미
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/users/logout', auth, (req, res) => {
  User.findByIdAndUpdate({ _id: req.user._id }, { token: ""}, (err, user) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).send({ LogoutSuccess: true })
  })
})

app.get('/api/hello', (req, res) => {
  res.status(200).json({
    success: true
  })
})

// app.post('/api/extraInfo', (req, res) => {
//   const nickName = req.nickName
//   return res.status(200).json({
//     success: true,
//     NickName: nickName
//   })
// })

app.get('/api/readUser', (req, res) => {
  SoccerUser.find()
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
})

app.get('/api/registerList', (req, res) => {
  Register.find()
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
})

app.get('/api/readPosition', (req, res) => {
  Positions.find()
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
})

app.get('/api/readInfo', (req, res) => {
  const email = req.query.email
  Info.find({email: email})
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
})

app.get('/api/formation', (req, res) => {
  //const formation = req.query.email
  formation.find()
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
})

app.get('/api/alarm', (req, res) => {
  alarm.find()
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
})

app.get('/api/teamInfo', (req, res) => {
  teaminfo.find()
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
})

app.delete("/api/deletealarm", (req, res) => {
  const user_id = req.query._id
  console.log(user_id)
  alarm.deleteOne({_id: user_id})
  .then(
    alarm.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
  )
  .catch((err) => {
    console.error(err);
    next(err);
  })
  //filter라는 함수는 자바스크립트에서 배열 함수이다. 필터링을 할때 많이 사용된다 필터링한 데이터를 새로운 배열로 반환한다.
})

app.delete("/api/RemovePlayer", (req, res) => {
  const user_id = req.query._id
  SoccerUser.deleteOne({_id: user_id})
  .then(
    SoccerUser.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
    })
  )
  .catch((err) => {
    console.error(err);
  })
  //filter라는 함수는 자바스크립트에서 배열 함수이다. 필터링을 할때 많이 사용된다 필터링한 데이터를 새로운 배열로 반환한다.
})

app.delete("/api/RemoveRegisterPlayer", (req, res) => {
  const user_id = req.query._id
  Register.deleteOne({_id: user_id})
  .then(
    Register.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err); g
      next(err);
    })
  )
  .catch((err) => {
    console.error(err);
    next(err);
  })
  //filter라는 함수는 자바스크립트에서 배열 함수이다. 필터링을 할때 많이 사용된다 필터링한 데이터를 새로운 배열로 반환한다.
})

app.post('/api/sendUser', (req, res) => {
  // SoccerUser.remove({Change: true}, (err, kit) => {
  //   if(err) return res.json(err)
  // })
  // SoccerUser.remove({__v: 0}, (err, kit) => {
  //   if(err) return res.json(err)
  //   return res.json({
  //     list: req.body[0].id
  //   })
  // })
  //for(i=0; i<14; i++){
    // const user = new SoccerUser(req.body[0])
    // user.save((err, userInfo) => {
    // if (err) return res.json({ success: false, err})
    // })
  //}
  return res.status(200)
  // const user = new SoccerUser(req.body[0])
  // user.save((err, userInfo) => {
  // if (err) return res.json({ success: false, err})
  // return res.status(200)
  // })
})

app.post('/api/img', (req, res) => {
  const data = req
  console.log(data)
  return res.status(200).json({
    success: true,
    data: data
  })
})
app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})