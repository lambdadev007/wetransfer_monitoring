export const isdev = process.env.NODE_ENV !== "production";
export const defaultErrorText =
    "დაფიქსირდა შეცდომა. ბოდიშს გიხდით შეფერხებისთვის";
export const searchDebounceTime = 200; //milliseconds
export const months = [
    { id: "1", name: "იანვარი" },
    { id: "2", name: "თებერვალი" },
    { id: "3", name: "მარტი" },
    { id: "4", name: "აპრილი" },
    { id: "5", name: "მაისი" },
    { id: "6", name: "ივნისი" },
    { id: "7", name: "ივლისი" },
    { id: "8", name: "აგვისტო" },
    { id: "9", name: "სექტემბერი" },
    { id: "10", name: "ოქტომბერი" },
    { id: "11", name: "ნოემბერი" },
    { id: "12", name: "დეკემბერი" }
];

export const dateTimeFormatPretty = "DD MMMM YYYY HH:mm";
export const dateFormatPretty = "DD MMMM YYYY";

export const logoutIdleTimeout = 1000 * 60 * 10;
