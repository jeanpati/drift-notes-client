import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Modal from "../modal";
import { Input, Select } from "../form-elements";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppContext } from "../../context/state";

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
  const placeAutoCompleteRef = useRef<HTMLInputElement>(null);
  const [autoComplete, setAutoComplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const { cityCoordinates } = useAppContext();

  useEffect(() => {
    const cityBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(
        cityCoordinates[0] - 0.5,
        cityCoordinates[1] - 0.5
      ),
      new google.maps.LatLng(cityCoordinates[0] + 0.5, cityCoordinates[1] + 0.5)
    );

    if (placeAutoCompleteRef.current) {
      const gAutoComplete = new google.maps.places.Autocomplete(
        placeAutoCompleteRef.current,
        {
          fields: ["formatted_address", "name"],
          bounds: cityBounds,
        }
      );

      gAutoComplete.addListener("place_changed", () => {
        const place = gAutoComplete.getPlace();
        if (place.formatted_address) {
          setLocation(place.formatted_address);
        }
      });

      setAutoComplete(gAutoComplete);
    }
  }, [cityCoordinates]);

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
      category,
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
              onChangeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              addlClass="text-green-900"
            />
            <Input
              id="location"
              label="Location"
              placeholder="Enter event location"
              ref={placeAutoCompleteRef}
              defaultValue={location}
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
                  onChangeEvent={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setCategory(e.target.value);
                  }}
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
