const { model, Schema } = require("mongoose");

const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dni: { type: Number, unique: true, required: true },
  email: { type: String, required: true, unique: true },
  linkRepositorieGithub: { type: String, required: false },
  birthDate: { type: Date, required: true },
  nationility: { type: String, required: true },
  sexo: { type: String, default: "planta" },
  academicInformation: [
    {
      institutionName: { type: String, required: false, default: null },
      yearStart: { type: Date, required: false, default: null },
      yearEnd: { type: Date, required: false, default: null },
      title: { type: String, required: false, default: null },
    },
  ],
  laboralExperience: { type: String, default: "None" },
  skills: [
    {
      descriptionSkill: { type: String, default: null },
    },
  ],
  favoriteLanguageProgramming: [
    {
      languageName: { type: String, required: false, default: "PHP" },
    },
  ],
  favoriteFilms: [{ descriptionFilm: { type: String, required: true } }],
});

module.exports = model("student", studentSchema);
