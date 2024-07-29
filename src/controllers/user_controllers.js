import express from "express";
import user_model from "../models/user_model";
import for_date from "../libs/date";
import { generate_uid } from "../libs/generate_uid";

const user_controllers = express.Router();

user_controllers.post("/user-create", async (req, res) => {
  try {
    const data = await req.body;
    const date = await for_date();
    const uid = await generate_uid();

    const create = await user_model.create({
      data: {
        uid: uid,
        nama: data.nama,
        phone: data.phone,
        created_at: date,
        updated_at: date,
      },
    });

    res.status(201).json({
      success: true,
      message: "berhasil",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

user_controllers.post("/user-read", async (req, res) => {
  try {
    const create = await user_model.findMany();

    res.status(201).json({
      success: true,
      message: "berhasil",
      data: create,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default user_controllers;
