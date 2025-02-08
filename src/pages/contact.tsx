import { useState } from "react";
import Modal from "../components/Modal";
import LoadingOverlay from "../components/LoadingOverlay";

type FormData = {
    name: string;
    phone_number: string;
    email: string;
    business_url: string;
    project_type: string;
    message: string;
  };


function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        email: '',
        business_url: '',
        project_type: '',
        message: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    // Send the data to Telegram
    const sendToTelegram = async (data: FormData) => {
        const botToken = '7204000963:AAEyAyHLyYoeLV4pnF1GEGxm4cY2CjbYEJ8'; // Replace with your bot's API token
        const chatId = '5410979748'; // Replace with your chat ID

        const message = `
        New Message From Portfolio Website:
        Name: ${data.name}
        Phone Number: ${data.phone_number}
        Email: ${data.email}
        Business URL: ${data.business_url}
        Project Type: ${data.project_type}
        Message: ${data.message}
        `;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        try {
        const response = await fetch(url);
        if (response.ok) {
            console.log('Message sent to Telegram');
        } else {
            console.error('Failed to send message to Telegram');
        }
        } catch (error) {
        console.error('Error sending message:', error);
        }
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setLoading(true)

        // Send form data to Telegram
        await sendToTelegram(formData);

        setLoading(false)
        // Optionally, show a success modal
        setSubmitted(true);
    };

    const handleCloseModal = () => {
        setSubmitted(false); // Close the modal by resetting the submitted state
    };
    return(
        <div className="w-full mt-16 flex flex-col items-start pb-16">
            <div className="flex flex-col items-start">
                <p className="font-inter-semi m-0 text-[25px] text-gray-700">
                    Contact me
                </p>
                <p className="font-inter-regular m-0 text-[18 px] text-gray-700 mt-1">
                    Get in touch and see what we can create together.
                </p>
            </div>

            <div className="w-full bg-gray-100 rounded-2xl mt-8">
                <form 
                onSubmit={handleSubmit}
                className="w-full p-5 flex flex-col items-start" action="">
                    <div className="flex flex-row justify-between w-full space-x-5">
                        <div className="grow space-y-8">
                            <div className="flex flex-col items-start space-y-1 w-full">
                                <p className="font-inter-medium text-[14px]">
                                    Name <span className="text-red-600">*</span>
                                </p>
                                <input 
                                placeholder="Mark Taylor" 
                                type="text" 
                                className="text-gray-500 w-full font-inter-regular text-[16px] bg-white rounded-lg px-3 py-1"
                                required 
                                />
                            </div>
                            <div className="flex flex-col items-start space-y-1 w-full">
                                <p className="font-inter-medium text-[14px]">
                                    Email Address <span className="text-red-600">*</span>
                                </p>
                                <input 
                                placeholder="E.g John@gmail.com" 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="text-gray-500 w-full font-inter-regular text-[16px] bg-white rounded-lg px-3 py-1"
                                required 
                                />
                            </div>
                        </div>
                        <div className="grow space-y-8">
                            <div className="flex flex-col items-start space-y-1 w-full">
                                <p className="font-inter-medium text-[14px]">
                                    Phone Number <span className="text-red-600">*</span>
                                </p>
                                <input 
                                placeholder="E.g +234 7063475466" 
                                type="tel" 
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                className="text-gray-500 w-full font-inter-regular text-[16px] bg-white rounded-lg px-3 py-1"
                                required 
                                />
                            </div>
                            <div className="flex flex-col items-start space-y-1 w-full">
                                <p className="font-inter-medium text-[14px]">
                                    Business url <span className="text-red-600"></span>
                                </p>
                                <input 
                                placeholder="E.g https://www.example.com" 
                                type="text" 
                                name='business_url'
                                value={formData.business_url}
                                onChange={handleChange}
                                className="text-gray-500 w-full font-inter-regular text-[16px] bg-white rounded-lg px-3 py-1"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="flex space-x-3 my-8">
                        <div className="flex items-center space-x-3">
                            <input type="radio" id="new_project" name="project_type" onChange={handleChange} value="New Project" />
                            <label htmlFor="new_project" className="text-gray-700">New Project</label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input type="radio" id="existing_project" name="project_type" onChange={handleChange} value="Existing Project" />
                            <label htmlFor="existing_project" className="text-gray-700">Existing Project</label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input type="radio" id="code_review" name="project_type" onChange={handleChange} value="Code Review" />
                            <label htmlFor="code_review" className="text-gray-700">Code Review</label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <input type="radio" id="interactive_mockups" name="project_type" onChange={handleChange} value="Interactive Mockups" />
                            <label htmlFor="interactive_mockups" className="text-gray-700">Interactive Mockups</label>
                        </div>
                    </div>


                    <div className="grow space-y-1 flex flex-col items-start w-full">
                        <p className="font-inter-medium text-[14px]">
                            Message <span className="text-red-600">*</span>
                        </p>
                        <textarea 
                        name="message"
                        onChange={handleChange}
                        placeholder="Briefly describe your business needs"
                        rows={4}      // Optional, to set the number of visible rows
                        cols={50}      // Optional, to set the number of visible columns
                        required
                        className="text-gray-500 w-full font-inter-regular text-[16px] bg-white rounded-lg px-3 py-1"
                        >
                        </textarea>
                    </div>


                    <div className="flex items-center justify-around my-10 space-x-4">
                        <button className="bg-gray-700 hover:bg-gray-500 flex items-center py-2 px-16 rounded-lg text-white font-inter-regular">
                            Send Message
                            <img className="w-5 h-5 ml-2" src="/send.png" alt="send" />
                        </button>
                    </div>
                </form>

                {loading && <LoadingOverlay />} {/* Show the loading overlay while fetching data */}

                {submitted && (
                    <Modal
                    message={{
                        title: 'Message Sent Successfully!',
                        body: 'I have received your message and will get back to you shortly.',
                    }}
                    onClose={handleCloseModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Contact;