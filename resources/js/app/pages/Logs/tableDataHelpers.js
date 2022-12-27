export const columns = [
    {
        id: "id",
        value: "ჩანაწერის ID",
        notSortable: true
    },
    {
        id: "action",
        value: "ქმედება",
        notSortable: true
    },
    {
        id: "model",
        value: "მოდელი",
        notSortable: true
    },
    {
        id: "author",
        value: "ავტორი",
        notSortable: true
    },
    {
        id: "date",
        value: "თარიღი",
        notSortable: true
    },
    {
        id: "ip_address",
        value: "IP მისამართი",
        notSortable: true
    }
];

export const createRow = ({ id, action, author, date, ip_address, model }) => {
    return {
        id: {
            value: id
        },
        action: {
            value: action
        },
        model: {
            value: model
        },
        author: {
            value: author
        },
        date: {
            value: date
        },
        ip_address: {
            value: ip_address
        }
    };
};
