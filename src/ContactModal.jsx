export default function ContactModal({ isOpen, onCloseModal }) {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
          <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200 p-8 rounded-lg mx-auto my-auto max-w-lg text-center">
            <h4 className="text-black text-lg font-bold mb-4">:צרו איתנו קשר</h4>
            <div className="flex items-center mb-4">
              <img
                src="../assets/phone.png"
                height={20}
                width={20}
                alt="icon phone"
                className="mr-2"
              />
              <h2 className="text-black text-2xl font-bold">053-4134212</h2>
            </div>
            <div className="flex items-center mb-4">
              <img
                src="../assets/email.png"
                height={20}
                width={20}
                alt="icon email"
                className="mr-2"
              />
              <h2 className="text-black text-2xl font-bold">c0534134212@gmail.com</h2>
            </div>
            <button
              onClick={onCloseModal}
              className="mt-4 px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
