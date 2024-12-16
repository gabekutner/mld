import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer max-w-full mx-auto px-4 sm:px-6 py-10 bg-gray-100">
                <div className="text-center">
                    {/* Contact Information */}
                    <div className="mb-4">
                        <h3 className="font-bold text-xl text-gray-900 mb-2">Contact Information</h3>
                        <p className="text-md text-gray-800">St. George Pathfinders</p>
                        <p className="text-md text-gray-800">6231 Geary Blvd</p>
                        <p className="text-md text-gray-800">San Francisco, CA 94121</p>
                        <p className="text-md text-gray-800">kievdruzhina@gmail.com</p>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-900 mt-6">
                        <p>&copy; {new Date().getFullYear()} St. George Pathfinders. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;