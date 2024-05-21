import React, { useState } from "react";
import {
  useMutation,
  useQueryClient,
  MutationFunction,
} from "@tanstack/react-query";
import { createTrip, Trip } from "../../data/trips";
import Modal from "../modal";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../form-elements";

export interface TripFormData {
  title: string;
  city: string;
  start_date: Date | null;
  end_date: Date | null;
}

interface DateInputProps {
  id: string;
  label: string;
  selected: Date | null;
  onChangeEvent: (date: Date | null) => void;
}

function DateInput({ id, label, selected, onChangeEvent }: DateInputProps) {
  return (
    <div className="field text-2xl">
      <label className="label">{label}</label>
      <div className="control">
        <DatePicker
          id={id}
          selected={selected}
          onChange={onChangeEvent}
          dateFormat="MM/dd/yyyy"
          className="input"
        />
      </div>
    </div>
  );
}

export default function CreateTripForm() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<TripFormData>({
    title: "",
    city: "",
    start_date: null,
    end_date: null,
  });

  const router = useRouter();
  const queryClient = useQueryClient();

  const createTripMutationFn: MutationFunction<Trip, TripFormData> = async (
    formData
  ) => {
    const tripData = await createTrip({
      ...formData,
      start_date: formData.start_date?.toLocaleDateString("en-US"),
      end_date: formData.end_date?.toLocaleDateString("en-US"),
    });
    return tripData;
  };

  const { mutate: createTripMutation, isPending } = useMutation<
    Trip,
    unknown,
    TripFormData
  >({
    mutationFn: createTripMutationFn,
    onSuccess: (data: Trip) => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
      setFormData({
        title: "",
        city: "",
        start_date: null,
        end_date: null,
      });
      setShowModal(false);
      router.push(`/trips/${data.id}`);
    },
    throwOnError: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.city ||
      !formData.start_date ||
      !formData.end_date
    ) {
      alert("Please fill in all fields.");
      return;
    }
    createTripMutation(formData);
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <button
        className="bg-emerald-800 hover:bg-rose-200 text-white font-bold py-3 px-6 rounded-lg text-xl self-end"
        onClick={() => setShowModal(true)}
      >
        Create A Trip
      </button>
      {showModal && (
        <div className="">
          <Modal showModal={showModal} setShowModal={setShowModal} title="">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="title"
                label="Title"
                placeholder="Trip Title"
                defaultValue={formData.title}
                onChangeEvent={(e) => handleChange("title", e.target.value)}
              />
              <Input
                id="city"
                label="City"
                placeholder="City"
                defaultValue={formData.city}
                onChangeEvent={(e) => handleChange("city", e.target.value)}
              />
              <DateInput
                id="start_date"
                label="Start Date"
                selected={formData.start_date}
                onChangeEvent={(date) => handleChange("start_date", date)}
              />
              <DateInput
                id="end_date"
                label="End Date"
                selected={formData.end_date}
                onChangeEvent={(date) => handleChange("end_date", date)}
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-3 px-6 outline outline-emerald-900 shadow-sm text-lg font-medium rounded-md text-emerald-900 hover:bg-orange-500 hover:text-white"
                  disabled={isPending}
                >
                  {isPending ? "Creating your trip..." : "Submit"}
                </button>
              </div>
            </form>
          </Modal>
        </div>
      )}
    </>
  );
}
