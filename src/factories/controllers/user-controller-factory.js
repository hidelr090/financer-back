import express from "express";
import {UserController} from "../../controllers/user-controller.js";
import {makeUserService} from "../services/user-service-factory.js";

export const makeUserController = () => {
    const userService = makeUserService();
    return new UserController(userService);
};