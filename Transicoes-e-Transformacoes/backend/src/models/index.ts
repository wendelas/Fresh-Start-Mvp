import { Schema, model } from 'mongoose';

// Definição do modelo de Usuário
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Definição do modelo de Evento
const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

// Definição do modelo de Emoção
const emotionSchema = new Schema({
    type: { type: String, required: true },
    intensity: { type: Number, required: true },
    date: { type: Date, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

// Exportação dos modelos
export const User = model('User', userSchema);
export const Event = model('Event', eventSchema);
export const Emotion = model('Emotion', emotionSchema);