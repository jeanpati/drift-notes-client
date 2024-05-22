import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "../modal";
import { Input } from "../form-elements";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUsers } from "../../data/users";
import { createUserTrip, getAllUserTrips } from "../../data/usertrips";

interface UserTripModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  tripId: number;
}

export default function UserTripModal({
  showModal,
  setShowModal,
  tripId,
}: UserTripModalProps) {
  const [user, setUser] = useState("");
  const queryClient = useQueryClient();

  const { data: allUsersData } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
  });
  const { data: allUserTripData } = useQuery({
    queryKey: ["allUserTrips"],
    queryFn: getAllUserTrips,
  });

  const handleUserState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const { mutateAsync: createUserTripMutation } = useMutation({
    mutationFn: createUserTrip,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["allUserTrips"] });
      setShowModal(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const foundUser = allUsersData?.find((u: any) => u.username === user);
    if (foundUser) {
      console.log(foundUser);
      const newUserTrip = {
        user: foundUser.id,
        trip: tripId,
      };
      await createUserTripMutation(newUserTrip);
    } else {
      window.alert("No user found");
    }
  };

  const collaborators =
    allUserTripData && allUsersData
      ? allUserTripData
          .filter((userTrip: any) => userTrip.trip.id === tripId)
          .map((userTrip: any) => {
            console.log(userTrip);
            const foundUser = allUsersData.find(
              (user: any) => user.id === userTrip.user.id
            );
            console.log(foundUser);
            return foundUser ? foundUser.username : null;
          })
          .filter((username: any) => username)
      : [];

  return (
    <div className="bg-green-100 rounded-lg p-8">
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal} title="">
          <div className="bg-white shadow-md rounded-lg p-6 m-5">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">
              Collaborators
            </h2>
            <ul className="space-y-4">
              {collaborators.map((user: any) => (
                <li key={user} className="text-xl text-green-700">
                  {user}
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="username"
              label="Username"
              placeholder="username"
              defaultValue={user}
              onChangeEvent={handleUserState}
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md text-lg hover:bg-pink-600 transition duration-300"
            >
              Add Collaborator
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
