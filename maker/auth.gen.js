import authModelData  from '../data/auth.model.data.js'
import authCntlrData from '../data/auth.cntlr.data.js'
import authRouteData from '../data/auth.route.data.js'
import controllerData from '../data/cntlr.data.js'
import modelData from '../data/model.data.js'
import GenModel from "./model.gen.js"
import GenCntlr from "./cntlr.gen.js"
import GenRoute from "./route.gen.js"
import { initError } from '../utils/console.js'
import fs from 'fs'
import authMiddlwareData from '../data/auth.mdwr.data.js'
import jwtData from '../data/jwt.data.js'

const middlwareData =  authMiddlwareData()
const JWT = jwtData()
export const auth = () => {
    const json = process.cwd() + '/package.json'
    if (fs.existsSync(json)) {
        GenModel('user', authModelData, () => GenCntlr('user', authCntlrData, GenRoute))

        fs.mkdirSync('middleware')
        fs.writeFileSync('middleware/authMiddleware.js', middlwareData)
        fs.mkdirSync('utils')
        fs.writeFileSync('utils/JWT.js',JWT)
    } else {
        initError()
    }
}

export const MRC = (name) => {
    const json = process.cwd() + '/package.json'
    if (fs.existsSync(json)) {
        GenModel(name, modelData, (name) => GenCntlr(name, controllerData, GenRoute,'mrc'),'mrc')
    } else {
        initError()
    }
}