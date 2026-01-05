"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const auth_entity_1 = require("./entities/auth.entity");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
const token_1 = require("../utils/token");
const hash_1 = require("../utils/hash");
let AuthService = class AuthService {
    authModel;
    constructor(authModel) {
        this.authModel = authModel;
    }
    async signup(data) {
        const exist = await this.authModel.findOne({ email: data.email });
        if (exist)
            throw new common_1.NotFoundException(`This email already exist`);
        const backgroundProfile = ["#1A73E8", "#D93025", "#F9AB00", "#188038", "#9334E6", "#3C4043"];
        const randomIndex = Math.floor(Math.random() * backgroundProfile.length);
        const hashedPassword = await hash_1.Hash.hash(data.password);
        const { _id, name, email, background } = await this.authModel.create({ ...data, password: hashedPassword, background: backgroundProfile[randomIndex] });
        const token = token_1.Token.generate({ id: _id.toString(), email });
        return {
            user: {
                id: _id.toString(),
                name,
                email,
                background,
                token
            }
        };
    }
    async signin({ email, password }) {
        const user = await this.authModel.findOne({ email });
        if (!user)
            throw new common_1.NotFoundException(`The password or email is wrong`);
        const verifyPassword = await hash_1.Hash.match(password, user.password);
        if (!verifyPassword)
            throw new common_1.NotFoundException(`The password or email is wrong`);
        const token = token_1.Token.generate({ id: user._id.toString(), email: user.email });
        return {
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                background: user.background,
                token
            }
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(auth_entity_1.Auth.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map