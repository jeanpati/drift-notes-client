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

export interface TripFormData {
  title: string;
  city: string;
  start_date: Date | null;
  end_date: Date | null;
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
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Create a Trip
      </button>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Create a Trip"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Trip Title"
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="start_date"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <div className="mt-1">
                <DatePicker
                  selected={formData.start_date}
                  onChange={(date) => handleChange("start_date", date)}
                  dateFormat="MM/dd/yyyy"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="end_date"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <div className="mt-1">
                <DatePicker
                  selected={formData.end_date}
                  onChange={(date) => handleChange("end_date", date)}
                  dateFormat="MM/dd/yyyy"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isPending}
              >
                {isPending ? "Creating your trip..." : "Create"}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}
