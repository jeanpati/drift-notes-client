import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "../modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEvent } from "../../data/events";
import { Input, Select, Textarea } from "../form-elements";

interface EventModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  dayId: number;
  createEventMutation: any;
  categories: any[];
}

interface Option {
  id: string;
  name: string;
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
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent = {
      day: dayId,
      title,
      location,
      start_time: startTime,
      end_time: endTime,
      description,
      category_id: category,
    };
    await createEventMutation(newEvent);
  };

  return (
    <>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Create Event
      </button>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Add Event"
        >
          <form onSubmit={handleSubmit}>
            <Input
              id="title"
              label="Title"
              placeholder="Enter event title"
              value={title}
              onChangeEvent={(e) => setTitle(e.target.value)}
            />
            <Input
              id="location"
              label="Location"
              placeholder="Enter event location"
              value={location}
              onChangeEvent={(e) => setLocation(e.target.value)}
            />
            <div className="field is-horizontal">
              <div className="field-body">
                <Input
                  id="startTime"
                  type="time"
                  label="Start Time"
                  value={startTime}
                  onChangeEvent={(e) => setStartTime(e.target.value)}
                />
                <Input
                  id="endTime"
                  type="time"
                  label="End Time"
                  value={endTime}
                  onChangeEvent={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
            <Textarea
              id="description"
              label="Description"
              placeholder="Enter event description"
              value={description}
              onChangeEvent={(e) => setDescription(e.target.value)}
            />
            <Select
              id="category"
              options={categories}
              title="Select Category"
              label="Category"
              value={category}
              onChangeEvent={(e) => setCategory(e.target.value)}
            />
          </form>
        </Modal>
      )}
    </>
  );
}
