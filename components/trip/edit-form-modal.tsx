import React, { useState, useEffect } from "react";
import {
  useMutation,
  useQueryClient,
  MutationFunction,
  useQuery,
} from "@tanstack/react-query";
import { updateTrip, Trip, getTripById } from "../../data/trips";
import Modal from "../modal";
import { useRouter } from "next/router";
import { Input } from "../form-elements";

export default function EditTripForm() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = router.query;
  const [updatedData, setUpdatedData] = useState<Trip | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (id) {
      setUpdatedData((prevData) => ({
        ...prevData,
        id: Number(id),
      }));
    }
  }, [id]);

  const {
    data: trip,
    isLoading: isLoadingTrip,
    error: tripError,
  } = useQuery({
    queryKey: ["trip", id],
    queryFn: () => getTripById(Number(id)),
    enabled: !!id,
  });

  const handleChange = (field: string, value: any) => {
    setUpdatedData((prevUpdatedData) => ({
      ...prevUpdatedData,
      [field]: value,
    }));
  };

  // Mutation to update trip data
  const { mutateAsync: updateTripMutation } = useMutation({
    mutationFn: updateTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trip"] });
    },
  });

  // Handle form submission
  const handleSubmit = async () => {
    try {
      if (updatedData) {
        await updateTripMutation(updatedData);
        router.push(`/trips/${updatedData.id}`);
      }
    } catch (error) {
      console.error("An error occurred while updating the trip:", error);
    }
  };

  if (isLoadingTrip) {
    return <div>Loading...</div>;
  }

  if (tripError) {
    return <div>Error: {tripError.message}</div>;
  }

  return (
    <>
      <button
        className="outline outline-cyan-500 hover:bg-cyan-100 text-cyan-600 font-bold py-2 px-4 rounded text-sm m-5"
        onClick={() => setShowModal(true)}
      >
        edit trip
      </button>
      {showModal && (
        <div className="">
          <Modal showModal={showModal} setShowModal={setShowModal} title="">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                id="title"
                label="Title"
                placeholder="Trip Title"
                defaultValue={trip?.title || ""}
                onChangeEvent={(e) => handleChange("title", e.target.value)}
              />
              <Input
                id="city"
                label="City"
                placeholder="City"
                defaultValue={trip?.city || ""}
                onChangeEvent={(e) => handleChange("city", e.target.value)}
              />
              <Input
                id="start_date"
                label="Start Date"
                type="date"
                defaultValue={trip?.start_date || ""}
                onChangeEvent={(e) =>
                  handleChange("start_date", e.target.value)
                }
              />
              <Input
                id="end_date"
                label="End Date"
                type="date"
                min={trip?.start_date}
                defaultValue={trip?.end_date || ""}
                onChangeEvent={(e) => handleChange("end_date", e.target.value)}
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-xl"
                >
                  Save
                </button>
              </div>
            </form>
          </Modal>
        </div>
      )}
    </>
  );
}
