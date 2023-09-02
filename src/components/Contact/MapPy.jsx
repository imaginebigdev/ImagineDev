const MapPy = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7556563219523!2d-57.617353725332286!3d-25.312412228248128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da869640a7621%3A0x1ce2ef3102f7f881!2sEcuador%20288%2C%20Asunci%C3%B3n%2C%20Paraguay!5e0!3m2!1ses!2sar!4v1693668414984!5m2!1ses!2sar"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapPy;
