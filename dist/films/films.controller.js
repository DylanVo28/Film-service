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
exports.FilmsController = void 0;
const common_1 = require("@nestjs/common");
let userGoal = 'Learn Docker!';
let FilmsController = class FilmsController {
    findAll() {
        return `
        <html>
            <head>
            </head>
            <body>
            <section>
            <h2>${userGoal}</h2>
            </section>
            
            <form action="/films/store-goal" method="POST">
            <input type="text" name="goal"/>
            <button type="submit">submit</button>
            </form>
            </body>
        </html>
        `;
    }
    postStoreGoal(req, res) {
        const enteredGoal = req.body.goal;
        console.log(enteredGoal);
        userGoal = enteredGoal;
        res.redirect('/films');
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], FilmsController.prototype, "findAll", null);
__decorate([
    common_1.Post('/store-goal'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "postStoreGoal", null);
FilmsController = __decorate([
    common_1.Controller('films')
], FilmsController);
exports.FilmsController = FilmsController;
//# sourceMappingURL=films.controller.js.map