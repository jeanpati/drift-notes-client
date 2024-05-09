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

  console.log(collaborators);
  return (
    <>
      <div>
        <h2>Collaborators</h2>
        <ul>
          {collaborators.map((user: any) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal} title="">
          <form onSubmit={handleSubmit}>
            <Input
              id="username"
              label="Username"
              placeholder="username"
              defaultValue={user}
              onChangeEvent={handleUserState}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Collaborator
            </button>
          </form>
        </Modal>
      )}
    </>
  );
}
