import { Schema, model, models, Document, Types } from 'mongoose';
import Event from './event.model';

export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true, index: true },
    email: { 
      type: String, 
      required: true, 
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'] // Basic email validation regex
    },
  },
  { timestamps: true }
);

// Pre-save hook to validate reference
BookingSchema.pre('save', async function () {
  if (this.isModified('eventId')) {
    const eventExists = await Event.findById(this.eventId);
    if (!eventExists) {
      throw new Error('Event not found');
    }
  }
});

const Booking = models.Booking || model<IBooking>('Booking', BookingSchema);

export default Booking;
