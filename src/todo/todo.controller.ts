import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res
} from "@nestjs/common";

import { Request, Response } from "express";

@Controller("todo")
export class TodoController {
  @Get()
  getTodos() {
    console.log("Récupérer la liste de todos");
    return "Liste des TODOS";
  }

  @Get("V2")
  getTodosV2(@Req() request: Request, @Res() response: Response) {
    console.log("Récupérer la liste de todos");
    response.status(205);
    response.json({
      contenu: `je suis une réponse généré à partir de l'objet Response de express `
    });
  }

  @Post()
  addTodo(@Body() newTodo) {
    console.log("Ajouter un Todo à la liste de todos");
    console.log(newTodo);
    return "Add TODO";
  }

  @Delete()
  deleteTodo() {
    console.log("Suprimer un Todo de la liste de todos");
    return "Delete TODO";
  }
  @Put()
  modifierTodo() {
    console.log("Modifier un Todo de la liste de todos");
    return "Update TODO";
  }
}
