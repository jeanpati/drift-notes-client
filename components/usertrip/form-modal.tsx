import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "../modal";
import { Input } from "../form-elements";
import { useQuery } from "@tanstack/react-query";
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

  const { data: allUsersData } = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
  });
  const { data: allUserTripData } = useQuery({
    queryKey: ["allUserTrip"],
    queryFn: getAllUserTrips,
  });

  const handleUserState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const foundUser = allUsersData?.find((u: any) => u.username === user);
    if (foundUser) {
      const newUserTrip = {
        user: foundUser.id,
        trip: tripId,
      };
      createUserTrip(newUserTrip);
    }
  };

  const collaborators = allUserTripData
    ? allUserTripData
        .filter((userTrip: any) => userTrip.trip.id === tripId)
        .map((userTrip: any) => {
          const foundUser = allUsersData.find(
            (user: any) => user.id === userTrip.user.id
          );
          return foundUser ? foundUser.username : null;
        })
        .filter((username: any) => username) // Remove null values
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
          </form>
        </Modal>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleSubmit}
      >
        Add Collaborator
      </button>
    </>
  );
}
