import Navbar from "../components/Navbar";

export default function FloorCare() {
  return (
    <>
      <Navbar />
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Floor Care Guide
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            Keep your floors looking beautiful with our expert care tips —
            before and after installation. Hola ma
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Hardwood */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Hardwood Flooring
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Use felt pads under furniture to avoid scratches.</li>
              <li>Clean with a damp (not wet) mop — avoid standing water.</li>
              <li>
                Refinish every few years to maintain sheen and protection.
              </li>
              <li>Keep humidity between 40–60% to prevent warping.</li>
            </ul>
          </div>

          {/* Vinyl Plank */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Vinyl Plank Flooring
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Sweep or vacuum regularly to avoid grit build-up.</li>
              <li>Use pH-neutral cleaners — avoid abrasive products.</li>
              <li>Place mats at entrances to trap dirt and moisture.</li>
              <li>Avoid dragging heavy items across the floor.</li>
            </ul>
          </div>

          {/* Tile */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Tile Flooring
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Clean grout lines regularly with mild cleaner and brush.</li>
              <li>Use a damp mop and avoid harsh chemicals.</li>
              <li>Seal grout once a year to prevent staining.</li>
              <li>Repair cracked tiles quickly to avoid spreading damage.</li>
            </ul>
          </div>

          {/* Laminate */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Laminate Flooring
            </h2>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Dry mop or vacuum regularly to remove dust and dirt.</li>
              <li>
                Clean spills immediately — laminate is water-resistant, not
                waterproof.
              </li>
              <li>Avoid steam mops or wet mops which can cause swelling.</li>
              <li>Use protective pads under furniture legs.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
