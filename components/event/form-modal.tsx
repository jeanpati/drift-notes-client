import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "../modal";
import { Input, Select } from "../form-elements";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface EventModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  dayId: number;
  createEventMutation: any;
  categories: any[];
  eventsForDay?: any[] | null;
}

export default function EventModal({
  showModal,
  setShowModal,
  dayId,
  createEventMutation,
  categories,
}: EventModalProps) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [category, setCategory] = useState("");

  const formatTime = (date: Date | null): string => {
    if (!date) return "";
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (endTime && startTime && endTime < startTime) {
      setEndTime(startTime);
    }
    const newEvent = {
      day: dayId,
      title,
      location,
      start_time: formatTime(startTime),
      end_time: formatTime(endTime),
      category_id: category,
    };
    await createEventMutation(newEvent);
  };

  return (
    <div className="bg-green-100">
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal} title="">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              id="title"
              label="Title"
              placeholder="Enter event title"
              defaultValue={title}
              onChangeEvent={(e) => setTitle(e.target.value)}
              addlClass="text-green-900"
            />
            <Input
              id="location"
              label="Location"
              placeholder="Enter event location"
              defaultValue={location}
              onChangeEvent={(e) => setLocation(e.target.value)}
              addlClass="text-green-900"
            />
            <div className="flex space-x-4">
              <div className="field text-2xl text-green-900">
                <label htmlFor="startTime" className="label">
                  Start Time
                </label>
                <div className="control">
                  <DatePicker
                    id="startTime"
                    selected={startTime}
                    onChange={(date: Date) => setStartTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="input"
                  />
                </div>
              </div>
              <div className="field text-2xl text-green-900">
                <label htmlFor="endTime" className="label">
                  End Time
                </label>
                <div className="control">
                  <DatePicker
                    id="endTime"
                    selected={endTime}
                    onChange={(date: Date) => setEndTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <div className="field text-2xl text-green-900">
              <label htmlFor="category" className="label">
                Category
              </label>
              <div className="control">
                <Select
                  id="category"
                  options={categories.map((category) => ({
                    id: category.id.toString(),
                    name: category.name,
                  }))}
                  title="Select Category"
                  value={category}
                  onChangeEvent={(e) => setCategory(e.target.value)}
                  addlClass="text-green-900"
                />
              </div>
            </div>
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded-md text-lg mt-4 hover:bg-pink-600"
              type="submit"
            >
              Submit
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
