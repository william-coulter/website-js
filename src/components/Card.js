function Card({ heading, items }) {
  return (
    <div class="bg-white p-6 rounded-xl shadow-md items-center">
      <div class="font-mono mt-1 text-lg leading-tight font-medium text-black">
        {heading}
      </div>
      <div class="font-mono mt-2 ml-4 text-gray-500">
        <ul class="list-disc">
          {items.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
