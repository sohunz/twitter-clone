import React from "react";
import NotificationNav from "./NotificationNav";

const Notification = () => {
    return (
        <div className="w-full border-gray-700 border-r">
            <div className="sticky z-50 top-0">
                <NotificationNav />
            </div>
        </div>
    );
};

export default Notification;
