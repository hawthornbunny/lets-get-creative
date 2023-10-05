const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#507aeb" aria-hidden="true">
    <path d="m487.461-283.154 332.307-332.307q2.693-2.693 2.693-6.539 0-3.846-2.693-6.539l-38.922-38.922q-2.692-2.693-6.539-2.693-3.846 0-6.539 2.693L435.461-335.154l52 52Zm-251 72.384q-89.23-5-133.998-39.692-44.77-34.692-44.77-98.153 0-60.769 51-98.577 51-37.807 141.769-45.807 43.616-3.77 65.424-15.77 21.808-12 21.808-33.231 0-29.462-29.5-44.962-29.5-15.5-96.731-22.269l5.461-59.614q92.23 8.769 136.499 39.769 44.269 31 44.269 87.076 0 47.615-36.577 75.499-36.576 27.885-106.191 33.5-68.616 5.77-102.924 26.77-34.308 21-34.308 57.616 0 37.308 28.577 55.5 28.577 18.193 92.654 22.346l-2.462 59.999Zm260.384 3.154L359.924-344.537l373.537-373.154q17.693-17.692 41.346-17.499 23.654.192 41.346 17.499l53.845 53.845q17.692 17.692 17.692 41.538 0 23.846-17.692 41.538L496.845-207.616Zm-133.614 27.615q-13.538 3.23-23.846-7.077-10.307-10.308-7.076-23.846l27.615-133.613 136.921 136.921-133.614 27.615Z"/>
  </svg>
);

const DoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#26c338" aria-hidden="true">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z" />
  </svg>
);

export default function EditButton({ handleClick, isEditing }) {
  const text = isEditing ? "Done" : "Edit";
  const IconComponent = isEditing ? DoneIcon : EditIcon;

  return (
      <button onClick={handleClick} title={text} className="bg-white hover:bg-selected p-1 m-1 rounded-full">
        <IconComponent />
        <span className="sr-only">{text}</span>
      </button>
  );
}
