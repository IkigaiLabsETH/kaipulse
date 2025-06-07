export default function BiohackingSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Advanced Biohacking
      </h3>
      <div className="space-y-6 text-gray-300">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Temperature Manipulation</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Cold exposure protocols</li>
              <li>Heat adaptation</li>
              <li>Temperature cycling</li>
              <li>Recovery optimization</li>
              <li>Performance enhancement</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-500 mb-4">Light Therapy</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Red light therapy</li>
              <li>Blue light management</li>
              <li>Infrared exposure</li>
              <li>Timing optimization</li>
              <li>Dosage protocols</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Early Morning Protocol</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Wake-up routine</li>
            <li>Light exposure</li>
            <li>Temperature regulation</li>
            <li>Hydration strategy</li>
            <li>Movement patterns</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Breathwork & Oxygen</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Breathing techniques</li>
            <li>Oxygen optimization</li>
            <li>CO2 tolerance</li>
            <li>Recovery protocols</li>
            <li>Performance enhancement</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Marine & Forest Biohacking</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-yellow-500/90 mb-2">Ocean Benefits</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Negative ion exposure</li>
                <li>Natural salt therapy</li>
                <li>Marine air (rich in iodine)</li>
                <li>Cold water immersion</li>
                <li>Grounding on wet sand</li>
              </ul>
            </div>
            <div>
              <h5 className="text-yellow-500/90 mb-2">Forest Benefits</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Phytoncides (natural antibiotics)</li>
                <li>Enhanced immune function</li>
                <li>Reduced stress hormones</li>
                <li>Improved sleep quality</li>
                <li>Natural aromatherapy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
          <h4 className="text-lg font-bold text-yellow-500 mb-2">Advanced Supplementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-yellow-500/90 mb-2">Cognitive Enhancement</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>L-Theanine (200mg)</li>
                <li>Phosphatidylserine (100mg)</li>
                <li>Bacopa Monnieri (300mg)</li>
                <li>Rhodiola Rosea (200mg)</li>
              </ul>
            </div>
            <div>
              <h5 className="text-yellow-500/90 mb-2">Performance Stack</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Creatine (5g)</li>
                <li>Beta-Alanine (2.8g)</li>
                <li>Citrulline Malate (6g)</li>
                <li>L-Citrulline (2g)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 