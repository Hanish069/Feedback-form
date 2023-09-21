import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productName: '',
    version: '',
    satisfaction: '',
    thoughts: '',
    easeOfUse: 3, // Default slider values
    performance: 3,
    reliability: 3,
    features: 3,
    recommend: 'maybe',
    additionalComments: '',
    discoverMethods: {
      onlineSearch: false,
      socialMedia: false,
      friendsRecommendation: false,
      advertisement: false,
      other: '',
    },
    contactUs: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        discoverMethods: {
          ...formData.discoverMethods,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };
  const [satisfaction, setSatisfaction] = useState('neutral'); // Default to neutral

  const handleSatisfactionChange = (event) => {
    setSatisfaction(event.target.value);
  };

  return (
    
    <div className="container">
    <div className="feedback-form">
      <h1>Thank you for choosing our Speakers</h1>
      <p>We're committed to providing you with the best experience possible. Please share your feedback to help us improve.</p>

      <form onSubmit={handleSubmit}>
        <h2>Your Contact Information:</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div><br></br>
        <div class="curved-box">
        <div className="form-grou">
          <h3><label>1. Rate your overall satisfaction</label></h3>
          <label><input type="radio" value="extremelyHapy" checked={satisfaction === 'extremelyHappy'}
          onChange={handleSatisfactionChange}/>😁 Extremely Happy</label>
          <label><input type="radio" value="satisfied"checked={satisfaction === 'satisfied'}
          onChange={handleSatisfactionChange}/>🙂 Satisfied</label>
          <label><input type="radio" value="neutral" checked={satisfaction === 'neutral'}
          onChange={handleSatisfactionChange}/>😐 Neutral</label>
          <label><input type="radio" value="notBad" checked={satisfaction === 'notbad'}
          onChange={handleSatisfactionChange}/>😕 Disappointed</label>
          <label><input type="radio" value="bad" checked={satisfaction === 'bad'}
          onChange={handleSatisfactionChange}/>☹️ Very Dissatisfied</label>
        </div>
        </div>
        <br></br>
        <div class="curved-box">
        <div className="form-grou">
          <h3><label>2. How was your experience?</label></h3>
          <h4>Your feedback:</h4>
          <textarea id="feedback" name="feedback" rows="6"></textarea>
        </div>
        </div>
        <br></br>
        <div class="curved-box">
        <div className="form-grou">
          <h3><label>3. Would you recommend us?</label></h3>
          <label><input type="radio" value="extremelyHapy" checked={satisfaction === 'extremelyHappy'}
          onChange={handleSatisfactionChange}/>Absolutely!</label>
          <label><input type="radio" value="satisfied"checked={satisfaction === 'satisfied'}
          onChange={handleSatisfactionChange}/>Maybe.</label>
          <label><input type="radio" value="neutral" checked={satisfaction === 'neutral'}
          onChange={handleSatisfactionChange}/>No,not yet.</label>
        </div>
        </div>
        <br></br>
        <div class="curved-box">
        <div className="form-grou">
          <h3><label>4. Can we get in touch with you for more insights?</label></h3>
          <label><input type="radio" value="extremelyHapy" checked={satisfaction === 'extremelyHappy'}
          onChange={handleSatisfactionChange}/>Yes,please do.</label>
          <label><input type="radio" value="satisfied"checked={satisfaction === 'satisfied'}
          onChange={handleSatisfactionChange}/>No,thanks.</label>
        </div>
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <p className="thank-you-message">Thank you for being awesome! Your feedback is like a compass guiding us to greatness. We truly appreciate it.</p>
    </div>
    </div>
  );
};

export default App;