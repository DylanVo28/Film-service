import { Controller, Get, Post, Req, Res } from '@nestjs/common';
let userGoal = 'Learn Docker!';
@Controller('films')
export class FilmsController {
    @Get()
    findAll():string{
        return `
        <html>
            <head>
            </head>
            <body>
            <section>
            <h2>${userGoal}</h2>
            </section>
            
            <form action="/store-goal" method="POST">
            <input type="text" name="goal"/>
            <button type="submit">submit</button>
            </form>
            </body>
        </html>
        `
    }
    @Post('/store-goal')
    postStoreGoal(@Req() req,@Res() res):void{
        const enteredGoal = req.body.goal;
        console.log(enteredGoal);
        userGoal = enteredGoal;
        res.redirect('/');
    }
}
